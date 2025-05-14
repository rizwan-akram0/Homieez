import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, CheckCircle, ShieldCheck, Users, CreditCard } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../components/PropertyCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/ui/button";
import { featuredProperties, properties } from "../data/mock";
import { Card, CardContent } from "../components/ui/card";

export function HomePage() {
  // Testimonials data
  const testimonials = [
    {
      name: "Hamza Ahmed",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      role: "Student at LUMS",
      text: "HomieeZ made it super easy to find a verified apartment near my university. The verification process gave me peace of mind!",
      rating: 5,
    },
    {
      name: "Muhammad Ali",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      role: "Young Professional",
      text: "Finding a roommate was my biggest worry, but the matching system connected me with someone compatible. We're now good friends!",
      rating: 4,
    },
    {
      name: "Bilal Hassan",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      role: "Landlord",
      text: "As a property owner, I love the verification system. It helps me find reliable tenants and the payment processing is seamless.",
      rating: 5,
    },
  ];

  // Partner logos (using text for simplicity)
  const partners = [
    "UET",
    "LUMS University",
    "NUST",
    "FAST NUCES",
    "Habib University",
    "IBA",
    "GIKI",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Find Your Perfect Home Away From Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Verified properties, trusted roommates, and secure payments all in one place.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary-500" />
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary-500" />
              <span>Matched Roommates</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary-500" />
              <span>NADRA Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-secondary-500" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container mx-auto px-4 py-9">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Featured Properties</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Handpicked properties for you to explore</p>
          </div>
          <Link to="/search">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} featured />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-neutral-50 dark:bg-neutral-800 py-9">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">How HomieeZ Works</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Simple steps to find your perfect living space with security and peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Search</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Browse verified properties matching your preferences and budget.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Connect</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Chat with landlords or find compatible roommates through our matching system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Verify</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Complete NADRA & Police verification for enhanced security on both sides.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Move In</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Make secure payments and enjoy your new home with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-9">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">What Our Users Say</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Hear from students, young professionals, and landlords who found success with HomieeZ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              role={testimonial.role}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-9">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Are You a Property Owner?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            List your properties on HomieeZ and connect with verified tenants. It's free to get started!
          </p>
          <Link to="/list-property">
            <Button className="bg-white text-secondary-600 hover:bg-neutral-100 text-lg px-8 py-3 h-auto">
              List Your Property
            </Button>
          </Link>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 py-9">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Popular Locations in Lahore
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover properties in Lahore's most sought-after neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(() => {
              // Get unique areas and count properties in each
              const locationStats = properties.reduce((acc, property) => {
                const area = property.location.area;
                if (!acc[area]) {
                  acc[area] = {
                    count: 1,
                    description: getAreaDescription(area)
                  };
                } else {
                  acc[area].count++;
                }
                return acc;
              }, {} as Record<string, { count: number; description: string }>);

              // Convert to array and sort by property count
              return Object.entries(locationStats)
                .sort(([, a], [, b]) => b.count - a.count)
                .map(([area, stats]) => (
                  <Link
                    key={area}
                    to={`/search?location=${encodeURIComponent(area)}`}
                    className="group"
                  >
                    <Card className="h-full transition-transform hover:scale-105">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary-600">
                          {area}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                          {stats.description}
                        </p>
                        <p className="text-sm text-primary-600">
                          {stats.count} properties
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ));
            })()}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-9">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold">Our Partners</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Trusted by leading universities and organizations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-neutral-500 dark:text-neutral-400 font-heading font-bold text-xl"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

import { Search } from "lucide-react";

// Helper function to get area descriptions
function getAreaDescription(area: string): string {
  const descriptions: Record<string, string> = {
    "DHA": "Defense Housing Authority - Premium gated community",
    "Gulberg": "Prime commercial & residential area with excellent amenities",
    "Model Town": "Prestigious residential area with parks and schools",
    "PIA Society": "Peaceful residential society near airport",
    "Thokar Niaz Baig": "Affordable housing near Ring Road",
    "G1-Market": "Commercial hub with residential apartments",
    "University Road": "Student-friendly area near educational institutions"
  };
  return descriptions[area] || "Vibrant neighborhood in Lahore";
}