import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";
import { VariantProps } from "class-variance-authority";

// Base button styles
const baseButtonStyles = {
  primary:
    "bg-[#343f35] text-[#f6f1d8] hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors h-12",
  secondary:
    "bg-[#f6f1d8] text-[#343f35] hover:bg-[#9abf8c] transition-colors h-12",
};

type ButtonBaseProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

// Primary Button
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  ButtonBaseProps & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(baseButtonStyles.primary, className)}
      {...props}
    />
  );
});
PrimaryButton.displayName = "PrimaryButton";

// Secondary Button
export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  ButtonBaseProps & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(baseButtonStyles.secondary, className)}
      {...props}
    />
  );
});
SecondaryButton.displayName = "SecondaryButton";

// Link variants that look like buttons
interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  external?: boolean;
}

export const PrimaryButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, href, external, ...props }, ref) => {
    const Comp = external ? "a" : Link;
    const externalProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          baseButtonStyles.primary,
          className
        )}
        {...externalProps}
        {...props}
      />
    );
  }
);
PrimaryButtonLink.displayName = "PrimaryButtonLink";

export const SecondaryButtonLink = forwardRef<
  HTMLAnchorElement,
  ButtonLinkProps
>(({ className, href, external, ...props }, ref) => {
  const Comp = external ? "a" : Link;
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Comp
      ref={ref}
      href={href}
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        baseButtonStyles.secondary,
        className
      )}
      {...externalProps}
      {...props}
    />
  );
});
SecondaryButtonLink.displayName = "SecondaryButtonLink";
