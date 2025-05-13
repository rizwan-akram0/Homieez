import React, { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/mock";
import { Property } from "../types";

export function SearchPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-4">Search Properties</h1>
          <SearchBar className="mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}