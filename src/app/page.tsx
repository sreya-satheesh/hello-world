import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
          Hello World!
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
          Explore simple programs like "Hello, World!" and basic algorithms across a variety of programming languages. See how different languages tackle the same problems, side-by-side.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/programs">
              Get Started
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
