import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Star, Gift, Clock, ChevronRight, Award, Zap, Shield, Crown } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function LoyaltyPointsPage() {
    // Mock loyalty data
    const loyaltyData = {
        points: 2500,
        tier: 'Gold',
        nextTier: 'Platinum',
        pointsToNextTier: 1500,
        pointsHistory: [
            {
                id: 1,
                type: 'earned',
                points: 500,
                description: 'Monthly rent payment',
                date: '2024-02-01'
            },
            {
                id: 2,
                type: 'earned',
                points: 200,
                description: 'Referral bonus',
                date: '2024-01-15'
            },
            {
                id: 3,
                type: 'redeemed',
                points: -300,
                description: 'Maintenance fee discount',
                date: '2024-01-10'
            }
        ],
        availableRewards: [
            {
                id: 1,
                title: 'Rent Discount',
                description: '10% off next month\'s rent',
                points: 5000,
                icon: 'Zap'
            },
            {
                id: 2,
                title: 'Free Maintenance',
                description: 'One free maintenance service',
                points: 3000,
                icon: 'Shield'
            },
            {
                id: 3,
                title: 'Premium Upgrade',
                description: 'Free upgrade to premium amenities',
                points: 8000,
                icon: 'Crown'
            }
        ]
    };

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-heading font-bold mb-6">Loyalty Program</h1>

                {/* Points Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="col-span-2">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Your Points Balance</h2>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-primary-600">{loyaltyData.points}</span>
                                        <span className="text-neutral-500">points</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-warning-600">
                                        <Star className="h-5 w-5 fill-current" />
                                        <span className="font-semibold">{loyaltyData.tier} Member</span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        {loyaltyData.pointsToNextTier} points to {loyaltyData.nextTier}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-600 rounded-full"
                                    style={{ width: '62.5%' }}
                                ></div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <Button variant="outline" className="w-full justify-between">
                                    <div className="flex items-center gap-2">
                                        <Gift className="h-4 w-4" />
                                        <span>Redeem Points</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" className="w-full justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Points History</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Available Rewards */}
                <h2 className="text-xl font-heading font-semibold mb-4">Available Rewards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {loyaltyData.availableRewards.map((reward) => (
                        <Card key={reward.id}>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    {reward.icon === 'Zap' && <Zap className="h-8 w-8 text-primary-600" />}
                                    {reward.icon === 'Shield' && <Shield className="h-8 w-8 text-secondary-600" />}
                                    {reward.icon === 'Crown' && <Crown className="h-8 w-8 text-warning-600" />}
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-warning-600" />
                                        <span className="font-semibold">{reward.points}</span>
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">{reward.title}</h3>
                                <p className="text-sm text-neutral-600 mb-4">{reward.description}</p>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    disabled={loyaltyData.points < reward.points}
                                >
                                    {loyaltyData.points >= reward.points ? 'Redeem Reward' : 'Not Enough Points'}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Points History */}
                <h2 className="text-xl font-heading font-semibold mb-4">Points History</h2>
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                    <th className="text-left py-3 px-4 font-medium">Date</th>
                                    <th className="text-left py-3 px-4 font-medium">Description</th>
                                    <th className="text-left py-3 px-4 font-medium">Points</th>
                                    <th className="text-left py-3 px-4 font-medium">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loyaltyData.pointsHistory.map((history) => (
                                    <tr key={history.id} className="border-b border-neutral-200 dark:border-neutral-800">
                                        <td className="py-3 px-4">
                                            {new Date(history.date).toLocaleDateString()}
                                        </td>
                                        <td className="py-3 px-4">{history.description}</td>
                                        <td className="py-3 px-4">
                                            <span className={history.type === 'earned' ? 'text-success-600' : 'text-error-600'}>
                                                {history.type === 'earned' ? '+' : ''}{history.points}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${history.type === 'earned'
                                                    ? 'bg-success-100 text-success-600'
                                                    : 'bg-error-100 text-error-600'
                                                }`}>
                                                {history.type === 'earned' ? 'Earned' : 'Redeemed'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
} 