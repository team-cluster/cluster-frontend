"use client";

import { LoginForm } from "./loginform";
import "./style.css";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";
const QUERY_USER = gql`
  query UserQuery {
    user {
      __typename
    }
  }
`;

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Login() {
  return <LoginPage />;
}

function LoginPage() {
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
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-10 mb-10">
      <div className="bg-white rouded-2xl shadow-2xl justify-center flex w-96 max-w-4xl">
        <div className="p-5">
          <div className="p-10">
            <h2 className="text-2xl font-bold text-black">
              {loggedin ? "다른 계정으로 로그인" : "로그인"}
            </h2>
          </div>
          <div className="border-2 w-10 border-black inline-block mb-2"></div>

          <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_WEB_KEY}>
            <LoginForm />
          </GoogleReCaptchaProvider>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center w-96 max-w-4xl shadow-2xl">
        <div className="p-5">
          <Link
            href="/auth/signup"
            className="border-2 border-white text-white rounded-xl px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
