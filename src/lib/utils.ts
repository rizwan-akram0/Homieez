import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
}

export function getRandomAvatar(seed: string): string {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
}

// Get a random image from Pexels (constant URLs that exist)
export function getRandomPropertyImage(index: number): string {
  const images = [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
    'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg'
  ];
  
  return images[index % images.length];
}