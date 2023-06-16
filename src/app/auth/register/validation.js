const email_validation = {
  id: "signupemail",
  label: "이메일 주소",
  description: "이메일 주소 잘못입력하면 큰일나니까 오타 주의해줘요",
  placeholder: "cluster@cluster.kr 형식으로 입력해주세요",
  type: "email",
  validation: {
    required: "이메일은 필수 입력 항목입니다.",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "제대로 된 이메일을 입력해주세요.",
    },
  },
  available: "이 이메일로 가입됩니다.",
};

const password_validation = {
  id: "signuppassword",
  label: "비밀번호",
  description: [
    "8-24자의 비밀번호를 영문, 숫자, 특수문자를 포함해서 입력해주세요.",
    "특수문자는 !@#$%^*+=-만 허용됩니다.",
  ],
  placeholder: "비밀번호를 입력해주세요",
  type: "password",
  validation: {
    required: "비밀번호는 필수 입력 항목입니다.",
    pattern: {
      value: /^(.*)$/,
      message: "비밀번호 형식에 맞지 않습니다.",
    },
    minLength: {
      value: 8,
      message: "최소 8자 이상의 비밀번호를 입력해주세요.",
    },
    maxLength: {
      value: 24,
      message: "비밀번호는 최대 24자까지 입력할 수 있습니다.",
    },
  },
  confirm: {
    id: "signuppasswordconfirm",
    placeholder: "비밀번호를 다시 입력해주세요",
    validation: {
      required: "비밀번호를 확인해주세요.",
      check: "비밀번호가 일치하지 않습니다.",
    },
  },
  available: "이 비밀번호로 가입됩니다.",
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
