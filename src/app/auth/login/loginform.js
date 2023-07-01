"use client";

import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";

import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Register(
    $username: String!
    $password: String!
    $recaptchaToken: String!
  ) {
    login(
      username: $username
      password: $password
      recaptchaToken: $recaptchaToken
    ) {
      __typename
    }
  }
`;

export function LoginForm() {
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = methods;
  const [mutation, loginInfo] = useMutation(LOGIN_MUTATION);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = useCallback(
    async (data, e) => {
      await e.preventDefault();

      if (!executeRecaptcha) {
        alert("캡챠가 인증되지 않았습니다.");
        methods.reset();
        console.log("Execute recaptcha not yet available");
        return;
      }

      const loginError = loginInfo.error;

      const loginData = (
        await mutation({
          variables: {
            username: data.email,
            password: data.password,
          },
        })
      ).data;

      if (
        loginError ||
        (loginData && loginData.login.__typename === "LoginFailed")
      ) {
        alert("존재하지 않는 이메일이거나 비밀번호가 틀렸습니다");
        methods.reset();
        return;
      }

      if (loginData && loginData.login.__typename === "InactiveUser") {
        alert("이메일 인증이 되지 않은 이메일입니다. 이메일을 확인해주세요.");
        methods.reset();
        return;
      }

      if (loginData && loginData.login.__typename === "LoginSuccess") {
        setSuccess(true);
        alert("로그인 성공!");
        methods.reset();
        router.push("/");
        return;
      }

      /*
      const token = await executeRecaptcha("signinsubmit");
      data.captchaToken = token;
      await new Promise((r) => setTimeout(r, 1000));
      //api 요청 후 검사하기
      setSuccess(true);
      alert(JSON.stringify(data));
      return token;*/
    },
    [executeRecaptcha, loginInfo]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="bg-gray-100 p-2 flex items-center mb-1">
        <FaRegEnvelope className="text-gray-400 m-2" />
        <input
          type="email"
          id="email"
          placeholder="이메일"
          aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "제대로 된 이메일을 입력해주세요.",
            },
          })}
          className="bg-gray-100 outline-none text-sm flex-1"
        />
      </div>
      {errors.email && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.email.message}
        </small>
      )}

      <div className="bg-gray-100 p-2 flex items-center">
        <MdLockOutline className="text-gray-400 m-2" />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
          className="bg-gray-100 outline-none text-sm flex-1"
        />
      </div>
      {errors.password && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.password.message}
        </small>
      )}

      <div className="flex mb-5 justify-between w-full ml-1 mr-1 mt-3">
        <label className="flex items-center text-xs">
          <input
            type="checkbox"
            id="remember"
            {...register("remember")}
            className="mr-1"
          />
          날 기억해줘!
        </label>
        <Link href="#" className="flex items-center text-xs">
          비밀번호를 까먹었어..
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="border-2 border-black rounded-xl px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white disabled:border-gray-200 disabled:text-white disabled:bg-gray-200"
      >
        로그인
      </button>
    </form>
  );
}
