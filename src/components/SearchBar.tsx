import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Map, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Button } from "./ui/button";

interface SearchBarProps {
  variant?: "default" | "compact";
  className?: string;
}

export function SearchBar({ variant = "default", className }: SearchBarProps) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create search params
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (budget) params.append("budget", budget);
    if (roomType) params.append("type", roomType);
    
    // Navigate to search page with query params
    navigate({
      pathname: "/search",
      search: params.toString()
    });
  };

  if (variant === "compact") {
    return (
      <form 
        onSubmit={handleSubmit}
        className={`flex items-center rounded-md border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-800 overflow-hidden ${className}`}
      >
        <Input
          placeholder="Search for location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-grow border-0 focus-visible:ring-0"
        />
        <Button 
          type="submit" 
          className="rounded-none"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-md ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Location
          </label>
          <div className="relative">
            <Input
              id="location"
              placeholder="City, area or address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-9"
            />
            <Map className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Budget
          </label>
          <Select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Any budget</option>
            <option value="10000-20000">PKR 10,000 - 20,000</option>
            <option value="20000-30000">PKR 20,000 - 30,000</option>
            <option value="30000-50000">PKR 30,000 - 50,000</option>
            <option value="50000-100000">PKR 50,000 - 100,000</option>
            <option value="100000+">PKR 100,000+</option>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="property-type" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Property Type
          </label>
          <Select
            id="property-type"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">Any type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="hostel">Hostel</option>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-end">
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Advanced filters
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </form>
  );
}