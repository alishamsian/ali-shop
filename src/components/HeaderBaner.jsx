import Button from "./Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import headerBaner from "../assets/images/header-baner.png";

const HeaderBaner = (props) => {
  return (
    <div className="header-baner">
      <div className={`header-baner__item active`}>
        <div className="header-baner__item__info">
          <div
            className={`header-baner__item__info__title color-${props.color}`}
          >
            <span>علی شاپ فروشگاهی برای خانواده</span>
          </div>
          <div className="header-baner__item__info__description">
            <span>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای، 
            </span>
          </div>
          <div className="header-baner__item__info__btn">
            <Link to="/">
              <Button
                backgroundColor={props.color}
                icon="bx bx-cart"
                animate={true}
              >
                اطلاعات بیشتر
              </Button>
            </Link>
          </div>
        </div>
        <div className="header-baner__item__image">
          <div className={`shape bg-${props.color}`}>
            <img src={headerBaner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderBaner.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HeaderBaner;
