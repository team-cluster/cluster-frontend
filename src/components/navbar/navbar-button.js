import Link from "next/link";
import "./style.css";

export default function NavbarButton() {
  return (
    <div className="navbar-button-wrapper">
      <Link href="/member/login" className="navbar-button">
        로그인
      </Link>
    </div>
  );
}
