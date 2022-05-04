import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/logo.png";

const footerAboutLinks = [
  {
    display: "About Us",
    link: "/about",
  },
  {
    display: "Careers",
    link: "/careers",
  },
  {
    display: "Press",
    link: "/press",
  },
  {
    display: "Blog",
    link: "/blog",
  },
  {
    display: "Investor Relations",
    link: "/investor-relations",
  },
];

const footerCustomerLinks = [
  {
    display: "Contact Us",
    link: "/contact",
  },
  {
    display: "Returns",
    link: "/returns",
  },
  {
    display: "Shipping",
    link: "/shipping",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Company</div>
            <div className="footer__content">
              <p>
                ali shamsain <strong>09395761796</strong>
              </p>
              <p>
                ali shamsain <strong>09395761796</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Lorem, ipsum.</div>
            <div className="footer__content">
              {footerAboutLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.link}>{link.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Lorem, ipsum.</div>
            <div className="footer__content">
              {footerCustomerLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.link}>{link.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ut veniam totam alias error hic enim sapiente atque incidunt
              minima!
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
