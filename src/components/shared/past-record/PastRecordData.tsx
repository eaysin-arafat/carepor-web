const PastRecordData = ({ title, data }) => {
  return (
    <p>
      <span className="font-semibold whitespace-nowrap">{title} : </span> &nbsp;
      {data}
    </p>
  );
};

export default PastRecordData;
