// Breadcrumb.tsx

import { cn } from "@/utilities/cn";

type Props = {
  children: JSX.Element;
  className: string;
};

const GlobalBreadcrumb = ({ children , className }: Props) => {
  return (
    <nav className={cn("flex" , className )} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {children}
      </ol>
    </nav>
  );
};

export default GlobalBreadcrumb;
