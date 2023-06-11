"use client";

import { useForm, FormProvider } from "react-hook-form";

import { useState } from "react";
import {
  EmailInput,
  PasswordInput,
  NicknameInput,
  phoneNumberVerificationInput,
  TermsOfServiceCheckbox,
} from "./signupinput";

export default function SignupForm() {
  const methods = useForm({ mode: "all" });
  const [success, setSuccess] = useState(false);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1000));
          methods.reset();
          setSuccess(true);
          alert(JSON.stringify(data));
        })}
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
        <ReCAPTCHA />

        <button
          type="submit"
          className="border-2 border-black rounded-xl px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white"
        >
          회원가입
        </button>
      </form>
    </FormProvider>
  );
}

function ReCAPTCHA() {
  return <div className="border-2 border-black mb-4">대충 캡챠</div>;
}
