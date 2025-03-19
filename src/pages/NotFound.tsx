
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-9xl font-medium animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>404</h1>
        <p className="mt-6 text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="mt-8 button-primary animate-fade-in opacity-0" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
