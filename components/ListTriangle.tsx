import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListTriangle = ({ children }: Props) => (
  <li className="relative w-full pl-5 opacity-70 before:absolute before:left-0 before:top-1/3 before:inline-block before:border-y-[5.5px] before:border-l-[5.5px] before:border-r-0 before:border-transparent before:border-l-slate-950 dark:before:border-transparent dark:before:border-l-white">
    {children}
  </li>
);

export default ListTriangle;
