import Container from "@/components/core/container/Container";
import { Client } from "@/interface/clients";
import {
  URLAdmissionDischarge,
  URLAdmissions,
  URLClientDetails,
  URLServicePoint,
} from "@/routers/client";
import { cn } from "@/utilities/cn";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const gender = {
  1: "male",
  2: "female",
};

type PatientCardProps = {
  client: Client;
  className?: string;
};

const PatientCard = ({ client, className }: PatientCardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="my-5">
        <div
          className={cn(
            "border-2 !border-primaryColor dark:!border-none rounded-lg bg-whiteBgColor",
            className
          )}
        >
          <div className="grid grid-cols-9 gap-5 p-5">
            <div className="col-span-2 hidden lg:flex items-center justify-center min-2/12 border-r">
              <p className="text-2xl font-medium text-secondaryColor ">
                {client?.firstName} {client?.surname}
              </p>
            </div>
            <div className="col-span-9 lg:col-span-7">
              <div className=" flex flex-wrap items-center">
                <div className=" lg:hidden flex items-center justify-center min-w-80 pb-5 me-5">
                  <p className="text-2xl font-medium text-secondaryColor ">
                    {client?.firstName} {client?.surname}
                  </p>
                </div>
                <Card
                  title="Date of Birth"
                  value={
                    client.dob
                      ? format(new Date(client.dob), "dd-MMM-yyyy")
                      : ""
                  }
                  icon={<FaCalendarAlt className="text-grayColor" />}
                />
                <Card
                  title="Sex"
                  value={gender[client.sex]}
                  icon={<MdOutlinePerson2 className="text-grayColor" />}
                />
                <Card
                  title="Cellphone"
                  value={client.cellphoneCountryCode + " " + client.cellphone}
                  icon={<MdOutlinePhone className="text-grayColor" />}
                />
                <Card
                  title="NUPN"
                  value={client.nupn}
                  icon={<FaRegAddressCard className="text-grayColor" />}
                />
                <Card
                  title="NRC"
                  value={client.nrc}
                  icon={<FaRegAddressCard className="text-grayColor" />}
                />
                {/* <Card
                  title="Address"
                  value="H# Flat 23A, R#456 8th Street, Khaka,Greenbush"
                  icon={<LuMapPin className="text-grayColor" />}
                /> */}
                <div className=" me-5 mb-5">
                  <span className="text-xs font-semibold text-secondaryColor">
                    Address
                  </span>
                  <div className="flex items-center flex-row gap-2 mt-2">
                    <span>
                      <LuMapPin className="text-grayColor" />
                    </span>
                    <span className="text-grayColor text-xs">
                      {client?.householdNumber &&
                        "H#" + client?.householdNumber + ","}
                      &nbsp;
                      {client?.road && "R#" + client?.road + ","}&nbsp;
                      {client?.area && client?.area + ","}
                      &nbsp;
                      {client?.townName && client?.townName}{" "}
                      {client?.landmarks && `(${client?.landmarks})`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:justify-start justify-center flex-wrap gap-1 mt-2">
                <Link
                  to={URLClientDetails({ id: client?.oid })}
                  className={cn(
                    "main_btn bg-primaryColor hover:text-white text-white dark:bg-gray-900 hover:dark:bg-gray-800 border !border-primaryColor btn_sm text-center text-sm"
                  )}
                >
                  Edit Profile
                </Link>
                {!client.isAdmitted && (
                  <Link
                    to={URLAdmissions({ clientId: client?.oid })}
                    className={cn("main_btn btn_sm text-center text-sm")}
                  >
                    Admit Patient
                  </Link>
                )}
                {client?.isAdmitted && (
                  <>
                    <button className={cn("main_btn btn_sm  text-sm")}>
                      Admission Details
                    </button>
                    <Link
                      to={URLAdmissionDischarge({ clientId: client?.oid })}
                      className={cn("main_btn btn_sm text-center text-sm")}
                    >
                      Discharge
                    </Link>
                  </>
                )}
                <button className={cn("main_btn btn_sm text-sm")}>
                  Service Queue
                </button>
                <button
                  className={cn("main_btn btn_sm text-sm")}
                  onClick={() => navigate(URLServicePoint())}
                >
                  Attend to Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PatientCard;

interface CardProps {
  title: string;
  value: string;
  className?: string;
  icon: React.ReactNode;
}
const Card = ({ title, value, icon, className }: CardProps) => {
  return (
    <div className={cn("me-5 mb-5", className)}>
      <span className="text-xs font-semibold text-secondaryColor">{title}</span>
      <div className="flex flex-row items-center gap-2 mt-2">
        <span>{icon}</span>
        <span className="text-grayColor text-xs ">{value}</span>
      </div>
    </div>
  );
};
