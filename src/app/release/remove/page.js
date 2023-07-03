"use client";

import { gql, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const DELETE_ERRATA = gql`
  mutation Delete($id: ID!) {
    removeExamination(errataId: $id) {
      __typename
    }
  }
`;

export default function ReleaseDelete() {
  const searchParams = useSearchParams();
  const [mutation, { loading }] = useMutation(DELETE_ERRATA);
  const [result, setResult] = useState(
    "비정상적인 접근이거나 삭제 권한이 없습니다."
  );
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      mutation({ variables: { id: id } }).then((info) => {
        if (
          info.data &&
          info.data.removeErrata.__typename === "ErrataRemoved"
        ) {
          setResult("삭제되었습니다.");
        }
      });
    }
  }, []);

  return (
    <div className="geist-wrapper">
      <h1 className="text-xl font-bold">{loading ? "로딩중.." : result}</h1>
    </div>
  );
}
