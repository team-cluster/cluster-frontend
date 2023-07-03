"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo/cluster-logo.png";
import logoLabel from "/public/logo/cluster-label.png";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
const QUERY_USER = gql`
  query UserQuery {
    user {
      __typename
    }
  }
`;

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

  const [loggedin, setLoggedin] = useState(false);
  const { client, loading, error, data } = useQuery(QUERY_USER);
  const router = useRouter();

  const onClick = useCallback(async () => {
    await client.clearStore();
    setLoggedin(false);
    router.refresh();
  }, [data]);

  useEffect(() => {
    if (data) {
      if (data.user.__typename === "Anonymous") {
        setLoggedin(false);
      } else {
        setLoggedin(true);
      }
    }
  }, [data]);

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
          {loggedin ? (
            <Link href="/auth/login">로그인</Link>
          ) : (
            <button onClick={onClick}>로그아웃</button>
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
