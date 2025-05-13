import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  Users, Shield, Home, MessageSquare, 
  CheckCircle, Award, MapPin, Phone, Mail 
} from "lucide-react";

export function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">About HomieeZ</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We're on a mission to make finding and renting properties easier, safer, and more
            accessible for everyone in Pakistan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Active Users", value: "10,000+" },
            { label: "Properties Listed", value: "5,000+" },
            { label: "Cities Covered", value: "15+" },
            { label: "Successful Bookings", value: "8,000+" },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-heading font-bold text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team working"
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                Founded in 2023, HomieeZ emerged from a simple observation: finding reliable
                rental properties and trustworthy roommates in Pakistan was unnecessarily
                complicated and often unsafe.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                We built HomieeZ to solve these challenges by creating a platform that
                prioritizes security, transparency, and user experience. Our verification
                system and secure payment process have revolutionized how people rent
                properties in Pakistan.
              </p>
              <div className="flex gap-4">
                <Button>Join Our Team</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Why Choose HomieeZ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary-600" />,
                title: "Verified Properties",
                description:
                  "Every property undergoes thorough verification to ensure safety and authenticity.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary-600" />,
                title: "Smart Matching",
                description:
                  "Our algorithm helps you find compatible roommates based on lifestyle preferences.",
              },
              {
                icon: <Home className="h-8 w-8 text-primary-600" />,
                title: "Quality Listings",
                description:
                  "Curated selection of properties meeting our high standards for comfort and safety.",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Ali Hassan",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              },
              {
                name: "Fatima Khan",
                role: "Head of Operations",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              },
              {
                name: "Usman Ali",
                role: "Tech Lead",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
              },
              {
                name: "Sarah Ahmed",
                role: "Marketing Director",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-heading font-semibold">{member.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Visit Us",
                content: "123 Main Street, F-7, Islamabad, Pakistan",
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                content: "+92 300 1234567",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                content: "info@homieez.com",
              },
            ].map((contact, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{contact.icon}</div>
                  <h3 className="font-heading font-semibold mb-2">{contact.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {contact.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}