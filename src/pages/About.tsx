
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minimal - About Us";
  }, []);

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-medium md:text-5xl tracking-tight mb-6">About Minimal</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              At Minimal, we believe in the power of thoughtful design to enhance everyday life. 
              Our journey began with a simple question: how can we create products that are not only beautiful 
              but also truly functional and sustainable?
            </p>
            
            <h2 className="text-2xl font-medium mt-12 mb-4">Our Philosophy</h2>
            <p className="mb-6">
              We craft products that embody three core principles:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Purposeful Simplicity</strong> — Every detail serves a function with nothing superfluous or wasteful.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Thoughtful Materials</strong> — We select sustainable, high-quality materials that age beautifully.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Human-Centered Design</strong> — Products that respect how people actually live and work.</span>
              </li>
            </ul>
            
            <div className="my-12 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1000&auto=format&fit=crop" 
                alt="Minimal design studio" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <h2 className="text-2xl font-medium mt-12 mb-4">Our Process</h2>
            <p className="mb-8">
              Each Minimal product begins with careful observation of real human needs. Our designers and engineers 
              work collaboratively to solve practical problems through elegant solutions. We prototype, test, 
              refine, and repeat until we've created something truly worthwhile—something that brings a touch of 
              beauty and utility into your everyday routine.
            </p>
            
            <h2 className="text-2xl font-medium mt-12 mb-4">Join Us</h2>
            <p className="mb-6">
              We invite you to explore our collection and experience the difference that thoughtful design can make. 
              Whether it's the perfect lamp for your reading nook or headphones that transform your commute, 
              Minimal products are designed to enhance your life in small but meaningful ways.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
