
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

// Using the same products data from ProductShowcase component
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

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minimal - Our Products";
  }, []);

  return (
    <Layout>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent"></div>
        <div className="absolute top-[15%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-secondary/15 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent inline-block mb-3">Discover Excellence</div>
          <h1 className="text-4xl font-medium md:text-5xl tracking-tight mb-6">Our Products</h1>
          <p className="text-muted-foreground text-lg">
            Explore our collection of thoughtfully designed products that combine beauty with functionality. Every detail matters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </Layout>
  );
};

export default Products;
