"use client";

import "./style.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

//GET요청 및 필터링
const tags = [
  {
    label: "/공부법/",
    route: "/column?tag=study",
  },
  {
    label: "/잡담/",
    route: "/column?tag=blah",
  },
  {
    label: "/태그1/",
    route: "/column?tag=tag1",
  },
  {
    label: "/태그2/",
    route: "/column?tag=tag2",
  },
  {
    label: "/태그3/",
    route: "/column?tag=tag3",
  },
  {
    label: "/태그4/",
    route: "/column?tag=tag4",
  },
  {
    label: "/태그5/",
    route: "/column?tag=tag5",
  },
  {
    label: "/태그6/",
    route: "/column?tag=tag6",
  },
];

export default function ColumnTitle() {
  const router = useSearchParams();
  const param = router.get("tag");

  return (
    <div className="column-title-wrapper">
      <div className="column-title">
        <h1>/칼럼 :</h1>
        <h4>대충칼럼페이지설명하는개까리한카피</h4>
      </div>
      <div className="column-tag-wrapper">
        <div className="column-tag-title">/태그자판기/</div>
        <div className="column-tag-list">
          {tags.map(({ label, route }, i) => {
            return (
              <div
                key={"tag" + i}
                className={
                  "/column?tag=" + param === route
                    ? "column-tag-selected"
                    : "column-tag"
                }
              >
                <Link
                  href={"/column?tag=" + param === route ? "/column" : route}
                >
                  {label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
