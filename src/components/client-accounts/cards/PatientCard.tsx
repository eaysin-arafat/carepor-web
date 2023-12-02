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
        <div className="border-2 border-primaryColor rounded-lg">
          <div className="lg:flex  gap-5 p-5">
            <div className=" flex items-center justify-center pb-5">
              <p className="text-2xl font-medium text-secondaryColor">
                Adaman Smamntha
              </p>
            </div>
            <div className="lg:border"></div>
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
                {/* <Card
                  title="Address"
                  value="H# Flat 23A, R#456 8th Street, Khaka,Greenbush"
                  icon={<LuMapPin className="text-grayColor" />}
                /> */}
                <div className=" min-w-80 px-5 mb-5">
                  <span>Address</span>
                  <div className="flex items-center flex-row gap-2">
                    <span>
                      <LuMapPin className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">
                      H# Flat 23A, R#456 8th Street, Khaka,Greenbush
                    </span>
                  </div>
                </div>
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
}
const Card = ({ title, value, icon }: CardProps) => {
  return (
    <div className=" px-5 mb-5">
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

{
  /* <Container className="my-5">
  <div className="border-2 border-primaryColor rounded-lg">
    <div className="flex md:flex-auto md:grid grid-cols-9 gap-5 p-5">
      <div className="col-span-2 flex">
        <div className="col-span-1 flex flex-col md:flex-row gap-5 justify-start items-start md:justify-center md:items-center">
          <img src="/assets/svg/person.svg" alt="" />
          <p className="text-center md:text-start">Adaman Smamntha</p>
        </div>
      </div>
      <div className="col-span-7">
        <div className=" flex flex-wrap space-y-3 mb-5">
          <div className="border-r  w-48 px-5">
            <span>Date of Birth</span>
            <div className="flex flex-row items-center gap-2">
              <span>
                <FaCalendarAlt className="text-grayColor" />
              </span>
              <span className="text-grayColor">3-Jan-1991</span>
            </div>
          </div>
          <div className="border-r w-48 px-5">
            <span>Sex</span>
            <div className="flex items-center flex-row gap-2">
              <span>
                <MdOutlinePerson2 className="text-grayColor" />
              </span>
              <span className="text-grayColor">Male</span>
            </div>
          </div>
          <div className="border-r w-48 px-5">
            <span>Cellphone</span>
            <div className="flex flex-row gap-2">
              <span>
                <MdOutlinePhone className="text-grayColor" />
              </span>
              <span className="text-grayColor">+260 22222222</span>
            </div>
          </div>
          <div className="border-r w-48 px-5">
            <span>NUPN</span>
            <div className="flex flex-row gap-2">
              <span>
                <FaRegAddressCard className="text-grayColor" />
              </span>
              <span className="text-grayColor">22222-22-2</span>
            </div>
          </div>
          <div className="border-r w-48 px-5">
            <span>NRC</span>
            <div className="flex flex-row gap-2">
              <span>
                <FaRegAddressCard className="text-grayColor" />
              </span>
              <span className="text-grayColor">22222-22-2</span>
            </div>
          </div>
          <div className=" w-80 px-5">
            <span>Address</span>
            <div className="flex flex-row gap-2">
              <span>
                <LuMapPin className="text-grayColor" />
              </span>
              <span className="text-grayColor">
                H# Flat 23A, R#456 8th Street, Khaka,Greenbush
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-5">
          <button className={cn("default_button outline_btn btn_sm")}>
            Edit Profile
          </button>
          <button className={cn("default_button btn_sm")}>Admit Patient</button>
          <button className={cn("default_button btn_sm")}>Service Queue</button>
          <button className={cn("default_button btn_sm")}>
            Attend to Patient
          </button>
        </div>
      </div>
    </div>
  </div>
</Container>; */
}
