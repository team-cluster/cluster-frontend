const email_validation = {
  label: "이메일 주소",
  description: "이메일 주소 잘못입력하면 큰일나니까 오타 주의해줘요",
  placeholder: "cluster@cluster.kr 형식으로 입력해주세요",
  type: "email",
};

const password_validation = {
  label: "비밀번호",
  description: [
    "8-24자의 비밀번호를 영문, 숫자, 특수문자를 포함해서 입력해주세요.",
    "특수문자는 !@#$%^*+=-만 허용됩니다.",
  ],
  placeholder: "비밀번호를 입력해주세요",
  type: "password",
};

const nickname_validation = {
  label: "이름(닉네임)",
  description: [
    "모두가 보는 이름입니다. 특수문자 제외 2~12자까지 입력 가능합니다.",
    "타인에게 불쾌감을 주는 단어가 포함되면 관리자에 의해 강제로 변경되거나 활동이 제한될 수 있습니다.",
  ],
  placeholder: "이름을 입력하세요",
  type: "text",
};

//이거어카노
const phonenum_validation = {
  label: "전화번호 인증",
  description: "010으로 시작하는 11자리 전화번호로 입력해주세요.",
  placeholder: "01012345678 형식으로 입력해주세요",
  type: "text",
};

export {
  email_validation,
  password_validation,
  nickname_validation,
  phonenum_validation,
};
