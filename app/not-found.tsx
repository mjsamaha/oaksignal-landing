import { NotFoundError } from "@/components/errors/not-found-error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return <NotFoundError />;
}
