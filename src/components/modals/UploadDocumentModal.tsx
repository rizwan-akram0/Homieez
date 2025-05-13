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
import { Select } from '../ui/select';
import { Input } from '../ui/input';
import { Progress } from '../ui/progress';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface UploadDocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    documentTypes: {
        id: string;
        name: string;
        description: string;
        required: boolean;
    }[];
}

export function UploadDocumentModal({ isOpen, onClose, documentTypes }: UploadDocumentModalProps) {
    const [selectedType, setSelectedType] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile || !selectedType) return;

        setUploading(true);

        // Simulate file upload progress
        for (let i = 0; i <= 100; i += 10) {
            await new Promise(resolve => setTimeout(resolve, 200));
            setProgress(i);
        }

        // Handle actual upload logic here
        setUploading(false);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Upload Document</DialogTitle>
                    <DialogDescription>
                        Upload your verification documents in PDF, JPG, or PNG format
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    {/* Document Type Selection */}
                    <div className="mb-6">
                        <label className="text-sm font-medium mb-2 block">Document Type</label>
                        <Select
                            value={selectedType}
                        // onValueChange={setSelectedType}
                        >
                            <option value="">Select document type</option>
                            {documentTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name} {type.required && '(Required)'}
                                </option>
                            ))}
                        </Select>
                        {selectedType && (
                            <p className="text-sm text-neutral-500 mt-2">
                                {documentTypes.find(t => t.id === selectedType)?.description}
                            </p>
                        )}
                    </div>

                    {/* File Upload */}
                    <div className="mb-6">
                        <label className="text-sm font-medium mb-2 block">Upload File</label>
                        <div className="border-2 border-dashed rounded-lg p-8">
                            <div className="flex flex-col items-center text-center">
                                <Upload className="h-8 w-8 text-neutral-400 mb-2" />
                                <p className="text-sm text-neutral-600 mb-2">
                                    Drag and drop your file here, or click to browse
                                </p>
                                <p className="text-xs text-neutral-500 mb-4">
                                    Supported formats: PDF, JPG, PNG (max 10MB)
                                </p>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                    id="file-upload"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                >
                                    Choose File
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Selected File */}
                    {selectedFile && (
                        <div className="mb-6">
                            <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-neutral-500" />
                                    <div>
                                        <p className="text-sm font-medium">{selectedFile.name}</p>
                                        <p className="text-xs text-neutral-500">
                                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setSelectedFile(null)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Upload Progress */}
                    {uploading && (
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Uploading...</span>
                                <span className="text-sm text-neutral-500">{progress}%</span>
                            </div>
                            <Progress value={progress} />
                        </div>
                    )}

                    {/* Guidelines */}
                    <Alert className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            Ensure all documents are clear, legible, and show all corners.
                            Documents will be reviewed within 24-48 hours.
                        </AlertDescription>
                    </Alert>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!selectedFile || !selectedType || uploading}
                        >
                            {uploading ? 'Uploading...' : 'Upload Document'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 