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
