"use client";

import { gql, useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Validated validationNumber={validationNumber} email={email} />
    </div>
  );
}

function Validated({ validationNumber, email }) {
  const [resultmsg, setResultmsg] = useState("이메일 확인 중..");
  const [mutation, validationInfo] = useMutation(VALIDATE_MUTATION);
  const router = useRouter();

  useEffect(() => {
    console.log(validationInfo);
    if (validationNumber && email) {
      if (validationInfo.error || !validationInfo) {
        setResultmsg("이메일 인증하는데 오류가 발생했습니다.");
        setTimeout(() => {
          router.push("/");
        }, 7e3);
      } else {
        mutation({
          variables: {
            email: email,
            verificationCode: validationNumber,
          },
        }).then((Info) => {
          console.log(Info.data);
          if (Info.data.verifyEmail.__typename === "EmailVerificationSuccess") {
            setResultmsg("이메일 인증에 성공했습니다. 환영합니다!");
          } else {
            setResultmsg("이메일 인증을 실패했습니다.");
          }
          setTimeout(() => {
            router.push("/");
          }, 5e3);
        });
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">[Clusterkice.kr]</h1>
      <h1 className="font-bold text-3xl">{resultmsg}</h1>
      <h1 className="font-bold text-2xl">잠시 뒤 홈으로 돌아갑니다..</h1>
    </div>
  );
}
