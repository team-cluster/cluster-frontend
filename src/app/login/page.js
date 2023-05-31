import LoginInput from "./loginInput";
import LoginTitle from "./title";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import "./style.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-10 mb-10">
      <div className="bg-white rouded-2xl shadow-2xl flex w-4xl max-w-4xl">
        <div className="p-5">
          <div className="p-10">
            <h2 className="text-3xl font-bold text-black">로그인</h2>
          </div>
          <div className="border-2 w-10 border-black inline-block mb-2"></div>
          <div className="flex justify-center my-2 ">
            <Link
              href="#"
              className="border-2 border-black rounded-full px-5 py-2 flex justify-center items-center flex-row font-semibold hover:bg-black hover:text-white"
            >
              <FcGoogle className="text-m" />
              <h4 className="text-m ml-2">구글로 로그인하기</h4>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 flex items-center mb-3">
              <FaRegEnvelope className="text-gray-400 m-2" />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 flex items-center mb-3">
              <MdLockOutline className="text-gray-400 m-2" />
              <input
                type="password"
                name="Password"
                placeholder="비밀번호"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
            <div className="flex mb-5 justify-between w-4/3">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" />날
                기억해줘!
              </label>
              <Link href="#" className="flex items-center text-xs">
                비밀번호를 까먹었어..
              </Link>
            </div>
          </div>
          <a
            href="#"
            className="border-2 border-black rounded-xl px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white"
          >
            로그인
          </a>
        </div>
      </div>
    </div>
  );
}
