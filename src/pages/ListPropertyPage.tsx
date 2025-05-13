import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Upload, MapPin, Building, Bed, Bath, Plus, CheckCircle } from "lucide-react";

export function ListPropertyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-heading font-bold mb-4">List Your Property</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Reach thousands of verified tenants and manage your property with ease
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-4">Basic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Property Title</label>
                      <Input placeholder="e.g., Modern Apartment near University" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Property Type</label>
                      <Select>
                        <option value="">Select type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="room">Room</option>
                        <option value="hostel">Hostel</option>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <Textarea placeholder="Describe your property..." />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-4">Location</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <Select>
                        <option value="">Select city</option>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Area</label>
                      <Input placeholder="e.g., DHA Phase 5" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Complete Address</label>
                      <Input placeholder="Street address" />
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-4">Property Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Monthly Rent (PKR)</label>
                      <Input type="number" placeholder="e.g., 25000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bedrooms</label>
                      <Input type="number" placeholder="Number of bedrooms" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bathrooms</label>
                      <Input type="number" placeholder="Number of bathrooms" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Size (sq ft)</label>
                      <Input type="number" placeholder="Property size" />
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "WiFi",
                      "Air Conditioning",
                      "Fully Furnished",
                      "Kitchen",
                      "Washing Machine",
                      "TV",
                      "Parking",
                      "Security Guards",
                      "Backup Power"
                    ].map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-neutral-300" />
                        <span>{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div>
                  <h2 className="text-xl font-heading font-semibold mb-4">Property Images</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="aspect-square border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary-500 transition-colors"
                      >
                        <Upload className="h-8 w-8 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-500 mt-2">
                    Upload at least 4 high-quality images of your property
                  </p>
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Submit for Review</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}