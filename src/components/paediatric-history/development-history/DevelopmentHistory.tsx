import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Input from "@/components/core/form-elements/Input";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const DevelopmentHistory = ({ toggler }) => {
  const isLoading = false;

  const demoData = [
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
  ];
  return (
    <DefaultModal title="Development History" toggler={toggler} size="6xl">
      <form>
        <Section title="Feeding History">
          <Textarea label={"Feeding History"} required name="feedingHistory" />
          <p className="text-gray-600 text-xs px-6">
            <span className="font-bold text-gray-600"> Note :</span> Please
            document feeding history by age.
          </p>
        </Section>
        <Section title="Development History">
          <div className=" md:grid md:grid-cols-2 space-y-6 md:space-y-0 gap-6 ">
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3  space-y-2 md:space-y-0 gap-6">
                {/* MILESTONE */}
                <p className="text-lg font-medium text-secondaryColor">
                  Milestone
                </p>

                {/* NORMAL LIMITS */}
                <p className="text-lg font-medium text-secondaryColor">
                  Normal Limits
                </p>

                {/* AGE ACHIEVED */}
                <p className="text-lg font-medium text-secondaryColor">
                  Age Achieved
                </p>
              </div>
            </div>

            {/* SOCIAL SMILE */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Social Smile </p>
                <p style={{ color: "var(--text-gray)" }}>4 - 6 Weeks </p>
                <Input label={"Weeks"} name="socialSmile" />
              </div>
            </div>

            {/* HEAD HOLDING */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Head Holding </p>
                <p style={{ color: "var(--text-gray)" }}>1 -3 months </p>
                <Input label={"Months"} name="headHolding" />
              </div>
            </div>

            {/* TURN TOWARDS ORIGIN OF SOUND */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Turn Towards Origin of Sound
                </p>
                <p style={{ color: "var(--text-gray)" }}>2 - 3 Months </p>
                <Input label={"Months"} name="turnTowardSoundOrigin" />
              </div>
            </div>

            {/* EXTENDS HAND TO GRASP A TOY */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Extends Hand to Grasp a Toy
                </p>
                <p style={{ color: "var(--text-gray)" }}>2 - 3 Months </p>
                <Input label={"Months"} name="graspToy" />
              </div>
            </div>

            {/* FOLLOW OBJECTS WITH EYES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Follow objects with eyes
                </p>
                <p style={{ color: "var(--text-gray)" }}>2 - 4 Months </p>
                <Input label={"Months"} name="followObjectsWithEyes" />
              </div>
            </div>

            {/* ROLLS OVER */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Rolls over </p>
                <p style={{ color: "var(--text-gray)" }}>4 - 6 Months </p>
                <Input label={"Months"} name="rollsOver" />
              </div>
            </div>

            {/* BABBLES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Babbles </p>
                <p style={{ color: "var(--text-gray)" }}>4 - 6 Months </p>
                <Input label={"Months"} name="babbles" />
              </div>
            </div>

            {/* TAKES OBJECTS TO MOUTH */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Takes objects to mouth
                </p>
                <p style={{ color: "var(--text-gray)" }}>4 - 6 Months </p>
                <Input label={"Months"} name="takesObjectsToMouth" />
              </div>
            </div>

            {/* SITTING */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Sitting </p>
                <p style={{ color: "var(--text-gray)" }}>5 - 9 Months </p>
                <Input label={"Months"} name="sitting" />
              </div>
            </div>

            {/* REPEATS SYLLABLES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Repeats syllables </p>
                <p style={{ color: "var(--text-gray)" }}>6 - 9 Months </p>
                <Input label={"Months"} name="repeatsSyllables" />
              </div>
            </div>

            {/* MOVES OBJECTS FROM ONE HAND TO ANOTHER */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Move objects from one hand to another
                </p>
                <p style={{ color: "var(--text-gray)" }}>6 - 9 Months </p>
                <Input label={"Months"} name="movesObjects" />
              </div>
            </div>

            {/* PLAYS PEEK-A-BOO */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Plays peek-a-boo </p>
                <p style={{ color: "var(--text-gray)" }}>6 - 9 Months </p>
                <Input label={"Months"} name="playsPeekaBoo" />
              </div>
            </div>

            {/* RESPONDS TO OWN NAME */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Responds to own name
                </p>
                <p style={{ color: "var(--text-gray)" }}>6 - 9 Months </p>
                <Input label={"Months"} name="respondsToOwnName" />
              </div>
            </div>

            {/* TAKE STEPS WITH SUPPORT */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Takes steps with support
                </p>
                <p style={{ color: "var(--text-gray)" }}>9 - 12 Months </p>
                <Input label={"Months"} name="takesStepsWithSupport" />
              </div>
            </div>

            {/* PICKS UP SMALL OBJECTS OR STRING WITH TWO FINGERS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Picks up small objects or string with two fingers
                </p>
                <p style={{ color: "var(--text-gray)" }}>9 - 12 Months </p>
                <Input label={"Months"} name="picksUpSmallObjects" />
              </div>
            </div>

            {/* IMITATES SIMPLE GESTURES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Imitates simple gestures
                </p>
                <p style={{ color: "var(--text-gray)" }}>9 - 12 Months </p>
                <Input label={"Months"} name="imitatesSimpleGestures" />
              </div>
            </div>

            {/* POINTS TO OBJECTS AND SAYS 2 - 3 WORDS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Points to objects and says 2 - 3 words
                </p>
                <p style={{ color: "var(--text-gray)" }}>9 - 12 Months </p>
                <Input label={"Months"} name="saysTwoToThreeWords" />
              </div>
            </div>

            {/* STANDING */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Standing </p>
                <p style={{ color: "var(--text-gray)" }}>7 - 13 months </p>
                <Input label={"Months"} name="standing" />
              </div>
            </div>

            {/* WALKING */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Walking</p>
                <p style={{ color: "var(--text-gray)" }}>12 - 18 months </p>
                <Input label={"Months"} name="walking" />
              </div>
            </div>

            {/* DRINKS FROM CUP */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Drinks from cup </p>
                <p style={{ color: "var(--text-gray)" }}>12 - 18 months </p>
                <Input label={"Months"} name="drinksFromCup" />
              </div>
            </div>

            {/* SAYS 7 - 10 WORDS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Says 7 - 10 words </p>
                <p style={{ color: "var(--text-gray)" }}>12 - 18 months </p>
                <Input label={"Months"} name="saysSevenToTenWords" />
              </div>
            </div>

            {/* POINTS TO BODY PARTS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Points to body parts
                </p>
                <p style={{ color: "var(--text-gray)" }}>12 - 18 months </p>
                <Input label={"Months"} name="pointsToBodyParts" />
              </div>
            </div>

            {/* TALKING */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Talking </p>
                <p style={{ color: "var(--text-gray)" }}>9 - 24 months </p>
                <Input label={"Months"} name="talking" />
              </div>
            </div>

            {/* KICKS BALL AND STARTS TO RUN */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Kicks ball and starts to run
                </p>
                <p style={{ color: "var(--text-gray)" }}>18 - 24 months </p>
                <Input label={"Months"} name="startsToRun" />
              </div>
            </div>

            {/* POINTS AT PICTURE ON REQUEST */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Points at picture on request
                </p>
                <p style={{ color: "var(--text-gray)" }}>18 - 24 months </p>
                <Input label={"Months"} name="pointsPictureOnRequest" />
              </div>
            </div>

            {/* SINGS AND USES SHORT SENTENCES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Sings and uses short sentences
                </p>
                <p style={{ color: "var(--text-gray)" }}>18 - 24 months </p>
                <Input label={"Months"} name="sings" />
              </div>
            </div>

            {/* BUILDS TOWER WITH 3 BLOCKS OR BOXES */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Builds tower with 3 blocks or boxes
                </p>
                <p style={{ color: "var(--text-gray)" }}>18 - 24 months </p>
                <Input label={"Months"} name="buildTowerWithBox" />
              </div>
            </div>

            {/* JUMPS AND RUNS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>Jumps and runs </p>
                <p style={{ color: "var(--text-gray)" }}> {">"} 24 months </p>
                <Input label={"Months"} name="jumpsAndRun" />
              </div>
            </div>

            {/* BEGINS TO DRESS AND UNDRESS BY ITSELF */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Begins to dress and underss by itself
                </p>
                <p style={{ color: "var(--text-gray)" }}> {">"} 24 months </p>
                <Input label={"Months"} name="beginsToDressAndUndress" />
              </div>
            </div>

            {/* GROUPS SIMILAR OBJECTS */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Groups similar objects
                </p>
                <p style={{ color: "var(--text-gray)" }}> {">"} 24 months </p>
                <Input label={"Months"} name="groupsSimilarObjects" />
              </div>
            </div>

            {/* PLAYS WITH OTHER CHILDREN */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Plays with other children
                </p>
                <p style={{ color: "var(--text-gray)" }}> {">"} 24 months </p>
                <Input label={"Months"} name="playsWithOtherChildren" />
              </div>
            </div>

            {/* SAYS FIRST NAME AND TELLS SHORT STORY */}
            <div className="col-span-2">
              <div className="md:grid md:grid-cols-3 items-center space-y-2 md:space-y-0 gap-6">
                <p style={{ color: "var(--text-gray)" }}>
                  Says first name and tells short story
                </p>
                <p style={{ color: "var(--text-gray)" }}> {">"} 24 months </p>
                <Input label={"Months"} name="saysFirstNameAndShortStory" />
              </div>
            </div>
          </div>
        </Section>
        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {isLoading && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {demoData?.map((item) => (
            <PastRecordWrapper isDeleteAble={false} isEditAble={true}>
              <PastRecordData
                title="Treatment Plan"
                data={item?.chiefComplaints}
              />
            </PastRecordWrapper>
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </DefaultModal>
  );
};

export default DevelopmentHistory;
