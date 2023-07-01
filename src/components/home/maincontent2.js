import { GrFormNextLink } from "react-icons/gr";
import { IoBulbOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineTeam } from "react-icons/ai";
import Link from "next/link";

function MainContent2() {
  return (
    <div className="w-full md:p-10 py-10 md:upper-title hover:shadow-xl bg-indigo-500">
      <div className="geist-wrapper flex md:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center md:gap-5 gap-3 md:p-10">
          <div className="flex md:justify-start justify-center items-center md:text-5xl md:text-start text-center text-2xl font-extrabold text-white">
            <IoBulbOutline />
            <h1 className="md:ml-2 ml-1">클러스터팀은 어떤 팀인가요?</h1>
          </div>
          <div className="md:w-2/3 p-5 bg-white text-indigo-500 font-semibold md:text-xl text-base rounded-xl flex flex-col gap-1 break-keep">
            <h3>클러스터팀은 오르비 최고의 과학탐구 팀입니다.</h3>
            <h3>
              물리학1, 화학1, 생명과학1에 있어서 배기범 선생님과 같은 유명
              강사분들의 모의고사의 대부분을 만들고 있고, 그 퀄리티로 저희의
              능력은 입증되었습니다.
            </h3>
            <h3>
              추가로 클러스터팀 자체의 이름을 걸고 오르비에서 최고의 출판물을
              만들고 있는 팀입니다.{" "}
            </h3>
          </div>
          <div className="md:mt-0 mt-5 md:justify-start justify-center flex items-center font-bold text-rose-700">
            <Link href="/content">
              <div className="border-white border-2 text-white rounded-lg p-3 w-fit hover:bg-white hover:text-indigo-500">
                컨텐츠 보러가기
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent3() {
  return (
    <div className="w-full md:p-10 py-10 md:upper-title hover:shadow-inner">
      <div className="geist-wrapper flex md:flex-row flex-col justify-center">
        <div className="flex flex-col md:items-end justify-center md:gap-5 gap-3 md:p-10">
          <div className="flex md:justify-start justify-center items-center md:text-5xl md:text-start text-center text-2xl font-extrabold text-purple-500">
            <HiMagnifyingGlass />
            <h1 className="md:ml-2 ml-1">클러스터팀은 어떤 일을 하나요?</h1>
          </div>
          <div className="md:w-2/3 p-5 bg-purple-500 text-white font-semibold md:text-xl text-base rounded-xl flex flex-col gap-1 break-keep">
            <h3>클러스터팀에서는</h3>
            <h3>
              클러스터 모의고사, 배기범 선생님과 같은 유명 강사의 모의고사를
              직접 출제할 수있도록 문제 출제에 대한 모든 지원을 해드리며,
            </h3>
            <h3>
              출제되어 만들어진 문제들은 강사 모의고사/클러스터 모의고사에 직접
              나오게 될 것입니다.
            </h3>
          </div>
        </div>
      </div>
      <div className="md:my-0 my-10 geist-wrapper flex md:flex-row flex-col justify-center">
        <div className="flex flex-col md:items-start justify-center md:gap-5 gap-3 md:p-10">
          <div className="flex md:justify-start justify-center items-center md:text-5xl md:text-start text-center text-2xl font-extrabold text-pink-500">
            <AiOutlineTeam />
            <h1 className="md:ml-2 ml-1">클러스터팀의 대우는 어떤가요?</h1>
          </div>
          <div className="md:w-3/4 p-5 bg-pink-500 text-white font-semibold md:text-xl text-base rounded-xl flex flex-col gap-1 break-keep">
            <h3>클러스터팀은 출제진들에게 최고의 대우를 약속합니다. </h3>
            <h3>
              문제출제가 완료되고, 대형 학원 못지 않는 페이를 약속드립니다.
            </h3>
            <h3>
              시중 가장 낮은 위약벌과 짧은 계약기간 등 원하시는 계약 조건을
              맞추고, 부담 없이 활동할 수 있도록, 계약합니다.
            </h3>
          </div>
          <div className="md:mt-0 mt-5 md:justify-start justify-center flex items-center font-bold text-rose-700">
            <Link href="/recruit">
              <div className="border-rose-700 border-2 rounded-lg p-3 w-fit hover:bg-rose-700 hover:text-white">
                팀원모집 지원하기
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MainContent2, MainContent3 };
