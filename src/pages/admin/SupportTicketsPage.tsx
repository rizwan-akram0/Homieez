import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    HelpCircle,
    User,
    CheckCircle,
    XCircle,
    Clock,
    Download,
    MessageSquare,
    AlertCircle,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';

// Mock tickets data (replace with actual data from your backend)
const tickets = [
    {
        id: 1,
        subject: "Payment Issue",
        description: "Unable to process payment for monthly rent",
        userName: "Usman Ali",
        userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        userType: "tenant",
        priority: "high",
        status: "open",
        createdAt: "2024-03-28",
        lastUpdated: "2024-03-28",
        category: "Payment"
    },
    // Add more mock data as needed
];

export function AdminSupportTicketsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Support Tickets</h1>
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
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Open Tickets</p>
                                    <h3 className="text-2xl font-bold mt-1">24</h3>
                                    <p className="text-sm text-warning-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +5 today
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                                    <AlertCircle className="h-6 w-6 text-warning-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">In Progress</p>
                                    <h3 className="text-2xl font-bold mt-1">18</h3>
                                    <p className="text-sm text-primary-600 flex items-center gap-1 mt-1">
                                        <Clock className="h-4 w-4" />
                                        Being handled
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-primary-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Resolved Today</p>
                                    <h3 className="text-2xl font-bold mt-1">12</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                        +3 from yesterday
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
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Avg Response Time</p>
                                    <h3 className="text-2xl font-bold mt-1">2.5h</h3>
                                    <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                                        <ArrowDownRight className="h-4 w-4" />
                                        -30min from last week
                                    </p>
                                </div>
                                <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                                    <MessageSquare className="h-6 w-6 text-secondary-600" />
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
                                    placeholder="Search tickets..."
                                    className="pl-10"
                                />
                            </div>
                            <Select defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="open">Open</option>
                                <option value="in-progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                            </Select>
                            <Select defaultValue="all">
                                <option value="all">All Priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </Select>
                            <Select defaultValue="all">
                                <option value="all">All Categories</option>
                                <option value="payment">Payment</option>
                                <option value="technical">Technical</option>
                                <option value="account">Account</option>
                                <option value="booking">Booking</option>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Tickets Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-4 px-6 font-medium">Ticket Details</th>
                                        <th className="text-left py-4 px-6 font-medium">Category</th>
                                        <th className="text-left py-4 px-6 font-medium">Priority</th>
                                        <th className="text-left py-4 px-6 font-medium">Status</th>
                                        <th className="text-left py-4 px-6 font-medium">Created</th>
                                        <th className="text-left py-4 px-6 font-medium">Last Updated</th>
                                        <th className="text-left py-4 px-6 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket) => (
                                        <tr key={ticket.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={ticket.userAvatar}
                                                        alt={ticket.userName}
                                                        className="h-10 w-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{ticket.subject}</p>
                                                        <p className="text-sm text-neutral-500">{ticket.userName} ({ticket.userType})</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="capitalize">{ticket.category}</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${ticket.priority === 'high' ? 'bg-error-100 text-error-600' :
                                                        ticket.priority === 'medium' ? 'bg-warning-100 text-warning-600' :
                                                            'bg-success-100 text-success-600'}`}
                                                >
                                                    <AlertCircle className="h-3 w-3" />
                                                    {ticket.priority}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${ticket.status === 'open' ? 'bg-error-100 text-error-600' :
                                                        ticket.status === 'in-progress' ? 'bg-warning-100 text-warning-600' :
                                                            'bg-success-100 text-success-600'}`}
                                                >
                                                    {ticket.status === 'open' ? <AlertCircle className="h-3 w-3" /> :
                                                        ticket.status === 'in-progress' ? <Clock className="h-3 w-3" /> :
                                                            <CheckCircle className="h-3 w-3" />}
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(ticket.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(ticket.lastUpdated).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="sm">View</Button>
                                                    <Button variant="outline" size="sm">Respond</Button>
                                                </div>
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