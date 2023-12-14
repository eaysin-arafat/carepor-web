import { cn } from "@/utilities/cn";
interface LineSkeletonProps {
  className?: string;
}

export const LineSkeleton: React.FC<LineSkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-pulse h-5  bg-gradient-to-br from-gray-300 to-gray-200 rounded-full mb-2",
        className
      )}
    ></div>
  );
};

export const CircleSkeleton: React.FC<LineSkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-pulse h-20 w-20 bg-gradient-to-br from-gray-300 to-gray-200 rounded-full mb-2",
        className
      )}
    ></div>
  );
};
