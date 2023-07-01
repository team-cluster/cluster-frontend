import Link from "next/link";
import "./style.css";
import { Fragment } from "react";

const footerRoutes = [
  {
    label: "컨텐츠",
    route: "/content",
  },
  {
    label: "팀원모집",
    route: "/recruit",
  },
  {
    label: "정오표",
    route: "/correction",
  },
  {
    label: "배포",
    route: "/release",
  },
];

export default function FooterGrid() {
  return (
    <div className="footer-grid">
      {footerRoutes.map(({ label, route }, i) => {
        return (
          <Fragment key={"ft" + i}>
            <Link href={route} className="footer-link">
              {label}
            </Link>
            {i !== footerRoutes.length - 1 && (
              <h4 className="footer-link">/</h4>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
