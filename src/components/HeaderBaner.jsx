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
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="header-baner__item__info__description">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              inventore delectus? Non, asperiores earum! Quisquam nesciunt
              architecto dolore. Excepturi alias magnam itaque? Culpa enim
              mollitia doloribus eaque ea est aliquam.
            </span>
          </div>
          <div className="header-baner__item__info__btn">
            <Link to="/"></Link>
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

export default HeaderBaner;
