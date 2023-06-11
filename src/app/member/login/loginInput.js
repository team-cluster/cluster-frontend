import "./style.css";

export default function LoginInput() {
  return (
    <div className="id-wrapper">
      <p>이메일 주소</p>
      <div className="input-id-container">
        <input
          className="input-id"
          type="text"
          autocomplete="이메일 주소"
          defaultValue=""
        ></input>
      </div>
    </div>
  );
}
