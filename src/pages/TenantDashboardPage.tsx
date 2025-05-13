import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { PropertyCard } from '../components/PropertyCard';
import { 
  Home, 
  CreditCard, 
  Bell, 
  Heart,
  Calendar,
  Shield,
  Award,
  ArrowUpRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { properties, bookings, notifications } from '../data/mock';
import { formatCurrency } from '../lib/utils';

export function TenantDashboardPage() {
  // Get user's saved properties (first 2 for demo)
  const savedProperties = properties.slice(0, 2);
  
  // Get user's recent bookings (first 3 for demo)
  const recentBookings = bookings.slice(0, 3);
  
  // Get user's recent notifications (first 4 for demo)
  const recentNotifications = notifications.slice(0, 4);

  return (
    <DashboardLayout
      userType="tenant"
      userName="Ali Hassan"
      userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Bookings</p>
                <h3 className="text-2xl font-bold mt-1">2</h3>
              </div>
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <Home className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Spent</p>
                <h3 className="text-2xl font-bold mt-1">{formatCurrency(125000)}</h3>
              </div>
              <div className="h-12 w-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-secondary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Loyalty Points</p>
                <h3 className="text-2xl font-bold mt-1">450</h3>
              </div>
              <div className="h-12 w-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Verification Status</p>
                <h3 className="text-2xl font-bold mt-1">Verified</h3>
              </div>
              <div className="h-12 w-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Saved Properties */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">Recent Activity</h2>
                <Button variant="ghost" className="text-sm">View All</Button>
              </div>
              <div className="space-y-6">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{booking.property.title}</h3>
                        <span className="text-sm text-neutral-500">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        Booking {booking.status} - {formatCurrency(booking.totalAmount)}
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
                <h2 className="text-xl font-heading font-semibold">Notifications</h2>
                <Button variant="ghost" className="text-sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0
                      ${notification.type === 'booking' ? 'bg-primary-100 text-primary-600' :
                        notification.type === 'message' ? 'bg-secondary-100 text-secondary-600' :
                        notification.type === 'verification' ? 'bg-success-100 text-success-600' :
                        'bg-warning-100 text-warning-600'}`}
                    >
                      {notification.type === 'booking' ? <Calendar className="h-4 w-4" /> :
                       notification.type === 'message' ? <Bell className="h-4 w-4" /> :
                       notification.type === 'verification' ? <Shield className="h-4 w-4" /> :
                       <CreditCard className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-neutral-500 mt-1">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-primary-600 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Saved Properties */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold">Saved Properties</h2>
          <Button variant="outline" className="gap-2">
            <Heart className="h-4 w-4" />
            View All Saved
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Calendar className="h-6 w-6" />
          <span>Book a Property</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Shield className="h-6 w-6" />
          <span>Complete Verification</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Award className="h-6 w-6" />
          <span>Redeem Points</span>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2">
          <Bell className="h-6 w-6" />
          <span>Support Chat</span>
        </Button>
      </div>
    </DashboardLayout>
  );
}