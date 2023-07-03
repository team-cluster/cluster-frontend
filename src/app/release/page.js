import { ReleaseContent } from "./loadcontent";

export default async function Release() {
  return (
    <div className="w-full flex flex-col">
      <ReleaseHeader />
      <ReleaseContent />
    </div>
  );
}

function ReleaseHeader() {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 border-b w-full">
      <div className="geist-wrapper md:flex-row flex-col flex items-center md:justify-start justify-center">
        <div className="flex-col">
          <h1 className="text-5xl font-extrabold mb-5">배포 컨텐츠</h1>
          <p className="text-xl font-normal text-gray-500 break-keep">
            Cluster 팀의 고품질 모의고사를 무료로 맛보다.
          </p>
        </div>
        <div className="m-3 w-fit"></div>
      </div>
    </div>
  );
}
