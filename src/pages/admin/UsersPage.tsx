import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    CheckCircle,
    XCircle,
    Clock,
    MoreVertical,
    Shield,
    User,
    Building,
    Calendar
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { users } from '../../data/mock';

export function AdminUsersPage() {
    // Get all users (using first 10 for demo)
    const allUsers = users.slice(0, 10);

    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Users Management</h1>
                    <Button>Add New User</Button>
                </div>

                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                    <Input placeholder="Search users..." className="pl-9" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Role</label>
                                <Select defaultValue="">
                                    <option value="">All Roles</option>
                                    <option value="tenant">Tenant</option>
                                    <option value="landlord">Landlord</option>
                                    <option value="admin">Admin</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Status</label>
                                <Select defaultValue="">
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="suspended">Suspended</option>
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

                {/* Users Table */}
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                    <th className="text-left py-3 px-4 font-medium">User</th>
                                    <th className="text-left py-3 px-4 font-medium">Role</th>
                                    <th className="text-left py-3 px-4 font-medium">Status</th>
                                    <th className="text-left py-3 px-4 font-medium">Joined Date</th>
                                    <th className="text-left py-3 px-4 font-medium">Last Activity</th>
                                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <img
                                                        src={user.avatar}
                                                        alt={user.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    {user.verified && (
                                                        <div className="absolute -bottom-1 -right-1 bg-success-500 text-white p-1 rounded-full">
                                                            <CheckCircle className="h-3 w-3" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{user.name}</p>
                                                    <p className="text-sm text-neutral-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                {user.role === 'admin' ? (
                                                    <Shield className="h-4 w-4 text-primary-600" />
                                                ) : user.role === 'landlord' ? (
                                                    <Building className="h-4 w-4 text-secondary-600" />
                                                ) : (
                                                    <User className="h-4 w-4 text-neutral-600" />
                                                )}
                                                <span className="capitalize">{user.role}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                {user.verified ? (
                                                    <div className="flex items-center gap-1 text-success-600">
                                                        <CheckCircle className="h-4 w-4" />
                                                        <span>Active</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1 text-warning-600">
                                                        <Clock className="h-4 w-4" />
                                                        <span>Pending</span>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-neutral-500" />
                                                <span>{new Date(user.joinedAt).toLocaleDateString()}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="text-sm text-neutral-500">2 hours ago</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm">View Details</Button>
                                                <Button variant="ghost" size="icon">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <p className="text-sm text-neutral-600">Showing 1-10 of 100 users</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 