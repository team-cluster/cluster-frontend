"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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
  const [loggedin, setLoggedin] = useState(false);
  const { loading, error, data } = useQuery(QUERY_USER);

  console.log(data);

  return (
    <div className="navbar-button-wrapper">
      <Link href="/auth/login" className="navbar-button">
        로그인
      </Link>
    </div>
  );
}

function LoginCheck() {}
