import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, ChevronDown, Bell, LogOut, 
  User, Settings, CreditCard, BookmarkCheck, 
  Building, Heart, Calendar, MessageSquare,
  Users, ShieldCheck, FileText, BarChart, 
  HelpCircle, Menu, X 
} from "lucide-react";
import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "tenant" | "landlord" | "admin";
  userName: string;
  userAvatar?: string;
}

export function DashboardLayout({ 
  children, 
  userType = "tenant",
  userName,
  userAvatar
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Define nav items based on user type
  const tenantNavItems = [
    { name: "Dashboard", path: "/tenant-dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "My Profile", path: "/tenant-dashboard/profile", icon: <User className="w-5 h-5" /> },
    { name: "Saved Properties", path: "/tenant-dashboard/saved", icon: <Heart className="w-5 h-5" /> },
    { name: "My Bookings", path: "/tenant-dashboard/bookings", icon: <Calendar className="w-5 h-5" /> },
    { name: "Payments", path: "/tenant-dashboard/payments", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Messages", path: "/tenant-dashboard/messages", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Loyalty Points", path: "/tenant-dashboard/loyalty", icon: <BookmarkCheck className="w-5 h-5" /> },
    { name: "Verification", path: "/tenant-dashboard/verification", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const landlordNavItems = [
    { name: "Dashboard", path: "/landlord-dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "My Profile", path: "/landlord-dashboard/profile", icon: <User className="w-5 h-5" /> },
    { name: "My Properties", path: "/landlord-dashboard/properties", icon: <Building className="w-5 h-5" /> },
    { name: "Bookings", path: "/landlord-dashboard/bookings", icon: <Calendar className="w-5 h-5" /> },
    { name: "Tenants", path: "/landlord-dashboard/tenants", icon: <Users className="w-5 h-5" /> },
    { name: "Payments", path: "/landlord-dashboard/payments", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Messages", path: "/landlord-dashboard/messages", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Analytics", path: "/landlord-dashboard/analytics", icon: <BarChart className="w-5 h-5" /> },
  ];

  const adminNavItems = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Properties", path: "/admin-dashboard/properties", icon: <Building className="w-5 h-5" /> },
    { name: "Users", path: "/admin-dashboard/users", icon: <Users className="w-5 h-5" /> },
    { name: "Bookings", path: "/admin-dashboard/bookings", icon: <Calendar className="w-5 h-5" /> },
    { name: "Verifications", path: "/admin-dashboard/verifications", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Payments", path: "/admin-dashboard/payments", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Support Tickets", path: "/admin-dashboard/tickets", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Reports", path: "/admin-dashboard/reports", icon: <FileText className="w-5 h-5" /> },
    { name: "Analytics", path: "/admin-dashboard/analytics", icon: <BarChart className="w-5 h-5" /> },
  ];

  // Choose nav items based on user type
  const navItems = 
    userType === "tenant" ? tenantNavItems :
    userType === "landlord" ? landlordNavItems : 
    adminNavItems;

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r border-neutral-200 bg-white transition-transform dark:border-neutral-800 dark:bg-neutral-900",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex h-[60px] items-center border-b border-neutral-200 px-6 dark:border-neutral-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary-600 p-1">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-heading font-bold">HomieeZ</span>
          </Link>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
                location.pathname === item.path
                  ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                  : "text-neutral-700 dark:text-neutral-300"
              )}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-3 rounded-md px-3 py-2">
            <Avatar src={userAvatar} name={userName} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{userName}</span>
              <span className="text-xs text-neutral-500 capitalize">{userType}</span>
            </div>
          </div>
          <Link to="/">
            <Button
              variant="ghost"
              className="mt-2 w-full justify-start gap-2 text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 md:ml-72">
        {/* Top header */}
        <header className="sticky h-[60px] top-0 z-30 flex py-2 items-center justify-between border-b border-neutral-200 bg-white px-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h1 className="text-lg font-heading font-bold md:text-xl">
            {userType === "tenant" ? "Tenant Dashboard" : 
             userType === "landlord" ? "Landlord Dashboard" : 
             "Admin Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-secondary-600"></span>
            </Button>
            <Link to="/settings">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            <span className="hidden md:block">
              <Avatar 
                src={userAvatar} 
                name={userName} 
                className="h-8 w-8" 
              />
            </span>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}