import Badge from "@/components/core/badge/Badge";
import { cn } from "@/utilities/cn";

type Props = {
  title: string;
  className?: string;
  badgeValue?: string | number;
  badgeType?: "circle" | "rectangle";
  icon?: JSX.Element;
  children: JSX.Element;
  viewHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const QueueTableLayout = ({
  title,
  badgeValue,
  badgeType = "circle",
  children,
  className,
  viewHandler,
}: Props) => {
  return (
    <div>
      <div
        className={cn(
          "border p-5 bg-whiteBgColor rounded-md shadow mt-5",
          className
        )}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl mb-4 flex items-center gap-3">
            {title}
            {badgeValue && <Badge type={badgeType} value={badgeValue} />}
          </h1>
          {viewHandler && (
            <button
              onClick={viewHandler}
              className="text-xl text-primaryColor hover:text-primaryHoverColor mb-4 flex items-center gap-3 cursor-pointer"
            >
              View All
            </button>
          )}
        </div>

        <div className="flex md:order-2">{children}</div>
      </div>
    </div>
  );
};

export default QueueTableLayout;
