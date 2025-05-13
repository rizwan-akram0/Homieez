import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { Calendar, Clock, MapPin, Search, Filter, CheckCircle, XCircle, Calendar as CalendarIcon } from 'lucide-react';

export function LandlordBookingsPage() {
    return (
        <DashboardLayout
            userType="landlord"
            userName="John Smith"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Viewing Requests</h1>

                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                    <Input placeholder="Search by tenant or property..." className="pl-9" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Status</label>
                                <Select defaultValue="">
                                    <option value="">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Property</label>
                                <Select defaultValue="">
                                    <option value="">All Properties</option>
                                    <option value="1">Sunset Apartments</option>
                                    <option value="2">Downtown Lofts</option>
                                    <option value="3">Harbor View Condos</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Date Range</label>
                                <Input type="date" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bookings List */}
                <div className="space-y-4">
                    {/* Booking Item */}
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                                        alt="Tenant"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">Michael Brown</h3>
                                        <p className="text-sm text-neutral-500">Viewing Request for Sunset Apartments</p>
                                    </div>
                                </div>
                                <Badge variant="warning">Pending</Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-neutral-500" />
                                    <span>Thursday, March 21, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-neutral-500" />
                                    <span>2:30 PM</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-neutral-500" />
                                    <span>123 Sunset Blvd, Unit 4B</span>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <Button variant="outline" size="sm">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Decline
                                </Button>
                                <Button size="sm">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Confirm
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* More Booking Items */}
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                                        alt="Tenant"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">Sarah Johnson</h3>
                                        <p className="text-sm text-neutral-500">Viewing Request for Downtown Lofts</p>
                                    </div>
                                </div>
                                <Badge variant="success">Confirmed</Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-neutral-500" />
                                    <span>Friday, March 22, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-neutral-500" />
                                    <span>4:00 PM</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-neutral-500" />
                                    <span>456 Downtown Ave, Unit 7A</span>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <Button variant="outline" size="sm">
                                    Reschedule
                                </Button>
                                <Button variant="destructive" size="sm">
                                    Cancel
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Calendar View Toggle */}
                <div className="mt-8 flex justify-end">
                    <Button variant="outline">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Switch to Calendar View
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
} 