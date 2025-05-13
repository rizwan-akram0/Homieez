import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '../ui/dialog';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Star, Gift, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface RedeemPointsModalProps {
    isOpen: boolean;
    onClose: () => void;
    points: number;
    rewards: {
        id: number;
        title: string;
        description: string;
        points: number;
        icon: string;
    }[];
}

export function RedeemPointsModal({ isOpen, onClose, points, rewards }: RedeemPointsModalProps) {
    const [selectedReward, setSelectedReward] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle redemption logic here
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Redeem Points</DialogTitle>
                    <DialogDescription>
                        Choose a reward to redeem with your loyalty points
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    {/* Points Balance */}
                    <div className="flex items-center justify-between p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg mb-6">
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-primary-600" />
                            <span className="font-medium">Available Points</span>
                        </div>
                        <span className="text-xl font-bold text-primary-600">{points}</span>
                    </div>

                    {/* Rewards Selection */}
                    <div className="space-y-4 mb-6">
                        <RadioGroup
                            value={selectedReward?.toString()}
                            onValueChange={(value) => setSelectedReward(Number(value))}
                        >
                            {rewards.map((reward) => {
                                const isDisabled = points < reward.points;
                                return (
                                    <div
                                        key={reward.id}
                                        className={`flex items-start space-x-4 p-4 rounded-lg border ${isDisabled ? 'opacity-50' : ''
                                            } ${selectedReward === reward.id
                                                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                                : ''
                                            }`}
                                    >
                                        <RadioGroupItem
                                            value={reward.id.toString()}
                                            id={`reward-${reward.id}`}
                                            disabled={isDisabled}
                                        />
                                        <Label
                                            htmlFor={`reward-${reward.id}`}
                                            className="flex-grow cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-medium">{reward.title}</span>
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 text-warning-600" />
                                                    <span>{reward.points}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-neutral-600">
                                                {reward.description}
                                            </p>
                                        </Label>
                                    </div>
                                );
                            })}
                        </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <Alert className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Rewards are subject to availability and terms of service. Points will be
                            deducted immediately upon redemption.
                        </AlertDescription>
                    </Alert>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!selectedReward || points < (rewards.find(r => r.id === selectedReward)?.points || 0)}
                        >
                            <Gift className="h-4 w-4 mr-2" />
                            Redeem Reward
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 