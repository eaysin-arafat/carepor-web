import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Container from "@/components/core/container/Container";
import { FaCalendarAlt, FaRegAddressCard } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";

type Props = {};

function AdmissionSearch({}: Props) {
  return (
    <>
      <Container>
        <div>
          <div className="flex flex-col border-2 rounded-lg border-blue-300 px-10 py-5 mt-10 gap-6">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-1 flex flex-row gap-5 items-center">
                <img src="/assets/svg/person.svg" alt="" />
                <p>
                  Adaman <br /> Smamntha
                </p>
              </div>
              <div className="col-span-5 flex flex-row gap-5">
                <div>
                  <span>Date of Birth</span>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaCalendarAlt className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">3-Jan-1991</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>Sex</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <MdOutlinePerson2 className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">Male</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>Cellphone</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <MdOutlinePhone className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">+260 22222222</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>NUPN</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <FaRegAddressCard className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">22222-22-2</span>
                  </div>
                </div>
                <div>
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
            </div>
            <div>
              {/* <div className="flex flex-row gap-5">
                <div>
                  <span>Date of Birth</span>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaCalendarAlt className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">3-Jan-1991</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>Sex</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <MdOutlinePerson2 className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">Male</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>Cellphone</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <MdOutlinePhone className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">+260 22222222</span>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <span>NUPN</span>
                  <div className="flex flex-row gap-2">
                    <span>
                      <FaRegAddressCard className="text-grayColor" />
                    </span>
                    <span className="text-grayColor">22222-22-2</span>
                  </div>
                </div>
                <div>
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
              </div> */}
              <div className="flex flex-row gap-4 mt-5">
                <OutlineButton
                  title="Edit Profile"
                  className="min-w-fit w-full btn_sm"
                />
                <SubmitButton
                  title="Admit Patient"
                  className="min-w-fit w-full btn_sm"
                />
                <SubmitButton
                  title="Service Queue"
                  className="min-w-fit  w-full btn_sm"
                />
                <SubmitButton
                  title="Attend to Patient"
                  className="min-w-fit  btn_sm"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Do you find the patient section */}
      </Container>
      <Container>
        <div className="border-2 rounded-lg border-blue-300 px-10 py-8 mt-10">
          <p className="text-center pb-5 heading_2 text-gray-600">
            Did you find the patient?
          </p>
          <SubmitButton title="Add New Patient" buttonType="submit" icon="+" />
        </div>
      </Container>
      <Container>
        <div className="border-2 border-primaryColor rounded-lg">
          <div className="flex gap-5 p-5">
            <div className="flex w-[20%]">
              <div className="col-span-1 flex flex-col md:flex-row gap-5 justify-center items-center">
                <img src="/assets/svg/person.svg" alt="" />
                <p className="text-center md:text-start">Adaman Smamntha</p>
              </div>
            </div>
            <div className=" w-[80%] grid gap-5 grid-cols-2 grow md:grid-cols-4 lg:grid-cols-5">
              <div className="border-r">
                <span>Date of Birth</span>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaCalendarAlt className="text-grayColor" />
                  </span>
                  <span className="text-grayColor">3-Jan-1991</span>
                </div>
              </div>
              <div className="border-r">
                <span>Sex</span>
                <div className="flex flex-row gap-2">
                  <span>
                    <MdOutlinePerson2 className="text-grayColor" />
                  </span>
                  <span className="text-grayColor">Male</span>
                </div>
              </div>
              <div>
                <span>Sex</span>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaCalendarAlt className="text-grayColor" />
                  </span>
                  <span className="text-grayColor">3-Jan-1991</span>
                </div>
              </div>
              <div className="border-r">
                <span>Cellphone</span>
                <div className="flex flex-row gap-2">
                  <span>
                    <MdOutlinePhone className="text-grayColor" />
                  </span>
                  <span className="text-grayColor">+260 22222222</span>
                </div>
              </div>
              <div className="border-r">
                <span>NUPN</span>
                <div className="flex flex-row gap-2">
                  <span>
                    <FaRegAddressCard className="text-grayColor" />
                  </span>
                  <span className="text-grayColor">22222-22-2</span>
                </div>
              </div>
              <div className="col-span-2">
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
          </div>
          <div className="">
            
          </div>
        </div>
      </Container>
      <Container>
        <div className="border-2 p-5">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 justify-between ">
            <div className={parantDiv_Style}>
              <img
                src="/public/assets/svg/TBService.svg"
                alt=""
                className={image_Style}
              />
              <p className={text_Style}>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/public/assets/svg/TBService.svg"
                alt=""
                className="asd"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img src="/public/assets/svg/TBService.svg" alt="" />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/public/assets/svg/TBService.svg"
                alt=""
                className="h-12 w-12 my_image"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36">
              <img
                src="/public/assets/svg/TBService.svg"
                alt=""
                className="h-12 w-12"
              />
              <p>TB Service</p>
            </div>
            <div className="border-2 p-5 h-36 w-36 hover:bg-primaryColor">
              <img
                src="/public/assets/svg/TBService.svg"
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
