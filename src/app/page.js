import Image from "next/image";
import ralo from "/public/ralo.jpg";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-5 mb-10 text-6xl text-black font-black">
        유연한 남탓, 사고하지 않기
      </h1>

      <Image src={ralo} width={830} height={891} alt="ralothumbsup" />
      <h1 className="mt-5 text-6xl underline underline-offset-1 text-red-500 font-extrabold italic">
        배기범 컨텐츠 출제팀인데 오르비라고 거르는사람 누구야!!!!!!
      </h1>
    </div>
  );
}
