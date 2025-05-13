import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { blogPosts } from "../data/mock";
import { Calendar, Clock } from "lucide-react";

export function BlogPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-heading font-bold mb-4">Blog & Resources</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Stay updated with the latest insights, tips, and news about rental properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <h2 className="text-xl font-heading font-semibold mb-2">{post.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                    {post.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}