"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { down } from "@/assets/icons";
import Image from "next/image";
import { Button, Logo } from ".";

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
  },
  {
    title: "contact us",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-24 border-b-2 bg-white flex items-center justify-center">
      <div className="container flex-between text-midnight">
        <Logo />
        <nav>
          <ul className=" group flex gap-6 relative h-24">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.title} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className={`text-xl capitalize font-bold ${
                      isActive ? "text-warning" : "text-midnight"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.icon && (
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                  )}
                  {item.children && (
                    <ul className="absolute top-24 p-4 scale-0  transition-all duration-300 z-50  bg-white shadow-2xl group-hover:scale-100">
                      <li className="flex flex-col gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={`${child.href}`}
                            className="text-2xl font-bold transition-all duration-100 hover:underline hover:text-amber "
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
        <Button title="Login" />
      </div>
    </div>
  );
}
