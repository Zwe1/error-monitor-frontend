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
          sourcemap = "{}",
          message,
          stack
        }) => {
          const content = stack.replace(/\sat/g, `<br/>at`);
          const {
            source,
            line: sline = "--",
            column: scolumn = "--",
            sname = "--"
          } = JSON.parse(sourcemap);

          return (
            <li key={id}>
              <div>错误文件名: {filename}</div>
              <div>
                行号: {line || "--"}; 列号: {col || "--"};
              </div>
              <div>
                用户名: {user_name}; 租户: {tenant}
              </div>
              <div>
                <div>错误: {message}</div>
                {source && (
                  <div>
                    错误原始文件：{source}, 错误行：{sline}, 错误列: {scolumn},
                    名称:{sname}
                  </div>
                )}
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
