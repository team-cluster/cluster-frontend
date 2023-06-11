"use client";

import {
  SignupInput,
  PasswordInput,
  PhoneNumVerificationInput,
} from "./signupinput";

export default function SingupInputSection() {
  return (
    <div className="flex flex-col justify-center mb-4 w-1/2 min-w-fit">
      <SignupInput
        title="이메일 주소"
        label="이메일 주소 잘못입력하면 큰일나니까 오타 주의해줘요"
        type="email"
        id="signup-email"
        placeholder="email@example.com 형식으로 써주세요"
        condcss="invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />

      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-1 mb-3"></div>

      <PasswordInput
        title="비밀번호"
        label="8~16자의 비밀번호를 영문, 숫자, 특수문자를 포함해서 입력해주세요"
        type="password"
        id="signup-password"
        placeholder="비밀번호를 한번 더 입력해주세요"
      />
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-1 mb-3"></div>

      <SignupInput
        title="이름(닉네임)"
        label="한글은 10자까지, 영어는 20자까지 가능합니다."
        id="signup-nickname"
        type="text"
        placeholder="이름을 입력해주세요"
      />
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-1 mb-3"></div>
      <PhoneNumVerificationInput />
    </div>
  );
}
