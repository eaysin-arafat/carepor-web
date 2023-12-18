import PageTitle from "@/components/page-title/page-title";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

const FormSubHeader = () => {
  const navigation = useNavigate();
  let { pathname } = useLocation();
  const pageTitle =
    PageTitle?.filter((page) => page.link === pathname)[0]?.title || "";

  return (
    <div className="flex justify-between items-center w-full px-5 py-4">
      <button onClick={() => navigation(-1)}>
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-secondaryColor text-xl font-medium text-center">
        {pageTitle || "Title Not Found"}
      </h1>
      <div></div>
    </div>
  );
};

export default FormSubHeader;
