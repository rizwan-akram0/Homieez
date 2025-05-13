import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select } from '../../components/ui/select';
import {
    TrendingUp,
    DollarSign,
    Users,
    Building,
    Calendar,
    Download,
    ChevronUp,
    ChevronDown,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { formatCurrency } from '../../lib/utils';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

// Sample data for the revenue chart
const revenueData = [
    { month: 'Jan', revenue: 42000, expenses: 25000 },
    { month: 'Feb', revenue: 45000, expenses: 26000 },
    { month: 'Mar', revenue: 48000, expenses: 24000 },
    { month: 'Apr', revenue: 51000, expenses: 27000 },
    { month: 'May', revenue: 49000, expenses: 25000 },
    { month: 'Jun', revenue: 52000, expenses: 28000 },
    { month: 'Jul', revenue: 54000, expenses: 26000 },
    { month: 'Aug', revenue: 53000, expenses: 25000 },
    { month: 'Sep', revenue: 55000, expenses: 27000 },
    { month: 'Oct', revenue: 57000, expenses: 28000 },
    { month: 'Nov', revenue: 56000, expenses: 26000 },
    { month: 'Dec', revenue: 58000, expenses: 29000 },
];

// Sample data for the occupancy chart
const occupancyData = [
    { month: 'Jul', studio: 90, oneBed: 85, twoBed: 95 },
    { month: 'Aug', studio: 88, oneBed: 87, twoBed: 92 },
    { month: 'Sep', studio: 92, oneBed: 89, twoBed: 94 },
    { month: 'Oct', studio: 95, oneBed: 90, twoBed: 96 },
    { month: 'Nov', studio: 93, oneBed: 88, twoBed: 95 },
    { month: 'Dec', studio: 91, oneBed: 86, twoBed: 93 },
];

export function LandlordAnalyticsPage() {
    return (
        <DashboardLayout
            userType="landlord"
            userName="John Smith"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Analytics & Reports</h1>
                    <div className="flex items-center gap-4">
                        <Select defaultValue="last30">
                            <option value="last7">Last 7 days</option>
                            <option value="last30">Last 30 days</option>
                            <option value="last90">Last 90 days</option>
                            <option value="year">This year</option>
                        </Select>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                        </Button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-primary-600" />
                                </div>
                                <div className="flex items-center gap-1 text-success-600">
                                    <ChevronUp className="h-4 w-4" />
                                    <span className="text-sm">8.2%</span>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Revenue</p>
                            <h3 className="text-2xl font-bold mt-1">{formatCurrency(52750)}</h3>
                            <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-4 w-4" />
                                Up from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                                    <Users className="h-6 w-6 text-secondary-600" />
                                </div>
                                <div className="flex items-center gap-1 text-success-600">
                                    <ChevronUp className="h-4 w-4" />
                                    <span className="text-sm">12.5%</span>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Tenants</p>
                            <h3 className="text-2xl font-bold mt-1">42</h3>
                            <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-4 w-4" />
                                5 new this month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                                    <Building className="h-6 w-6 text-success-600" />
                                </div>
                                <div className="flex items-center gap-1 text-error-600">
                                    <ChevronDown className="h-4 w-4" />
                                    <span className="text-sm">3.1%</span>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Occupancy Rate</p>
                            <h3 className="text-2xl font-bold mt-1">85%</h3>
                            <p className="text-sm text-error-600 flex items-center gap-1 mt-1">
                                <ArrowDownRight className="h-4 w-4" />
                                Down from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-warning-600" />
                                </div>
                                <div className="flex items-center gap-1 text-success-600">
                                    <ChevronUp className="h-4 w-4" />
                                    <span className="text-sm">24.8%</span>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Viewing Requests</p>
                            <h3 className="text-2xl font-bold mt-1">128</h3>
                            <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-4 w-4" />
                                Increased interest
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Revenue Overview</h2>
                                <Select defaultValue="year" className="w-40">
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
                                        <YAxis
                                            tickFormatter={(value) => `$${value / 1000}k`}
                                        />
                                        <Tooltip
                                            formatter={(value) => formatCurrency(value as number)}
                                            labelStyle={{ color: '#111' }}
                                        />
                                        <Legend />
                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stackId="1"
                                            stroke="#0EA5E9"
                                            fill="#0EA5E9"
                                            fillOpacity={0.2}
                                            name="Revenue"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="expenses"
                                            stackId="2"
                                            stroke="#F43F5E"
                                            fill="#F43F5E"
                                            fillOpacity={0.2}
                                            name="Expenses"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Occupancy Trends</h2>
                                <Select defaultValue="6months" className="w-40">
                                    <option value="3months">Last 3 Months</option>
                                    <option value="6months">Last 6 Months</option>
                                    <option value="year">Last Year</option>
                                </Select>
                            </div>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={occupancyData}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis
                                            tickFormatter={(value) => `${value}%`}
                                        />
                                        <Tooltip
                                            formatter={(value) => `${value}%`}
                                            labelStyle={{ color: '#111' }}
                                        />
                                        <Legend />
                                        <Bar
                                            dataKey="studio"
                                            name="Studio"
                                            fill="#0EA5E9"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="oneBed"
                                            name="1 Bedroom"
                                            fill="#8B5CF6"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="twoBed"
                                            name="2 Bedroom"
                                            fill="#10B981"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Property Performance */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold">Property Performance</h2>
                            <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Export Data
                            </Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-3 px-4">Property</th>
                                        <th className="text-left py-3 px-4">Revenue</th>
                                        <th className="text-left py-3 px-4">Occupancy</th>
                                        <th className="text-left py-3 px-4">Maintenance Cost</th>
                                        <th className="text-left py-3 px-4">ROI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <td className="py-3 px-4">Downtown Lofts</td>
                                        <td className="py-3 px-4">{formatCurrency(25000)}</td>
                                        <td className="py-3 px-4">95%</td>
                                        <td className="py-3 px-4">{formatCurrency(2500)}</td>
                                        <td className="py-3 px-4 text-success-600">+12.5%</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <td className="py-3 px-4">Sunset Apartments</td>
                                        <td className="py-3 px-4">{formatCurrency(18500)}</td>
                                        <td className="py-3 px-4">85%</td>
                                        <td className="py-3 px-4">{formatCurrency(1800)}</td>
                                        <td className="py-3 px-4 text-success-600">+8.2%</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <td className="py-3 px-4">Harbor View Condos</td>
                                        <td className="py-3 px-4">{formatCurrency(15750)}</td>
                                        <td className="py-3 px-4">75%</td>
                                        <td className="py-3 px-4">{formatCurrency(2200)}</td>
                                        <td className="py-3 px-4 text-error-600">-2.1%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
} 