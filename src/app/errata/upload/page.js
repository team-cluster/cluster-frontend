//권한 검사 후 DB업로드
"use client";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useCallback, useState } from "react";
const SignupStyle = {
  wrapper: "flex flex-col w-full py-3",
  label: "text-xl font-semibold mb-2",
  description: "text-sm font-normal mb-2 flex-col flex flex-wrap",
  input:
    "mb-2 mt-1 block w-full px-3 py-2 bg-grey-100 border border-slate-300 rounded-md text-sm shadsow-sm placeholder-slate-400 focus:output-none, focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
};

export default function CorrectionUpload() {
  const methods = useForm({ mode: "all" });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = useCallback(async (data, e) => {
    e.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  });

  return (
    <div className="geist-wrapper">
      <div className="flex flex-col justify-center items-center w-full my-3">
        <h1 className="font-extrabold text-4xl p-10">정오표 업로드</h1>
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
    </div>
  );
}

const UploadFormList = [
  {
    id: "errataContentTitle",
    title: "교재/컨텐츠 제목",
    description: "교재나 컨텐츠의 이름을 입력해주세요",
    type: "text",
    placeholder: "클러스터 모의고사...",
    validation: {
      required: "책 제목을 입력해주세요.",
    },
  },
  {
    id: "errataContentDescription",
    title: "정오표 설명",
    description: "정오표에 대한 설명을 간단하게 적어주세요",
    type: "text",
    placeholder: "무슨무슨 반영...",
    validation: {
      required: "설명을 입력해주세요.",
    },
  },
  {
    id: "errataFile",
    title: "정오표 파일",
    description: "정오표 파일을 업로드해주세요. 30MB까지 가능합니다.",
    type: "file",
    placeholder: "example.pdf",
    validation: {
      required: "정오표 파일을 업로드해주세요.",
    },
  },
  {
    id: "errataReportLink",
    title: "정오표 제보 링크",
    description: "정오표 제보 링크를 붙여놔주세요(구글 폼 등)",
    type: "text",
    placeholder: "https://forms.google.com/...",
    validation: {
      required: "제보 링크를 입력해주세요.",
    },
  },
  {
    id: "errataImage",
    title: "정오표 이미지",
    description:
      "옆에 띄울 이미지를 업로드해주세요. 10MB 미만의 jpg png 포맷만 가능합니다",
    type: "file",
    placeholder: "example.png",
    validation: {
      required: "이미지를 업로드해주세요.",
    },
  },
];

function UploadForm() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  return (
    <div className="flex flex-col w-fit">
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>책 제목</label>
        <p className={SignupStyle.description}>
          업로드에 쓰일 책 제목을 입력해주세요
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
          placeholder="클러스터 모의고사 ..."
          className={SignupStyle.input}
          {...register("bookTitle", {
            required: "책 제목을 입력해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 설명</label>
        <p className={SignupStyle.description}>
          정오표 업데이트에 대한 설명을 간단하게 적어주세요
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
          placeholder="무슨무슨 반영 ..."
          className={SignupStyle.input}
          {...register("bookDescription", {
            required: "정오표에 대한 설명을 적어주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 파일</label>
        <p className={SignupStyle.description}>
          정오표 파일을 업로드해주세요. 30MB까지만 가능합니다.
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
          type="file"
          id="bookFile"
          placeholder="https://atom.ac/..."
          className={SignupStyle.input}
          {...register("bookFile", {
            required: "정오표 파일을 업로드해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 제보 링크</label>
        <p className={SignupStyle.description}>
          정오표 제보 링크를 붙여놔주세요(구글 폼 등)
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
          placeholder="https://forms.google.com/..."
          className={SignupStyle.input}
          {...register("bookReportLink", {
            required: "제보 링크를 입력해주세요.",
          })}
        />
      </div>

      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>교재 표지</label>
        <p className={SignupStyle.description}>
          교재 표지를 업로드해주세요. 10MB 미만의 jpg png 포맷만 가능합니다.
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
          type="file"
          id="bookcoverimg"
          placeholder="https://forms.google.com/..."
          className={SignupStyle.input}
          {...register("bookcoverimg", {
            required: "이미지 파일을 업로드해주세요.",
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
          현재 업로드된 정오표 리스트
        </h2>
      </div>
      <div className="border border-slate-300 rounded-xl p-10">
        정오표가 비어있습니다. 제목/최근생성일만 표시ㄱㄱ
      </div>
    </div>
  );
}
