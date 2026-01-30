"use client";

import { GeneralError } from "@/components/errors/general-error";
import { useEffect } from "react";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <GeneralError 
      error={error} 
      reset={reset} 
      title="Project Loading Error"
      description="We couldn't load the project details. Please try again."
    />
  );
}
