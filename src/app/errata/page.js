import { CorrectionContent } from "./loadcontent";

export default async function Correction() {
  console.log("ㅁㄴㅇㄹ");
  return (
    <div className="w-full flex flex-col">
      <CorrectionHeader />
      <CorrectionContent />
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
