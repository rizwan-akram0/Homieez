import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    CheckCircle,
    MessageSquare,
    Phone,
    Mail,
    MoreVertical,
    Calendar,
    Building
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { users } from '../../data/mock';

export function LandlordTenantsPage() {
    // Filter users who are tenants (using first 8 for demo)
    const tenants = users.filter(user => user.role === 'tenant').slice(0, 8);

    return (
        <DashboardLayout
            userType="landlord"
            userName="Fatima Khan"
            userAvatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Manage Tenants</h1>

                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                    <Input placeholder="Search tenants..." className="pl-9" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Property</label>
                                <Select defaultValue="">
                                    <option value="">All Properties</option>
                                    <option value="1">Modern Apartment near University</option>
                                    <option value="2">Cozy Studio in City Center</option>
                                    <option value="3">Luxury Penthouse with Terrace</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Status</label>
                                <Select defaultValue="">
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="former">Former</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Sort By</label>
                                <Select defaultValue="newest">
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="name-asc">Name: A to Z</option>
                                    <option value="name-desc">Name: Z to A</option>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tenants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {tenants.map((tenant) => (
                        <Card key={tenant.id}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="relative">
                                        <img
                                            src={tenant.avatar}
                                            alt={tenant.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        {tenant.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-success-500 text-white p-1 rounded-full">
                                                <CheckCircle className="h-3 w-3" />
                                            </div>
                                        )}
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold">{tenant.name}</h3>
                                    <p className="text-sm text-neutral-500">
                                        Tenant since {new Date(tenant.joinedAt).toLocaleDateString()}
                                    </p>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Building className="h-4 w-4 text-neutral-500" />
                                        <span>Modern Apartment near University</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4 text-neutral-500" />
                                        <span>Lease ends {new Date('2024-12-31').toLocaleDateString()}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Message
                                    </Button>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button variant="outline" size="icon">
                                            <Phone className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Mail className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600">Showing 1-8 of 24 tenants</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 