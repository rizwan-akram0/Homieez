import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { CreditCard, Download, Plus, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function TenantPaymentsPage() {
    // Mock payment data
    const upcomingPayments = [
        {
            id: 1,
            propertyName: "Modern Apartment near University",
            amount: 25000,
            dueDate: "2024-02-15",
            status: "pending"
        },
        {
            id: 2,
            propertyName: "Cozy Studio in City Center",
            amount: 30000,
            dueDate: "2024-02-20",
            status: "upcoming"
        }
    ];

    const recentPayments = [
        {
            id: 3,
            propertyName: "Modern Apartment near University",
            amount: 25000,
            date: "2024-01-15",
            status: "completed",
            transactionId: "TXN123456"
        },
        {
            id: 4,
            propertyName: "Modern Apartment near University",
            amount: 25000,
            date: "2023-12-15",
            status: "completed",
            transactionId: "TXN123455"
        },
        {
            id: 5,
            propertyName: "Modern Apartment near University",
            amount: 25000,
            date: "2023-11-15",
            status: "completed",
            transactionId: "TXN123454"
        }
    ];

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Payments</h1>

                {/* Payment Methods */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-heading font-semibold">Payment Methods</h2>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Payment Method
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="relative">
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <CreditCard className="h-8 w-8 text-primary-600" />
                                    <div className="absolute top-4 right-4">
                                        <div className="flex items-center gap-1 text-xs text-success-600">
                                            <CheckCircle className="h-3 w-3" />
                                            <span>Primary</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-medium mb-1">•••• •••• •••• 4242</p>
                                <p className="text-sm text-neutral-500">Expires 12/25</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <CreditCard className="h-8 w-8 text-neutral-600" />
                                </div>
                                <p className="font-medium mb-1">•••• •••• •••• 8353</p>
                                <p className="text-sm text-neutral-500">Expires 08/24</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Upcoming Payments */}
                <div className="mb-8">
                    <h2 className="text-xl font-heading font-semibold mb-4">Upcoming Payments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {upcomingPayments.map((payment) => (
                            <Card key={payment.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold mb-1">{payment.propertyName}</h3>
                                            <p className="text-2xl font-bold text-primary-600 mb-2">
                                                {formatCurrency(payment.amount)}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm">
                                                {payment.status === 'pending' ? (
                                                    <>
                                                        <AlertCircle className="h-4 w-4 text-error-600" />
                                                        <span className="text-error-600">Due in {new Date(payment.dueDate).toLocaleDateString()}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Clock className="h-4 w-4 text-warning-600" />
                                                        <span className="text-warning-600">Upcoming - {new Date(payment.dueDate).toLocaleDateString()}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <Button>Pay Now</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Payment History */}
                <div>
                    <h2 className="text-xl font-heading font-semibold mb-4">Payment History</h2>
                    <Card>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-3 px-4 font-medium">Property</th>
                                        <th className="text-left py-3 px-4 font-medium">Date</th>
                                        <th className="text-left py-3 px-4 font-medium">Amount</th>
                                        <th className="text-left py-3 px-4 font-medium">Status</th>
                                        <th className="text-left py-3 px-4 font-medium">Transaction ID</th>
                                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentPayments.map((payment) => (
                                        <tr key={payment.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-3 px-4">
                                                <p className="font-medium">{payment.propertyName}</p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <p className="text-sm">{new Date(payment.date).toLocaleDateString()}</p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <p className="font-medium">{formatCurrency(payment.amount)}</p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2 text-sm text-success-600">
                                                    <CheckCircle className="h-4 w-4" />
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">
                                                <p className="text-sm font-mono">{payment.transactionId}</p>
                                            </td>
                                            <td className="py-3 px-4">
                                                <Button variant="ghost" size="sm">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Receipt
                                                </Button>
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