import React, { useEffect } from "react";
import { OL } from "./styles";

function List({ list }) {
  useEffect(() => {
    // throw new Error("22");
  }, []);

  return (
    <OL>
      {list.map(
        ({
          id,
          col,
          line,
          filename = "--",
          user_name = "--",
          tenant = "--",
          message,
          stack
        }) => {
          const content = stack.replace(/\sat/g, `<br/>at`);
          return (
            <li key={id}>
              <div>错误文件名: {filename}</div>
              <div>
                行号: {line}; 列号: {col};
              </div>
              <div>
                用户名: {user_name}; 租户: {tenant}
              </div>
              <div>
                <div>错误: {message}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `堆栈信息: ${content}`
                  }}
                />
                {/* <span>堆栈信息:</span>
                  {stack.split("↵").map(c => (
                    <span>{c}</span>
                  ))}
                </div> */}
              </div>
            </li>
          );
        }
      )}
    </OL>
  );
}

export default List;
