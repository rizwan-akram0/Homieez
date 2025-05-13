import { useState } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

type UserType = 'tenant' | 'landlord' | 'admin';

export default function Login() {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, user } = useAuth();

  // Get the redirect path from location state
  const from = location.state?.from?.pathname || `/${user?.type || 'tenant'}-dashboard`;

  // Redirect if already logged in
  if (isAuthenticated && user) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !selectedType) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login(email, password, selectedType);
      // After successful login, navigate to the redirect path
      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const userTypes: { type: UserType; title: string; description: string; icon: string }[] = [
    {
      type: 'tenant',
      title: 'Tenant',
      description: 'Search and manage your rental properties',
      icon: '🏠'
    },
    {
      type: 'landlord',
      title: 'Landlord',
      description: 'Manage your properties and tenants',
      icon: '🔑'
    },
    {
      type: 'admin',
      title: 'Administrator',
      description: 'Full system access and control',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-900 dark:to-primary-900 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Brand */}
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-8 md:w-2/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary-700 dark:bg-primary-800 opacity-50 transform -skew-x-12"></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-heading mb-4 font-bold">Welcome Back</h1>
              <p className="text-primary-100">Access your dashboard and manage your properties with ease.</p>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="p-8 md:w-3/5">
            <div className="mb-8">
              <h2 className="text-2xl font-heading text-neutral-900 dark:text-white mb-6 font-semibold">Sign In</h2>
              
              {/* User Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {userTypes.map(({ type, title, description, icon }) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-4 rounded-xl border-2 text-left transition-all transform hover:scale-105 ${
                      selectedType === type
                        ? 'border-primary-600 bg-primary-50 dark:border-primary-400 dark:bg-primary-900/50'
                        : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600'
                    }`}
                  >
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-heading text-lg mb-1 font-semibold dark:text-white">{title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                  </button>
                ))}
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-error-50 dark:bg-error-900/50 text-error-600 dark:text-error-400 p-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                             bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white
                             focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 
                             focus:border-primary-500 dark:focus:border-primary-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                             bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white
                             focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 
                             focus:border-primary-500 dark:focus:border-primary-400"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 
                               text-primary-600 dark:text-primary-400 
                               focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                    <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={!selectedType}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all transform hover:scale-105 ${
                    selectedType
                      ? 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-lg'
                      : 'bg-neutral-400 dark:bg-neutral-600 cursor-not-allowed'
                  }`}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}