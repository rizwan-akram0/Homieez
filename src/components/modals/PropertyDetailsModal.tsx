import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
    Building,
    Users,
    Calendar,
    MapPin,
    Home,
    Wifi,
    Tv,
    Car,
    Utensils,
    Wind,
    DoorOpen,
    Bath,
    Bed,
    Star,
    Heart
} from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

interface PropertyDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: {
        id: string;
        title: string;
        description: string;
        price: number;
        location: {
            area: string;
            city: string;
            coordinates: {
                lat: number;
                lng: number;
            };
        };
        type: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        images: string[];
        amenities: string[];
        rating: number;
        reviews: number;
        available: boolean;
        verified: boolean;
    };
}

export function PropertyDetailsModal({ isOpen, onClose, property }: PropertyDetailsModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{property.title}</DialogTitle>
                    <DialogDescription>
                        {property.location.area}, {property.location.city}
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="details" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="amenities">Amenities</TabsTrigger>
                        <TabsTrigger value="location">Location</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details">
                        {/* Image Gallery */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <div className="col-span-4 md:col-span-2 aspect-[4/3]">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 aspect-[4/3]">
                                <img
                                    src={property.images[1]}
                                    alt={property.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 aspect-[4/3]">
                                <img
                                    src={property.images[2]}
                                    alt={property.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Property Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Property Overview</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Building className="h-5 w-5 text-neutral-500" />
                                        <span className="capitalize">{property.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="h-5 w-5 text-neutral-500" />
                                        <span>{property.bedrooms} Bedrooms</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="h-5 w-5 text-neutral-500" />
                                        <span>{property.bathrooms} Bathrooms</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DoorOpen className="h-5 w-5 text-neutral-500" />
                                        <span>{property.size} sq ft</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Ratings & Reviews</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < property.rating
                                                    ? 'text-warning-500 fill-current'
                                                    : 'text-neutral-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-neutral-600">
                                        ({property.reviews} reviews)
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    {property.verified && (
                                        <Badge variant="success">Verified Property</Badge>
                                    )}
                                    {property.available && (
                                        <Badge variant="secondary">Available Now</Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Description</h3>
                            <p className="text-neutral-600">{property.description}</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="amenities">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {property.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2 p-3 rounded-lg border">
                                    {amenity === 'Wifi' && <Wifi className="h-5 w-5 text-primary-600" />}
                                    {amenity === 'TV' && <Tv className="h-5 w-5 text-primary-600" />}
                                    {amenity === 'Parking' && <Car className="h-5 w-5 text-primary-600" />}
                                    {amenity === 'Kitchen' && <Utensils className="h-5 w-5 text-primary-600" />}
                                    {amenity === 'AC' && <Wind className="h-5 w-5 text-primary-600" />}
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="location">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                            {/* Replace with actual map component */}
                            <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                <MapPin className="h-8 w-8 text-neutral-400" />
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-neutral-500 mt-1" />
                            <div>
                                <h4 className="font-medium">Location Details</h4>
                                <p className="text-sm text-neutral-600">
                                    {property.location.area}, {property.location.city}
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                <DialogFooter className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary-600">
                            {formatCurrency(property.price)}
                        </span>
                        <span className="text-neutral-500">/ month</span>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button>Schedule Viewing</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
} 