import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Card, { CardBody } from "@/components/core/card/Card";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const EditFPlan = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal title="Plan Create" isShow={true} toggler={toggler}>
      <form>
        <Card className="mb-5">
          <CardBody className="dark:bg-black">
            <div className="mb-4 text-lg">Family Planning</div>

            <div className="space-y-4">
              <Select label="Does client have signs and symptoms suggestive of sexual violence?">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Select>{" "}
              <div className="mb-4 text-semibold">
                State the issues and concerns the client has:
              </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Family Planning Class">
                  <option value="1">Issues with IUD/Implant</option>
                  <option value="2">
                    Issues at surgical site (implant insertion or sterilization)
                  </option>
                  <option value="3">Issues with condom use</option>
                  <option value="4">Bleeding</option>
                  <option value="5">Headache and migraines</option>
                  <option value="6">Pregnancy related concerns</option>
                  <option value="7">
                    Management of dosing errors (missed/late methods)
                  </option>
                  <option value="8">Heart attack</option>
                  <option value="9">
                    Nausea, vomiting, dizziness, and diarrhea
                  </option>
                </Select>{" "}
                <Select label="Family Planning Sub-Class"></Select>
              </div>{" "}
              <Select label="Are you certain client is not pregnant?">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Select>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Reason of not Pregnant">
                  <option value="1">
                    Last menstrual bleeding started within the past 7 days
                  </option>
                  <option value="2">
                    Abstained from sexual intercourse since last normal menses,
                    delivery, miscarriage or abortion
                  </option>
                  <option value="3">
                    Consistently and correctly using reliable contraceptive
                    method
                  </option>
                  <option value="4">Gave birth in the last 4 weeks</option>
                  <option value="5">
                    Gave birth less than 6 months ago, fully or nearly fully
                    breastfeeding, and amenorrhoeic
                  </option>
                  <option value="6">
                    Miscarriage or abortion in the past 7 days
                  </option>
                  <option value="7">
                    Miscarriage or abortion in the past 12 days
                  </option>
                  <option value="8">
                    Reasonably certain a woman is not pregnant
                  </option>
                </Select>{" "}
                <Select label="FP Method Plan">
                  <option value="1">Stop using method</option>
                  <option value="2">Continue with method</option>
                  <option value="3">Switch method</option>
                </Select>
              </div>{" "}
              <Select label="Does client give consent to receive FP?">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Select>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="FP Method Plan Request">
                  <option value="1">
                    Copper-bearing intrauterine device (Cu-IUD)
                  </option>
                  <option value="2">
                    Levonorgestrel intrauterine device (LNG-IUD)
                  </option>
                  <option value="3">Etonogestrel (ETG) one-rod</option>
                  <option value="4">Levonorgestrel (LNG) two-rod</option>
                  <option value="5">DMPA-IM</option>
                  <option value="6">DMPA-SC</option>
                  <option value="7">Norethisterone enanthate (NET-EN)</option>
                  <option value="8">Progestogen-only pills (POPs)</option>
                  <option value="9">Combined oral contraceptives (COCs)</option>
                  <option value="10">Combined contraceptive patch</option>
                  <option value="11">
                    Combined contraceptive vaginal ring (CVR)
                  </option>
                  <option value="12">
                    Progesterone-releasing vaginal ring (PVR)
                  </option>
                  <option value="13">
                    Lactational amenorrhea method (LAM)
                  </option>
                  <option value="14">Male condoms</option>
                  <option value="15">Female condoms</option>
                  <option value="16">
                    Emergency contraceptive pills (ECPs)
                  </option>
                  <option value="17">
                    Fertility awareness-based methods (FAB)
                  </option>
                  <option value="18">Male Sterilization</option>
                  <option value="19">Withdrawal</option>
                  <option value="20">None</option>
                </Select>{" "}
                <Select label="Select Plan">
                  <option value="1">
                    A condition for which there is no restriction for the use of
                    the contraceptive method
                  </option>
                  <option value="2">
                    A condition where the advantages of using the method
                    generally outweigh the theoretical or proven risks
                  </option>
                  <option value="3">
                    A condition where the theoretical or proven risks usually
                    outweigh the advantages of using the method
                  </option>
                  <option value="4">
                    A condition which represents an unacceptable health risk if
                    the contraceptive method is used
                  </option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Classify FP Method">
                  <option value="1">
                    A condition for which there is no restriction for the use of
                    the contraceptive method
                  </option>
                  <option value="2">
                    A condition where the advantages of using the method
                    generally outweigh the theoretical or proven risks
                  </option>
                  <option value="3">
                    A condition where the theoretical or proven risks usually
                    outweigh the advantages of using the method
                  </option>
                  <option value="4">
                    A condition which represents an unacceptable health risk if
                    the contraceptive method is used
                  </option>
                </Select>{" "}
                <Select label="Plans">
                  <option value="1">Accept</option>
                  <option value="2">Caution</option>
                  <option value="3">Delay</option>
                  <option value="4">Special</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="FP Provided Place">
                  <option value="1">Provided on site</option>
                  <option value="2">Referral</option>
                  <option value="3">Home/self-administered</option>
                </Select>{" "}
                <Select label="Reason for Not Plan">
                  <option value="1">Chooses not to use</option>
                  <option value="2">Out of stock – Method</option>
                  <option value="3">
                    Out of stock – Equipment or supplies
                  </option>
                  <option value="4">
                    IUD insertion attempted but not done
                  </option>
                  <option value="5">Client requires referral</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Client Receive Preferred Options">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Backup Method Used">
                  <option value="1">Male condom</option>
                  <option value="2">Female condom</option>
                  <option value="3">Abstinence</option>
                  <option value="4">
                    Emergency contraceptive pills (ECPs)
                  </option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Client Not Receive Preffered Option">
                  <option value="1">Out of stock – Method</option>
                  <option value="2">Out of stock – Equipment /supplies</option>
                  <option value="3">Health worker skill mismatch</option>
                  <option value="4">Client requires referral</option>
                </Select>{" "}
                <Select label="Is HIV Testing Need">
                  <option value="1">Soft</option>
                  <option value="2">Firm</option>
                  <option value="3">Other</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label=" Is STI">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Is Cervical Cancer">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Is Breast Cancer">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Is Prostate Cancer">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
            </div>
          </CardBody>
        </Card>{" "}
        <hr className="my-6" />
        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {(isLoading || status === "pending") && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {data?.map((item, index) => (
            <PastEncounters key={index} data={item} handleEdit={() => {}} />
          ))}
        </PastRecordContainers>
        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default EditFPlan;
