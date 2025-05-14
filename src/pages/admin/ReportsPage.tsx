import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    FileText,
    Download,
    Calendar,
    Filter,
    Building,
    Users,
    CreditCard,
    TrendingUp,
    ChevronRight
} from 'lucide-react';
import { Select } from '../../components/ui/select';

// Mock report types
const reportTypes = [
    {
        id: 1,
        title: "Financial Reports",
        description: "Revenue, transactions, and payment analytics",
        icon: CreditCard,
        types: ["Monthly Revenue", "Transaction History", "Payment Analytics"]
    },
    {
        id: 2,
        title: "Property Reports",
        description: "Property listings, occupancy rates, and maintenance",
        icon: Building,
        types: ["Property Listings", "Occupancy Rates", "Maintenance Records"]
    },
    {
        id: 3,
        title: "User Reports",
        description: "User activity, registrations, and verifications",
        icon: Users,
        types: ["User Activity", "New Registrations", "Verification Status"]
    },
    {
        id: 4,
        title: "Performance Reports",
        description: "Platform metrics, response times, and analytics",
        icon: TrendingUp,
        types: ["Platform Metrics", "Response Times", "User Satisfaction"]
    }
];

export function AdminReportsPage() {
    return (
        <DashboardLayout
            userType="admin"
            userName="Ahmad Khan"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-heading font-bold">Reports & Analytics</h1>
                    <div className="flex items-center gap-4">
                        <Select defaultValue="last30">
                            <option value="last7">Last 7 days</option>
                            <option value="last30">Last 30 days</option>
                            <option value="last90">Last 90 days</option>
                            <option value="year">This year</option>
                        </Select>
                    </div>
                </div>

                {/* Report Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {reportTypes.map((reportType) => (
                        <Card key={reportType.id} className="hover:border-primary-500 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                                        {React.createElement(reportType.icon, {
                                            className: "h-6 w-6 text-primary-600"
                                        })}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-heading font-semibold mb-2">{reportType.title}</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{reportType.description}</p>
                                        <div className="space-y-3">
                                            {reportType.types.map((type, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <FileText className="h-4 w-4 text-neutral-500" />
                                                        <span>{type}</span>
                                                    </div>
                                                    <Button variant="ghost" size="sm" className="hover:bg-primary-50 dark:hover:bg-primary-900/20">
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Recent Reports */}
                <div className="mb-8">
                    <h2 className="text-lg font-heading font-semibold mb-4">Recently Generated Reports</h2>
                    <Card>
                        <CardContent className="p-0">
                            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="flex items-center justify-between p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                                                <FileText className="h-5 w-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Monthly Revenue Report</h4>
                                                <p className="text-sm text-neutral-500">Generated on March 28, 2024</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <Download className="h-4 w-4 mr-2" />
                                            Download
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Scheduled Reports */}
                <div>
                    <h2 className="text-lg font-heading font-semibold mb-4">Scheduled Reports</h2>
                    <Card>
                        <CardContent className="p-0">
                            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-center justify-between p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-secondary-100 dark:bg-secondary-900/20 flex items-center justify-center">
                                                <Calendar className="h-5 w-5 text-secondary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Weekly Performance Report</h4>
                                                <p className="text-sm text-neutral-500">Every Monday at 9:00 AM</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
} 