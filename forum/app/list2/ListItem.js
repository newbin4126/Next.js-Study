"use client";
import Link from "next/link";

import { useEffect } from "react";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link prefetch={false} href={"/detail/" + a._id}>
            <h4>{a.title}</h4>
          </Link>
          <Link href={"/edit/" + a._id}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: a._id,
              })
                .then((r) => {
                  if (r.status == 200) {
                    return r.json();
                  } else {
                    //서버가 에러코드전송시 실행할코드
                  }
                })
                .then((result) => {
                  //성공시 실행할코드
                })
                .catch((error) => {
                  //인터넷문제 등으로 실패시 실행할코드
                  console.log(error);
                });
            }}
          >
            🗑️
          </span>
          <p>1월1일</p>
        </div>
      ))}
    </div>
  );
}
