/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 15:32:23
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-13 20:25:47
 */

import React from "react";
import { createRoot } from "react-dom/client";

import Button from "./components/button";

const App = () => (
  <div>
    <h1>remote</h1>
    <Button>click</Button>
  </div>
);

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
