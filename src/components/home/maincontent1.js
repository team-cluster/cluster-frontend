export default function MainContent1() {
  return (
    <div className="geist-wrapper h-full">
      <div className="flex flex-col gap-12 my-16">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-12">
          <div className="md:w-1/2 w-full mx-6 h-40 p-10 bg-white rounded-xl content-shadow flex flex-col justify-center items-center gap-4">
            <h2 className="md:text-4xl text-2xl text-start font-bold">
              2023 <span className="text-blue-500">배기범</span> 모의고사
            </h2>
            <h4 className="md:text-2xl text-lg text-start font-semibold">
              물리학 I 60회분 / 물리학 II 10회분
            </h4>
          </div>
          <div className="md:w-1/2 w-full mx-6 h-40 p-10 bg-white rounded-xl content-shadow flex flex-col justify-center items-center gap-4">
            <h2 className="md:text-4xl text-2xl text-start font-bold">
              M사 화학 유명 강사
            </h2>
            <h4 className="md:text-2xl text-lg text-start font-semibold">
              2023 모의고사 30회분
            </h4>
          </div>
        </div>

        <div className="py-5 w-full flex flex-col gap-10 justify-center items-center">
          <div className="md:w-1/2 w-full mx-6 h-40 p-10 bg-white rounded-xl content-shadow flex flex-col justify-center items-center gap-4">
            <h2 className="md:text-4xl text-2xl font-bold text-center w-fit">
              대성마이맥 생명과학 <br />
              <span className="text-green-500">박선우 선생님</span> <br />
              모의고사 출제
            </h2>
          </div>
          <div className="md:w-2/3 w-full md:h-80 h-full p-10 bg-white content-shadow flex flex-col justify-center items-center rounded-xl gap-4">
            <h2 className="md:text-4xl text-xl text-start font-bold">
              클러스터 모의고사 물리학1 18회분
            </h2>
            <h2 className="md:text-4xl text-xl text-start font-bold">
              클러스터 모의고사 화학1 9회분
            </h2>
            <h2 className="md:text-4xl text-xl text-start font-bold">
              클러스터 모의고사 생명과학1 3회분
            </h2>
            <h2 className="md:text-4xl text-xl text-start font-bold">...</h2>
          </div>
        </div>
        <MainContentBottomTitle />
      </div>
    </div>
  );
}

function MainContentBottomTitle() {
  return (
    <div className="flex flex-col justify-center items-center md:p-20 p-10 md:gap-10 gap-5">
      <h1 className="font-extrabold md:text-5xl text-3xl">
        우리는 <span className="text-rose-500">전문적인 역량</span>으로
      </h1>
      <h1 className="font-extrabold text-center md:text-5xl text-3xl break-keep">
        <span className="title-gradient">최고의 출제팀</span>을{" "}
        <br className="md:hidden" />
        만들어내고 있습니다.
      </h1>
    </div>
  );
}
