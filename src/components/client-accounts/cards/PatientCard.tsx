import Container from "@/components/core/container/Container";
import { Client } from "@/interface/clients";
import {
  URLClientEdit,
  URLCreateAdmission,
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
  2: "femaile",
};

type PatientCardProps = {
  client: Client;
};

const PatientCard = ({ client }: PatientCardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="my-5">
        <div className="border-2 border-primaryColor dark:border-none rounded-lg bg-whiteBgColor">
          <div className="lg:flex  gap-5 p-5">
            <div className=" flex items-center justify-center pb-5">
              <p className="text-2xl font-medium text-secondaryColor">
                {client?.firstName} {client?.surname}
              </p>
            </div>
            <div className="lg:border dark:border-gray-700"></div>
            <div className="">
              <div className=" flex flex-wrap items-center">
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
                <Card
                  title="NRC"
                  value="56567/76/9"
                  icon={<FaRegAddressCard className="text-grayColor" />}
                />
                <Card
                  title="Address"
                  className="max-w-40"
                  value="H# Flat 23A, R#456 8th Street, Khaka,Greenbush"
                  icon={<LuMapPin className="text-grayColor" />}
                />
                {/* <Card
                  title="Address"
                  value="H# Flat 23A, R#456 8th Street, Khaka,Greenbush"
                  icon={<LuMapPin className="text-grayColor" />}
                /> */}
                {/* <div className=" min-w-80 px-5 mb-5">
                  <span>Address</span>
                  <div className="flex items-center flex-row gap-2">
                    <span>
                      <LuMapPin className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">
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
                </div> */}
              </div>
              <div className="flex flex-row flex-wrap gap-5">
                <Link
                  to={URLClientEdit(client?.oid)}
                  className={cn(
                    "default_button outline_btn btn_sm text-center"
                  )}
                >
                  Edit Profile
                </Link>
                {!client.isAdmitted && (
                  <Link
                    to={URLCreateAdmission(client?.oid)}
                    className={cn("default_button btn_sm text-center")}
                  >
                    Admit Patient
                  </Link>
                )}
                {client?.isAdmitted && (
                  <>
                    <button className={cn("default_button btn_sm")}>
                      Admission Details
                    </button>
                    <button className={cn("default_button btn_sm")}>
                      Discharge
                    </button>
                  </>
                )}
                <button className={cn("default_button btn_sm")}>
                  Service Queue
                </button>
                <button
                  className={cn("default_button btn_sm")}
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
    <div className={cn(" px-5 mb-5", className)}>
      <span className="text-base font-semibold text-secondaryColor">
        {title}
      </span>
      <div className="flex flex-row items-center gap-2 mt-2">
        <span>{icon}</span>
        <span className="text-grayColor">{value}</span>
      </div>
    </div>
  );
};
