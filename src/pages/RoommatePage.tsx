import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar } from "../components/ui/avatar";
import { MessageSquare, Video, Star, Heart } from "lucide-react";
import { users } from "../data/mock";

export function RoommatePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-heading font-bold mb-4">Find Your Perfect Roommate</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Connect with verified roommates who share your lifestyle preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.filter(user => user.role === 'tenant').map((user) => (
            <Card key={user.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar src={user.avatar} name={user.name} size="lg" />
                  <div>
                    <h3 className="font-heading font-semibold">{user.name}</h3>
                    <p className="text-sm text-neutral-500">Student at LUMS</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">4.8 Rating</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                      Non-smoker
                    </span>
                    <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                      Early bird
                    </span>
                    <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                      Clean & tidy
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Video className="h-4 w-4" />
                    Video Call
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}