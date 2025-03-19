
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <div 
      className="animate-scale-in opacity-0 flex flex-col items-center text-center p-4" 
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        {icon}
      </div>
      <h3 className="mt-2 text-lg font-medium">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

interface FeaturesProps {
  className?: string;
}

export function Features({ className }: FeaturesProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight">Beautiful Design Principles</h2>
          <p className="mt-4 text-muted-foreground mx-auto max-w-[700px]">
            Our products are designed with these principles in mind, ensuring a seamless and delightful experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            }
            title="Simplicity"
            description="Less, but better. We focus on the essential aspects, eliminating the unnecessary."
            delay={0.3}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
            }
            title="Intuitive"
            description="Our products are easy to understand and use, requiring minimal learning."
            delay={0.5}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            }
            title="Precise"
            description="Every detail is carefully considered and precisely executed."
            delay={0.7}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"></path>
                <path d="M21 11v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"></path>
                <path d="M12 2v14"></path>
                <path d="m19 5-7-3-7 3"></path>
              </svg>
            }
            title="Honest"
            description="Our products don't pretend to be something they're not."
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
}
