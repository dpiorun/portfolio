import { motion } from "framer-motion";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <motion.main
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0,
        }}
        className="grid-col absolute top-0 flex min-h-screen w-full flex-col items-center pt-20 xl:pl-72 xl:pt-24 2xl:pl-[450px]"
      >
        {children}
      </motion.main>
    </>
  );
}
