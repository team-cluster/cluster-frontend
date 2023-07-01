"use client";

import SignupForm from "./signupform";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Register() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col w-full">
      <div className="mt-4 mb-4">
        <div className="text-4xl font-extrabold">회원가입</div>
      </div>
      <div className="border-2 border-black w-12 inline-block mb-8"></div>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_WEB_KEY}>
        <SignupForm />
      </GoogleReCaptchaProvider>
    </div>
  );
}
