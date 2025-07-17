"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { PhoneLink } from "@/components/shared/phone-link";

interface ContactMethod {
  name: string;
  value: string;
  href: string;
  icon: React.ElementType;
  description: string;
  color: string;
}

const ContactCard = ({ method }: { method: ContactMethod }) => {
  const handleClick = () => {
    window.open(
      method.href,
      method.name === "Instagram" || method.name === "Facebook"
        ? "_blank"
        : "_self"
    );
  };

  return (
    <Card
      className="transition-all duration-300 hover:scale-[1.02] bg-[#5a6b5c] cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={method.color}>
            <method.icon size={32} className="text-[#f6f1d8]" />
          </div>
          <div>
            <CardTitle className="text-xl text-[#f6f1d8]">
              {method.name}
            </CardTitle>
            <p className="text-[#f6f1d8] mt-1">
              {method.name === "Phone" ? (
                <PhoneLink phoneNumber={method.value} />
              ) : (
                method.value
              )}
            </p>
            <CardDescription className="text-[#f6f1d8]/70">
              {method.description}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ContactPage() {
  const contactMethods = [
    {
      name: "Phone",
      value: "(940) 381-0001",
      href: "tel:+19403810001",
      icon: Phone,
      description: "Call us for immediate assistance",
      color: "hover:text-yellow-600",
    },
    {
      name: "Email",
      value: "lamitie76201@gmail.com",
      href: "mailto:lamitie76201@gmail.com",
      icon: Mail,
      description: "Contact us for reservations, events, or general inquiries",
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      value: "@lamitie_76201",
      href: "https://instagram.com/lamitie_76201",
      icon: Instagram,
      description:
        "Follow us for beautiful food photography and behind-the-scenes content",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      value: "@lamitiebistro",
      href: "https://facebook.com/lamitiebistro",
      icon: Facebook,
      description: "Join our community and stay updated on events and specials",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-8">
          Contact Us
        </h1>

        <div className="space-y-8">
          {contactMethods.map((method) => (
            <ContactCard key={method.name} method={method} />
          ))}
        </div>

        <Card className="mt-12 bg-[#5a6b5c]">
          <CardHeader>
            <CardTitle className="text-[#f6f1d8]">Connect With Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#f6f1d8]">
              Tag us in your posts using{" "}
              <span className="font-semibold">#LAmitie76201</span> or{" "}
              <span className="font-semibold">#LAmitie</span> for a chance to be
              featured on our social media channels!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
