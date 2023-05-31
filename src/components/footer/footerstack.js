import Link from "next/link";
import "./style.css";

export default function FooterStack() {
  return (
    <div className="footer-stack">
      <p>© Cluster, ALL RIGHTS RESERVED.</p>
      <p>클러스터 대표 윤홍빈</p>
      <p>
        주소: 서울특별시 강남구 자곡로 260, 417동 203호(자곡동, 강남한양수자인)
        / 사업자등록번호: 115-90-01414{" "}
      </p>
      <p> 이메일: cluster@clusterkice.kr</p>
      <Link href="#" className="font-semibold">
        이용약관 및 개인정보보호정책
      </Link>
    </div>
  );
}
