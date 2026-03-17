import React from "react";

export default function Navbar() {
  return (
    <div className="bg-amber-600">
      <div className="container flex justify-between  mx-auto py-3 items-center">
        <div className="logo">Logo</div>
        <div className="middle">
          <ul className="flex justify-center gap-3">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="category">category</a>
            </li>
            <li>
              <a href="brand">brand</a>
            </li>
            <li>
              <a href="product"></a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="flex justify-center gap-2">
            <li>
              <a href="">facebook</a>
            </li>
            <li>
              <a href="">instagram</a>
            </li>
            <li>
              <a href="">twitter</a>
            </li>
          </ul>
        </div>
        <div className="auth">
          <ul className=" flex justify-center gap-1">
            <li>
              <a href="register">register</a>
            </li>
            <li>
              <a href="login">login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
