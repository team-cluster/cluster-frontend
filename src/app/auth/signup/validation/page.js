"use client";

import { gql, useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";

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

  const [mutation, validationInfo] = useMutation(VALIDATE_MUTATION);

  let resultmsg = "당신 뭔짓하는거야";

  if (validationNumber && email) {
    if (validationInfo.error || !validationInfo || !validationInfo.data) {
      resultmsg = "이메일 인증하는데 오류가 발생했습니다.";
      return;
    } else {
      const validationData = (
        await mutation({
          variables: {
            email: email,
            validationCode: validationNumber,
          },
        })
      ).data;

      if (
        validationData.verifyEmail.__typename === "EmailVerificationSuccess"
      ) {
        resultmsg = "이메일 인증에 성공했습니다. 환영합니다!";
      } else {
        resultmsg = "이메일 인증을 실패했습니다.";
      }
    }
  }

  return (
    <div className="h-screen items-center font-bold text-xl">{resultmsg}</div>
  );
}
