"use client";

import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";

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
  const { client, loading, error, data } = useQuery(QUERY_USER);

  const onClick = useCallback(async () => {
    client.resetStore();
    setLoggedin(false);
  }, []);

  useEffect(() => {
    console.log(data);
    if (data) {
      if (data.user.__typename === "Anonymous") {
        setLoggedin(false);
      } else {
        setLoggedin(true);
      }
    }
  }, [data]);

  return (
    <div className="navbar-button-wrapper">
      {!loggedin ? (
        <Link href="/auth/login" className="navbar-button">
          로그인
        </Link>
      ) : (
        <button onClick={() => onClick} className="navbar-button">
          로그아웃
        </button>
      )}
    </div>
  );
}

function LoginCheck() {}
