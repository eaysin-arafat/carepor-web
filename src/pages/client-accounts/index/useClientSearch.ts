/* eslint-disable @typescript-eslint/no-explicit-any */
import { clientApiEndpoints } from "@/features/client/client-api";
import { CellPhoneSearchType, NameSearchType } from "@/interface/clientSearch";
import { Client } from "@/interface/clients";
import { showRegisterLinkStatus } from "@/utilities/showRegisterLinkStatus";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const initialCellPhoneSearchState: CellPhoneSearchType = {
  countryCode: "",
  phoneNumber: "",
};

const initialNameSearchState = {
  firstName: "",
  surname: "",
  dob: null,
  sex: "",
};

const useClientSearch = () => {
  const [search, setSearch] = React.useState("nrc");
  const [searchClients, setSearchClients] = useState([]);
  const [isShowRegisterLink, setIsShowRegisterLink] = useState(false);
  const [nrc, setNrc] = useState("");
  const [nupn, setNupn] = useState("");
  const [cellphoneSearch, setCellphoneSearch] = useState<CellPhoneSearchType>(
    initialCellPhoneSearchState
  );

  const [nameSearchState, setNameSearchState] = useState<NameSearchType>(
    initialNameSearchState
  );

  // hooks and variables
  const dispatch = useDispatch();

  // handler functions
  const handleResetStates = () => {
    setNrc("");
    setNupn("");
    setCellphoneSearch(initialCellPhoneSearchState);
    setNameSearchState(initialNameSearchState);
    setSearchClients([]);
  };

  const handleSearchTabChange = (tab: string) => {
    setSearch(tab);
    handleResetStates();
    isShowRegisterLink && setIsShowRegisterLink(false);
  };

  const handleNrcChange = (e) => {
    setNrc(e.target.value);
  };

  const handleNupnChange = (e) => {
    setNupn(e.target.value);
  };

  const handleCellphoneSearchChange = (e) => {
    setCellphoneSearch({
      ...cellphoneSearch,
      [e.target.name]: e.target.value,
    });
  };

  const handleNameSearchChange = (e) => {
    setNameSearchState({
      ...nameSearchState,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateClear = () => {
    setNameSearchState({
      ...nameSearchState,
      dob: null,
    });
  };

  const handleIsShowRegisterLink = (status) => {
    setIsShowRegisterLink(status);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    switch (search) {
      case "nrc":
        return dispatch<any>(clientApiEndpoints.readClientByNRC.initiate(nrc))
          .unwrap()
          .then((res: Client[]) => {
            handleIsShowRegisterLink(true);
            setSearchClients(res);
          })
          .catch(() => {
            handleIsShowRegisterLink(true);
            setSearchClients([]);
          });

      case "nupn":
        return dispatch<any>(clientApiEndpoints.readClientByNUPN.initiate(nupn))
          .unwrap()
          .then((res: Client[]) => {
            console.log(res);
            handleIsShowRegisterLink(true);
            setSearchClients(res);
          })
          .catch(() => {
            handleIsShowRegisterLink(true);
            setSearchClients([]);
          });

      case "cellPhone":
        return dispatch<any>(
          clientApiEndpoints.readClientByCellphone.initiate({
            cellphone: cellphoneSearch.phoneNumber,
            countryCode: cellphoneSearch.countryCode,
          })
        )
          .unwrap()
          .then((res: Client[]) => {
            console.log(res);
            handleIsShowRegisterLink(true);
            setSearchClients(res);
          })
          .catch(() => {
            handleIsShowRegisterLink(true);
            setSearchClients([]);
          });

      case "name":
        return dispatch<any>(
          clientApiEndpoints.readNameSearchClients.initiate(nameSearchState)
        )
          .unwrap()
          .then((res: Client[]) => {
            console.log(res);
            handleIsShowRegisterLink(true);
            setSearchClients(res);
          })
          .catch(() => {
            handleIsShowRegisterLink(true);
            setSearchClients([]);
          });

      default:
        return setSearchClients([]);
    }
  };

  const showRegister = showRegisterLinkStatus(
    isShowRegisterLink,
    search,
    searchClients?.length
  );

  return {
    search,
    searchClients,
    nrc,
    nupn,
    cellphoneSearch,
    nameSearchState,
    handleSearchTabChange,
    handleNrcChange,
    handleNupnChange,
    handleCellphoneSearchChange,
    handleNameSearchChange,
    handleDateClear,
    handleSearchClick,
    showRegister,
  };
};

export default useClientSearch;
