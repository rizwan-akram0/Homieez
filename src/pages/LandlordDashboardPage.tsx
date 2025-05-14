import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { PropertyCard } from '../components/PropertyCard';
import {
  Building,
  Users,
  CreditCard,
  TrendingUp,
  Calendar,
  Bell,
  MessageSquare,
  BarChart,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { properties, bookings, users } from '../data/mock';
import { formatCurrency } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export function LandlordDashboardPage() {
  const navigate = useNavigate();

  // Get landlord's properties (first 2 for demo)
  const myProperties = properties.slice(0, 2);
  
  // Get recent bookings (first 3 for demo)
  const recentBookings = bookings.slice(0, 3);
  
  // Get recent tenants (first 4 for demo)
  const recentTenants = users.filter(user => user.role === 'tenant').slice(0, 4);

  return (
    <DashboardLayout
      userType="landlord"
      userName="Saad Khan"
      userAvatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Properties</p>
                <h3 className="text-2xl font-bold mt-1">8</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +2 this month
                </p>
              </div>
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Tenants</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +3 this month
                </p>
              </div>
              <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Monthly Revenue</p>
                <h3 className="text-2xl font-bold mt-1">{formatCurrency(250000)}</h3>
                <p className="text-sm text-error-600 flex items-center gap-1 mt-1">
                  <ArrowDownRight className="h-4 w-4" />
                  -5% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Occupancy Rate</p>
                <h3 className="text-2xl font-bold mt-1">85%</h3>
                <p className="text-sm text-success-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-4 w-4" />
                  +10% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings and Tenant Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">Recent Bookings</h2>
                <Button variant="ghost" className="text-sm">View All</Button>
              </div>
              <div className="space-y-6">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0
                      ${booking.status === 'confirmed' ? 'bg-success-100 text-success-600' :
                        booking.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                        'bg-error-100 text-error-600'}`}
                    >
                      {booking.status === 'confirmed' ? <CheckCircle className="h-5 w-5" /> :
                       booking.status === 'pending' ? <Clock className="h-5 w-5" /> :
                       <XCircle className="h-5 w-5" />}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{booking.tenant.name}</h3>
                        <span className="text-sm text-neutral-500">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {booking.property.title} - {formatCurrency(booking.totalAmount)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">Recent Tenants</h2>
                <Button variant="ghost" className="text-sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentTenants.map((tenant) => (
                  <div
                    key={tenant.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <img
                      src={tenant.avatar}
                      alt={tenant.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{tenant.name}</p>
                      <p className="text-sm text-neutral-500">Joined {new Date(tenant.joinedAt).toLocaleDateString()}</p>
                    </div>
                    {tenant.verified && (
                      <CheckCircle className="h-4 w-4 text-success-600 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* My Properties */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold">My Properties</h2>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Property
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2" onClick={() => navigate('/landlord-dashboard/properties')}>
          <Building className="h-6 w-6" />
          <span>Manage Properties</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2" onClick={() => navigate('/landlord-dashboard/bookings')}>
          <Calendar className="h-6 w-6" />
          <span>View Bookings</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2" onClick={() => navigate('/landlord-dashboard/messages')}>
          <MessageSquare className="h-6 w-6" />
          <span>Chat with Tenants</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2" onClick={() => navigate('/landlord-dashboard/payments')}>
          <BarChart className="h-6 w-6" />
          <span>View Payments</span>
        </Button>
      </div>
    </DashboardLayout>
  );
}