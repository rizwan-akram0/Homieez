import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Shield, FileText, CheckCircle, AlertCircle } from "lucide-react";

export function VerificationPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-heading font-bold mb-4">Verification Center</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Complete your verification to enjoy enhanced trust and security on HomieeZ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NADRA Verification */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-semibold">NADRA Verification</h2>
                    <p className="text-sm text-neutral-600">Verify your identity using NADRA</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">CNIC Number</label>
                    <Input placeholder="Enter 13-digit CNIC number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name (as per CNIC)</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <Input type="date" />
                  </div>
                  <Button className="w-full">Submit for Verification</Button>
                </form>
              </CardContent>
            </Card>

            {/* Police Verification */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-semibold">Police Verification</h2>
                    <p className="text-sm text-neutral-600">Get police clearance certificate</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Police Station</label>
                    <Input placeholder="Enter nearest police station" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Address</label>
                    <Input placeholder="Enter your current address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <Input placeholder="Enter contact number" />
                  </div>
                  <Button className="w-full">Request Verification</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Verification Status */}
          <div className="mt-12">
            <h2 className="text-xl font-heading font-semibold mb-6">Verification Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-600" />
                  <div>
                    <h3 className="font-medium">NADRA Verification</h3>
                    <p className="text-sm text-neutral-500">Completed on March 15, 2024</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm bg-success-100 text-success-600 rounded-full">
                  Verified
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-warning-600" />
                  <div>
                    <h3 className="font-medium">Police Verification</h3>
                    <p className="text-sm text-neutral-500">Submitted on March 18, 2024</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm bg-warning-100 text-warning-600 rounded-full">
                  Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}