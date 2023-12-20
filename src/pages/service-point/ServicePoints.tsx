import SimplePatientDetails from "@/components/client-accounts/cards/SimplePatientDetails";
import Container from "@/components/core/container/Container";

import { Link } from "react-router-dom";
import { useServicePointArray } from "./useServicePointArray";

type ServicePoint = {
  imgSrc: string;
  title: string;
  link: string;
};

const ServicePoints = () => {
  const servicePointsArray = useServicePointArray({
    clientId: "clientId:3###",
  });
  return (
    <div className="mx-3">
      <Container className="max-w-[1350px] bg-whiteBgColor my-8 rounded-lg px-5 lg:px-10 shadow-light">
        <div className="py-8 pb-1">
          <div className="border rounded-lg border-primaryColor ">
            <SimplePatientDetails
              withoutAction
              className="bg-whiteBgColor shadow-none sm:!border !border-primaryColor"
            />
          </div>
          <div className="max-w-[1345px] mx-auto my-10 ">
            <h2 className="heading_2 mb-7">Select Service for the Patient</h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:justify-between gap-9 ">
              {servicePointsArray.map(
                (servicePoint: ServicePoint, index: number) => (
                  <div key={index} className="">
                    <Link to={servicePoint?.link}>
                      <div className={parantDiv_Style}>
                        <img
                          src={servicePoint?.imgSrc}
                          alt=""
                          className={image_Style}
                        />
                        <p className={text_Style}>{servicePoint?.title}</p>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePoints;

const parantDiv_Style =
  "flex flex-col rounded-lg justify-center items-center gap-5 border border-primaryColor p-5 h-[150px] w-[152px] hover:bg-primaryColor group transition-all duration-300 ";
const image_Style = "group-hover:svg_white transition-all duration-300";
const text_Style =
  "group-hover:text-whiteColor text-black dark:text-primaryColor transition-all duration-300 font-medium text-center";
