import FooterGrid from "./footergrid";
import FooterStack from "./footerstack";
import "./style.css";
import Image from "next/image";
import clusterLogoGrey from "/public/logo/cluster-logo-label-grey.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <Image
        src={clusterLogoGrey}
        width={81}
        height={30}
        alt="cluster-logo-grey"
        className="footer-logo"
      />
      <div className="footer-content">
        <FooterGrid />
        <FooterStack />
      </div>
    </div>
  );
}
