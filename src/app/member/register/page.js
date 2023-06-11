import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import SignupForm from "./signupform";

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/;

export default function Register() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col w-full">
      <div className="mt-4 mb-4">
        <div className="text-4xl font-extrabold">회원가입</div>
      </div>
      <div className="border-2 border-black w-12 inline-block mb-8"></div>
      <SignupForm />
    </div>
  );
}
