/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 16:44:39
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-13 19:42:22
 */

import React from "react";
import './index.css';

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  )
};

export default Button;