"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Language = {
  name: string;
  code: string;
};

interface PolyglotViewerProps {
  languages: Language[];
}

export function PolyglotViewer({ languages }: PolyglotViewerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {languages.map((language, index) => (
        <Card key={index} className="flex flex-col rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-card-foreground">{language.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-0">
            <div className="p-4 bg-code-background h-full">
              <pre className="whitespace-pre-wrap text-code-foreground"><code className="font-code text-sm">
{language.code}
              </code></pre>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
