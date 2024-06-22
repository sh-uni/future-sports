import React from "react";
import './Header.css';
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import ContactUs from "./ContactUs";

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <div id="RHS">
        <Navigation />
        <Search />
        <ContactUs />
      </div>
    </div>
  );
} 