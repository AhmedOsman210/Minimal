
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  className?: string;
}

export function ProductCard({ id, title, description, image, price, className }: ProductCardProps) {
  return (
    <Link 
      to={`/products/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/40 bg-card p-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-secondary">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">{price}</span>
          <span className="inline-flex h-8 items-center justify-center rounded-full bg-secondary px-3 text-xs font-medium transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
