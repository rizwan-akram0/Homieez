import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    TrendingUp,
    Users,
    Building,
    CreditCard,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Download,
    Filter
} from 'lucide-react';
import { Select } from '../../components/ui/select';
import { formatCurrency } from '../../lib/utils';

export function AdminAnalyticsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Sarah Admin"
            userAvatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Analytics Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <Select defaultValue="30">
                            <option value="7">Last 7 days</option>
                            <option value="30">Last 30 days</option>
                            <option value="90">Last 90 days</option>
                            <option value="365">Last year</option>
                        </Select>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                        </Button>
                    </div>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Users</p>
                                    <h3 className="text-2xl font-bold mt-1">1,234</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +15% this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                    <Users className="h-6 w-6 text-primary-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Properties</p>
                                    <h3 className="text-2xl font-bold mt-1">856</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +8% this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                                    <Building className="h-6 w-6 text-secondary-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Revenue</p>
                                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(2500000)}</h3>
                                    <p className="text-sm text-error-600 flex items-center gap-1 mt-1">
                                        <ArrowDownRight className="h-4 w-4" />
                                        -3% this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-success-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Bookings</p>
                                    <h3 className="text-2xl font-bold mt-1">432</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +12% this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-warning-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-heading font-semibold">Revenue Overview</h2>
                                <Select defaultValue="year">
                                    <option value="month">This Month</option>
                                    <option value="quarter">This Quarter</option>
                                    <option value="year">This Year</option>
                                </Select>
                            </div>
                            <div className="h-80 flex items-center justify-center border rounded-lg">
                                {/* Replace with actual chart component */}
                                <p className="text-neutral-500">Revenue Chart Placeholder</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-heading font-semibold">User Growth</h2>
                                <Select defaultValue="year">
                                    <option value="month">This Month</option>
                                    <option value="quarter">This Quarter</option>
                                    <option value="year">This Year</option>
                                </Select>
                            </div>
                            <div className="h-80 flex items-center justify-center border rounded-lg">
                                {/* Replace with actual chart component */}
                                <p className="text-neutral-500">User Growth Chart Placeholder</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-heading font-semibold">Recent Activity</h2>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                                        <Users className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">New User Registration</h3>
                                            <span className="text-sm text-neutral-500">2 hours ago</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 mt-1">
                                            John Doe registered as a new tenant
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
} 