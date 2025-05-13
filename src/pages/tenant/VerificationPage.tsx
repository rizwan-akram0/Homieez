import React, { useState } from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import {
    Upload,
    CheckCircle,
    AlertCircle,
    Clock,
    Shield,
    FileText,
    Camera,
    ChevronRight,
    X
} from 'lucide-react';

export function TenantVerificationPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Mock verification status
    const verificationStatus = {
        identityVerified: true,
        documentsVerified: false,
        employmentVerified: true,
        backgroundCheckStatus: 'pending',
        requiredDocuments: [
            {
                id: 1,
                name: 'Government ID',
                type: 'identity',
                status: 'verified',
                uploadedAt: '2024-01-15'
            },
            {
                id: 2,
                name: 'Proof of Income',
                type: 'employment',
                status: 'verified',
                uploadedAt: '2024-01-15'
            },
            {
                id: 3,
                name: 'Bank Statements',
                type: 'financial',
                status: 'pending',
                uploadedAt: null
            },
            {
                id: 4,
                name: 'Rental History',
                type: 'history',
                status: 'pending',
                uploadedAt: null
            }
        ]
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Account Verification</h1>

                {/* Verification Progress */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Verification Progress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
                                <div className="flex items-center gap-2 text-success-600 mb-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-medium">Identity</span>
                                </div>
                                <p className="text-sm text-neutral-600">Verified on Jan 15, 2024</p>
                            </div>
                            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
                                <div className="flex items-center gap-2 text-warning-600 mb-2">
                                    <Clock className="h-5 w-5" />
                                    <span className="font-medium">Documents</span>
                                </div>
                                <p className="text-sm text-neutral-600">2 documents pending</p>
                            </div>
                            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
                                <div className="flex items-center gap-2 text-success-600 mb-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-medium">Employment</span>
                                </div>
                                <p className="text-sm text-neutral-600">Verified on Jan 15, 2024</p>
                            </div>
                            <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
                                <div className="flex items-center gap-2 text-warning-600 mb-2">
                                    <Clock className="h-5 w-5" />
                                    <span className="font-medium">Background</span>
                                </div>
                                <p className="text-sm text-neutral-600">Check in progress</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Required Documents */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Required Documents</h2>
                        <div className="space-y-4">
                            {verificationStatus.requiredDocuments.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center justify-between p-4 rounded-lg border dark:border-neutral-800"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-primary-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{doc.name}</h3>
                                            <p className="text-sm text-neutral-500 capitalize">{doc.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {doc.status === 'verified' ? (
                                            <div className="flex items-center gap-2 text-success-600">
                                                <CheckCircle className="h-5 w-5" />
                                                <span>Verified</span>
                                            </div>
                                        ) : (
                                            <Button>Upload Document</Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Upload Document */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Upload New Document</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Document Type</label>
                                <Select defaultValue="">
                                    <option value="">Select document type</option>
                                    <option value="bank">Bank Statements</option>
                                    <option value="rental">Rental History</option>
                                    <option value="employment">Employment Verification</option>
                                    <option value="identity">Identity Document</option>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1 block">Upload File</label>
                                <div className="border-2 border-dashed rounded-lg p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <Upload className="h-8 w-8 text-neutral-400 mb-2" />
                                        <p className="text-sm text-neutral-600 mb-2">
                                            Drag and drop your file here, or click to browse
                                        </p>
                                        <p className="text-xs text-neutral-500 mb-4">
                                            Supported formats: PDF, JPG, PNG (max 10MB)
                                        </p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={handleFileChange}
                                            id="file-upload"
                                        />
                                        <Button
                                            variant="outline"
                                            onClick={() => document.getElementById('file-upload')?.click()}
                                        >
                                            Choose File
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {selectedFile && (
                                <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-neutral-500" />
                                        <span className="text-sm">{selectedFile.name}</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSelectedFile(null)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}

                            <div className="flex justify-end">
                                <Button disabled={!selectedFile}>Upload Document</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Verification Tips */}
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Verification Tips</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Shield className="h-5 w-5 text-primary-600 mt-0.5" />
                                <div>
                                    <h3 className="font-medium mb-1">Ensure Document Quality</h3>
                                    <p className="text-sm text-neutral-600">
                                        Make sure all documents are clear, legible, and show all corners.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Camera className="h-5 w-5 text-primary-600 mt-0.5" />
                                <div>
                                    <h3 className="font-medium mb-1">Good Lighting</h3>
                                    <p className="text-sm text-neutral-600">
                                        Take photos in well-lit conditions to ensure all details are visible.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-5 w-5 text-primary-600 mt-0.5" />
                                <div>
                                    <h3 className="font-medium mb-1">Complete Information</h3>
                                    <p className="text-sm text-neutral-600">
                                        Ensure all required fields and information are included in your documents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
} 