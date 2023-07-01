import pyoji from "/public/page/massive_che1.png";
import Link from "next/link";
import { AiOutlineDownload, AiOutlineAlert } from "react-icons/ai";

export default function Correction() {
  return (
    <div className="w-full flex flex-col">
      <CorrectionHeader />
      {content.map((v, i) => {
        return <CorrectionContent key={v + i} {...v} />;
      })}
    </div>
  );
}

//DB에서 받아와야함
const content = [
  {
    title: "클러스터 모의고사 시즌1 화학 I",
    date: "6월 30일",
    description: "클러스터 모의고사 시즌1 화학 I의 정오표입니다.",
    fileLink: "#",
    reportLink: "https://forms.gle/TMnWgfAcnWrcd2eT9",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117246504087593/clmock_2.png",
  },
  {
    title: "클러스터 모의고사 시즌1 생명과학 I",
    date: "6월 30일",
    description: "클러스터 모의고사 시즌1 생명과학 I의 정오표입니다.",
    fileLink: "#",
    reportLink: "https://forms.gle/r3oV1bq4KgqD7jMdA",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117247057727548/clmock_3.png",
  },
  {
    title: "2024 Massive N제 물리학 I KICE MECHANICS",
    date: "6월 30일",
    description: "2024 Massive N제 물리학 I KICE MECHANICS의 정오표입니다.",
    fileLink: "#",
    reportLink: "https://forms.gle/fhuN5YSw7WbMJyNh6",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117247976288316/massive_phy1.png",
  },
  {
    title: "2024 Massive N제 화학 I Turning Point",
    date: "6월 20일",
    description: "2024 Massive N제 화학I Turning Point의 정오표입니다.",
    fileLink: "https://atom.ac/attach/public/5783",
    reportLink: "https://forms.gle/GAVepsMwMJXLFch77",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117247607197797/massive_che1.png",
  },
  {
    title: "2024 Mechanica 비역학편",
    date: "4월 5일",
    description: "2024 Mechanica 비역학편의 정오표입니다.",
    fileLink: "https://atom.ac/attach/public/5906",
    reportLink: "https://forms.gle/1dmtvkRPZXFABZXu6",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117248701911060/mechanica_2.png",
  },
  {
    title: "2024 Mechanica 기출편",
    date: "4월 5일",
    description: "2024 Mechanica 기출편의 정오표입니다.",
    fileLink: "#",
    reportLink: "https://forms.gle/FvbAXBuT5u8R9PjPA",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117248953561128/mechanica_3.png",
  },
  {
    title: "2024 Mechanica 개념편",
    date: "4월 5일",
    description: " 2024 Mechanica 개념편의 정오표입니다.",
    fileLink: "https://atom.ac/attach/public/5905",
    reportLink: "https://forms.gle/FvbAXBuT5u8R9PjPA",
    imgLink:
      "https://media.discordapp.net/attachments/821684542184095755/1124117248399904818/mechanica_1.png",
  },
];

function CorrectionHeader() {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 border-b w-full">
      <div className="geist-wrapper md:flex-row flex-col flex items-center md:justify-start justify-center">
        <div className="flex-col">
          <h1 className="text-5xl font-extrabold mb-5">정오표</h1>
          <p className="text-xl font-normal text-gray-500 break-keep">
            컨텐츠 이용에 불편을 드려 죄송합니다.
          </p>
          <p className="text-xl font-normal text-gray-500 break-keep">
            발견하신 정오사항은 바로 제보해주시면 감사하겠습니다.
          </p>
        </div>
        <div className="m-3 w-fit"></div>
      </div>
    </div>
  );
}

function CorrectionContent({
  title,
  date,
  description,
  fileLink,
  reportLink,
  imgLink,
}) {
  return (
    <div className="py-8 border-b hover:shadow-lg hover:transition-shadow ">
      <div className="geist-wrapper flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between justify-center items-center">
        <div className="flex flex-col justify-center gap-3">
          <div className="md:text-2xl text-lg font-extrabold md:py-4 py-2">
            <h1>{title}</h1>
          </div>
          <div className="md:text-xl text-base">{description}</div>
          <div className="md:text-xl text-base">최근 변경일 : {date}</div>
          <div className="flex gap-4 w-full md:justify-start justify-center items-center ">
            <Link href={fileLink} target="_blank">
              <div className="w-fit flex flex-row justify-center items-center p-2 hover:underline">
                <AiOutlineDownload />
                <h3 className="font-medium text-sm ml-2">파일 다운로드</h3>
              </div>
            </Link>
            <Link href={reportLink} target="_blank">
              <div className="w-fit flex flex-row text-red-500 justify-center items-center p-2 hover:underline">
                <AiOutlineAlert />
                <h3 className="font-medium text-sm ml-2">정오사항 제보하기</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-60 md:h-80 w-40 h-60 flex">
          <img src={imgLink} width={225} height={350} alt="mo1" />
        </div>
      </div>
    </div>
  );
}
