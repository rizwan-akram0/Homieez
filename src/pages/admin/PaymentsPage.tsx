import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    CreditCard,
    User,
    CheckCircle,
    XCircle,
    Clock,
    Download,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Building
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { formatCurrency } from '../../lib/utils';

// Mock payments data (replace with actual data from your backend)
const payments = [
    {
        id: 1,
        propertyName: "Luxury Apartment 301",
        tenant: "Usman Ali",
        amount: 2500,
        status: "completed",
        date: "2024-03-28",
        paymentMethod: "Credit Card",
        transactionId: "TXN123456789"
    },
    // Add more mock data as needed
];

export function AdminPaymentsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Payments & Transactions</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Revenue</p>
                                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(125000)}</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +15% this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-primary-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Pending</p>
                                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(4500)}</h3>
                                    <p className="text-sm text-warning-600 flex items-center gap-1 mt-1">
                                        <Clock className="h-4 w-4" />
                                        8 transactions
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-warning-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Successful</p>
                                    <h3 className="text-2xl font-bold mt-1">156</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +23 this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-success-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Failed</p>
                                    <h3 className="text-2xl font-bold mt-1">12</h3>
                                    <p className="text-sm text-error-600 flex items-center gap-1 mt-1">
                                        <ArrowDownRight className="h-4 w-4" />
                                        -2 this month
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-error-100 dark:bg-error-900/20 rounded-full flex items-center justify-center">
                                    <XCircle className="h-6 w-6 text-error-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                                <Input
                                    placeholder="Search transactions..."
                                    className="pl-10"
                                />
                            </div>
                            <Select defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                                <option value="failed">Failed</option>
                            </Select>
                            <Select defaultValue="all">
                                <option value="all">All Payment Methods</option>
                                <option value="credit">Credit Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="bank">Bank Transfer</option>
                            </Select>
                            <Select defaultValue="newest">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="amount-high">Amount: High to Low</option>
                                <option value="amount-low">Amount: Low to High</option>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Payments Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-4 px-6 font-medium">Property</th>
                                        <th className="text-left py-4 px-6 font-medium">Tenant</th>
                                        <th className="text-left py-4 px-6 font-medium">Amount</th>
                                        <th className="text-left py-4 px-6 font-medium">Status</th>
                                        <th className="text-left py-4 px-6 font-medium">Date</th>
                                        <th className="text-left py-4 px-6 font-medium">Payment Method</th>
                                        <th className="text-left py-4 px-6 font-medium">Transaction ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map((payment) => (
                                        <tr key={payment.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <Building className="h-4 w-4 text-neutral-500" />
                                                    <span>{payment.propertyName}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-neutral-500" />
                                                    <span>{payment.tenant}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="font-medium">{formatCurrency(payment.amount)}</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${payment.status === 'completed' ? 'bg-success-100 text-success-600' :
                                                        payment.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                                                            'bg-error-100 text-error-600'}`}
                                                >
                                                    {payment.status === 'completed' ? <CheckCircle className="h-3 w-3" /> :
                                                        payment.status === 'pending' ? <Clock className="h-3 w-3" /> :
                                                            <XCircle className="h-3 w-3" />}
                                                    {payment.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(payment.date).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <CreditCard className="h-4 w-4 text-neutral-500" />
                                                    <span>{payment.paymentMethod}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="font-mono text-sm">{payment.transactionId}</span>
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