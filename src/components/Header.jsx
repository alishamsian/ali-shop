import React, { useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const mainNav = [
  {
    display: "صفحه اصلی",
    link: "/",
  },
  {
    display: "محصولات",
    link: "/catalog",
  },
  {
    display: "درباره ما",
    link: "/about",
  },
  {
    display: "ارتباط با ما",
    link: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((nav) => nav.link === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  const menuRight = useRef(null);

  const menuToggle = () => {
    menuRight.current.classList.toggle("active");
  }

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-right"></i>
          </div>
          <div className="header__menu__right" ref={menuRight}>
            <div className="header__menu__right__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                onClick={menuToggle}
                className={`header__menu__right__item header__menu__item ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.link}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__left">
            <div className="header_menu__left__item header__menu__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header_menu__left__item header__menu__item ">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <Link to="/login">
                <i className="bx bx-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
