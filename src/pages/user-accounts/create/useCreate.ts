import { useReadCountriesQuery } from "@/features/country/country-api";
import {
  useCheckUserMobileQuery,
  useCheckUserNRCQuery,
  useCheckUserNameQuery,
  useCreateUserAccountMutation,
} from "@/features/user-accounts/user-accounts-api";
import { cookieManager } from "@/utilities/cookie-manager";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface PersonalInfoType {
  firstName: string;
  surname: string;
  dob: string | null;
  sex: string;
  designation: string;
}

interface ContactInfoType {
  contactAddress: string;
  countryCode: string;
}

interface LoginInfoType {
  password: string;
  confirmPassword: string;
}

const initialPersonalInfo = {
  firstName: "",
  surname: "",
  dob: null,
  sex: "",
  designation: "",
};

const initialContactInfo = {
  contactAddress: "",
  countryCode: "",
};

const initialLoginInfo = {
  password: "",
  confirmPassword: "",
};

interface ErrorsType {
  firstName?: string;
  surname?: string;
  dob?: string;
  sex?: string;
  designation?: string;
  contactAddress?: string;
  countryCode?: string;
  password?: string;
  confirmPassword?: string;
}

function useUserRegistration() {
  //  nrc state
  const [nrc, setNrc] = useState("");
  const [noNRC, setNoNRC] = useState(false);

  // personal info states
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoType>(initialPersonalInfo);

  // contact info states
  const [contactInfo, setContactInfo] =
    useState<ContactInfoType>(initialContactInfo);

  // login info states
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>(initialLoginInfo);

  //  cellphone and username state
  const [cellphone, setCellphone] = useState("");
  const [username, setUsername] = useState("");

  // errors state
  const [errors, setErrors] = useState<ErrorsType>({});

  ///  validation states
  const [isCellphoneValid, setIsCellphoneValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isNRCValid, setIsNRCValid] = useState(true);

  // api hooks
  const { data: countries } = useReadCountriesQuery(undefined);

  // check cellphone api hook
  const { data: cellphoneData } = useCheckUserMobileQuery(
    {
      userMobile: cellphone,
      countryCode: contactInfo.countryCode,
    },
    {
      skip: !cellphone || !contactInfo.countryCode,
      refetchOnMountOrArgChange: true,
    }
  );

  /// check username api hook
  const { data: usernameData } = useCheckUserNameQuery(
    { username: username },
    {
      skip: !username,
      refetchOnMountOrArgChange: true,
    }
  );

  // check nrc api hook
  const {
    isSuccess: nrcIsSuccess,
    isError: nrcIsError,
    status: nrcStatus,
  } = useCheckUserNRCQuery(
    { nrc },
    {
      skip: !nrc || nrc === "000000/00/0" || noNRC,
      refetchOnMountOrArgChange: true,
    }
  );

  // registration api hook
  const [registration, { data: user, status, isSuccess, isError, error }] =
    useCreateUserAccountMutation();

  //  variable and hooks
  const navigate = useNavigate();

  // set nrc based on noNRC
  useEffect(() => {
    if (noNRC) {
      setNrc("000000/00/0");
    } else {
      setNrc("");
    }
  }, [noNRC]);

  // handle personal information changes
  const handlePersonalInfoChange = (e) => {
    // destructuring name and value from e.target
    const { name, value } = e.target;

    // set personal info
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));

    // clear errors
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle username change
  const handleUsernameChange = debounce((value) => {
    if (value === "") {
      setIsUsernameValid(true);
    }

    // set username
    setUsername(value);

    // clear errors
    setErrors((prev) => ({ ...prev, username: "" }));
  }, 800);

  // handle contact information change
  const handleContactInfoChange = (e) => {
    // destructuring name and value from e.target
    const { name, value } = e.target;

    // set contact info
    setContactInfo((prev) => ({ ...prev, [name]: value }));

    // clear errors
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle login information changes
  const handleLoginInfoChange = (e) => {
    // destructuring name and value from e.target
    const { name, value } = e.target;

    // set login info
    setLoginInfo((prev) => ({ ...prev, [name]: value }));

    // clear errors
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle cellphone change
  const handleCellphoneChange = (e) => {
    // set cellphone

    if (e.target.value === "" || TypeValidation.isOnlyNumber(e.target.value))
      setCellphone(e.target.value);
  };

  //
  const handleDateInputChange = (date) => {
    setPersonalInfo((prev) => ({
      ...prev,
      dob: convertDateObjectToDateString(date),
    }));

    setErrors(null);
  };

  // handle nrc change
  const handleNrcChange = debounce((nrc) => {
    // if nrc is empty set isNRCValid to true
    if (nrc === "") {
      setIsNRCValid(true);
    }

    // set nrc
    setNrc(nrc);

    // clear errors
    setErrors((prev) => ({ ...prev, nrc: "" }));
  }, 800);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...personalInfo,
      ...contactInfo,
      ...loginInfo,
      nrc,
      username: username,
      cellphone: cellphone,
      userMobile: cellphone,
    };

    // check validation
    const { isValid, error } = userRegistrationValidator(data);

    // if not valid set errors
    if (!isValid) return setErrors(error);

    // call registration api
    registration(data);
  };

  // show success or fail status
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Registration successful");
      setPersonalInfo(initialPersonalInfo);
      setContactInfo(initialContactInfo);
      setLoginInfo(initialLoginInfo);
      setNrc("");
      setCellphone("");
      setUsername("");
      setNoNRC(false);

      cookieManager.saveCookie("carepro_token", user?.oid, {
        expires: 1,
      });

      navigate("/request-facility");
    }

    if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(
        typeof error?.data === "string" ? error?.data : "Error creating account"
      );
    }
  }, [isSuccess, isError, status, error, navigate, user?.oid]);

  // check if cellphone is valid
  useEffect(() => {
    if (cellphoneData) {
      setIsCellphoneValid(false);
    }

    setIsCellphoneValid(true);
  }, [cellphoneData]);

  // check if username is valid
  useEffect(() => {
    if (usernameData) {
      return setIsUsernameValid(false);
    }
    return setIsUsernameValid(true);
  }, [usernameData]);

  // check if nrc is valid
  useEffect(() => {
    if (nrcIsSuccess && nrcStatus === "fulfilled") {
      return setIsNRCValid(false);
    }

    if (nrcIsError && nrcStatus === "rejected") {
      return setIsNRCValid(true);
    }
  }, [nrcIsSuccess, nrcIsError, nrcStatus]);

  return {
    personalInfo,
    contactInfo,
    loginInfo,
    countries,
    nrc,
    noNRC,
    cellphone,
    username,
    errors,
    isCellphoneValid,
    isUsernameValid,
    isNRCValid,
    handlePersonalInfoChange,
    handleContactInfoChange,
    handleLoginInfoChange,
    handleCellphoneChange,
    handleSubmit,
    setNoNRC,
    setUsername,
    handleUsernameChange,
    handleDateInputChange,
    setErrors,
    setNrc,
    setIsNRCValid,
    handleNrcChange,
  };
}

export default useUserRegistration;
