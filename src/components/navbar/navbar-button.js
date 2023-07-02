"use client";

import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const QUERY_USER = gql`
  query UserQuery {
    user {
      __typename
    }
  }
`;

import Link from "next/link";
import "./style.css";

export default function NavbarButton() {
  const [loggedin, setLoggedin] = useState("로그인");
  const { loading, error, data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data) {
      if (data.user.__typename === "Anonymous") {
        setLoggedin("로그인");
      } else {
        setLoggedin(data.user.name ?? "로그인됨");
      }
    }
  }, [data, loggedin]);

  return (
    <div className="navbar-button-wrapper">
      <Link href="/auth/login" className="navbar-button">
        {loggedin}
      </Link>
    </div>
  );
}

function LoginCheck() {}
