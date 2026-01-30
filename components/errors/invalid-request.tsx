import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InvalidRequestProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function InvalidRequest({
  title = "Invalid Request",
  description = "The request could not be processed due to invalid input.",
  children,
}: InvalidRequestProps) {
  return (
    <div className="flex bg-zinc-50 dark:bg-black items-center justify-center min-h-[50vh] px-4 py-12">
      <Card className="w-full max-w-md text-center border-zinc-200 dark:border-zinc-800 shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20">
              <AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-500" />
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
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Please check your information and try again.
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white"
          >
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
