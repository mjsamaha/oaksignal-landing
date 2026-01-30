import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NotFoundErrorProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function NotFoundError({
  title = "Page Not Found",
  description = "The page you are looking for doesn't exist or has been moved.",
  children,
}: NotFoundErrorProps) {
  return (
    <div className="flex bg-zinc-50 dark:bg-black items-center justify-center min-h-[60vh] px-4 py-12">
      <Card className="w-full max-w-md text-center border-zinc-200 dark:border-zinc-800 shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
              <FileQuestion className="w-8 h-8 text-blue-600 dark:text-blue-500" />
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
          {children || (
            <div className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
               <p>
                You might want to double-check the URL or return to the homepage to find what you&apos;re looking for.
               </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
           <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white">
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
