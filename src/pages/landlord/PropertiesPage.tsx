import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { PropertyCard } from '../../components/PropertyCard';
import {
    Plus,
    Search,
    Filter,
    Building,
    Users,
    Calendar,
    CheckCircle,
    Clock,
    XCircle
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { properties } from '../../data/mock';
import { formatCurrency } from '../../lib/utils';

export function LandlordPropertiesPage() {
    // Filter properties for this landlord (using first 6 for demo)
    const myProperties = properties.slice(0, 6);

    return (
        <DashboardLayout
            userType="landlord"
            userName="Imran Malik"
            userAvatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">My Properties</h1>
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Property
                    </Button>
                </div>

                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                    <Input placeholder="Search properties..." className="pl-9" />
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
                                <label className="text-sm font-medium mb-1 block">Status</label>
                                <Select defaultValue="">
                                    <option value="">All Status</option>
                                    <option value="available">Available</option>
                                    <option value="occupied">Occupied</option>
                                    <option value="maintenance">Under Maintenance</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Sort By</label>
                                <Select defaultValue="newest">
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="price-low">Price: Low to High</option>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {myProperties.map((property) => (
                        <Card key={property.id}>
                            <CardContent className="p-6">
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={property.images[0]}
                                        alt={property.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        {property.verified ? (
                                            <div className="bg-success-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Verified</span>
                                            </div>
                                        ) : (
                                            <div className="bg-warning-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>Pending</span>
                                            </div>
                                        )}
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
                                        <CheckCircle className="h-4 w-4 text-success-500" />
                                        <span className="text-sm">Active</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <p className="font-semibold text-primary-600">
                                        {formatCurrency(property.price)}<span className="text-sm font-normal text-neutral-500"> / month</span>
                                    </p>
                                    <Button variant="outline" size="sm">Manage</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600">Showing 1-6 of 12 properties</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 