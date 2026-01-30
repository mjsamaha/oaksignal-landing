"use client";

import { GeneralError } from "@/components/errors/general-error";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <GeneralError error={error} reset={reset} />;
}
