"use client";

import Link from "next/link";
import { AiOutlineDownload, AiOutlineAlert } from "react-icons/ai";
import { gql, useQuery } from "@apollo/client";

const QUERY_LIST = gql`
  query MyQuery {
    errataList {
      createdAt
      description
      file
      image
      link
      title
      updatedAt
    }
  }
`;

function CorrectionContent() {
  const { loading, error, data } = useQuery(QUERY_LIST);
  console.log(data);

  return (
    <div>
      {loading ? (
        <h1 className="w-full flex flex-col justify-center items-center font-extrabold text-3xl">
          로딩중..
        </h1>
      ) : (
        data.errataList.map(
          ({ description, file, image, link, title, updatedAt }, i) => {
            const parsedTime = updatedAt.split("T");
            return (
              <div
                className="py-8 border-b hover:shadow-lg hover:transition-shadow "
                key="i"
              >
                <div className="geist-wrapper flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between justify-center items-center">
                  <div className="flex flex-col justify-center gap-3">
                    <div className="md:text-2xl text-lg font-extrabold md:py-4 py-2">
                      <h1>{title}</h1>
                    </div>
                    <div className="md:text-xl text-base">{description}</div>
                    <div className="md:text-xl text-base">
                      최근 변경일 : {parsedTime[0]}
                    </div>
                    <div className="flex gap-4 w-full md:justify-start justify-center items-center ">
                      <Link href={file} target="_blank">
                        <div className="w-fit flex flex-row justify-center items-center p-2 hover:underline">
                          <AiOutlineDownload />
                          <h3 className="font-medium text-sm ml-2">
                            파일 다운로드
                          </h3>
                        </div>
                      </Link>
                      <Link href={link} target="_blank">
                        <div className="w-fit flex flex-row text-red-500 justify-center items-center p-2 hover:underline">
                          <AiOutlineAlert />
                          <h3 className="font-medium text-sm ml-2">
                            정오사항 제보하기
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-60 md:h-80 w-40 h-60 flex">
                    <img src={image} width={225} height={350} alt="mo1" />
                  </div>
                </div>
              </div>
            );
          }
        )
      )}
    </div>
  );
}

export { CorrectionContent };
