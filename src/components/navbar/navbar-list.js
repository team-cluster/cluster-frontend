"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo/cluster-logo.png";
import logoLabel from "/public/logo/cluster-label.png";
import "./style.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navRoutes = [
  { label: "컨텐츠", route: "/content" },
  { label: "정오표", route: "/errata" },
  { label: "배포", route: "/release" },
  { label: "팀원모집", route: "/recruit" },
];

export default function NavbarList() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine =
    "h-1 w-6 my-px rounded-full bg-black transition ease transform duration-300";
  const pathname = usePathname();

  const isLogined = true;

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

      <div className="navbar-mobile-buttons">
        <div className="navbar-userinfo">
          {isLogined ? (
            <Link href="/member/login">로그인</Link>
          ) : (
            <Link href="/member">마이페이지</Link>
          )}
        </div>
        <div className="navham">
          <button
            className="flex flex-col h-8 w-8 justify-center items-center group cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      <div className={isOpen ? "navbar-list-mobile" : "navbar-list-group"}>
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
    </div>
  );
}
