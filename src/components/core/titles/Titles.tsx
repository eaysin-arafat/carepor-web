type Props = {
  title: string;
  type?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
};

function Title({ title, className, type }: Props) {
  switch (type) {
    case "h1":
      return (
        <h1 className={`text-center font-bold text-2xl md:text-4xl text-heading leading-[1.625] tracking-tighter text-secondaryColor ${className}`}>{title}</h1>
      );

    case "h2":
      return (
        <h2 className={`text-brand-heading text-3xl font-medium leading-normal tracking-tighter ${className}`}>{title}</h2>
      );

    case "h3":
      return (
        <h3 className={`text-secondaryColor text-lg font-bold leading-6 tracking-tighter ${className}`}>{title}</h3>
      );

    case "span":
      return (
        <span className={`text-center text-grayColor text-sm font-normal leading-6 ${className}`}>{title}</span>
      );

    case "p":
      return (
        <p className={`text-textColor font-inter font-normal text-sm leading-5 ${className}`}>{title}</p>
      );

    default:
      return (
        <div className={`text-xl font-semibold ${className}`}>{title}</div>
      );
  }
}

export default Title;
