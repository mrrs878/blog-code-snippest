/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 16:46:33
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-14 19:43:29
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from 'antd';
import "antd/dist/antd.css";

const RemoteHeader = React.lazy(() => import("remote/Header"));

const App = () => (
  <div>
      <React.Suspense fallback="Loading Button">
        <RemoteHeader />
      </React.Suspense>
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(<App />);
