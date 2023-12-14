import { cn } from "@/utilities/cn";

type Props = {
  messages?: string;
  className?: string;
};

function NotFound({ messages, className = "" }: Props) {
  return (
    <div
      className={cn(
        "flex justify-center text-2xl items-center w-full  h-32",
        className
      )}
    >
      <h2>{messages ? messages : "No item found"}</h2>
    </div>
  );
}

export default NotFound;
