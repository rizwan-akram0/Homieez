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
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    PieChart,
    Pie,
    Cell
} from 'recharts';

// Sample data for revenue chart
const revenueData = [
    { month: 'Jan', revenue: 180000, bookings: 145 },
    { month: 'Feb', revenue: 220000, bookings: 156 },
    { month: 'Mar', revenue: 260000, bookings: 178 },
    { month: 'Apr', revenue: 290000, bookings: 189 },
    { month: 'May', revenue: 250000, bookings: 167 },
    { month: 'Jun', revenue: 270000, bookings: 182 },
    { month: 'Jul', revenue: 310000, bookings: 198 },
    { month: 'Aug', revenue: 280000, bookings: 187 },
    { month: 'Sep', revenue: 330000, bookings: 210 },
    { month: 'Oct', revenue: 350000, bookings: 225 },
    { month: 'Nov', revenue: 320000, bookings: 205 },
    { month: 'Dec', revenue: 380000, bookings: 235 },
];

// Sample data for user growth
const userGrowthData = [
    { month: 'Jan', tenants: 450, landlords: 120, total: 570 },
    { month: 'Feb', tenants: 520, landlords: 135, total: 655 },
    { month: 'Mar', tenants: 580, landlords: 150, total: 730 },
    { month: 'Apr', tenants: 650, landlords: 165, total: 815 },
    { month: 'May', tenants: 720, landlords: 180, total: 900 },
    { month: 'Jun', tenants: 800, landlords: 195, total: 995 },
    { month: 'Jul', tenants: 880, landlords: 210, total: 1090 },
    { month: 'Aug', tenants: 950, landlords: 225, total: 1175 },
    { month: 'Sep', tenants: 1020, landlords: 240, total: 1260 },
    { month: 'Oct', tenants: 1100, landlords: 255, total: 1355 },
    { month: 'Nov', tenants: 1180, landlords: 270, total: 1450 },
    { month: 'Dec', tenants: 1234, landlords: 285, total: 1519 },
];

// Sample data for property distribution
const propertyDistribution = [
    { name: 'Apartments', value: 350, color: '#0ea5e9' },
    { name: 'Houses', value: 250, color: '#8b5cf6' },
    { name: 'Rooms', value: 156, color: '#f59e0b' },
    { name: 'Hostels', value: 100, color: '#10b981' },
];

export function AdminAnalyticsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
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
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={revenueData}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis yAxisId="left" tickFormatter={(value) => `$${value / 1000}k`} />
                                        <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => value} />
                                        <Tooltip
                                            formatter={(value, name) => {
                                                if (name === 'revenue') return formatCurrency(value as number);
                                                return value;
                                            }}
                                        />
                                        <Legend />
                                        <Area
                                            yAxisId="left"
                                            type="monotone"
                                            dataKey="revenue"
                                            name="Revenue"
                                            stroke="#0ea5e9"
                                            fill="#0ea5e9"
                                            fillOpacity={0.2}
                                        />
                                        <Line
                                            yAxisId="right"
                                            type="monotone"
                                            dataKey="bookings"
                                            name="Bookings"
                                            stroke="#8b5cf6"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
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
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={userGrowthData}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="tenants" name="Tenants" fill="#0ea5e9" stackId="a" />
                                        <Bar dataKey="landlords" name="Landlords" fill="#8b5cf6" stackId="a" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Property Distribution */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-heading font-semibold">Property Distribution</h2>
                        </div>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={propertyDistribution}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {propertyDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => value} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

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
                                            Usman Ali registered as a new tenant
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