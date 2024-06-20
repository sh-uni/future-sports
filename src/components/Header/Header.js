import React from "react";
import './Header.css';
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <div id="RHS">
        <Navigation />
        {/*<Search />*/}
      </div>
    </div>
  );
} 