type Props = {
  titleText: string;
  type?: "subtitle" | "title" | "titleNote";
  className?: string;
};

function Title({ titleText, className, type }: Props) {
  switch (type) {
    case "subtitle":
      return (
        <div
          className={className + defaultClass + " " + "text-xl font-semibold"}
        >
          {titleText}
        </div>
      );

    case "titleNote":
      return (
        <div className={className + defaultClass + " " + "text-sm text-grayColor mt-1"}>
          {titleText}
        </div>
      );

    default:
      return (
        <div
          className={className + defaultClass + " " + "text-2xl font-semibold"}
        >
          {titleText}
        </div>
      );
  }
}

export default Title;

const defaultClass: string = " text-center";
