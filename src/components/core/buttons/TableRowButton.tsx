interface TableRowButtonProps {
  clickHandler?: () => void;
  Icon?: () => JSX.Element;
  buttonText?: string;
}

const TableRowButton = ({
  clickHandler = () => {},
  Icon = () => <></>,
  buttonText = "Button",
}: TableRowButtonProps) => {
  return (
    <button type="button" onClick={clickHandler} className="btn_outline ">
      <Icon />
      <p className="ms-1"> {buttonText} </p>
    </button>
  );
};

export default TableRowButton;
