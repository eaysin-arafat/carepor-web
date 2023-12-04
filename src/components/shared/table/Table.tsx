type Props = {
  children: React.ReactNode;
};

function Table({ children }: Props) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] w-[1300px] border p-5">{children}</div>
    </div>
  );
}

export default Table;
