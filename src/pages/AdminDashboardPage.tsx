import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Users,
  Building,
  ShieldCheck,
  HelpCircle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Search
} from 'lucide-react';
import { users, properties, verifications, supportTickets } from '../data/mock';
import { formatCurrency } from '../lib/utils';

export function AdminDashboardPage() {
  // Get recent verifications (first 4 for demo)
  const recentVerifications = verifications.slice(0, 4);
  
  // Get recent support tickets (first 4 for demo)
  const recentTickets = supportTickets.slice(0, 4);

  return (
    <DashboardLayout
      userType="admin"
      userName="Muhammad Ahmed"
      userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Users</p>
                <h3 className="text-2xl font-bold mt-1">1,234</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +15% this month
                </p>
              </div>
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Properties</p>
                <h3 className="text-2xl font-bold mt-1">856</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +8% this month
                </p>
              </div>
              <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-secondary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Pending Verifications</p>
                <h3 className="text-2xl font-bold mt-1">45</h3>
                <p className="text-sm text-error-600 flex items-center gap-1 mt-1">
                  <ArrowDownRight className="h-4 w-4" />
                  +12 from yesterday
                </p>
              </div>
              <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Platform Revenue</p>
                <h3 className="text-2xl font-bold mt-1">{formatCurrency(1250000)}</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +20% this month
                </p>
              </div>
              <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Verifications and Support Tickets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">Recent Verifications</h2>
              <Button variant="ghost" className="text-sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentVerifications.map((verification) => (
                <div
                  key={verification.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center
                    ${verification.status === 'verified' ? 'bg-success-100 text-success-600' :
                      verification.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                      'bg-error-100 text-error-600'}`}
                  >
                    {verification.status === 'verified' ? <CheckCircle className="h-5 w-5" /> :
                     verification.status === 'pending' ? <Clock className="h-5 w-5" /> :
                     <XCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">
                        {users.find(u => u.id === verification.userId)?.name}
                      </h3>
                      <span className="text-sm text-neutral-500">
                        {new Date(verification.submittedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {verification.type} Verification - {verification.documentNumber}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">Support Tickets</h2>
              <Button variant="ghost" className="text-sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center
                    ${ticket.priority === 'high' ? 'bg-error-100 text-error-600' :
                      ticket.priority === 'medium' ? 'bg-warning-100 text-warning-600' :
                      'bg-success-100 text-success-600'}`}
                  >
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{ticket.subject}</h3>
                      <span className="text-sm text-neutral-500">
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {users.find(u => u.id === ticket.userId)?.name} - {ticket.status}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Respond
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Search */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search users by name, email, or ID..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <Button>Search</Button>
          </div>
          
          <div className="mt-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="text-left py-3 px-4">User</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Joined</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 5).map((user) => (
                  <tr key={user.id} className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-neutral-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="capitalize">{user.role}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                        ${user.verified ? 'bg-success-100 text-success-600' : 'bg-warning-100 text-warning-600'}`}
                      >
                        {user.verified ? (
                          <>
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </>
                        ) : (
                          <>
                            <Clock className="h-3 w-3" />
                            Pending
                          </>
                        )}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-neutral-500">
                        {new Date(user.joinedAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Users className="h-6 w-6" />
          <span>Manage Users</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Building className="h-6 w-6" />
          <span>Property Reviews</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <ShieldCheck className="h-6 w-6" />
          <span>Verification Queue</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          <span>Support Center</span>
        </Button>
      </div>
    </DashboardLayout>
  );
}