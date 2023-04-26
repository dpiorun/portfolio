import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bg?: boolean;
  gap?: "sm" | "base";
  py?: "sm" | "base";
  maxCols?: 1 | 2 | 3;
}

export default function Section({
  children,
  bg = false,
  gap = "base",
  py = "base",
  maxCols = 1,
}: Props) {
  const gapClass = () => {
    switch (gap) {
      case "sm":
        return "gap-10";
      default:
        return "gap-20";
    }
  };

  const pyClass = () => {
    switch (py) {
      case "sm":
        return "py-10";
      default:
        return "py-24";
    }
  };

  const colsClass = () => {
    switch (maxCols) {
      case 3:
        return "sm:grid-cols-2 lg:grid-cols-3";
      case 2:
        return "md:grid-cols-2";
      default:
        return "";
    }
  };

  const classNames = [
    "grid",
    "w-full",
    "max-w-6xl",
    gapClass(),
    "px-4",
    pyClass(),
    "sm:px-12",
    colsClass(),
  ].join(" ");

  if (bg) {
    return (
      <section className="flex w-full justify-center bg-white first-of-type:pt-0 dark:bg-black">
        <div className={classNames}>{children}</div>
      </section>
    );
  }

  return (
    <section className={`${classNames} first-of-type:pt-0`}>{children}</section>
  );
}
