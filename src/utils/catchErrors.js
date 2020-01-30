/**
 * 拦截全局错误
 */
const globlalyCatchErrors = () => {
  window.addEventListener(
    "error",
    (msg, url, row, col, error) => {
      console.log(msg, url, row, col, error);
      return true;
    },
    true
  );
};
