import { useNavigate } from "react-router-dom";

function ServicePointBox({ item }) {
  const navigate = useNavigate();

  return (
    <button className={servicePointStyle} onClick={() => navigate("/vitals")}>
      <div className={servicePointBoxStyle}>
        <div className={servicePointIconStyle}>
          <img src={item.imgSrc} alt="" />
        </div>
        <div>
          <p className="font-semibold text-secondaryColor">{item.title}</p>
        </div>
      </div>
    </button>
  );
}

export default ServicePointBox;

const servicePointBoxStyle =
  "flex items-center rounded-xl h-24 w-full bg-lightBlueColor border border-blue-300";
const servicePointIconStyle =
  "bg-white h-20 w-20 -ml-5 rounded-xl border border-blue-300 shadow-md p-2 mr-6 flex items-center justify-center";
const servicePointStyle =
  "h-24 w-full xs:max-w-full max-w-[220px]  flex justify-end ";
