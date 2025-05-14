import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import {
    User,
    Building,
    CreditCard,
    Mail,
    Phone,
    MapPin,
    Shield,
    Bell,
    Settings,
    Camera
} from 'lucide-react';

export function LandlordProfilePage() {
    return (
        <DashboardLayout
            userType="landlord"
            userName="Imran Malik"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">My Profile</h1>

                {/* Profile Header */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="absolute bottom-0 right-0 rounded-full"
                                >
                                    <Camera className="h-4 w-4" />
                                </Button>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Imran Malik</h2>
                                <p className="text-sm text-neutral-500">Verified Landlord since 2022</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Shield className="h-4 w-4 text-success-600" />
                                    <span className="text-sm text-success-600">Identity Verified</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Personal Information */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Full Name</label>
                                <Input defaultValue="Imran Malik" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Email</label>
                                <Input defaultValue="imran.malik@example.com" type="email" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Phone Number</label>
                                <Input defaultValue="+1 (555) 123-4567" type="tel" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Location</label>
                                <Input defaultValue="New York, NY" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Business Information */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Business Information</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Business Name</label>
                                <Input defaultValue="Smith Properties LLC" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Business Address</label>
                                <Input defaultValue="123 Business Ave, Suite 100" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Tax ID / EIN</label>
                                <Input defaultValue="XX-XXXXXXX" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Business Description</label>
                                <Textarea defaultValue="Professional property management company specializing in student and young professional housing." />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Banking & Payment Information */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Banking & Payment Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Bank Name</label>
                                <Input defaultValue="National Bank" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Account Type</label>
                                <Select defaultValue="business">
                                    <option value="business">Business Account</option>
                                    <option value="personal">Personal Account</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Account Number</label>
                                <Input defaultValue="XXXX-XXXX-XXXX-1234" type="password" />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Routing Number</label>
                                <Input defaultValue="XXXXXXXXX" type="password" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Preferences & Settings */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Preferences & Settings</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Email Notifications</p>
                                    <p className="text-sm text-neutral-500">Receive updates about bookings and messages</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">SMS Notifications</p>
                                    <p className="text-sm text-neutral-500">Get text messages for urgent updates</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Automatic Payments</p>
                                    <p className="text-sm text-neutral-500">Process rent payments automatically</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Save Changes */}
                <div className="flex justify-end gap-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </div>
        </DashboardLayout>
    );
} 