import CustomNrc from "@/components/core/form-elements/CustomNrc";

const NrcSearch = ({ handleNrcChange, nrc }) => {
  return (
    <div className="w-full">
      <CustomNrc
        label=""
        placeholder="Search By NRC"
        name="nrc"
        state={nrc}
        onChange={handleNrcChange}
        className=""
      />
    </div>
  );
};

export default NrcSearch;
