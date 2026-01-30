"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GeneralErrorProps {
  error?: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
  minimal?: boolean; // For smaller scoped errors
}

export function GeneralError({
  error,
  reset,
  title = "Something went wrong",
  description = "We apologize for the inconvenience. An unexpected error occurred.",
  minimal = false,
}: GeneralErrorProps) {
  if (minimal) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-center border rounded-md border-destructive/20 bg-destructive/5">
        <AlertTriangle className="w-6 h-6 mb-2 text-destructive" />
        <h3 className="text-sm font-semibold text-destructive">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={reset}
          className="mt-2 border-destructive/20 hover:bg-destructive/10 text-destructive"
        >
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex bg-zinc-50 dark:bg-black items-center justify-center min-h-[50vh] px-4 py-12">
      <Card className="w-full max-w-md text-center border-zinc-200 dark:border-zinc-800 shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-500" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {title}
          </CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 mb-4 text-sm text-left rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            <p>
              Please try refreshing the page. If the problem persists, you can
              contact support.
            </p>
            {error?.digest && (
              <p className="mt-2 font-mono text-xs opacity-70">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            onClick={reset}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white"
          >
            <RefreshCw className="mr-2 w-4 h-4" />
            Try again
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
