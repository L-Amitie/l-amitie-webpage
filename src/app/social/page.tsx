import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function SocialPage() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/lamitie_76201",
      icon: Instagram,
      description:
        "Follow us for beautiful food photography and behind-the-scenes content",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/lamitiebistro",
      icon: Facebook,
      description: "Join our community and stay updated on events and specials",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      href: "mailto:lamitie76201@gmail.com",
      icon: Mail,
      description: "Contact us directly for inquiries and reservations",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#343f35] text-center mb-8">
          Connect With Us
        </h1>
        <div className="space-y-8">
          {socialLinks.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              target={platform.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={platform.color}>
                      <platform.icon size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                      <CardDescription>{platform.description}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
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
