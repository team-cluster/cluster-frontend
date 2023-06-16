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

const content = [
  {
    title: "2024 클러스터 모의고사 물리학 I",
    description: "2024 클러스터 모의고사의 정오표입니다.",
    date: "2023/06/12 15:56",
  },
  {
    title: "2024 Massive N제 물리학 I",
    description: "2024 클러스터 모의고사의 정오표입니다.",
    date: "2023/06/12 15:56",
  },
  {
    title: "2024 Mechanica 개념편",
    description: "2024 클러스터 모의고사의 정오표입니다.",
    date: "2023/06/12 15:56",
  },
];

function CorrectionHeader() {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 border-b w-full">
      <div className="geist-wrapper">
        <h1 className="text-5xl font-extrabold mb-5">정오표</h1>
        <p className="text-xl font-normal text-gray-500">
          컨텐츠 이용에 불편을 드려 죄송합니다.
        </p>
      </div>
    </div>
  );
}

function CorrectionContent({ title, description, date }) {
  return (
    <div className="pt-8 pb-8 border-b hover:shadow-lg hover:transition-shadow ">
      <div className="geist-wrapper">
        <div className="flex justify-between">
          <div className="flex flex-wrap justify-start flex-col">
            <div className="flex flex-wrap justify-start items-baseline">
              <h1 className="text-2xl font-bold mr-2">{title}</h1>
              <h4 className="text-xl font-normal">{date}</h4>
            </div>
            <p className="text-xl font-normal text-gray-500">{description}</p>
          </div>
          <button className="border-2 px-3 py-1 border-black hover:bg-black hover:text-white">
            파일 다운로드
          </button>
        </div>
      </div>
    </div>
  );
}
