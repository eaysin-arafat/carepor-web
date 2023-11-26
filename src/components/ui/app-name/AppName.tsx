import { applicationName } from "@/data/app-defaults";

type Props = {
  className?: string;
  alien?: "center" | "left";
};

function AppName({ className, alien = "center" }: Props) {
  return (
    <div
      className={
        className +
        " " +
        `text-primaryColor text-${alien || "center"} font-bold  py-2 mb-2 `
      }
    >
      {applicationName}
    </div>
  );
}

export default AppName;
