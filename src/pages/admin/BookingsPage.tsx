import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    Calendar,
    Building,
    User,
    CheckCircle,
    XCircle,
    Clock,
    MoreVertical,
    Download
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { formatCurrency } from '../../lib/utils';

// Mock bookings data (replace with actual data from your backend)
const bookings = [
    {
        id: 1,
        propertyName: "Luxury Apartment 301",
        propertyImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        tenant: "Usman Ali",
        checkIn: "2024-04-01",
        checkOut: "2024-04-30",
        status: "confirmed",
        amount: 2500
    },
    // Add more mock data as needed
];

export function AdminBookingsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Bookings Management</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export List
                        </Button>
                        <Button>Add Booking</Button>
                    </div>
                </div>

                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                                <Input
                                    placeholder="Search bookings..."
                                    className="pl-10"
                                />
                            </div>
                            <Select defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                            </Select>
                            <Input type="date" placeholder="Check-in date" />
                            <Input type="date" placeholder="Check-out date" />
                        </div>
                    </CardContent>
                </Card>

                {/* Bookings Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-4 px-6 font-medium">Property</th>
                                        <th className="text-left py-4 px-6 font-medium">Tenant</th>
                                        <th className="text-left py-4 px-6 font-medium">Check-in</th>
                                        <th className="text-left py-4 px-6 font-medium">Check-out</th>
                                        <th className="text-left py-4 px-6 font-medium">Status</th>
                                        <th className="text-left py-4 px-6 font-medium">Amount</th>
                                        <th className="text-left py-4 px-6 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={booking.propertyImage}
                                                        alt={booking.propertyName}
                                                        className="h-12 w-12 rounded-md object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{booking.propertyName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-neutral-500" />
                                                    <span>{booking.tenant}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(booking.checkIn).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(booking.checkOut).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${booking.status === 'confirmed' ? 'bg-success-100 text-success-600' :
                                                        booking.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                                                            'bg-error-100 text-error-600'}`}
                                                >
                                                    {booking.status === 'confirmed' ? <CheckCircle className="h-3 w-3" /> :
                                                        booking.status === 'pending' ? <Clock className="h-3 w-3" /> :
                                                            <XCircle className="h-3 w-3" />}
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="font-medium">{formatCurrency(booking.amount)}</span>
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