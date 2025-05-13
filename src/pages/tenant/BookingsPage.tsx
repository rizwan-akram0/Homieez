import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { bookings } from '../../data/mock';
import { formatCurrency } from '../../lib/utils';

export function TenantBookingsPage() {
    // Filter bookings by status
    const activeBookings = bookings.filter(b => b.status === 'confirmed');
    const pendingBookings = bookings.filter(b => b.status === 'pending');
    const pastBookings = bookings.filter(b => b.status === 'completed');

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">My Bookings</h1>

                {/* Active Bookings */}
                <div className="mb-8">
                    <h2 className="text-xl font-heading font-semibold mb-4">Active Bookings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeBookings.map((booking) => (
                            <Card key={booking.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={booking.property.images[0]}
                                            alt={booking.property.title}
                                            className="w-24 h-24 rounded-lg object-cover"
                                        />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold mb-1">{booking.property.title}</h3>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                {booking.property.location.area}, {booking.property.location.city}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-success-600">
                                                <CheckCircle className="h-4 w-4" />
                                                <span>Active</span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-sm text-neutral-600">
                                                    Until {new Date(booking.endDate).toLocaleDateString()}
                                                </p>
                                                <p className="font-semibold text-primary-600">
                                                    {formatCurrency(booking.totalAmount)} / month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t flex justify-end gap-2">
                                        <Button variant="outline" size="sm">
                                            <MessageSquare className="h-4 w-4 mr-2" />
                                            Contact Landlord
                                        </Button>
                                        <Button size="sm">View Details</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Pending Bookings */}
                <div className="mb-8">
                    <h2 className="text-xl font-heading font-semibold mb-4">Pending Bookings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pendingBookings.map((booking) => (
                            <Card key={booking.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={booking.property.images[0]}
                                            alt={booking.property.title}
                                            className="w-24 h-24 rounded-lg object-cover"
                                        />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold mb-1">{booking.property.title}</h3>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                {booking.property.location.area}, {booking.property.location.city}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-warning-600">
                                                <Clock className="h-4 w-4" />
                                                <span>Pending Approval</span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-sm text-neutral-600">
                                                    Requested for {new Date(booking.startDate).toLocaleDateString()}
                                                </p>
                                                <p className="font-semibold text-primary-600">
                                                    {formatCurrency(booking.totalAmount)} / month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t flex justify-end gap-2">
                                        <Button variant="outline" size="sm">Cancel Request</Button>
                                        <Button size="sm">View Details</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Past Bookings */}
                <div>
                    <h2 className="text-xl font-heading font-semibold mb-4">Past Bookings</h2>
                    <Card>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-3 px-4 font-medium">Property</th>
                                        <th className="text-left py-3 px-4 font-medium">Duration</th>
                                        <th className="text-left py-3 px-4 font-medium">Amount</th>
                                        <th className="text-left py-3 px-4 font-medium">Status</th>
                                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pastBookings.map((booking) => (
                                        <tr key={booking.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={booking.property.images[0]}
                                                        alt={booking.property.title}
                                                        className="w-10 h-10 rounded object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{booking.property.title}</p>
                                                        <p className="text-sm text-neutral-500">
                                                            {booking.property.location.area}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">
                                                <p className="text-sm">
                                                    {new Date(booking.startDate).toLocaleDateString()} -
                                                    {new Date(booking.endDate).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <p className="font-medium">{formatCurrency(booking.totalAmount)}</p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                    <XCircle className="h-4 w-4" />
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">
                                                <Button variant="ghost" size="sm">View Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
} 