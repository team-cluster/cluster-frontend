//권한 검사 후 DB업로드
"use client";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useCallback, useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UPLOAD_MUTATION = gql`
  mutation Examination(
    $description: String!
    $file: String!
    $image: String!
    $title: String!
    $link: String!
  ) {
    createExamination(
      description: $description
      file: $file
      image: $image
      title: $title
      link: $link
    ) {
      __typename
    }
  }
`;

const UPLOAD_QUERY = gql`
  query Upload {
    authorizeExaminationCreation {
      __typename
    }
  }
`;

const QUERY_LIST = gql`
  query MyQuery {
    examinationList {
      id
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

const SignupStyle = {
  wrapper: "flex flex-col w-full py-3",
  label: "text-xl font-semibold mb-2",
  description: "text-sm font-normal mb-2 flex-col flex flex-wrap",
  input:
    "mb-2 mt-1 block w-full px-3 py-2 bg-grey-100 border border-slate-300 rounded-md text-sm shadsow-sm placeholder-slate-400 focus:output-none, focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
};

export default function ReleaseUpload() {
  const [permission, setPermission] = useState(false);
  const methods = useForm({ mode: "all" });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const [mutation, uploadInfo] = useMutation(UPLOAD_MUTATION);
  const { data } = useQuery(UPLOAD_QUERY);

  useEffect(() => {
    if (
      data &&
      data.authorizeExaminationCreation.__typename ===
        "ExaminationCreationAuthorized"
    ) {
      setPermission(true);
    } else {
      setPermission(false);
    }
  }, [data]);

  console.log(data);

  const onSubmit = useCallback(async (inputdata, e) => {
    e.preventDefault();

    const uploadData = (
      await mutation({
        variables: {
          title: inputdata.bookTitle,
          description: inputdata.bookDescription,
          file: inputdata.bookFile,
          link: inputdata.bookReportLink,
          image: inputdata.bookcoverimg,
        },
      })
    ).data;

    if (
      uploadData &&
      uploadData.createExamination.__typename === "ExaminationCreated"
    ) {
      alert("파일을 성공적으로 업로드했습니다.");
      methods.reset();
      router.refresh();
    } else if (
      uploadData &&
      uploadData.createExamination.__typename ===
        "ExaminationCreationUnauthorized"
    ) {
      alert("파일을 업로드할 권한이 없습니다.");
    } else {
      alert("파일 업로드에 실패했습니다.");
    }
  });

  return (
    <div className="geist-wrapper">
      {!permission ? (
        <h1>업로드 페이지 접속 권한이 없습니다.</h1>
      ) : (
        <div className="flex flex-col justify-center items-center w-full my-3">
          <h1 className="font-extrabold text-4xl p-10">배포 컨텐츠 업로드</h1>
          <div className="flex md:flex-row flex-col md:justify-around justify-center w-full">
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center"
              >
                <UploadForm />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-2 border-black rounded-xl px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white disabled:border-gray-200 disabled:text-white disabled:bg-gray-200"
                >
                  업로드
                </button>
              </form>
            </FormProvider>
            <GetCorrectionList />
          </div>
        </div>
      )}
    </div>
  );
}

function UploadForm() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  return (
    <div className="flex flex-col w-fit">
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>컨텐츠 제목</label>
        <p className={SignupStyle.description}>
          업로드에 쓰일 배포 컨텐츠 제목을 입력해주세요
        </p>
        {errors.bookTitle && (
          <small
            role="alert"
            className="text-red-500 flex justify-start w-full mb-2 mt-1"
          >
            {errors.bookTitle.message}
          </small>
        )}
        <input
          type="text"
          id="bookTitle"
          placeholder="클러스터 모의고사 7월 ..."
          className={SignupStyle.input}
          {...register("bookTitle", {
            required: "컨텐츠 제목을 입력해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>컨텐츠 설명</label>
        <p className={SignupStyle.description}>
          배포 컨텐츠에 대한 설명을 간단하게 적어주세요
        </p>
        {errors.bookDescription && (
          <small
            role="alert"
            className="text-red-500 flex justify-start w-full mb-2 mt-1"
          >
            {errors.bookDescription.message}
          </small>
        )}
        <input
          type="text"
          id="bookDescription"
          placeholder="컨텐츠 설명 ..."
          className={SignupStyle.input}
          {...register("bookDescription", {
            required: "배포 컨텐츠에 대한 설명을 적어주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>컨텐츠 파일</label>
        <p className={SignupStyle.description}>
          배포 컨텐츠 파일 링크를 붙여넣어주세요
        </p>
        {errors.bookFile && (
          <small
            role="alert"
            className="text-red-500 flex justify-start w-full mb-2 mt-1"
          >
            {errors.bookFile.message}
          </small>
        )}
        <input
          type="text"
          id="bookFile"
          placeholder="https://atom.ac/..."
          className={SignupStyle.input}
          {...register("bookFile", {
            required: "배포 컨텐츠 파일 링크를 입력해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>컨텐츠 설명 링크</label>
        <p className={SignupStyle.description}>
          컨텐츠 설명이 들어가있는 오르비 링크를 입력해주세요
        </p>
        {errors.bookReportLink && (
          <small
            role="alert"
            className="text-red-500 flex justify-start w-full mb-2 mt-1"
          >
            {errors.bookReportLink.message}
          </small>
        )}
        <input
          type="text"
          id="bookReportLink"
          placeholder="https://orbi.kr/..."
          className={SignupStyle.input}
          {...register("bookReportLink", {
            required: "컨텐츠 설명 링크를 입력해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>컨텐츠 이미지</label>
        <p className={SignupStyle.description}>
          컨텐츠 이미지 링크를 업로드해주세요.
        </p>
        {errors.bookcoverimg && (
          <small
            role="alert"
            className="text-red-500 flex justify-start w-full mb-2 mt-1"
          >
            {errors.bookcoverimg.message}
          </small>
        )}
        <input
          type="text"
          id="bookcoverimg"
          placeholder="이미지 링크..."
          className={SignupStyle.input}
          {...register("bookcoverimg", {
            required: "이미지 파일 링크를 입력해주세요.",
          })}
        />
      </div>
    </div>
  );
}

function GetCorrectionList() {
  return (
    <div className="h-full my-10">
      <div className="flex justify-center items-center m-3">
        <h2 className="font-bold text-semibold md:text-2xl text-xl">
          현재 업로드된 배포 컨텐츠 리스트
        </h2>
      </div>
      <div className="border border-slate-300 rounded-xl p-10">
        <CorrectionMiniContent />
      </div>
    </div>
  );
}

function CorrectionMiniContent() {
  const { loading, error, data } = useQuery(QUERY_LIST);

  return (
    <div>
      {loading ? (
        <h1 className="w-full flex flex-col justify-center items-center font-extrabold text-2xl my-4">
          로딩중..
        </h1>
      ) : !data ? (
        <h1 className="w-full flex flex-col justify-center items-center font-extrabold text-2xl my-4">
          서버로부터 데이터를 가져오지 못했습니다.
        </h1>
      ) : data.examinationList.length === 0 ? (
        <h1 className="w-full flex flex-col justify-center items-center font-extrabold text-2xl my-4">
          컨텐츠가 없습니다.
        </h1>
      ) : (
        data.examinationList.map(({ title, updatedAt, id }, i) => {
          const parsedTime = updatedAt.split("T");

          return (
            <div
              className="py-4 border-b hover:shadow-lg hover:transition-shadow "
              key={i}
            >
              <div className="flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between justify-center items-center">
                <div className="flex flex-col justify-center gap-1">
                  <div className="md:text-xl text-lg font-extrabold py-2">
                    <h1>{title}</h1>
                  </div>
                  <div className="md:text-lg text-base">
                    최근 변경일 : {parsedTime[0]}
                  </div>
                  <Link
                    href={`/release/remove?id=${id}`}
                    target="_blank"
                    className="p-3 w-fit text-lg hover:text-red"
                  >
                    삭제하기
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
