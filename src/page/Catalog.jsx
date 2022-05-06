import React, {useRef} from "react";
import Hamlet from "../components/Hamlet";
import Grid from "../components/Grid";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import category from "../assets/fake-data/category";
import Button from "../components/Button";

const Catalog = () => {

  const filterRef = useRef(null)

  const showHideFilter = () => filterRef.current.classList.toggle("active")

  return (
    <Hamlet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter " ref={filterRef}>
          <div className="catalog__filter__close" onClick={()=> showHideFilter()}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">filter</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p className="catalog__filter__widget__content__item" key={index}>{item.display}</p>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">filter</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p className="catalog__filter__widget__content__item" key={index}>{item.display}</p>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">filter</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p className="catalog__filter__widget__content__item" key={index}>{item.display}</p>
              ))}
            </div>
          </div>
        </div>
          <div className="catalog__filter__toggle">
            <Button size="sm" onClick={()=>showHideFilter()}>filter</Button>
          </div>
        <div className="catalog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Hamlet>
  );
};

export default Catalog;
