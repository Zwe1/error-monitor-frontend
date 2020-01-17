/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";
import { uploadError } from "ajax";
import emptyImg from "img/empty.png";
import { processErrorInfo } from "./processErrorInfo";
const userInfo = {
  user_id: "ein",
  user_name: "ein@mail.com",
  tenant: "mail"
};

// window.addEventListener(
//   "error",
//   (msg, url, row, col, error) => {
//     console.log(processErrorInfo(msg), url, row, col, error);
//     return true;
//   },
//   true
// );

export default class Guard extends React.Component {
  constructor(props) {
    super(props);
    this.pathname = "";
    this.state = { error: false, errorInfo: null };
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops?.location?.pathname !== this.pathname && this.state.error) {
      this.pathname = nextprops?.location?.pathname;
      this.setState({ error: false });
    }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    console.error("errorInfo", error, errorInfo);
    const params = {
      ...userInfo,
      ...processErrorInfo(error)
    };
    uploadError(params);
    this.setState({
      error: true,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error } = this.state;
    console.log("error", error);
    // Normally, just render children
    return this.state.error ? (
      <div className="error-boundary">
        <img src={emptyImg} alt="加载失败" />
        <p>页面加载失败，请刷新后重试！</p>
      </div>
    ) : (
      this.props.children
    );
  }
}
