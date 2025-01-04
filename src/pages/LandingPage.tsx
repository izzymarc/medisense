import React from 'react';
    import { Header } from '../components/Header';
    import { Hero } from '../components/landing/Hero';
    import { Features } from '../components/landing/Features';
    import { Testimonials } from '../components/landing/Testimonials';
    import { CTASection } from '../components/landing/CTASection';
    import { Footer } from '../components/landing/Footer';

    export function LandingPage() {
      return (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Features />
          <Testimonials />
          <CTASection />
          <Footer />
        </div>
      );
    }
