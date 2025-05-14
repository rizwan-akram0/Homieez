import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    Building,
    MapPin,
    User,
    CheckCircle,
    XCircle,
    MoreVertical,
    Download
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { properties } from '../../data/mock';
import { formatCurrency } from '../../lib/utils';
import { Property } from '../../types';

// Helper function to format location
const formatLocation = (location: Property['location']): string => {
    return [location.city, location.area, location.address]
        .filter(Boolean)
        .join(', ');
};

export function AdminPropertiesPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Properties Management</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export List
                        </Button>
                        <Button>Add Property</Button>
                    </div>
                </div>

                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                                <Input
                                    placeholder="Search properties..."
                                    className="pl-10"
                                />
                            </div>
                            <Select defaultValue="all">
                                <option value="all">All Types</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="room">Room</option>
                                <option value="hostel">Hostel</option>
                            </Select>
                            <Select defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="verified">Verified</option>
                                <option value="unverified">Unverified</option>
                            </Select>
                            <Select defaultValue="newest">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="price-low">Price: Low to High</option>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Properties Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-4 px-6 font-medium">Property</th>
                                        <th className="text-left py-4 px-6 font-medium">Location</th>
                                        <th className="text-left py-4 px-6 font-medium">Landlord</th>
                                        <th className="text-left py-4 px-6 font-medium">Status</th>
                                        <th className="text-left py-4 px-6 font-medium">Price</th>
                                        <th className="text-left py-4 px-6 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map((property) => (
                                        <tr key={property.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={property.images[0]}
                                                        alt={property.title}
                                                        className="h-12 w-12 rounded-md object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{property.title}</p>
                                                        <p className="text-sm text-neutral-500">{property.type}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-neutral-500" />
                                                    <span>{formatLocation(property.location)}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-neutral-500" />
                                                    <span>{property.landlord.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${property.verified ? 'bg-success-100 text-success-600' : 'bg-warning-100 text-warning-600'}`}
                                                >
                                                    {property.verified ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                                    {property.verified ? 'Verified' : 'Unverified'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="font-medium">{formatCurrency(property.price)}</span>
                                                <span className="text-sm text-neutral-500">/month</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <Button variant="ghost" size="sm">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
} 