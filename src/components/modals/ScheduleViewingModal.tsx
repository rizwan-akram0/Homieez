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
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface ScheduleViewingModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: {
        id: string;
        title: string;
        location: {
            area: string;
            city: string;
        };
        images: string[];
    };
}

export function ScheduleViewingModal({ isOpen, onClose, property }: ScheduleViewingModalProps) {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [timeSlot, setTimeSlot] = useState('');

    // Mock available time slots
    const timeSlots = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle scheduling logic here
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Schedule a Viewing</DialogTitle>
                    <DialogDescription>
                        Choose your preferred date and time to view this property
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    {/* Property Info */}
                    <div className="flex items-start gap-4 mb-6">
                        <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                            <h3 className="font-medium">{property.title}</h3>
                            <div className="flex items-center gap-1 text-sm text-neutral-500">
                                <MapPin className="h-4 w-4" />
                                <span>
                                    {property.location.area}, {property.location.city}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-6">
                        <label className="text-sm font-medium mb-2 block">Select Date</label>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return (
                                    date < today ||
                                    date.getDay() === 0 || // Sunday
                                    date.getDay() === 6    // Saturday
                                );
                            }}
                        />
                    </div>

                    {/* Time Slot Selection */}
                    <div className="mb-6">
                        <label className="text-sm font-medium mb-2 block">Select Time</label>
                        <Select
                            value={timeSlot}
                        // onValueChange={setTimeSlot}
                        >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </Select>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="text-sm font-medium mb-2 block">Phone Number</label>
                            <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                            <Input
                                placeholder="Any specific requirements or questions?"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!date || !timeSlot}>
                            Schedule Viewing
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 