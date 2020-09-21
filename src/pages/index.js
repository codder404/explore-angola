import React from 'react';

import Hero from '../components/Hero';
import Image from '../components/ImageComp';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Image />
  </Layout>
)

export default IndexPage;
