import Input from "@/components/core/form-elements/Input";

const NUPNSearch = ({ handleNupnChange, nupn }) => {
  return (
    <div>
      <Input
        label=""
        name="nupn"
        placeholder="Search By NUPN"
        onChange={handleNupnChange}
        value={nupn}
        className=""
      />
    </div>
  );
};

export default NUPNSearch;
