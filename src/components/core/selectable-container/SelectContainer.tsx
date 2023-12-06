import SelectableButton from "../buttons/SelectableButton";

interface SelectContainerProps {
  children?: React.ReactNode;
}

const data = [
  "Condoms",
  "Lactational amenorrhea method",
  "Combined Oral Contraceptive (COC)",
  "ethinylestradiol+norethisterone - Combined oral contraceptives (COCs)",
  "Progestogen-only pills (POPs)",
  "Norethisterone enanthate (NET-EN)",
  "DMPA- (medroxyprogesterone acetate)",
  "Levonorgestrel (LNG) two-rod",
  "Levonorgestrel-releasing intrauterine device (LNG-IUD)",
  "Sterilization",
  "Withdrawal Method",
  "Diaphragms",
];

const SelectContainer = ({ children }: SelectContainerProps) => {
  return (
    <div>
      {children}
      <h1>Select & Add Symptoms</h1>
      <div className="flex gap-3 flex-wrap mt-2 ">
        {/* <div className={cn("grid gap-3 mt-2 col-auto")}> */}
        {data.map((item, index) => (
          <SelectableButton key={index} isActive={index === 0} text={item} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SelectContainer;
