"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { down } from "@/assets/icons";
import Image from "next/image";
import { Button } from ".";

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
    title: "security traning course",
    href: "/securityTraning",
    icon: down,
  },
  {
    title: "first aid course",
    href: "/firstAid",
    icon: down,
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
    <div className="w-full h-20 bg-midnight flex items-center justify-center">
      <div className="container flex-between text-white">
        <div>Logo</div>
        <nav>
          <ul className="flex gap-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.title} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className={`text-lg capitalize ${
                      isActive ? "text-warning" : "text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.icon && (
                    <Image src={item.icon} alt="icon" width={20} height={20} />
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
