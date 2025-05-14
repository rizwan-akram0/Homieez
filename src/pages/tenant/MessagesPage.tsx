import React, { useState } from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, Send, Phone, Video, MoreVertical, Image, Paperclip, Smile } from 'lucide-react';

export function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(0);

    // Mock chats data
    const chats = [
        {
            id: 1,
            name: 'Ahmed Khan',
            role: 'Landlord',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
            lastMessage: 'Sure, you can visit the property tomorrow',
            timestamp: '10:30 AM',
            unread: 2,
            online: true
        },
        {
            id: 2,
            name: 'Sara Property Management',
            role: 'Property Manager',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            lastMessage: 'Your maintenance request has been received',
            timestamp: 'Yesterday',
            unread: 0,
            online: false
        },
        // Add more mock chats as needed
    ];

    // Mock messages for the selected chat
    const messages = [
        {
            id: 1,
            sender: 'user',
            content: 'Hi, I\'m interested in viewing the apartment',
            timestamp: '10:00 AM'
        },
        {
            id: 2,
            sender: 'other',
            content: 'Hello! Sure, when would you like to come see it?',
            timestamp: '10:15 AM'
        },
        {
            id: 3,
            sender: 'user',
            content: 'Would tomorrow afternoon work?',
            timestamp: '10:20 AM'
        },
        {
            id: 4,
            sender: 'other',
            content: 'Sure, you can visit the property tomorrow',
            timestamp: '10:30 AM'
        }
    ];

    return (
        <DashboardLayout
            userType="tenant"
            userName="Ali Hassan"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-[calc(100vh-8rem)] gap-6">
                    {/* Chat List */}
                    <Card className="md:col-span-1">
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                                <Input placeholder="Search messages..." className="pl-9" />
                            </div>
                            <div className="space-y-2">
                                {chats.map((chat) => (
                                    <div
                                        key={chat.id}
                                        className={`p-3 rounded-lg cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 ${selectedChat === chat.id ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                                            }`}
                                        onClick={() => setSelectedChat(chat.id)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="relative">
                                                <img
                                                    src={chat.avatar}
                                                    alt={chat.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                {chat.online && (
                                                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success-500 border-2 border-white dark:border-neutral-900"></div>
                                                )}
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-medium truncate">{chat.name}</h3>
                                                    <span className="text-xs text-neutral-500">{chat.timestamp}</span>
                                                </div>
                                                <p className="text-sm text-neutral-500">{chat.role}</p>
                                                <p className="text-sm truncate">{chat.lastMessage}</p>
                                            </div>
                                            {chat.unread > 0 && (
                                                <div className="h-5 w-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center">
                                                    {chat.unread}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Chat Window */}
                    <Card className="md:col-span-2 lg:col-span-3">
                        <CardContent className="p-0 h-full flex flex-col">
                            {selectedChat ? (
                                <>
                                    {/* Chat Header */}
                                    <div className="p-4 border-b flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={chats[0].avatar}
                                                alt={chats[0].name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-medium">{chats[0].name}</h3>
                                                <p className="text-sm text-neutral-500">{chats[0].role}</p>
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

                                    {/* Messages */}
                                    <div className="flex-grow overflow-y-auto p-4 space-y-4">
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div
                                                    className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'user'
                                                        ? 'bg-primary-600 text-white'
                                                        : 'bg-neutral-100 dark:bg-neutral-800'
                                                        }`}
                                                >
                                                    <p>{message.content}</p>
                                                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-100' : 'text-neutral-500'
                                                        }`}>
                                                        {message.timestamp}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Message Input */}
                                    <div className="p-4 border-t">
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon">
                                                <Image className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon">
                                                <Paperclip className="h-4 w-4" />
                                            </Button>
                                            <Input placeholder="Type a message..." className="flex-grow" />
                                            <Button variant="ghost" size="icon">
                                                <Smile className="h-4 w-4" />
                                            </Button>
                                            <Button>
                                                <Send className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <p className="text-neutral-500">Select a chat to start messaging</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
} 