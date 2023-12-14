import { cn } from "@/utilities/cn";
import { Loader } from "react-feather";

type Props = {};

function CardLoader({}: Props) {
  return (
    <div className={cn("flex justify-center items-center w-full h-40  ")}>
      <div className="animate-spin ">
        <Loader size={40} />
      </div>
    </div>
  );
}

export default CardLoader;
