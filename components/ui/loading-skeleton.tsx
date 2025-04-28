'use client';

import { Skeleton } from "@/components/ui/skeleton";

export function GalleryItemSkeleton() {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-lg mb-3">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

export function GalleryLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <GalleryItemSkeleton key={i} />
      ))}
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="md:w-1/3">
        <Skeleton className="aspect-[16/9] rounded-lg w-full" />
      </div>
      <div className="md:w-2/3 space-y-3">
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

export function BlogLoadingSkeleton() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <BlogPostSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductSkeleton() {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-md bg-muted mb-4">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  );
}

export function ProductLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}
