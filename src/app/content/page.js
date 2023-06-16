import "./style.css";
import Image from "next/image";
import blacklogo from "/public/logo/cluster-logo-black.png";

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ContentTitle />
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Image
        src={blacklogo}
        width={100}
        height={100}
        alt="cluster-grey-logo"
        className="m-3"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold m-3">컨텐츠</h1>
        <div className="w-4/5 h-2 bg-black mb-3"></div>
        <div className="w-1/2 h-1.5 bg-black mb-3"></div>
        <div className="w-1/4 h-1 bg-black mb-3"></div>
      </div>
      <ContentContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="geist-wrapper shadow-inner">
      <IndivContent backTitle="MECHANICA" />
    </div>
  );
}

function IndivContent({ backTitle }) {
  return (
    <div className="geist-wrapper">
      <div className="" />
      <div className="back-title">
        <h2 className="text-9xl font-black">{backTitle}</h2>
        <div className="double-direction">
          <span className="white-triangle"></span>
          <span className="black-triangle"></span>
        </div>
      </div>
    </div>
  );
}
