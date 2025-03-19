
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your backend
      console.log('Subscribed email:', email);
      setEmail('');
    }
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
          </div>
          
          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground">Join our newsletter</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-[600px]">
              Stay updated with our latest products, design insights, and exclusive offers.
            </p>
            
            {submitted ? (
              <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
                <p className="text-primary-foreground font-medium">Thank you for subscribing!</p>
                <p className="text-primary-foreground/80 text-sm mt-1">We'll be in touch with exclusive offers soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 rounded-full px-4 py-2.5 bg-primary-foreground text-primary border-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-foreground/20"
                    required
                  />
                  <button 
                    type="submit" 
                    className="button-secondary sm:flex-shrink-0 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-xs text-primary-foreground/70">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
