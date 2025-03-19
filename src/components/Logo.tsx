
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <div className="relative h-8 w-8 mr-2">
        <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
        <div className="absolute inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-full"></div>
        <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
          <span className="text-xs font-medium text-primary">M</span>
        </div>
      </div>
      <span className="text-xl font-medium tracking-tight">Minimal</span>
    </Link>
  );
}
