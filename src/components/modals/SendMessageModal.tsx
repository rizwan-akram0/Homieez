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
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Send, Paperclip, Image } from 'lucide-react';

interface SendMessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    recipient?: {
        id: string;
        name: string;
        role: string;
        avatar: string;
    };
    contacts?: {
        id: string;
        name: string;
        role: string;
        avatar: string;
    }[];
}

export function SendMessageModal({ isOpen, onClose, recipient, contacts }: SendMessageModalProps) {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [selectedContact, setSelectedContact] = useState(recipient?.id || '');
    const [attachments, setAttachments] = useState<File[]>([]);

    const handleAttachmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setAttachments(Array.from(event.target.files));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle message sending logic here
        onClose();
    };

    const removeAttachment = (index: number) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Send Message</DialogTitle>
                    <DialogDescription>
                        Send a message to your landlord or property manager
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Recipient Selection */}
                    {contacts && !recipient && (
                        <div>
                            <label className="text-sm font-medium mb-2 block">To</label>
                            <Select
                                value={selectedContact}
                            // onValueChange={setSelectedContact}
                            >
                                <option value="">Select recipient</option>
                                {contacts.map((contact) => (
                                    <option key={contact.id} value={contact.id}>
                                        {contact.name} ({contact.role})
                                    </option>
                                ))}
                            </Select>
                        </div>
                    )}

                    {/* Selected Recipient */}
                    {(recipient || (contacts && selectedContact)) && (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900">
                            <img
                                src={(recipient || contacts?.find(c => c.id === selectedContact))?.avatar}
                                alt="Recipient"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium">
                                    {(recipient || contacts?.find(c => c.id === selectedContact))?.name}
                                </p>
                                <p className="text-sm text-neutral-500">
                                    {(recipient || contacts?.find(c => c.id === selectedContact))?.role}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Subject */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Subject</label>
                        <Input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Enter message subject"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Message</label>
                        <Textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            rows={6}
                            required
                        />
                    </div>

                    {/* Attachments */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Attachments</label>
                        <div className="flex items-center gap-2 mb-2">
                            <input
                                type="file"
                                className="hidden"
                                onChange={handleAttachmentChange}
                                multiple
                                id="file-attachments"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('file-attachments')?.click()}
                            >
                                <Paperclip className="h-4 w-4 mr-2" />
                                Attach Files
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('file-attachments')?.click()}
                            >
                                <Image className="h-4 w-4 mr-2" />
                                Add Images
                            </Button>
                        </div>

                        {/* Attachment List */}
                        {attachments.length > 0 && (
                            <div className="space-y-2">
                                {attachments.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900"
                                    >
                                        <div className="flex items-center gap-2">
                                            {file.type.startsWith('image/') ? (
                                                <Image className="h-4 w-4 text-neutral-500" />
                                            ) : (
                                                <Paperclip className="h-4 w-4 text-neutral-500" />
                                            )}
                                            <span className="text-sm">{file.name}</span>
                                            <span className="text-xs text-neutral-500">
                                                ({(file.size / 1024).toFixed(1)} KB)
                                            </span>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeAttachment(index)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!message.trim() || !subject.trim() || (!recipient && !selectedContact)}
                        >
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 