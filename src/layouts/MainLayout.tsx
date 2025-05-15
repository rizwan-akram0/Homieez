import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Users, ListChecks, Building, BookText, Info, Sun, Moon, Menu, X, User, LogIn, Bell } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at the top
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the top
        setShowHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  const getDashboardPath = () => {
    if (!user) return '/login';
    return `/${user.type}-dashboard`;
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Search", path: "/search", icon: <Search className="w-5 h-5" /> },
    { name: "Roommates", path: "/roommates", icon: <Users className="w-5 h-5" /> },
    { name: "List Property", path: "/list-property", icon: <Building className="w-5 h-5" /> },
    { name: "Verification", path: "/verification", icon: <ListChecks className="w-5 h-5" /> },
    { name: "Blog", path: "/blog", icon: <BookText className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200">
      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 left-0 right-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/90 transition-all duration-300 transform",
          showHeader ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-md bg-primary-600 p-1">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-primary-600 dark:text-white">HomieeZ</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.path
                    ? "text-primary-600"
                    : "text-neutral-600 dark:text-neutral-300"
                )}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="transition-transform hover:scale-110"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-neutral-300 hover:text-neutral-100" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
              )}
            </Button>

            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Notifications"
                  className="relative transition-transform hover:scale-110"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-secondary-600"></span>
                </Button>
                
                <div className="flex items-center gap-2">
                  <Link to={getDashboardPath()}>
                    <Button variant="ghost" size="icon" aria-label="User profile" className="transition-transform hover:scale-110">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLogout}
                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-600"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <Button className="gap-2 transition-transform hover:scale-105">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-transform hover:scale-110"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-neutral-900 p-6 shadow-lg transition-colors duration-200">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                <div className="rounded-md bg-primary-600 p-1">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-primary-600 dark:text-white">HomieeZ</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="transition-transform hover:scale-110"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-all hover:text-primary-600 p-2 rounded-md",
                    location.pathname === item.path
                      ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link to={getDashboardPath()} onClick={closeMobileMenu}>
                    <Button className="w-full justify-start gap-2 transition-transform hover:scale-105">
                      <User className="h-4 w-4" />
                      <span>My Dashboard</span>
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleLogout}
                    variant="outline" 
                    className="w-full justify-start gap-2"
                  >
                    <LogIn className="h-4 w-4 rotate-180" />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <Link to="/login" onClick={closeMobileMenu}>
                  <Button className="w-full justify-start gap-2 transition-transform hover:scale-105">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 transition-colors duration-200">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 pt-40 pb-32">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="rounded-md bg-primary-600 p-1">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-primary-600 dark:text-white">HomieeZ</span>
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                Finding your perfect home away from home has never been easier. Secure, verified, and hassle-free.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4 text-neutral-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4 text-neutral-900 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                {navItems.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4 text-neutral-900 dark:text-white">Contact Us</h3>
              <address className="not-italic text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                <p>586 - Airline Society</p>
                <p>Lahore, Pakistan</p>
                <p>Phone: +92 300 1234567</p>
                <p>Email: info@homieez.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} HomieeZ. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                Terms
              </a>
              <a href="#" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                Privacy
              </a>
              <a href="#" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action button for quick help/chat */}
      {/* <div className="fixed right-4 bottom-4 z-40">
        <Button 
          className="rounded-full shadow-lg w-12 h-12 flex items-center justify-center bg-primary-600 hover:bg-primary-700 transition-all hover:scale-105"
          aria-label="Get help"
        >
          <Bell className="h-6 w-6 text-white" />
        </Button>
      </div> */}
    </div>
  );
}