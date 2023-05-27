"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo/cluster-logo.png";
import logoLabel from "/public/logo/cluster-label.png";
import "./style.css";
import { usePathname } from "next/navigation";

const navRoutes = [
  { label: "컨텐츠", route: "/content" },
  { label: "정오표", route: "/correction" },
  { label: "배포", route: "/release" },
  { label: "칼럼", route: "/column" },
];

export default function NavbarList() {
  const pathname = usePathname();
  return (
    <div className="navbar-list">
      <Link href="/" className="logo">
        <Image
          src={logo}
          width={30}
          height={30}
          alt="clogo"
          className="logo-img"
        />
        <Image
          src={logoLabel}
          width={81}
          height={21}
          alt="clabel"
          className="logo-label"
        />
      </Link>
      {navRoutes.map(({ label, route }, i) => {
        return (
          <Link
            key={"navbar" + i}
            href={route}
            className={
              pathname === route ? "navbar-link-active" : "navbar-link"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
