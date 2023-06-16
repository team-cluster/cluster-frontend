"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  EmailInput,
  PasswordInput,
  NicknameInput,
  phoneNumberVerificationInput,
  TermsOfServiceCheckbox,
} from "./signupinput";

export default function SignupForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const methods = useForm({ mode: "all" });
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback(
    async (data) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("signupsubmit");
      data.captchaToken = token;
      await new Promise((r) => setTimeout(r, 1000));
      methods.reset();
      setSuccess(true);
      alert(JSON.stringify(data));
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
      </form>
    </FormProvider>
  );
}
