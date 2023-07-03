"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  EmailInput,
  PasswordInput,
  NicknameInput,
  phoneNumberVerificationInput,
  TermsOfServiceCheckbox,
} from "./signupinput";
import { gql, useMutation } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation Register(
    $name: String!
    $email: String!
    $password: String!
    $passwordCheck: String!
    $recaptchaToken: String!
  ) {
    register(
      name: $name
      email: $email
      password: $password
      passwordCheck: $passwordCheck
      recaptchaToken: $recaptchaToken
    ) {
      __typename
    }
  }
`;

export default function SignupForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const methods = useForm({ mode: "all" });

  const [rerror, setRerror] = useState(false);
  const [duperror, setDuperror] = useState(false);
  const [nickduperror, setNickduperror] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaerror, setCaptchaerror] = useState(false);

  const [registerMutation, registerInfo] = useMutation(REGISTER_MUTATION);

  const onSubmit = useCallback(
    async (inputdata, e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        alert("캡챠가 인증되지 않았습니다.");
        methods.reset();
        return;
      }

      const token = await executeRecaptcha("signupsubmit");

      const registerData = (
        await registerMutation({
          variables: {
            name: inputdata.signupnickname,
            email: inputdata.signupemail,
            password: inputdata.signuppassword,
            passwordCheck: inputdata.signuppasswordconfirm,
            recaptchaToken: token,
          },
        })
      ).data;

      const registerError = registerInfo.error;

      if (
        registerError ||
        (registerData && registerData.register.__typename === "RegisterError")
      ) {
        setRerror(true);
        setDuperror(false);
        setNickduperror(false);
        setSuccess(false);
        setCaptchaerror(false);
        methods.reset();
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterEmailDuplicatedError"
      ) {
        setRerror(false);
        setDuperror(true);
        setNickduperror(false);
        setSuccess(false);
        setCaptchaerror(false);
        methods.reset();
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterNicknameDuplicatedError"
      ) {
        setRerror(false);
        setDuperror(false);
        setNickduperror(true);
        setSuccess(false);
        setCaptchaerror(false);
        methods.reset();
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterSuccess"
      ) {
        setRerror(false);
        setDuperror(false);
        setNickduperror(false);
        setSuccess(true);
        setCaptchaerror(false);
        methods.reset();
        setTimeout(() => router.push("/"), 10e3);
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterRecaptchaFailed"
      ) {
        setRerror(false);
        setDuperror(false);
        setNickduperror(false);
        setSuccess(false);
        setCaptchaerror(true);
      }

      alert("알 수 없는 오류가 발생했습니다.");

      methods.reset();
    },
    [executeRecaptcha]
  );

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
        className="flex flex-col justify-center items-center w-1/2 min-w-fit"
      >
        <EmailInput />
        <div className="w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-4 mb-6"></div>
        <PasswordInput />
        <div className="w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-4 mb-6"></div>
        <NicknameInput />
        <TermsOfServiceCheckbox />

        <button
          type="submit"
          disabled={methods.formState.isSubmitting}
          className="border-2 border-black rounded-xl px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white disabled:border-gray-200 disabled:text-white disabled:bg-gray-200"
        >
          가입할래요
        </button>
        <div className="w-full flex justify-center items-center">
          {rerror && (
            <small role="alert" className="text-red-500 flex mb-2 mt-1">
              회원가입 하는데 오류가 발생했습니다. 나중에 다시 시도해주세요.
            </small>
          )}
          {duperror && (
            <small role="alert" className="text-red-500 flex mb-2 mt-1">
              이미 가입된 이메일이거나 이메일 인증이 만료된 계정입니다.
              <br />
              이메일 인증 링크를 다시 한번 전송했으니 메일 확인 바랍니다.
            </small>
          )}
          {nickduperror && (
            <small role="alert" className="text-red-500 flex mb-2 mt-1">
              이미 존재하는 닉네임입니다.
            </small>
          )}
          {captchaerror && (
            <small role="alert" className="text-red-500 flex mb-2 mt-1">
              너 사람 아니지
            </small>
          )}
          {success && (
            <small role="alert" className="text-green-500 flex mb-2 mt-1">
              회원가입 요청에 성공했습니다. 이메일로 인증 링크를 보냈으니 인증
              바랍니다.
            </small>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
