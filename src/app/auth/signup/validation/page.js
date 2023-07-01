"use client";

import { gql, useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VALIDATE_MUTATION = gql`
  mutation Validation($email: String!, $verificationCode: String!) {
    verifyEmail(email: $email, verificationCode: $verificationCode) {
      __typename
    }
  }
`;

export default async function ValidationPage() {
  const searchParams = useSearchParams();
  const validationNumber = searchParams.get("verificationCode");
  const email = searchParams.get("email");

  const [resultmsg, setResultmsg] = useState("당신 뭔짓하는거야");

  const [mutation, validationInfo] = useMutation(VALIDATE_MUTATION);

  useEffect(() => {
    console.log("살릴 알 사와림");
    if (validationNumber && email) {
      if (validationInfo.error || !validationInfo || !validationInfo.data) {
        setResultmsg("이메일 인증하는데 오류가 발생했습니다.");
      } else {
        mutation({
          variables: {
            email: email,
            validationCode: validationNumber,
          },
        }).then((Info) => {
          if (Info.data.verifyEmail.__typename === "EmailVerificationSuccess") {
            setResultmsg("이메일 인증에 성공했습니다. 환영합니다!");
          } else {
            setResultmsg("이메일 인증을 실패했습니다.");
          }
        });
      }
    }
  }, [setResultmsg]);

  return (
    <div className="flex flex-col justify-center h-screen items-center font-bold text-3xl">
      {resultmsg}
    </div>
  );
}
