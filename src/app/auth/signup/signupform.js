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
  ) {
    register(
      name: $name
      email: $email
      password: $password
      passwordCheck: $passwordCheck
    ) {
      __typename
    }
  }
`;

export default function SignupForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const methods = useForm({ mode: "all" });
  const [success, setSuccess] = useState(false);
  const [registerMutation, registerInfo] = useMutation(REGISTER_MUTATION);

  const onSubmit = useCallback(
    async (inputdata, e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        alert("캡챠가 인증되지 않았습니다.");
        methods.reset();
        console.log("Execute recaptcha not yet available");
        return;
      }

      const registerData = (
        await registerMutation({
          variables: {
            name: inputdata.signupnickname,
            email: inputdata.signupemail,
            password: inputdata.signuppassword,
            passwordCheck: inputdata.signuppasswordconfirm,
          },
        })
      ).data;

      const registerError = registerInfo.error;

      if (
        registerError ||
        (registerData && registerData.register.__typename === "RegisterError")
      ) {
        alert("회원가입 하는데 오류가 발생했습니다.");
        methods.reset();
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterEmailDuplicatedeError"
      ) {
        alert("이미 등록된 이메일입니다.");
        methods.reset();
        return;
      }

      if (
        registerData &&
        registerData.register.__typename === "RegisterSuccess"
      ) {
        setSuccess(true);
        alert("해당 이메일로 인증 링크를 보냈습니다. 확인해주세요.");
        methods.reset();
        router.push("/");
        return;
      }

      const token = await executeRecaptcha("signupsubmit");
      inputdata.captchaToken = token;
      await new Promise((r) => setTimeout(r, 1000));
      methods.reset();
      alert(JSON.stringify(inputdata));
      return token;
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
        {}
      </form>
    </FormProvider>
  );
}
