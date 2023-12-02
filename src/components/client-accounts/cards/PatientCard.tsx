import Container from "@/components/core/container/Container";
import { cn } from "@/utilities/cn";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";

type Props = {};

const PatientCard = ({}: Props) => {
  return (
    <div>
      <Container className="my-5">
        <div className="border-2 border-primaryColor dark:border-none rounded-lg bg-whiteBgColor">
          <div className="lg:flex  gap-5 p-5">
            <div className=" flex items-center justify-center pb-5">
              <p className="text-2xl font-medium text-secondaryColor">
                Adaman Smamntha
              </p>
            </div>
            <div className="lg:border dark:border-gray-700"></div>
            <div className="">
              <div className=" flex flex-wrap items-center">
                <Card
                  title="Date of Birth"
                  value="3-Jan-1991"
                  icon={<FaCalendarAlt className="text-grayColor" />}
                />
                <Card
                  title="Sex"
                  value="Male"
                  icon={<MdOutlinePerson2 className="text-grayColor" />}
                />
                <Card
                  title="Cellphone"
                  value="+260 22222222"
                  icon={<MdOutlinePhone className="text-grayColor" />}
                />
                <Card
                  title="NUPN"
                  value="mupn56"
                  icon={<FaRegAddressCard className="text-grayColor" />}
                />
                <Card
                  title="NRC"
                  value="56567/76/9"
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
                      H# Flat 23A, R#456 8th Street, Khaka,Greenbush
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-row flex-wrap gap-5">
                <button className={cn("default_button outline_btn btn_sm")}>
                  Edit Profile
                </button>
                <button className={cn("default_button btn_sm")}>
                  Admit Patient
                </button>
                <button className={cn("default_button btn_sm")}>
                  Service Queue
                </button>
                <button className={cn("default_button btn_sm")}>
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
  icon: any;
  className?: string
}
const Card = ({ title, value, icon , className }: CardProps) => {
  return (
    <div className={cn(" px-5 mb-5" , className )}>
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
