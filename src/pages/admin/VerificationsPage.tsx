import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Search,
    Filter,
    ShieldCheck,
    User,
    CheckCircle,
    XCircle,
    Clock,
    MoreVertical,
    Download,
    FileText
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';

// Mock verifications data (replace with actual data from your backend)
const verifications = [
    {
        id: 1,
        userName: "Usman Ali",
        userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        userType: "tenant",
        documentType: "ID Verification",
        submittedDate: "2024-03-28",
        status: "pending",
        documents: ["id_front.pdf", "id_back.pdf"]
    },
    // Add more mock data as needed
];

export function AdminVerificationsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Verification Requests</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export List
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Pending</p>
                                    <h3 className="text-2xl font-bold mt-1">24</h3>
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
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Approved</p>
                                    <h3 className="text-2xl font-bold mt-1">156</h3>
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
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Rejected</p>
                                    <h3 className="text-2xl font-bold mt-1">12</h3>
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
                                    placeholder="Search verifications..."
                                    className="pl-10"
                                />
                            </div>
                            <Select defaultValue="all">
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </Select>
                            <Select defaultValue="all">
                                <option value="all">All Types</option>
                                <option value="id">ID Verification</option>
                                <option value="address">Address Proof</option>
                                <option value="business">Business Documents</option>
                            </Select>
                            <Select defaultValue="newest">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Verifications Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                        <th className="text-left py-4 px-6 font-medium">User</th>
                                        <th className="text-left py-4 px-6 font-medium">Type</th>
                                        <th className="text-left py-4 px-6 font-medium">Document Type</th>
                                        <th className="text-left py-4 px-6 font-medium">Submitted</th>
                                        <th className="text-left py-4 px-6 font-medium">Status</th>
                                        <th className="text-left py-4 px-6 font-medium">Documents</th>
                                        <th className="text-left py-4 px-6 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {verifications.map((verification) => (
                                        <tr key={verification.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={verification.userAvatar}
                                                        alt={verification.userName}
                                                        className="h-10 w-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{verification.userName}</p>
                                                        <p className="text-sm text-neutral-500 capitalize">{verification.userType}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-neutral-500" />
                                                    <span className="capitalize">{verification.userType}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                {verification.documentType}
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(verification.submittedDate).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                                    ${verification.status === 'approved' ? 'bg-success-100 text-success-600' :
                                                        verification.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                                                            'bg-error-100 text-error-600'}`}
                                                >
                                                    {verification.status === 'approved' ? <CheckCircle className="h-3 w-3" /> :
                                                        verification.status === 'pending' ? <Clock className="h-3 w-3" /> :
                                                            <XCircle className="h-3 w-3" />}
                                                    {verification.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-neutral-500" />
                                                    <span>{verification.documents.length} files</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="sm">Review</Button>
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