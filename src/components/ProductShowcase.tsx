
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  },
  {
    id: 5,
    title: "Echo Headphones",
    description: "Noise-cancelling headphones with pristine audio quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    price: "$249"
  },
  {
    id: 6,
    title: "Serenity Chair",
    description: "Ergonomic design meets contemporary aesthetics for ultimate comfort.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    price: "$399"
  },
  {
    id: 7,
    title: "Clarity Glasses",
    description: "Lightweight frames with blue light filtering for digital life.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
    price: "$129"
  },
  {
    id: 8,
    title: "Aura Diffuser",
    description: "Essential oil diffuser with ambient light and minimal footprint.",
    image: "https://images.unsplash.com/photo-1602910344079-28d7dbc45a38?q=80&w=1000&auto=format&fit=crop",
    price: "$79"
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
              Discover our collection of thoughtfully designed products that combine beauty with functionality.
            </p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0 button-secondary">
            View All
          </Link>
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
