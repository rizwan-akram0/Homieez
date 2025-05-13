import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  avatar?: string;
  role: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, avatar, role, text, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-neutral-300"
              }`}
            />
          ))}
        </div>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">{text}</p>
        <div className="flex items-center gap-3">
          <Avatar src={avatar} name={name} />
          <div>
            <h4 className="font-heading font-semibold">{name}</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}