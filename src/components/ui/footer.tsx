import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer ref={ref} className={cn("mt-auto py-8", className)} {...props} />
  )
);
Footer.displayName = "Footer";

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container mx-auto text-center", className)}
    {...props}
  />
));
FooterContent.displayName = "FooterContent";

export { Footer, FooterContent };
