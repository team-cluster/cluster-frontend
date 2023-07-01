"use client";

import "./style.css";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import mockimage1 from "/public/page/clmock_1.png";
import mockimage2 from "/public/page/clmock_2.png";
import mockimage3 from "/public/page/clmock_3.png";

import TextTransition, { presets } from "react-text-transition";
import { HiExternalLink } from "react-icons/hi";

export default function ClusterMock() {
  return (
    <div className="flex w-full flex-wrap float-shadow rounded-xl">
      <ClusterMockContentWrapper />
    </div>
  );
}

function PurchaseLink() {
  return (
    <div className="flex m-3">
      <a
        href="https://atom.ac/books/11108"
        className="text-lg underline font-bold"
        target="_blank"
      >
        구매하기
      </a>
      <HiExternalLink />
    </div>
  );
}

function ClusterMockContentWrapper() {
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
      <HoverAfterContents opened={opened} />
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
  const ClusterMockSeriesCopy = {
    title: "CLUSTER 모의고사",
    subtitle: "업계 최고의 출제진이 직접 출제한 모의고사",
    descriptions: "클러스터팀 최고의 과탐 모의고사.",
  };
  return (
    <div
      className="flex flex-col justify-center items-center content-shrink"
      style={opened ? { height: "0px" } : { height: "240px" }}
    >
      <div className="pt-12 upper-subtitle-wrapper">
        <h2 className="md:text-3xl text-lg font-semibold break-keep text-gray-500">
          {ClusterMockSeriesCopy.subtitle}
        </h2>
      </div>
      <div className="main-title-wrapper">
        <h1 className="md:text-8xl text-4xl font-extrabold title-gradient-clustermock">
          {ClusterMockSeriesCopy.title}
        </h1>
      </div>
      <div className="lower-subtitle-wrapper">
        <h3 className="md:text-xl text-lg font-semibold break-keep">
          {ClusterMockSeriesCopy.descriptions}
        </h3>
      </div>
      <PurchaseLink />
    </div>
  );
}

function HoverAfterContents({ opened }) {
  return (
    <div className="w-full md:pb-12 md:px-12 pb-6 px-3 md:items-start items-center">
      <h1 className="md:px-12 px-6 md:text-5xl md:w-fit w-full text-3xl text-black font-extrabold mb-5 break-keep text-center">
        Cluster 모의고사 시리즈는.
      </h1>

      <div className="flex flex-col h-full justify-center items-center m-5 md:m-10">
        <FeaturesRollup opened={opened} />
      </div>
      <div className="flex flex-col h-full justify-center items-center">
        <EmphasizedTitle />
      </div>

      <div className="w-full h-0.5 bg-gray-200 mt-6 mb-6"></div>
      <DetailedFeature1 />
      <div className="w-full h-0.5 bg-gray-200 mt-6 mb-6"></div>
      <DetailedFeature2 />
      <div className="w-full h-0.5 bg-gray-200 mt-6 mb-6"></div>
      <DetailedFeature3 />
      <div className="md:mb-24 m-6 flex flex-col h-full justify-center items-center">
        <MockImagesforMobile />
      </div>
      <div className="w-full h-0.5 mb-12"></div>
    </div>
  );
}

function MockImagesforMobile() {
  return (
    <div className="flex shrink-0 md:w-1/3 md:h-96 w-44 h-72 md:m-4 md:pt-0 pt-12">
      <div className="w-full relative">
        <Image
          src={mockimage3}
          alt="m1"
          width={225}
          height={325}
          className="float-shadow absolute md:left-44 md:top-0 left-10 top-10 "
        />
        <Image
          src={mockimage2}
          alt="m2"
          width={225}
          height={325}
          className="float-shadow absolute md:left-0 md:top-0 left-0 top-0"
        />
        <Image
          src={mockimage1}
          alt="m3"
          width={225}
          height={325}
          className="float-shadow absolute md:-left-40 md:top-0 -left-10 -top-10"
        />
      </div>
    </div>
  );
}

