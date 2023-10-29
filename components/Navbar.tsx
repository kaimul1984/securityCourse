"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { down } from "@/assets/icons";
import Image from "next/image";
import { Button, Logo, ParentDiv } from ".";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Login from "./Login";

const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about us",
    href: "/about",
  },

  {
    title: "courses",
    href: "/courses",
    icon: down,
    children: [
      {
        title: "security training course",
        href: "/securityTraining",
      },
      {
        title: "first aid course",
        href: "/firstAid",
      },
    ],
  },
  {
    title: "upcoming courses",
    href: "/upcoming",
    icon: down,
    children: [
      {
        title: "course-1",
        href: "/upcoming",
      },
      {
        title: "course-2",
        href: "/upcoming",
      },
      {
        title: "course-3",
        href: "/upcoming",
      },
      {
        title: "course-4",
        href: "/upcoming",
      },
      {
        title: "course-5",
        href: "/upcoming",
      },
      {
        title: "course-6",
        href: "/upcoming",
      },
    ],
  },
  {
    title: "contact us",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <ParentDiv style="h-24 border-b-2 bg-white relative">
      <div className="container flex-between text-midnight">
        <Logo />
        <nav
          className={`${
            open ? "h-[calc(100vh-9.5rem)] opacity-100" : "h-0 opacity-0"
          }  w-full lg:w-max  bg-secondary lg:bg-white absolute left-0 right-0 z-[999]  top-[6rem] md:top-[85px]  transition-[height] duration-300 lg:top-0  lg:relative lg:h-full lg:opacity-100`}
        >
          <ul className="h-full flex justify-center items-start ml-12 lg:ml-0  flex-col gap-6 lg:flex-row  lg:relative">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.title}
                  className=" relative flex items-center gap-2 lg:py-8"
                  onMouseEnter={() => setActiveDropdown(item.title)} // Handle mouse enter
                  onMouseLeave={() => setActiveDropdown(null)} //
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg xl:text-xl lg:text-[1em] capitalize font-bold ${
                      isActive ? "text-warning" : "text-midnight"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.icon && (
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                  )}
                  {item.children && (
                    <ul
                      className={`${
                        activeDropdown === item.title ? "scale-100" : "scale-0"
                      } absolute top-8 lg:top-[95px] w-max p-4 transition-all duration-300 z-50  bg-white shadow-2xl`}
                    >
                      <li className="flex flex-col gap-4 ">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={`${child.href}`}
                            onClick={() => setOpen(false)}
                            className="xl:text-2xl font-bold transition-all duration-100 hover:underline hover:text-amber w-max "
                          >
                            {child.title}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <Login />
          <button
            className="lg:hidden p-2 lg:p-4 rounded-lg bg-[#eee] shadow-2xl fon text-2xl"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </ParentDiv>
  );
}
