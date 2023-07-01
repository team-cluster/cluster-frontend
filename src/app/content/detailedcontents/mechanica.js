"use client";

import "./style.css";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import mechanica1 from "/public/page/mechanica_1.png";
import mechanica2 from "/public/page/mechanica_2.png";
import mechanica3 from "/public/page/mechanica_3.png";
import { HiExternalLink } from "react-icons/hi";

export default function Mechanica() {
  return (
    <div className="flex w-full flex-wrap float-shadow rounded-xl">
      <MechanicaContentWrapper />
    </div>
  );
}

function PurchaseLink() {
  return (
    <div className="flex m-3">
      <a
        href="https://atom.ac/books/11271"
        className="text-lg underline font-bold"
        target="_blank"
      >
        구매하기
      </a>
      <HiExternalLink />
    </div>
  );
}

function MechanicaContentWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl">
      <div className="flex flex-col justify-center items-center">
        <HoverBeforeTitle opened={open} />
        <button onClick={() => setOpen(!open)}>
          <MoreButton opened={open} />
        </button>
        <DetailedExplaination opened={open} />
      </div>
    </div>
  );
}

function DetailedExplaination({ opened }) {
  const contentRef = useRef();
  useEffect(() => {
    console.log(contentRef);
  });

  return (
    <div
      className="content-hidden"
      ref={contentRef}
      style={
        opened
          ? { height: contentRef.current.scrollHeight + "px" }
          : { height: "0px" }
      }
    >
      <HoverAfterContents />
    </div>
  );
}

function MoreButton({ opened }) {
  return (
    <span className="m-4 w-20 h-10 flex justify-center items-center">
      {opened ? (
        <BsChevronCompactUp size="40" />
      ) : (
        <BsChevronCompactDown size="40" />
      )}
    </span>
  );
}

function HoverBeforeTitle({ opened }) {
  const MechanicaCopy = {
    title: "MECHANICA",
    subtitle: "전설의 [물리학1] 개념서 시리즈.",
    descriptions: [
      "문제 풀이의 완전함.",
      "기초 개념부터 기출문제까지 수능 문제풀이의 완전함을 추구하는 독학서.",
    ],
  };
  return (
    <div
      className="flex flex-col justify-center items-center content-shrink"
      style={opened ? { height: "0px" } : { height: "240px" }}
    >
      <div className="pt-12 upper-subtitle-wrapper">
        <h2 className="md:text-3xl text-xl font-semibold break-keep text-gray-500">
          {MechanicaCopy.subtitle}
        </h2>
      </div>
      <div className="main-title-wrapper">
        <h1 className="md:text-8xl text-5xl font-bold title-gradient-mechanica">
          {MechanicaCopy.title}
        </h1>
      </div>
      <div className="lower-subtitle-wrapper">
        <h3 className="md:text-xl text-lg font-semibold break-keep">
          {MechanicaCopy.descriptions[0]}{" "}
          <span className="hidden md:contents">
            {MechanicaCopy.descriptions[1]}
          </span>
        </h3>
      </div>
      <PurchaseLink />
    </div>
  );
}

function HoverAfterContents() {
  return (
    <div className="w-full md:pb-12 md:px-12 pb-6 px-3 md:items-start items-center">
      <h1 className="md:px-12 px-6 md:text-5xl md:w-fit w-full text-3xl text-black font-extrabold mb-5 break-keep text-center">
        MECHANICA 물리학 I
      </h1>
      <TableContent />
    </div>
  );
}

function TableContent() {
  return (
    <div className="md:px-12 md:py-6 py-3 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h1 className="md:text-start text-center md:text-2xl text-xl text-indigo-600 font-bold my-6">
            새롭게 들어간 [체화편].
          </h1>
          <h3 className="md:text-start text-center mb-3 md:text-xl text-lg text-black font-semibold break-keep">
            <span className="font-extrabold">
              “빠른 개념 정리 → Workbook → 오늘의 심화 문제”
            </span>
            <br />
            구성의 강력한 3-Step으로 빈틈없는 개념 체화.
          </h3>
        </div>
        <div className="">
          <h1 className="md:text-start text-center md:text-2xl text-xl text-pink-600 font-bold my-6">
            개념편과 기출편의 분리.
          </h1>
          <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
            평가원에 나왔던 "활용 불가능한 문제"를
            <br className="md:hidden" /> "현 교육과정에 맞게 변형"해서 수록,
          </h3>
          <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
            평가원 기출문제의 본연의 맛을 느낄 수 있게끔,
            <br className="md:hidden" /> 출제 의도를 분명히 반영해 교정했습니다.
          </h3>
          <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
            사실상 이 문제집을 풀면 <br className="md:hidden" />
            <span className="font-extrabold">
              모든 평가원 문제들을 푼 것과 다름이 없습니다.
            </span>
          </h3>
        </div>
      </div>
      <div className="flex shrink-0 md:w-56 md:h-80 w-44 h-72 md:m-4 mt-10">
        <MechanicaImageFloat />
      </div>
    </div>
  );
}

function MechanicaImageFloat() {
  return (
    <div className="w-full relative">
      <Image
        src={mechanica3}
        alt="m3"
        width={225}
        height={325}
        className="float-shadow absolute -left-10 -top-10"
      />
      <Image
        src={mechanica2}
        alt="m2"
        width={225}
        height={325}
        className="float-shadow absolute left-0 top-0"
      />
      <Image
        src={mechanica1}
        alt="m1"
        width={225}
        height={325}
        className="float-shadow absolute left-10 top-10"
      />
    </div>
  );
}
