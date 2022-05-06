import React from 'react'
import Hamlet from '../components/Hamlet'
import Section ,{SectionBody, SectionTitle} from '../components/Section'
import productData from "../assets/fake-data/products";
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';

const Product = props => {

  const product = productData.getProductBySlug(props.match.params.slug)

  const relatedProducts = productData.getProducts(8)

  return (
    <Hamlet title='Product'>
      <Section>
        <SectionTitle>
          <ProductView product={product} />
        </SectionTitle>
      </Section>
      <Section>
        <SectionTitle>
          loerm ipsum dolor sit amet
        </SectionTitle>
        <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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
    </Hamlet>
  )
}

export default Product