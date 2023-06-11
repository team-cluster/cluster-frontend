"use client";

import { useFormContext } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";

import {
  email_validation,
  password_validation,
  nickname_validation,
  phonenum_validation,
} from "./validation.js";

import Link from "next/link";

const SignupStyle = {
  wrapper: "flex flex-col w-full",
  label: "text-xl font-semibold mb-2",
  description: "text-sm font-normal mb-2 flex-col flex flex-wrap",
  input:
    "mb-2 mt-1 block w-full px-3 py-2 bg-grey-100 border border-slate-300 rounded-md text-sm shadsow-sm placeholder-slate-400 focus:output-none, focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
};

function EmailInput() {
  const { label, description, placeholder, type } = email_validation;
  const id = "signupemail";
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  return (
    <div className={SignupStyle.wrapper}>
      <label htmlFor={id} className={SignupStyle.label}>
        {label}
      </label>
      <p className={SignupStyle.description}>{description}</p>
      {errors.signupemail && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.signupemail.message}
        </small>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={SignupStyle.input}
        {...register(id, {
          required: "이메일은 필수 입력 항목입니다.",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "제대로 된 이메일을 입력해주세요.",
          },
        })}
      />
      {!errors.signupemail && getValues().signupemail && (
        <small className="text-green-500 flex justify-start w-full mb-2 items-center">
          <BsCheckLg />
          <span className="ml-1">이 이메일로 가입됩니다.</span>
        </small>
      )}
    </div>
  );
}

function PasswordInput() {
  const { label, description, placeholder, type } = password_validation;
  const id = "signuppassword";
  const id_check = "signuppasswordconfirm";
  const confirm_placeholder = "비밀번호를 다시 입력해주세요";
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext({ mode: "all" });

  return (
    <div className={SignupStyle.wrapper}>
      <label htmlFor={id} className={SignupStyle.label}>
        {label}
      </label>
      {description.map((v, i) => {
        return (
          <p key={id + i} className={SignupStyle.description}>
            {v}
          </p>
        );
      })}
      {errors.signuppassword && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.signuppassword.message}
        </small>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={SignupStyle.input}
        {...register(id, {
          required: "비밀번호는 필수 입력 항목입니다.",
          pattern: {
            value: /^(.*)$/,
            message: "비밀번호 형식에 맞지 않습니다.",
          },
          minLength: {
            value: 8,
            message: "최소 8자 이상의 비밀번호를 입력해주세요.",
          },
          maxLength: {
            value: 24,
            message: "비밀번호는 최대 24자까지 입력할 수 있습니다.",
          },
        })}
      />
      {errors.signuppasswordconfirm && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.signuppasswordconfirm.message}
        </small>
      )}
      <input
        id={id_check}
        type={type}
        placeholder={confirm_placeholder}
        className={SignupStyle.input}
        {...register(id_check, {
          required: "비밀번호를 확인해주세요.",
          validate: {
            matchesPreviousPassword: (value) => {
              const { signuppassword } = getValues();
              return (
                signuppassword === value || "비밀번호가 일치하지 않습니다."
              );
            },
          },
        })}
      />
      {!errors.signuppassword &&
        !errors.signuppasswordconfirm &&
        getValues().signuppassword &&
        getValues().signuppasswordconfirm && (
          <small className="text-green-500 flex justify-start w-full mb-2 items-center">
            <BsCheckLg />
            <span className="ml-1">이 비밀번호로 가입됩니다.</span>
          </small>
        )}
    </div>
  );
}

function NicknameInput() {
  const { label, description, placeholder, type } = nickname_validation;
  const id = "signupnickname";
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext({ mode: "all" });

  return (
    <div className={SignupStyle.wrapper}>
      <label htmlFor={id} className={SignupStyle.label}>
        {label}
      </label>
      {description.map((v, i) => {
        return (
          <p key={id + i} className={SignupStyle.description}>
            {v}
          </p>
        );
      })}
      {errors.signupnickname && (
        <small
          role="alert"
          className="text-red-500 flex justify-start w-full mb-2 mt-1"
        >
          {errors.signupnickname.message}
        </small>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={SignupStyle.input}
        {...register(id, {
          required: "이름은 필수 입력 항목입니다.",
          pattern: {
            value: /^(.*)$/,
            message: "이름은 영문/한글로만 입력할 수 있습니다.",
          },
          minLength: {
            value: 2,
            message: "이름이 너무 짧습니다.",
          },
          maxLength: {
            value: 12,
            message: "이름이 너무 깁니다.",
          },
        })}
      />
      {!errors.signupnickname && getValues().signupnickname && (
        <small className="text-green-500 flex justify-start w-full mb-2 items-center">
          <BsCheckLg />
          <span className="ml-1">멋진 이름입니다.</span>
        </small>
      )}
    </div>
  );
}

//지금 당장은 안하고 나중에 구현ㄱㄱ
function PhoneNumberVerificationInput() {}

function TermsOfServiceCheckbox() {
  const { register } = useFormContext();
  return (
    <label className="flex items-center text-m mt-5 mb-5">
      <input
        type="checkbox"
        name="toecheck"
        className="mr-1"
        {...register("toecheck")}
      />
      <Link href="#" className="font-bold underline mr-1">
        이용약관
      </Link>
      및
      <Link href="#" className="font-bold underline ml-1">
        개인정보처리방침
      </Link>
      에 동의합니다.
    </label>
  );
}

export {
  EmailInput,
  PasswordInput,
  NicknameInput,
  PhoneNumberVerificationInput,
  TermsOfServiceCheckbox,
};
