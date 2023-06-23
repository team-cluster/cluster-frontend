import "./style.css";
import Image from "next/image";
import blacklogo from "/public/logo/cluster-logo-black.png";
import { ContentContainer } from "./content";

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ContentTitle />
      <ContentContainer />
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="geist-wrapper items-center">
      <div className="flex flex-col w-3/4 h-80 justify-center items-center border-black border-8 my-20">
        <Image
          src={blacklogo}
          width={100}
          height={100}
          alt="cluster-grey-logo"
          className="md:m-3 m-1 md:w-20 md:h-20 w-12 h-12"
        />
        <ContentTitleLabel />
      </div>
    </div>
  );
}

function ContentTitleLabel() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-3xl font-extrabold m-3">컨텐츠</h1>
      <div className="w-4/5 h-2 bg-black mb-3"></div>
      <div className="w-1/2 h-1.5 bg-black mb-3"></div>
      <div className="w-1/4 h-1 bg-black mb-3"></div>
    </div>
  );
}
