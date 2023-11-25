type Props = {
  text: string;
  type?: "subtitle" | "title" | "titleNote";
  className?: string;
};

function Title({ text, className, type }: Props) {
  switch (type) {
    case "subtitle":
      return (
        <div className={className + defaultClass + " " + "text-xl"}>{text}</div>
      );

    case "titleNote":
      return (
        <div className={className + defaultClass + " " + "text-xl"}>{text}</div>
      );

    default:
      return (
        <div className={className + defaultClass + " " + "text-2xl"}>
          {text}
        </div>
      );
  }
}

export default Title;

const defaultClass: string = " font-bold text-center";
