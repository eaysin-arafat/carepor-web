import SubmitButton from "@/components/core/buttons/SubmitButton";
import Container from "@/components/core/container/Container";
import { BsPlus } from "react-icons/bs";

type Props = {
  title: string;
  buttonTitle: string;
};

const IsPatientFound = ({title , buttonTitle}: Props) => {
  return (
    <div>
      <Container className="my-5">
        <div className="border-2 rounded-lg border-primaryColor px-10 py-8 mt-10">
          <p className="text-center pb-5 heading_2 text-gray-600 font-bold">
            {title}
          </p>
          <div className="flex justify-center">
            <SubmitButton
              title={buttonTitle}
              buttonType="submit"
              icon={<BsPlus className="h-7 w-7 font-semibold" />}
              className="w-64"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IsPatientFound;
