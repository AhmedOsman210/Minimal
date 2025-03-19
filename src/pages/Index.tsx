
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Testimonial } from '@/components/Testimonial';
import { CTA } from '@/components/CTA';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minimal - Beautifully Designed Products";
  }, []);
  
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonial />
      <CTA />
    </Layout>
  );
};

export default Index;
