interface Props {
  onClick: () => void;
  open: boolean;
}

export default function BurgerButton({ onClick, open }: Props) {
  return (
    <div
      className="flex h-8 items-center hover:cursor-pointer"
      onClick={onClick}
    >
      <div data-ui={open ? "active" : undefined} className="group space-y-2">
        <div
          className={
            "h-0.5 w-8 transition-all duration-300 group-data-active:translate-y-[5px] group-data-active:rotate-45 dark:bg-white"
          }
        ></div>
        <div
          className={
            "h-0.5 w-8 transition-all duration-300 group-data-active:hidden dark:bg-white"
          }
        ></div>
        <div
          className={
            "h-0.5 w-8 transition-all duration-300 group-data-active:translate-y-[-5px] group-data-active:rotate-[135deg] dark:bg-white"
          }
        ></div>
      </div>
    </div>
  );
}