function FeaturesRollup({ opened }) {
  const [index, setIndex] = useState(0);

  const rolluplist = [
    ["유명 강사의 단독 출제진", "이 만든 모의고사"],
    ["출제 경력 7년차 출제진", "의 모의고사"],
    ["다양한 스펙트럼의 난이도", "로 이루어진 모의고사"],
    ["최근 경양성과 모든 상황", "을 대비한 모의고사"],
    ["시중에 나오는 최대 다수 출판", "의 모의고사"],
  ];
  let intervalId;

  useEffect(() => {
    if (opened) {
      intervalId = setInterval(() => setIndex((idx) => idx + 1), 2e3);
    }
    return () => clearInterval(intervalId);
  }, [opened]);

  return (
    <div className="flex h-full justify-center items-center border-4 border-black md:p-10 md:my-24 my-12 p-5">
      <div className="flex flex-col justify-center items-end">
        <h1 className="md:text-4xl text-xl font-bold break-keep text-end text-gray-400">
          <TextTransition springConfig={presets.gentle} inline={true}>
            {rolluplist[(index + 0) % rolluplist.length][0]}
          </TextTransition>
        </h1>
        <h1 className="md:text-4xl text-xl font-bold break-keep text-end text-rose-600">
          <TextTransition springConfig={presets.gentle} inline={true}>
            {rolluplist[(index + 1) % rolluplist.length][0]}
          </TextTransition>
        </h1>
        <h1 className="md:text-4xl text-xl font-bold break-keep text-end text-gray-400">
          <TextTransition springConfig={presets.gentle} inline={true}>
            {rolluplist[(index + 2) % rolluplist.length][0]}
          </TextTransition>
        </h1>
      </div>{" "}
      <div className="flex flex-col justify-center items-start">
        <h1 className="md:text-4xl text-xl font-bold break-keep text-end text-black">
          <TextTransition springConfig={presets.gentle} inline={true}>
            {rolluplist[(index + 1) % rolluplist.length][1]}
          </TextTransition>
        </h1>
      </div>
    </div>
  );
}

function EmphasizedTitle() {
  return (
    <div className="m-3 py-10 flex flex-col w-full justify-center items-center gap-4 bg-gray-100 rounded-3xl">
      <h1 className="md:text-4xl text-xl text-gray-700 font-bold">
        이 모든 것을 만족시키는 모의고사는 단 하나.
      </h1>
      <h1 className="md:text-6xl text-4xl text-black font-bold text-center">
        <span className="title-gradient-mechanica">Cluster 모의고사</span>
        <br className="md:hidden" /> 뿐입니다.
      </h1>
    </div>
  );
}

function DetailedFeature1() {
  return (
    <div className="px-12 pb-6 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <h1 className="md:text-start text-center md:text-3xl text-xl text-indigo-500 font-bold my-5">
          업계 최고의 출제진이 <br className="md:hidden" />
          출제한 모의고사.
        </h1>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          <span className="text-blue-500">M사 B 선생님</span>의 모의고사를
          시작으로, <br />
          <span className="text-blue-500">
            화학 I, 생명과학 I 유명 강사분들
          </span>
          의 <br className="md:hidden" />
          모의고사를 출제하고 있는 출제진들이 <br className="md:hidden" />
          <span className="text-rose-600">직접 집필한</span> 모의고사입니다.
        </h3>
      </div>
    </div>
  );
}

function DetailedFeature2() {
  return (
    <div className="md:px-12 px-6 pb-6 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <h1 className="md:text-start text-center md:text-3xl text-xl text-purple-500 font-bold my-5">
          절대 다수의 모의고사.
        </h1>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep mb-3">
          시중에 존재하는 모의고사 중 <br className="md:hidden" />
          <span className="text-rose-700">많은 양과 질</span>의 모의고사를 제공,{" "}
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          <span className="text-rose-600">절대적</span>이고{" "}
          <span className="text-rose-600">압도적</span>인 퀄리티를 자랑합니다.
          <br />
          2023학년도에는 9월 이후 <br className="md:hidden" />
          <span className="font-extrabold">최대 판매량</span>을 기록하며,{" "}
          <br className="md:hidden" />
          <span className="text-rose-600 font-extrabold">
            무려 한 달안에 절판
          </span>
          된 기록을 가지고 있는 모의고사입니다.
        </h3>
      </div>
    </div>
  );
}

function DetailedFeature3() {
  return (
    <div className="md:px-12 px-6 pb-6 flex md:flex-row flex-col justify-between gap-4 items-center w-full">
      <div className="flex flex-col justify-between h-full">
        <h1 className="md:text-start text-center md:text-3xl text-xl text-pink-500 font-bold my-5">
          생명과학1 아카이브
        </h1>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep mb-3">
          생명과학1 과목의 경우는 <br className="md:hidden" />
          모의고사를 구매할 시 <br className="md:hidden" />
          <span className="text-pink-400">아카이브 N제(50제)</span>가 추가되어
          있습니다.{" "}
        </h3>
        <h3 className="md:text-start text-center md:text-xl text-lg text-black font-semibold break-keep">
          실전 모의고사 뿐 아니라 <br className="md:hidden" />
          고난도 고퀄리티의 N제도 만나보십시오!
        </h3>
      </div>
    </div>
  );
}
