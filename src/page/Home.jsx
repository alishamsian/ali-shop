import React from "react";
import policy from "../assets/fake-data/policy";
import Hamlet from "../components/Hamlet";
import HeaderBaner from "../components/HeaderBaner";
import PolicyCard from "../components/PolicyCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";

import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

import banner from "../assets/images/blackfriday-banner.png";

const Home = () => {
  return (
    <Hamlet title="Home">
      <HeaderBaner color="orange" />

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best section */}

      <Section>
        <SectionTitle>بهترین محصولات هفته</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
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
        </SectionBody>
      </Section>

      {/* end best section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>محصولات جدید</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
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
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img className="banner-bottom" src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>محصولات پرطرفدار</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
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
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Hamlet>
  );
};

export default Home;
