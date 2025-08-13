
import { Suspense } from 'react';
import ProgramsView from './ProgramsView';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProgramsPage() {
  return (
    <Suspense fallback={<ProgramsSkeleton />}>
      <ProgramsView />
    </Suspense>
  );
}

function ProgramsSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex ml-4">
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Skeleton className="h-9 w-9 rounded-full md:hidden" />
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Skeleton className="h-10 w-full sm:w-[280px] rounded-full" />
            </div>
            <Skeleton className="h-9 w-9 rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <Skeleton className="h-12 w-1/2 mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <Skeleton className="h-4 w-48" />
        </div>
      </footer>
    </div>
  );
}
