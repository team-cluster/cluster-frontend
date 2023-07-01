"use client";

import "./style.css";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import massiveche1 from "/public/page/massive_che1.png";
import massivephy1 from "/public/page/massive_phy1.png";
import { HiExternalLink } from "react-icons/hi";

export default function Massive() {
  return (
    <div className="flex w-full flex-wrap float-shadow rounded-xl">
      <MassiveContentWrapper />
    </div>
  );
}

function PurchaseLink() {
  return (
    <div className="flex m-3">
      <a
        href="https://atom.ac/books/11018"
        className="text-lg underline font-bold"
        target="_blank"
      >
        구매하기
      </a>
      <HiExternalLink />
    </div>
  );
}

function MassiveContentWrapper() {
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
    <span className="m-4 w-20 h-6 flex justify-center items-center">
      {opened ? (
        <BsChevronCompactUp size="40" />
      ) : (
        <BsChevronCompactDown size="40" />
      )}
    </span>
  );
}

function HoverBeforeTitle({ opened }) {
  const MassiveCopy = {
    title: "MASSIVE",
    subtitle: '"많은 양의 문제와 상황을 경험해 보자!"',
    descriptions: "양(Quantity)과 질(Quality)을 N제 하나로.",
  };
  return (
    <div
      className="h-full flex flex-col justify-center items-center content-shrink"
      style={opened ? { height: "0px" } : { height: "240px" }}
    >
      <div className="pt-12 upper-subtitle-wrapper">
        <h2 className="md:text-3xl text-xl font-semibold break-keep text-gray-500">
          {MassiveCopy.subtitle}
        </h2>
      </div>
      <div className="main-title-wrapper">
        <h1 className="md:text-8xl text-5xl font-bold title-gradient-massive">
          {MassiveCopy.title}
        </h1>
      </div>
      <div className="lower-subtitle-wrapper">
        <h3 className="md:text-xl text-lg font-semibold break-keep">
          {MassiveCopy.descriptions}
        </h3>
      </div>
      <PurchaseLink />
    </div>
  );
}

function HoverAfterContents() {
  return (
    <div className="w-full pb-10 px-12">
      <h1 className="md:text-5xl w-fit text-3xl text-black font-extrabold mb-5">
        Massive N제 시리즈
      </h1>

      <div className="flex md:flex-row flex-col h-full justify-center items-center">
        <DetailedFeatures />
        <DetailedFeatures2 />
      </div>

      <div className="w-full h-0.5 bg-gray-200 mt-4 mb-6"></div>
      <KiceMechanics />
      <div className="w-full h-0.5 bg-gray-200 mt-4 mb-6"></div>
      <TurningPoint />
    </div>
  );
}

function DetailedFeatures() {
  return (
    <div className="m-3 py-10 flex flex-col w-full justify-center items-center gap-4 bg-gray-100 rounded-3xl">
      <h1 className="md:text-4xl text-2xl text-rose-600 font-bold">
        Quantity.
      </h1>
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          Massive는 <span className="font-extrabold">압도적인 양</span>을
          자랑합니다.
        </h3>
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          매일 진행되는 미니 모의고사와 테마별 N제 등{" "}
        </h3>
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          다양한 형태의 N제를 맛보실 수 있습니다.
        </h3>
      </div>
    </div>
  );
}

function DetailedFeatures2() {
  return (
    <div className="m-3 py-10 flex flex-col w-full justify-center items-center gap-4 bg-gray-100 rounded-3xl">
      <h1 className="md:text-4xl text-2xl text-rose-600 font-bold">Quality.</h1>
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          <span className="font-extrabold">유명 강사 출제진들</span>에 의해
          보장된 퀄리티.
        </h3>
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          최고급 문제들은{" "}
          <span className="font-extrabold">클러스터의 출제진의 손</span>에서
          나옵니다.
        </h3>
        <h3 className="md:text-xl text-base text-black font-semibold break-keep">
          그들이 준비하는 최고의 수능 대비 문제를 즐겨 보십시오.
        </h3>
      </div>
    </div>
  );
}

function KiceMechanics() {
  return (
    <div className="px-12 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <h1 className="md:text-start text-center my-5 md:text-3xl text-xl text-red-700 font-bold">
          [물리학 I] <br className="md:hidden" />
          KICE MECHANICS
        </h1>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          최적의 역학 N제.
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          총 260문제로 구성.
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          수능에 출제될 수 있는{" "}
          <span className="font-extrabold">최적의 물리학 I 역학 N제.</span>
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          킬러/준킬러급 어려운 문제 풀이의 시간 단축을 위한 유일한 N제.
        </h3>
      </div>
      <div className="flex shrink-0 md:w-56 md:h-80 h-74 w-44 md:ml-auto m-3">
        <Image
          src={massivephy1}
          alt="m4"
          width={225}
          height={325}
          className="float-shadow"
        />
      </div>
    </div>
  );
}

function TurningPoint() {
  return (
    <div className="px-12 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <h1 className="md:text-start text-center md:text-3xl text-xl text-red-700 font-bold my-5">
          [화학 I] <br className="md:hidden" />
          TURNING POINT
        </h1>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          준킬러, 킬러 집중 공략 N제.
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          준킬러 &amp; 킬러 MINI 모의 8제로 20일차 구성
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          최신 트렌드의 준킬러와 킬러문항을 통하여
          <span className="font-extrabold">
            {" "}
            의심을 확심으로 바꿔주는 문제집
          </span>
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          킬러/준킬러급 어려운 문제 풀이의 시간 단축을 위한 유일한 N제.
        </h3>
      </div>
      <div className="flex shrink-0 md:w-56 md:h-80 h-74 w-44 md:ml-auto m-3">
        <Image
          src={massiveche1}
          alt="m5"
          width={225}
          height={325}
          className="float-shadow"
        />
      </div>
    </div>
  );
}
