type Props = {
  index: number;
  item: [any];
};

function TableBody({ item, index }: Props) {
  console.log(item);
  item?.length > 0 &&
    item.map((item, index) => {
      return (
        <div
          key={index}
          className={`grid grid-cols-6 items-center ${
            index % 2 ? "bg-gray-200" : "bg-white"
          }`}
        >
          <p className="p-2 text-textColor text-xs">25</p>
          <p className="p-2 text-textColor text-xs">1 years</p>
          <p className="p-2 text-textColor text-xs">3</p>
          <p className="p-2 text-textColor text-xs">2</p>
          <p className="p-2 text-textColor text-xs">1</p>
          <p
            className={`p-2 text-textColor text-xs sticky w-[100px] right-0 z-50 ${
              index % 2 ? "bg-gray-200" : "bg-white"
            }`}
          >
            Action
          </p>
        </div>
      );
    });
}

export default TableBody;
