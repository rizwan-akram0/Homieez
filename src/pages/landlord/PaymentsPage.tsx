import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { DollarSign, Download, Filter, Search, TrendingUp, Users, Wallet, Building } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function LandlordPaymentsPage() {
    return (
        <DashboardLayout
            userType="landlord"
            userName="Imran Malik"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Payments & Revenue</h1>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <DollarSign className="h-8 w-8 text-primary-600" />
                                <Badge variant="success">+12.5%</Badge>
                            </div>
                            <h3 className="text-2xl font-bold">{formatCurrency(52750)}</h3>
                            <p className="text-sm text-neutral-500">Total Revenue This Month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Wallet className="h-8 w-8 text-warning-600" />
                                <Badge variant="warning">5 Pending</Badge>
                            </div>
                            <h3 className="text-2xl font-bold">{formatCurrency(8500)}</h3>
                            <p className="text-sm text-neutral-500">Pending Payments</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Users className="h-8 w-8 text-success-600" />
                                <Badge variant="secondary">95%</Badge>
                            </div>
                            <h3 className="text-2xl font-bold">42/44</h3>
                            <p className="text-sm text-neutral-500">Paid Tenants</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <TrendingUp className="h-8 w-8 text-primary-600" />
                                <Badge variant="success">On Track</Badge>
                            </div>
                            <h3 className="text-2xl font-bold">{formatCurrency(630000)}</h3>
                            <p className="text-sm text-neutral-500">Projected Annual Revenue</p>
                        </CardContent>
                    </Card>
                </div>

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
                                <label className="text-sm font-medium mb-1 block">Property</label>
                                <Select defaultValue="">
                                    <option value="">All Properties</option>
                                    <option value="1">Sunset Apartments</option>
                                    <option value="2">Downtown Lofts</option>
                                    <option value="3">Harbor View Condos</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Payment Status</label>
                                <Select defaultValue="">
                                    <option value="">All Status</option>
                                    <option value="paid">Paid</option>
                                    <option value="pending">Pending</option>
                                    <option value="overdue">Overdue</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Date Range</label>
                                <Input type="month" defaultValue="2024-03" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Payments Table */}
                <Card>
                    <CardContent className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4">Tenant</th>
                                        <th className="text-left py-3 px-4">Property</th>
                                        <th className="text-left py-3 px-4">Amount</th>
                                        <th className="text-left py-3 px-4">Due Date</th>
                                        <th className="text-left py-3 px-4">Status</th>
                                        <th className="text-right py-3 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                                                    alt="Tenant"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span>Usman Ali</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">Sunset Apartments #4B</td>
                                        <td className="py-3 px-4">{formatCurrency(2500)}</td>
                                        <td className="py-3 px-4">March 1, 2024</td>
                                        <td className="py-3 px-4">
                                            <Badge variant="success">Paid</Badge>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <Button variant="ghost" size="sm">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                                                    alt="Tenant"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span>Zain Ahmed</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">Downtown Lofts #7A</td>
                                        <td className="py-3 px-4">{formatCurrency(3000)}</td>
                                        <td className="py-3 px-4">March 1, 2024</td>
                                        <td className="py-3 px-4">
                                            <Badge variant="warning">Pending</Badge>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <Button variant="ghost" size="sm">
                                                Send Reminder
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Export Button */}
                <div className="mt-8 flex justify-end">
                    <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export Financial Report
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
} 