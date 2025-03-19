
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  className?: string;
}

export function Testimonial({ className }: TestimonialProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24 bg-secondary/50", 
        className
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="animate-blur-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
              This product perfectly embodies the principles of good design - it's innovative, useful, aesthetic, understandable, unobtrusive, honest, long-lasting, thorough, environmentally friendly, and involves as little design as possible.
            </blockquote>
            <div className="mt-8">
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Design Director, Artful Living</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
