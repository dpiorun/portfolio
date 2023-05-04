import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Copyright from "./Copyright";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";

const sidebarData = [
  {
    id: 1,
    icon: "/img/svg/home-run.svg",
    menuName: "Home",
    routePath: "/",
  },
  {
    id: 2,
    icon: "/img/svg/avatar.svg",
    menuName: "About",
    routePath: "/about",
  },
  {
    id: 3,
    icon: "/img/svg/setting.svg",
    menuName: "Service",
    routePath: "/service",
  },
  {
    id: 4,
    icon: "/img/svg/briefcase.svg",
    menuName: "Portfolio",
    routePath: "/portfolio",
  },
  {
    id: 5,
    icon: "/img/svg/mail.svg",
    menuName: "Contact",
    routePath: "/contact",
  },
];

export default function Sidebar() {
  const { asPath } = useRouter();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="font-montserrat">
      {openSideMenu && (
        <div
          className="fixed z-10 h-screen w-screen"
          onClick={() => setOpenSideMenu(false)}
        />
      )}
      <div className="relative z-10 flex items-center justify-between bg-white p-4 dark:bg-neutral-700 xl:hidden">
        <Logo />

        <BurgerButton
          onClick={() => setOpenSideMenu(!openSideMenu)}
          open={openSideMenu}
        />
      </div>

      <div
        data-ui={openSideMenu ? "active" : undefined}
        className="fixed left-0 top-0 z-10 flex h-screen w-72 translate-x-[-100%] items-center border-r-gray-900 bg-white px-10 transition-all duration-300 data-active:translate-x-0 dark:bg-black xl:translate-x-0 2xl:w-[450px] 2xl:px-28"
      >
        <div className="w-full">
          <Logo />

          <ul className="pb-12 pt-10">
            {sidebarData.map((item) => (
              <li key={item.id} onClick={() => setOpenSideMenu(false)}>
                <Link
                  href={item.routePath}
                  data-ui={asPath == item.routePath ? "active" : undefined}
                  className="mb-2.5 mr-2.5 inline-block flex w-full font-medium font-medium opacity-60 transition-all duration-300 hover:tracking-widest data-active:tracking-widest data-active:opacity-100"
                >
                  <Image
                    width={15}
                    height={15}
                    className="mr-2.5 dark:invert"
                    src={item.icon}
                    alt="homerun"
                  />
                  <span>{item.menuName}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Copyright />
        </div>
      </div>
    </div>
  );
}
