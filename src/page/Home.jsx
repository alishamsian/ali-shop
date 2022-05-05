import React from "react";
import policy from "../assets/fake-data/policy";
import Hamlet from "../components/Hamlet";
import HeaderBaner from "../components/HeaderBaner";
import PolicyCard from "../components/PolicyCard";
import Section, { SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Hamlet title="Home">
      <HeaderBaner color="blue" />

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy">
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Hamlet>
  );
};

export default Home;
