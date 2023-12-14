import Container from "@/components/core/container/Container";
import { URLClientCreate } from "@/routers/client";
import { RxPlusCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  buttonTitle: string;
};

const IsPatientFound = ({ title, buttonTitle }: Props) => {
  return (
    <div>
      <Container className="my-5 ">
        <div className="border rounded-lg !border-primaryColor dark:!border-none dark:shadow-md bg-whiteBgColor px-10 py-8 mt-10">
          <p className="text-center pb-5 heading_2 text-textColor font-bold">
            {title}
          </p>
          <div className="flex justify-center">
            <Link
              to={URLClientCreate()}
              className=" text-lg btn w-fit py-2.5 flex gap-2 px-5 text-white bg-primaryColor hover:bg-primaryHoverColor h-fit"
            >
              <RxPlusCircled className="h-6 w-6 font-normal" />
              {buttonTitle}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IsPatientFound;
