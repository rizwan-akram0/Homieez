import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
    Search,
    MessageSquare,
    Phone,
    Video,
    MoreVertical,
    Image as ImageIcon,
    Paperclip,
    Send,
    CheckCheck
} from 'lucide-react';

export function LandlordMessagesPage() {
    return (
        <DashboardLayout
            userType="landlord"
            userName="John Smith"
            userAvatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        >
            <div className="flex h-[calc(100vh-8rem)]">
                {/* Contacts Sidebar */}
                <div className="w-80 border-r border-neutral-200 dark:border-neutral-800">
                    <div className="p-4">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                            <Input placeholder="Search messages..." className="pl-9" />
                        </div>
                        <div className="space-y-2">
                            {/* Active Chat */}
                            <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                                        alt="Sarah Johnson"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium truncate">Sarah Johnson</h3>
                                            <span className="text-xs text-neutral-500">2m ago</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                                            I'll be there at 3 PM for the viewing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Other Chats */}
                            {[
                                {
                                    name: "Michael Brown",
                                    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                                    message: "Thanks for the quick response!",
                                    time: "1h ago",
                                    unread: 2
                                },
                                {
                                    name: "Emma Wilson",
                                    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                                    message: "Is the apartment still available?",
                                    time: "3h ago"
                                },
                                {
                                    name: "James Miller",
                                    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
                                    message: "Perfect, see you tomorrow then.",
                                    time: "1d ago"
                                }
                            ].map((chat) => (
                                <div
                                    key={chat.name}
                                    className="p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={chat.avatar}
                                            alt={chat.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-medium truncate">{chat.name}</h3>
                                                <span className="text-xs text-neutral-500">{chat.time}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                                                    {chat.message}
                                                </p>
                                                {chat.unread && (
                                                    <Badge variant="secondary" className="ml-2">
                                                        {chat.unread}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                                    alt="Sarah Johnson"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="font-medium">Sarah Johnson</h2>
                                    <p className="text-sm text-neutral-500">Downtown Lofts #7A</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Phone className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Video className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Received Message */}
                        <div className="flex items-start gap-3 max-w-[80%]">
                            <img
                                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                                alt="Sarah"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl rounded-tl-none p-3">
                                    <p>Hi! I'm interested in viewing the Downtown Loft apartment. Is it possible to schedule a viewing for tomorrow?</p>
                                </div>
                                <span className="text-xs text-neutral-500 mt-1">10:30 AM</span>
                            </div>
                        </div>

                        {/* Sent Message */}
                        <div className="flex items-start justify-end gap-3 max-w-[80%] ml-auto">
                            <div className="text-right">
                                <div className="bg-primary-600 text-white rounded-2xl rounded-tr-none p-3">
                                    <p>Of course! I have an opening at 3 PM tomorrow. Would that work for you?</p>
                                </div>
                                <div className="flex items-center justify-end gap-1 mt-1">
                                    <span className="text-xs text-neutral-500">10:32 AM</span>
                                    <CheckCheck className="h-3 w-3 text-primary-600" />
                                </div>
                            </div>
                        </div>

                        {/* Received Message */}
                        <div className="flex items-start gap-3 max-w-[80%]">
                            <img
                                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                                alt="Sarah"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl rounded-tl-none p-3">
                                    <p>Perfect! I'll be there at 3 PM for the viewing.</p>
                                </div>
                                <span className="text-xs text-neutral-500 mt-1">10:33 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <ImageIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Paperclip className="h-4 w-4" />
                            </Button>
                            <Input placeholder="Type a message..." className="flex-1" />
                            <Button>
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 