import React, { useState, useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/mock";
import { Property } from "../types";
import { useSearchParams } from "react-router-dom";
import { MapPin } from "lucide-react";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const location = searchParams.get("location");

  useEffect(() => {
    let filtered = [...properties];

    // Filter by location if provided
    if (location) {
      filtered = filtered.filter(property =>
        property.location.area.toLowerCase().includes(location.toLowerCase()) ||
        property.location.city.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by other params if needed (budget, type, etc.)
    const budget = searchParams.get("budget");
    if (budget) {
      const [min, max] = budget.split("-").map(Number);
      filtered = filtered.filter(property => {
        if (max) {
          return property.price >= min && property.price <= max;
        }
        // Handle "100000+" case
        return property.price >= min;
      });
    }

    const type = searchParams.get("type");
    if (type) {
      filtered = filtered.filter(property =>
        property.type.toLowerCase() === type.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  }, [searchParams, location]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-4">Search Properties</h1>
          {location && (
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-4">
              <MapPin className="h-5 w-5" />
              <span>Showing properties in {location}</span>
            </div>
          )}
          <SearchBar className="mb-6" />
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No properties found</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Try adjusting your search criteria to find more properties
            </p>
          </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
        )}

        {/* Results count */}
        {filteredProperties.length > 0 && (
          <div className="mt-6 text-neutral-600 dark:text-neutral-400">
            Found {filteredProperties.length} properties
          </div>
        )}
      </div>
    </MainLayout>
  );
}