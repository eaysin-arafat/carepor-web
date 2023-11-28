import { Link } from "react-router-dom";

type FormFooterLinkType = {
  question: string;
  link: string;
  btnText: string;
};

export const FormFooterLink = ({
  question,
  btnText,
  link,
}: FormFooterLinkType) => {
  return (
    <div className="border-t border-gray-200 mb[-10px]">
      <div className=" text-base">
        <div className="pt-5 flex justify-center gap-2">
          <div className="text-grayColor">{question}</div>
          <div className="leading-[26px] text-dodgerblue">
            <Link to={link} className="text-primaryColor">
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
