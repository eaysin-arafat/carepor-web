type Props = {
  title: string;
  type?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
};

function Title({ title, className, type }: Props) {
  switch (type) {
    case "h1":
      return <h1 className={`heading_1 ${className}`}>{title}</h1>;

    case "h2":
      return <h2 className={`heading_2 ${className}`}>{title}</h2>;

    case "h3":
      return <h3 className={`heading_3 ${className}`}>{title}</h3>;

    case "span":
      return <span className={`heading_4 ${className}`}>{title}</span>;

    case "p":
      return <p className={`heading_5 ${className}`}>{title}</p>;

    default:
      return (
        <div className={`text-xl font-semibold ${className}`}>{title}</div>
      );
  }
}

export default Title;
