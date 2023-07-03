"use client";

import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

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
    <div className="navbar-button-wrapper">
      <Link href="/auth/login" className="navbar-button">
        {!loggedin ? "로그인" : "로그인됨"}
      </Link>
    </div>
  );
}

function LoginCheck() {}
