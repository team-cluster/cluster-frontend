//권한 검사 후 DB업로드
"use client";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useCallback, useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const UPLOAD_MUTATION = gql`
  mutation Errata(
    $description: String!
    $file: String!
    $image: String!
    $title: String!
    $link: String!
  ) {
    createErrata(
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
    authorizeErrataCreation {
      __typename
    }
  }
`;

const QUERY_LIST = gql`
  query MyQuery {
    errataList {
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

const DELETE_ERRATA = gql`
  mutation Delete($id: ID!) {
    removeErrata(errataId: $id) {
      __typename
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

export default function CorrectionUpload() {
  const [permission, setPermission] = useState(false);
  const methods = useForm({ mode: "all" });

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
      data.authorizeErrataCreation.__typename === "ErrataCreationAuthorized"
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

    if (uploadData && uploadData.createErrata.__typename === "ErrataCreated") {
      alert("파일을 성공적으로 업로드했습니다.");
    } else if (
      uploadData &&
      uploadData.createErrata.__typename === "ErrataCreationUnauthorized"
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
          type="text"
          id="bookFile"
          placeholder="https://atom.ac/..."
          className={SignupStyle.input}
          {...register("bookFile", {
            required: "정오표 파일 링크를 입력해주세요.",
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
          type="text"
          id="bookcoverimg"
          placeholder="https://forms.google.com/..."
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
          현재 업로드된 정오표 리스트
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
  const [mutation, set] = useMutation(DELETE_ERRATA);

  const onClick = useCallback((id, mutation) => {
    console.log(id);
    mutation({ variables: { id: id } }).then((info) => {
      console.log(info.data);
    });
  });

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
      ) : data.errataList.length === 0 ? (
        <h1 className="w-full flex flex-col justify-center items-center font-extrabold text-2xl my-4">
          정오표가 없습니다.
        </h1>
      ) : (
        data.errataList.map(({ title, updatedAt, id }, i) => {
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
                  <button
                    onClick={onClick(id, mutation)}
                    className="p-3 w-fit text-lg text-red font-bold hover:bg-red hover:text-white"
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
