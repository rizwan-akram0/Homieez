import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Search, Filter, Heart, Share2, MapPin, Building, Users, Calendar } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { properties } from '../../data/mock';
import { formatCurrency } from '../../lib/utils';

export function SavedPropertiesPage() {
    // Mock saved properties (using first 6 for demo)
    const savedProperties = properties.slice(0, 6);

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Saved Properties</h1>

                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                    <Input placeholder="Search saved properties..." className="pl-9" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Property Type</label>
                                <Select defaultValue="">
                                    <option value="">All Types</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="house">House</option>
                                    <option value="room">Room</option>
                                    <option value="hostel">Hostel</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Price Range</label>
                                <Select defaultValue="">
                                    <option value="">Any Price</option>
                                    <option value="0-25000">Under 25,000</option>
                                    <option value="25000-50000">25,000 - 50,000</option>
                                    <option value="50000-100000">50,000 - 100,000</option>
                                    <option value="100000+">Above 100,000</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Sort By</label>
                                <Select defaultValue="newest">
                                    <option value="newest">Recently Saved</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {savedProperties.map((property) => (
                        <Card key={property.id}>
                            <CardContent className="p-6">
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={property.images[0]}
                                        alt={property.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 flex gap-2">
                                        <Button variant="secondary" size="icon" className="rounded-full">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" className="rounded-full">
                                            <Heart className="h-4 w-4" fill="currentColor" />
                                        </Button>
                                    </div>
                                </div>

                                <h3 className="font-semibold mb-2">{property.title}</h3>
                                <p className="text-sm text-neutral-600 mb-4">
                                    {property.location.area}, {property.location.city}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Building className="h-4 w-4 text-neutral-500" />
                                        <span className="text-sm capitalize">{property.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-neutral-500" />
                                        <span className="text-sm">4-6 Tenants</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-neutral-500" />
                                        <span className="text-sm">Available Now</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-neutral-500" />
                                        <span className="text-sm">2.5 km away</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <p className="font-semibold text-primary-600">
                                        {formatCurrency(property.price)}<span className="text-sm font-normal text-neutral-500"> / month</span>
                                    </p>
                                    <Button>View Details</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600">Showing 1-6 of 12 saved properties</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 