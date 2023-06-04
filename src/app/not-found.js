import Image from "next/image";
import NotFoundImg from "/public/404-pepe.webp";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={NotFoundImg} width={400} height={388} alt="404pepe" />
      <h1 className="mt-5 text-6xl underline underline-offset-1 text-red-500 font-extrabold italic">
        그런 페이지는 없다 ㅋㅋ
      </h1>
    </div>
  );
}
