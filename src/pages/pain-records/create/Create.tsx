import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Radio from "@/components/core/form-elements/Radio";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";

function PainRecordsCreate({ toggler }) {
  return (
    <DefaultOpenModal title="Pain Scaling Tool" isShow={true} toggler={toggler}>
      <form>
        <div className="flex flex-col  gap-6">
          <ul>
            <li>
              <Radio name="painCreate" label="1-No pain" />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="2-Pain is mild-barely noticeable. Most of the time you don't think about it"
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="3-Minor pain, Its annoying. You may have sharp pain now and then."
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="4-Noticeable pain. It may distract you,but you can get used to it"
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="5- Moderate pain. If you are involved in an activity, you are able to ignore it for a while.But it is still distracting."
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="6- Moderately strong pain. You avoid some of your normal daily activities. You have trouble concentrating."
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="7- Strong pain. It keeps you from doing normal activities."
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="8- Very strong pain. It's hard to do anything at all."
              />
            </li>
            <li>
              <Radio
                name="painCreate"
                label="9- Pain that is very hard to tolerate. You cant carry on a conversation."
              />
            </li>
            <li>
              <Radio name="painCreate" label="10 - Worst possible pain" />
            </li>
          </ul>
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
}

export default PainRecordsCreate;
