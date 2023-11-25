type Props = {
  titleText: string;
  type?: "subtitle" | "title" | "titleNote";
  className?: string;
};

function Title({ titleText, className, type }: Props) {
  switch (type) {
    case "subtitle":
      return (
        <div className={className + defaultClass + " " + "text-xl font-bold"}>
          {titleText}
        </div>
      );

    case "titleNote":
      return (
        <div className={className + defaultClass + " " + "text-sm "}>
          {titleText}
        </div>
      );

    default:
      return (
        <div className={className + defaultClass + " " + "text-2xl font-bold"}>
          {titleText}
        </div>
      );
  }
}

export default Title;

const defaultClass: string = "  text-center";
