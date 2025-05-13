import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Home, Bed, Bath, CheckSquare, Heart, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatCurrency } from "../lib/utils";
import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const {
    id,
    title,
    price,
    location,
    images,
    bedrooms,
    bathrooms,
    type,
    verified,
  } = property;

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md group", 
      featured ? "border-secondary-500 dark:border-secondary-600" : ""
    )}>
      <div className="relative">
        <Link to={`/properties/${id}`}>
          <div className="overflow-hidden aspect-[16/9]">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        
        {featured && (
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2"
          >
            Featured
          </Badge>
        )}
        
        {verified && (
          <Badge 
            variant="success" 
            className="absolute top-2 right-2 flex items-center gap-1"
          >
            <CheckSquare className="h-3 w-3" />
            Verified
          </Badge>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-2 right-2 bg-white/90 text-neutral-700 hover:bg-white hover:text-primary-600 rounded-full"
          aria-label="Save property"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-1 text-neutral-500 text-sm">
          <MapPin className="h-3 w-3" />
          <span>{location.area}, {location.city}</span>
        </div>
        
        <Link to={`/properties/${id}`}>
          <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-xl font-heading font-bold text-primary-600 mb-3">
          {formatCurrency(price)}<span className="text-neutral-500 text-sm font-normal"> / month</span>
        </p>
        
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span className="capitalize">{type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="w-1/2">
          <Heart className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Link to={`/properties/${id}`} className="w-1/2">
          <Button className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

import { cn } from "../lib/utils";