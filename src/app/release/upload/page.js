//권한 검사 후 DB업로드
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useCallback, useState } from "react";
const SignupStyle = {
  wrapper: "flex flex-col w-full py-3",
  label: "text-xl font-semibold mb-2",
  description: "text-sm font-normal mb-2 flex-col flex flex-wrap",
  input:
    "mb-2 mt-1 block w-full px-3 py-2 bg-grey-100 border border-slate-300 rounded-md text-sm shadsow-sm placeholder-slate-400 focus:output-none, focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
};

export default function CorrectionUpload() {
  const methods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (data, e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  });

  return (
    <div className="geist-wrapper">
      <div className="flex flex-col justify-center items-center w-full my-3">
        <h1 className="font-extrabold md:text-4xl text-xl p-10">
          정오표 업로드
        </h1>
        <div className="flex md:flex-row flex-col justify-around w-full">
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

function UploadForm() {
  return (
    <div className="flex flex-col w-fit">
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>책 제목</label>
        <p className={SignupStyle.description}>
          업로드에 쓰일 책 제목을 입력해주세요
        </p>
        <input
          type="text"
          id="bookTitle"
          placeholder="클러스터 모의고사 ..."
          className={SignupStyle.input}
        />
      </div>
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 설명</label>
        <p className={SignupStyle.description}>
          정오표 업데이트에 대한 설명을 간단하게 적어주세요
        </p>
        <input
          type="text"
          id="bookDescription"
          placeholder="무슨무슨 반영 ..."
          className={SignupStyle.input}
        />
      </div>
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 파일 링크</label>
        <p className={SignupStyle.description}>
          정오표 파일 링크를 붙여놔주세요
        </p>
        <input
          type="text"
          id="bookFileLink"
          placeholder="https://atom.ac/..."
          className={SignupStyle.input}
        />
      </div>
      <div className={SignupStyle.wrapper}>
        <label className={SignupStyle.label}>정오표 제보 링크</label>
        <p className={SignupStyle.description}>
          정오표 제보 링크를 붙여놔주세요(구글 폼 등)
        </p>
        <input
          type="text"
          id="bookReportLink"
          placeholder="https://forms.google.com/..."
          className={SignupStyle.input}
        />
      </div>
    </div>
  );
}

function GetCorrectionList() {
  return <div className="border border-slate-300 rounded-md p-10">어쩌고</div>;
}
