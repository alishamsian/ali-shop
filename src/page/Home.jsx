import React from 'react'
import Hamlet from '../components/Hamlet'
import HeaderBaner from '../components/HeaderBaner'
import Section, { SectionBody } from '../components/Section'

const Home = () => {
  return (
    <Hamlet title="Home">
      <HeaderBaner
        color="blue"
      />

      <Section>
        <SectionBody>

        </SectionBody>
      </Section>

    </Hamlet>

  )
}

export default Home