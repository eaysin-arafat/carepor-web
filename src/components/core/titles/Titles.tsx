import { cn } from "@/utilities/cn";

type Props = {
  title: string;
  type?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
};

/**
 *
 * @param title Text Title
 * @param type h1 | h2 | h3 | span | p
 * @param className Class Name
 * @returns
 */

function Title({ title, className, type }: Props) {
  switch (type) {
    case "h1":
      return <h1 className={cn(`heading_1 `, className)}>{title}</h1>;

    case "h2":
      return <h2 className={cn(`heading_2 `, className)}>{title}</h2>;

    case "h3":
      return <h3 className={cn(`heading_3 `, className)}>{title}</h3>;

    case "span":
      return <span className={cn(`heading_4 `, className)}>{title}</span>;

    case "p":
      return <p className={cn(`heading_5 `, className)}>{title}</p>;

    default:
      return (
        <div className={cn(`text-xl font-semibold`, className)}>{title}</div>
      );
  }
}

export default Title;
