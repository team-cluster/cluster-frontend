import Link from "next/link";

export default function Recruit() {
  return (
    <div className="w-full">
      <RecruitHeader />
      <div className="flex flex-col justify-center items-center">
        <UpperTitle />
        <div className="border w-full"></div>
        <InnerContent1 />
        <div className="border w-full"></div>
        <InnerContent2 />
        <div className="border w-full"></div>
        <InnerContent3 />
        <div className="border w-full"></div>
        <InnerContent4 />
      </div>
    </div>
  );
}

function RecruitHeader() {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 border-b w-full">
      <div className="geist-wrapper">
        <h1 className="text-5xl font-extrabold mb-5">
          <span className="font-light title-gradient">Cluster</span> 팀원모집
        </h1>
      </div>
    </div>
  );
}

function UpperTitle() {
  return (
    <div className="geist-wrapper ">
      <div className="py-10 my-10 flex flex-col justify-cetner gap-8 items-center font-bold md:text-3xl text-xl border-4 border-black">
        <h1>클러스터팀은</h1>
        <h1>유명 강사 출제를 원하시고,</h1>
        <h1>좋은 대우를 받고 싶으시며 </h1>
        <h1>출제에 관심과 열정이 있는</h1>
        <h1>출제진 지원자를 모집합니다.</h1>
      </div>
    </div>
  );
}

function InnerContent1() {
  return (
    <div className="geist-wrapper">
      <div className="md:py-10 my-10 flex flex-col justify-center gap-4">
        <div className="md:text-4xl text-2xl font-semibold">
          <h1>
            Q. <br className="md:hidden" />
            출제는 처음인데 지원해도 괜찮을까요?
          </h1>
        </div>
        <div className="md:text-2xl text-lg flex flex-col justify-center md:gap-2 gap-1 font-normal">
          <h3>네. 괜찮습니다.</h3>
          <h3>출제가 처음이신 분들에게 출제를 할 수 있도록 </h3>
          <h3>출제 원칙을 알려 드리고 출제 역량을 키워드립니다. </h3>
          <h3>개인이 문항을 많이 출제하지 못해도 문제없습니다.</h3>
          <h3>문제가 요청한 양보다 적게 만들어지면</h3>
          <h3>팀장인 본인 스스로가 해당 부분을 매꿀 수 있기 때문에</h3>
          <h3>전혀 문제되지 않습니다.</h3>
        </div>
        <div className="mt-4 md:text-4xl text-2xl font-semibold flex flex-col justify-center items-center gap-8 text-center break-keep">
          <h1 className="text-blue-500">저희는 자유를 중시합니다.</h1>
          <h1>
            학업등 개인사정으로 인해{" "}
            <span className="text-rose-500">문항 출제가 불가능한 상황</span>에서
          </h1>
          <h1 className="text-indigo-500">
            문항 출제를 강제로 요구하지 않습니다.{" "}
          </h1>
          <h1>본인이 원하는 만큼 만들고</h1>
          <h1>
            문항 출제가 힘들다면, <br className="md:hidden" />
            쉬어가면서 해도 좋습니다.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

function InnerContent2() {
  return (
    <div className="geist-wrapper">
      <div className="md:py-10 my-10 flex flex-col justify-center gap-4">
        <div className="md:text-4xl text-2xl font-semibold">
          <h1>
            Q. <br className="md:hidden" />
            지원 자격은 어떻게 될까요?
          </h1>
        </div>
        <div className="md:text-2xl text-lg flex flex-col justify-center gap-2 font-normal">
          <h3 className="break-keep">
            다음 지원 자격 세 가지 중 <br className="md:hidden" />
            <span className="text-red-500 font-semibold">한 가지 이상</span>을
            충족시키면 됩니다.
          </h3>
        </div>
        <div className="border-y-4 border-black py-10 my-10">
          <ol className="md:text-2xl text-lg flex flex-col justify-center gap-4 font-semibold break-keep">
            <li>
              1.{" "}
              <span className="underline">
                2021, 2022, 2023학년도 대학수학능력시험
              </span>
              에서 지원 과목에 응시하여{" "}
              <span className="underline">1등급 성적</span>을 받으신 분
            </li>
            <li>
              2.{" "}
              <span className="underline">
                대학수학능력시험을 2020학년도 혹은 이전
              </span>
              에 봤지만, 지원 과목으로{" "}
              <span className="underline">과외 혹은 강사 조교 활동</span>을
              해오신 분
            </li>
            <li>
              3. 지원 과목의 <span className="underline">문항 출제 경험</span>이
              있는 분
            </li>
          </ol>
        </div>
        <div className="md:text-2xl text-lg flex flex-col justify-center gap-2 font-normal">
          <h3>출제진 지원자는 자신의 역량을 판단할 수 있는</h3>
          <h3>
            <span className="text-red-500 font-semibold">샘플 문제</span>를
            만들어서 보내주셔야 합니다.
          </h3>
        </div>
      </div>
    </div>
  );
}

function InnerContent3() {
  return (
    <div className="geist-wrapper">
      <div className="md:py-10 my-10 flex flex-col justify-center gap-4">
        <div className="md:text-4xl text-2xl font-semibold">
          <h1>
            Q. <br className="md:hidden" />
            모집 과목이 어떻게 될까요?
          </h1>
        </div>
        <div className="md:text-2xl text-lg flex flex-col justify-center gap-2 font-normal">
          <h3 className="break-keep">
            총 3과목으로 <span className="text-blue-500">물리학 I</span> /{" "}
            <span className="text-rose-600">화학 I</span> /{" "}
            <span className="text-green-600">생명과학 I</span> 분야에서
            모집합니다.{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

const formlinkphy1 = "https://forms.gle/jqhz65hGzT3HkwKV7";
const formlinkche1 = "https://forms.gle/LkRis7rN7Y6mp3d69";
const formlinkbio1 = "https://forms.gle/SeEFHPUQH5rxLSvn8";

function InnerContent4() {
  return (
    <div className="geist-wrapper">
      <div className="md:py-10 my-10 flex flex-col justify-center gap-4">
        <div className="mt-4 md:text-4xl text-2xl font-semibold flex flex-col justify-center items-center gap-8 text-center break-keep">
          <h1>
            클러스터 팀에 합류하고자 하는 분은 아래 버튼을 눌러 구글 폼을
            작성해주세요.
          </h1>
        </div>
        <div className="border-y-4 border-black py-10 my-10">
          <ol className="md:text-2xl text-lg flex flex-wrap items-center justify-center md:gap-24 gap-4 font-semibold break-keep">
            <Link href={formlinkphy1} target="_blank">
              <li className="w-fit md:px-10 p-3 border-2 border-blue-500 text-blue-500 rounded-xl hover:text-white hover:bg-blue-500">
                물리학 I
              </li>
            </Link>
            <Link href={formlinkche1} target="_blank">
              <li className="w-fit md:px-10 p-3 border-2 border-rose-600 text-rose-600 rounded-xl hover:text-white hover:bg-rose-600">
                화학 I
              </li>
            </Link>
            <Link href={formlinkbio1} target="_blank">
              <li className="w-fit md:px-10 p-3 border-2 border-green-600 text-green-600 rounded-xl hover:text-white hover:bg-green-600">
                생명과학 I
              </li>
            </Link>
          </ol>
        </div>
      </div>
    </div>
  );
}
