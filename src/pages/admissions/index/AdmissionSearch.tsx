import SubmitButton from "@/components/core/buttons/SubmitButton";
import Container from "@/components/core/container/Container";
import { BsPlus } from "react-icons/bs";
import { FaCalendarAlt, FaRegAddressCard } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";

type Props = {};

function AdmissionSearch({}: Props) {
  return (
    <>
      <Container className="my-5">
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
                {/* <OutlineButton title="Edit Profile" className=" btn_sm " />
                <SubmitButton
                  title="Admit Patient"
                  className=" min-w-60 btn_sm "
                />
                <SubmitButton title="Service Queue" className=" btn_sm " />
                <SubmitButton title="Attend to Patient" className=" btn_sm " /> */}
                <button className={defaultButtonCss}>Edit Profile</button>
                <button className={defaultButtonCss}>Admit Patient</button>
                <button className={defaultButtonCss}>Service Queue</button>
                <button className={defaultButtonCss}>Attend to Patient</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="my-5">
        <div className="border-2 rounded-lg border-primaryColor px-10 py-8 mt-10">
          <p className="text-center pb-5 heading_2 text-gray-600">
            Did you find the patient?
          </p>
          <div className="flex justify-center">
            <SubmitButton
              title="Add New Patient"
              buttonType="submit"
              icon={<BsPlus className="h-7 w-7 font-semibold" />}
              className="w-64"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="border-2 p-5">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 justify-between ">
            <div className={parantDiv_Style}>
              <img
                src="/assets/svg/TBService.svg"
                alt=""
                className={image_Style}
              />
              <p className={text_Style}>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/assets/svg/TBService.svg"
                alt=""
                className="asd"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img src="/assets/svg/TBService.svg" alt="" />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/assets/svg/TBService.svg"
                alt=""
                className="h-12 w-12 my_image"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/assets/svg/TBService.svg"
                alt=""
                className="h-12 w-12"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36 hover:bg-primaryColor">
              <img
                src="/assets/svg/TBService.svg"
                alt=""
                className="h-12 w-12 "
              />
              <p>TB Service</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AdmissionSearch;

const parantDiv_Style =
  "flex flex-col rounded-xl justify-center items-center gap-5 border-2 p-5 h-36 w-36 hover:bg-primaryColor group transition-all duration-300";
const image_Style = "group-hover:svg_white transition-all duration-300";
const text_Style = "group-hover:text-whiteColor transition-all duration-300";

const defaultButtonCss =
  " min-w-[170px] text-primaryColor hover:bg-primaryHoverColor  hover:text-whiteColor bg-whiteColor border-2 border-primaryColor py-1.5 rounded-full transition-all ease-in-out duration-500 ";
