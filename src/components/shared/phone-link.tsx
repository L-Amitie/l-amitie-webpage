import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  phoneNumber: string;
  className?: string;
}

export function PhoneLink({ phoneNumber, className }: PhoneLinkProps) {
  // Remove any non-digit characters for the href
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  return (
    <a
      href={`tel:+1${cleanNumber}`}
      className={cn("hover:underline text-inherit", className)}
    >
      {phoneNumber}
    </a>
  );
}
