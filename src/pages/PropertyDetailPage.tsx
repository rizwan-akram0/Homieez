import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Carousel } from "../components/ui/carousel";
import { getPropertyById } from "../data/mock";
import { formatCurrency } from "../lib/utils";
import { Building, MapPin, Users, Bath, Bed, CheckCircle, MessageSquare, Calendar } from "lucide-react";

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = getPropertyById(id || "");

  if (!property) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1>Property not found</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <Carousel images={property.images} />
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <h1 className="text-3xl font-heading font-bold mb-4">{property.title}</h1>
              <div className="flex items-center gap-4 mb-4 text-neutral-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location.area}, {property.location.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span className="capitalize">{property.type}</span>
                </div>
                {property.verified && (
                  <div className="flex items-center gap-1 text-success-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-neutral-500">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-neutral-500">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="font-semibold">4-6</p>
                    <p className="text-sm text-neutral-500">Capacity</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-heading font-semibold mb-3">Description</h2>
              <p className="text-neutral-600 mb-6">{property.description}</p>

              <h2 className="text-xl font-heading font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              {property.nearbyUniversities && property.nearbyUniversities.length > 0 && (
                <>
                  <h2 className="text-xl font-heading font-semibold mb-3">Nearby Universities</h2>
                  <ul className="list-disc list-inside mb-6 text-neutral-600">
                    {property.nearbyUniversities.map((uni) => (
                      <li key={uni}>{uni}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-3xl font-heading font-bold text-primary-600">
                    {formatCurrency(property.price)}
                    <span className="text-sm font-normal text-neutral-500"> / month</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Contact Landlord
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={property.landlord.avatar}
                      alt={property.landlord.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{property.landlord.name}</h3>
                      <p className="text-sm text-neutral-500">Property Owner</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">
                    Verified landlord with excellent response rate and multiple properties.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}