import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  label?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen = false,
  onClose,
  label = "Modal",
  children,
}: Props) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed left-1/2 top-1/2 z-40 h-screen w-screen translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-75 transition-all duration-700"
      ></div>
      <div className="fixed left-1/2 top-1/2 z-50 max-h-[80vh] w-[95%] translate-x-[-50%] translate-y-[-50%] dark:bg-neutral-800 md:w-[730px] lg:w-[968px]">
        <button
          aria-label="close modal"
          onClick={onClose}
          className="absolute right-0 top-[-60px] xl:right-[-60px] xl:top-[-30px]"
        >
          <Image
            src="/img/svg/cancel.svg"
            alt="close"
            width={45}
            height={45}
            className="dark:invert"
          />
        </button>
        <div
          role="dialog"
          aria-modal={true}
          aria-label={label}
          className="max-h-[inherit] overflow-y-auto px-6 py-10 lg:px-12 lg:py-16"
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
