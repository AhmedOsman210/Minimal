
import React, { useRef, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

interface ProductShowcaseProps {
  className?: string;
}

const products = [
  {
    id: 1,
    title: "Minimal Speaker",
    description: "Precision-engineered sound with minimalist design aesthetics.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    price: "$299"
  },
  {
    id: 2,
    title: "Pure Watch",
    description: "Elegantly simple timepiece with essential functionality.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    price: "$199"
  },
  {
    id: 3,
    title: "Essence Lamp",
    description: "Subtle ambient lighting crafted with sustainable materials.",
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=1000&auto=format&fit=crop",
    price: "$149"
  },
  {
    id: 4,
    title: "Purity Vase",
    description: "Handcrafted ceramic with clean lines and perfect proportions.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000&auto=format&fit=crop",
    price: "$89"
  }
];

export function ProductShowcase({ className }: ProductShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const children = containerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i]);
        // Set initial state
        children[i].classList.add('opacity-0');
        (children[i] as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      }
    }
    
    return () => {
      if (containerRef.current) {
        const children = containerRef.current.children;
        for (let i = 0; i < children.length; i++) {
          observer.unobserve(children[i]);
        }
      }
    };
  }, []);
  
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Featured Products</h2>
            <p className="mt-2 text-muted-foreground max-w-[600px]">
              Discover our collection of thoughtfully designed products.
            </p>
          </div>
          <a href="/products" className="mt-4 md:mt-0 button-secondary">
            View All
          </a>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
