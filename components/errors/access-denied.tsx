import Link from "next/link";
import { ShieldAlert, Home, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AccessDeniedProps {
  title?: string;
  description?: string;
  loginUrl?: string;
}

export function AccessDenied({
  title = "Access Denied",
  description = "You do not have permission to view this resource.",
  loginUrl,
}: AccessDeniedProps) {
  return (
    <div className="flex bg-zinc-50 dark:bg-black items-center justify-center min-h-[50vh] px-4 py-12">
      <Card className="w-full max-w-md text-center border-zinc-200 dark:border-zinc-800 shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/20">
              <ShieldAlert className="w-8 h-8 text-amber-600 dark:text-amber-500" />
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
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please contact your administrator if you believe this is a mistake.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          {loginUrl && (
            <Button
              asChild
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white"
            >
              <Link href={loginUrl}>
                <LogIn className="mr-2 w-4 h-4" />
                Log In
              </Link>
            </Button>
          )}
          <Button
            variant={loginUrl ? "outline" : "default"}
            asChild
            className={
               !loginUrl 
               ? "w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white" 
               : "w-full sm:w-auto"
            }
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
