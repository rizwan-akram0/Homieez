import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

export function TenantProfilePage() {
    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">My Profile</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Profile Picture Card */}
                    <Card className="md:col-span-1">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <img
                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                                        alt="Profile"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="absolute bottom-0 right-0 rounded-full"
                                    >
                                        <Camera className="h-4 w-4" />
                                    </Button>
                                </div>
                                <h2 className="text-xl font-semibold mt-4">Ali Hassan</h2>
                                <p className="text-sm text-neutral-500">Tenant since Jan 2024</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-2 w-2 rounded-full bg-success-500"></div>
                                    <span className="text-sm text-success-600">Verified Account</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Profile Details Card */}
                    <Card className="md:col-span-2">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4">Personal Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
                                        <Input
                                            placeholder="Your full name"
                                            defaultValue="Ali Hassan"
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
                                        <Input
                                            type="email"
                                            placeholder="Your email"
                                            defaultValue="ali.hassan@example.com"
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
                                        <Input
                                            type="tel"
                                            placeholder="Your phone number"
                                            defaultValue="+92 300 1234567"
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
                                        <Input
                                            placeholder="Your address"
                                            defaultValue="123 Main Street, Karachi"
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Bio</label>
                                    <Textarea
                                        placeholder="Tell us about yourself"
                                        defaultValue="I'm a software engineer working in Karachi. Looking for a comfortable place near my workplace."
                                        rows={4}
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Save Changes</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preferences Card */}
                    <Card className="md:col-span-3">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4">Preferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-medium mb-2">Lifestyle</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>Non-smoker</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>Early bird</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="rounded" />
                                            <span>Night owl</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>Pet-friendly</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium mb-2">Notifications</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>Email notifications</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>SMS notifications</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked className="rounded" />
                                            <span>New property alerts</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="rounded" />
                                            <span>Marketing communications</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
} 