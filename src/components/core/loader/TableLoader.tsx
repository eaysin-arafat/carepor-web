import { LineSkeleton } from "../skeleton/Skeleton";

type Props = {};

function TableLoader({}: Props) {
  return (
    <div className="mt-2 mx-4 mb-5">
      <LineSkeleton className="rounded" />
      <LineSkeleton className="rounded" />
      <LineSkeleton className="rounded" />
      <LineSkeleton className="rounded" />
    </div>
  );
}

export default TableLoader;
