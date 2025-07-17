import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ServiceCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  href: string;
}

export const ServiceCard = forwardRef<HTMLAnchorElement, ServiceCardProps>(
  ({ className, title, description, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block p-6 bg-[#343f35] text-[#f6f1d8] rounded-lg hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors",
          className
        )}
        {...props}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </a>
    );
  }
);
ServiceCard.displayName = "ServiceCard";
