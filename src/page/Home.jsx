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

const Home = () => {
  return (
    <Hamlet title="Home">
      <HeaderBaner color="blue" />

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
        <SectionTitle>Best products</SectionTitle>
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
    </Hamlet>
  );
};

export default Home;
