
'use client';

import { PolyglotViewer } from '@/components/PolyglotViewer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import helloWorldLanguages from '@/data/languages.json';
import arithmeticLanguages from '@/data/arithmetic.json';
import evenOddLanguages from '@/data/even-odd.json';
import factorialLanguages from '@/data/factorial.json';
import reverseStringLanguages from '@/data/reverse-string.json';
import largestNumberLanguages from '@/data/largest-number.json';
import palindromeLanguages from '@/data/palindrome.json';
import fibonacciLanguages from '@/data/fibonacci.json';
import primeNumberLanguages from '@/data/prime-number.json';
import sumArrayLanguages from '@/data/sum-array.json';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function ProgramsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const program = searchParams.get('program') || 'hello-world';

  const programData = {
    'hello-world': {
      title: 'Hello World!',
      description: '"Hello, World!" in different programming languages.',
      languages: helloWorldLanguages,
    },
    'arithmetic-operations': {
      title: 'Arithmetic Operations',
      description: 'Basic arithmetic operations in different programming languages.',
      languages: arithmeticLanguages,
    },
    'even-or-odd': {
      title: 'Even or Odd',
      description: 'Check if a number is even or odd in different programming languages.',
      languages: evenOddLanguages,
    },
    'factorial': {
      title: 'Factorial',
      description: 'Calculate the factorial of a number in different programming languages.',
      languages: factorialLanguages,
    },
    'reverse-string': {
      title: 'Reverse a String',
      description: 'Reverse a string in different programming languages.',
      languages: reverseStringLanguages,
    },
    'largest-number': {
        title: 'Find Largest Number',
        description: 'Find the largest number in a list or array.',
        languages: largestNumberLanguages,
    },
    'palindrome': {
        title: 'Check for Palindrome',
        description: 'Check if a string is a palindrome.',
        languages: palindromeLanguages,
    },
    'fibonacci': {
        title: 'Fibonacci Sequence',
        description: 'Generate the Fibonacci sequence.',
        languages: fibonacciLanguages,
    },
    'prime-number': {
        title: 'Prime Number Check',
        description: 'Check if a number is a prime number.',
        languages: primeNumberLanguages,
    },
    'sum-array': {
        title: 'Sum of Array',
        description: 'Calculate the sum of elements in an array.',
        languages: sumArrayLanguages,
    }
  };

  const currentProgram = programData[program as keyof typeof programData] || programData['hello-world'];

  const handleProgramChange = (newProgram: string) => {
    router.push(`${pathname}?program=${newProgram}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex ml-4">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">
                Hello World!
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" size="icon" asChild className="md:hidden rounded-full">
              <Link href="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Select value={program} onValueChange={handleProgramChange}>
                  <SelectTrigger className="w-full sm:w-[280px] rounded-full">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hello-world">Hello World!</SelectItem>
                    <SelectItem value="arithmetic-operations">Arithmetic Operations</SelectItem>
                    <SelectItem value="even-or-odd">Even or Odd</SelectItem>
                    <SelectItem value="factorial">Factorial</SelectItem>
                    <SelectItem value="reverse-string">Reverse a String</SelectItem>
                    <SelectItem value="largest-number">Find Largest Number</SelectItem>
                    <SelectItem value="palindrome">Check for Palindrome</SelectItem>
                    <SelectItem value="fibonacci">Fibonacci Sequence</SelectItem>
                    <SelectItem value="prime-number">Prime Number Check</SelectItem>
                    <SelectItem value="sum-array">Sum of Array</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {currentProgram.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {currentProgram.description}
            </p>
          </div>
          <PolyglotViewer languages={currentProgram.languages} />
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Created with ❤️, from India.
          </p>
        </div>
      </footer>
    </div>
  );
}
