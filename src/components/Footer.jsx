import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/logo.png";

const footerAboutLinks = [
  {
    display: "درباره ما",
    link: "/about",
  },
  {
    display: "مشاغل",
    link: "/careers",
  },
  {
    display: "مطبوعات",
    link: "/press",
  },
  {
    display: "بلاگ",
    link: "/blog",
  },
  {
    display: "پاسخگویی به مشکلات",
    link: "/investor-relations",
  },
];

const footerCustomerLinks = [
  {
    display: "تماس با ما",
    link: "/contact",
  },
  {
    display: "ثبت سفارش",
    link: "/Order",
  },
  {
    display: "فرصت های شغلی",
    link: "/career-opportunities",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">آدرس ما</div>
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
            <div className="footer__title">با علی شاپ</div>
            <div className="footer__content">
              {footerAboutLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.link}>{link.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">خدمات مشتریان

</div>
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
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی علی شاپ سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
