import Container from "@/components/core/container/Container";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePerson2 } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import Button from "@/components/core/buttons/Button";

type Props = {};

function AdmissionSearch({}: Props) {
  return (
    <>
      <Container>
        <div>
          <div className="flex flex-row border-2 rounded-lg border-blue-300 px-10 py-5 mt-10 gap-6">
            <div className="flex flex-row gap-5 items-center">
              <img src="/assets/svg/person.svg" alt="" />
              <p>
                Adaman <br /> Smamntha
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-5">
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
              <div className="flex flex-row gap-4 mt-5">
                <Button title="Edit Profile" type="outline" />
                <Button title="Admit Patient" type="link" />
                <Button title="Service Queue" type="link" />
                <Button title="Attend to Patient" type="link" />
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
          <Button title="Add New Patient" type="submit" icon="+" />
        </div>
      </Container>
    </>
  );
}

export default AdmissionSearch;
