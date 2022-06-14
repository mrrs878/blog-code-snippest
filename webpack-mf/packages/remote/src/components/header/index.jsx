/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 17:00:17
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-14 20:28:50
 */

import React, { useState } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Menu } from "antd";

const items = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Settings",
    key: "settings",
    disabled: true,
  },
  {
    label: "Profile",
    key: "profile",
  },
  {
    label: "About",
    key: "about",
  },
];

const Profile = React.lazy(() => import("host/Profile"));
const About = React.lazy(() => import("host/About"));
import Home from "host/Home";

const M = () => {
  const n = useNavigate();
  return <Menu onClick={(e) => n(e.key)} mode="horizontal" items={items} />;
};

const Header = () => (
  <React.Suspense fallback="Loading Button">
    <BrowserRouter>
      <M />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);

export default Header;
