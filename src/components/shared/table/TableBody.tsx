type Props = {
  index: number;
  item: {
    name: string;
    age: string;
    office: string;
    position: string;
    salary: string | number;
  };
};

function TableBody({ item, index }: Props) {
  return (
    <div
      key={index}
      className={`grid grid-cols-6 items-center ${
        index % 2 ? "bg-gray-200" : "bg-white"
      }`}
    >
      <p className="p-2 text-textColor text-xs">{item.name}</p>
      <p className="p-2 text-textColor text-xs">{item.age} years</p>
      <p className="p-2 text-textColor text-xs">{item.office}</p>
      <p className="p-2 text-textColor text-xs">{item.position}</p>
      <p className="p-2 text-textColor text-xs">{item.salary}</p>
      <p
        className={`p-2 text-textColor text-xs sticky w-[100px] right-0 z-50 ${
          index % 2 ? "bg-gray-200" : "bg-white"
        }`}
      >
        Action
      </p>
    </div>
  );
}

export default TableBody;
