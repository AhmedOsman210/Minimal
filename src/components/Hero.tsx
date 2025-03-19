
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section 
      className={cn(
        "relative py-20 md:py-32 overflow-hidden", 
        className
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex animate-fade-in opacity-0 items-center rounded-full border border-border/60 bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Introducing Minimal
          </span>
          
          <h1 className="mt-6 animate-slide-up opacity-0 text-4xl font-medium md:text-6xl lg:text-7xl tracking-tight" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Designed with purpose, <br /> 
            <span className="text-gradient bg-gradient-to-r from-foreground to-foreground/70">crafted with care</span>
          </h1>
          
          <p className="mt-6 animate-slide-up opacity-0 text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Discover our collection of thoughtfully designed products that blend beauty with functionality. Every detail matters.
          </p>
          
          <div className="mt-8 animate-fade-in opacity-0 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Link to="/products" className="button-primary">
              Explore Products
            </Link>
            <Link to="/about" className="button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
}
