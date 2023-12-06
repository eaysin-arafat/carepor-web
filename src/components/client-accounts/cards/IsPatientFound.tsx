import Container from "@/components/core/container/Container";
import { URLClientCreate } from "@/routers/client";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  buttonTitle: string;
};

const IsPatientFound = ({ title, buttonTitle }: Props) => {
  return (
    <div>
      <Container className="my-5">
        <div className="border-2 rounded-lg !border-primaryColor dark:!border-none dark:shadow-md bg-whiteBgColor px-10 py-8 mt-10">
          <p className="text-center pb-5 heading_2 text-gray-600 font-bold">
            {title}
          </p>
          <div className="flex justify-center">
            <Link
              to={URLClientCreate()}
              className=" text-lg btn w-fit py-3 flex gap-2 px-8 text-whiteColor bg-primaryColor hover:bg-primaryHoverColor h-fit"
            >
              <BsPlus className="h-7 w-7 font-bold" />
              {buttonTitle}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IsPatientFound;
