import Link from "next/link";
import "./style.css";

export default function NavbarButton() {
  return (
    <div className="navbar-button-wrapper">
      <Link href="/recruit" className="navbar-button">
        팀원모집
      </Link>
      <Link href="/login" className="navbar-button">
        로그인
      </Link>
    </div>
  );
}
