"use client";

import Image from "next/image";
import logoGray from "/public/logo/cluster-logo-grey.png";
import logoHGray from "/public/logo/cluster-logo-heavygray.png";
import Tilt from "react-parallax-tilt";

function BgImage() {
  return (
    <div className="absolute md:left-1/2 bg-logo-img-size">
      <div className="right-10 absolute">
        <Image src={logoHGray} width={500} height={500} alt="clogogray" />
      </div>
      <div className="left-10 absolute">
        <Image src={logoGray} width={500} height={500} alt="clogogray" />
      </div>
    </div>
  );
}

function UpperTitle() {
  return (
    <div className="upper-title w-full justify-center flex items-center bg-black">
      <BgImage />
      <div className="geist-wrapper">
        <div className="texts-wrapper z-10">
          <div className="mt-32 mb-16 w-fit">
            <Tilt tiltReverse={true} tiltMaxAngleY="10">
              <h1 className="md:text-8xl md:text-start text-5xl text-center text-white font-extrabold">
                TEAM CLUSTER.
              </h1>
            </Tilt>
          </div>
          <div className="my-4">
            <h1 className="md:text-4xl md:text-start text-3xl text-center text-white font-extrabold">
              유명 강사 출제진
            </h1>
          </div>
          <div className="my-4">
            <h1 className="md:text-4xl md:text-start text-3xl text-center text-white font-extrabold">
              유명 학원 출제진
            </h1>
          </div>
          <div className="my-4">
            <h1 className="md:text-4xl md:text-start text-3xl text-center text-white font-extrabold">
              모두 저희가 출제합니다.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UpperTitle };
