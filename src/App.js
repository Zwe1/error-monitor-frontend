import React, { useEffect, useState } from "react";
import { getList } from "ajax";
import List from "com/ErrorContent/index";
import logo from "./logo.svg";
import "./App.css";

const request = async doo => {
  const l = await getList();
  doo(l);
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // throw new Error("1111");
    request(setList);
  }, []);

  console.log("----------", list);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Error Monitor</p>
        <List list={list} />
      </header>
    </div>
  );
}

export default App;
