import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function MenusPage() {
  const menuTypes = [
    {
      title: "Breakfast & Lunch",
      description: "Served Tuesday through Sunday, 8:00 AM to 2:00 PM",
      link: "/menus/brunch",
      highlights: ["Fresh Pastries", "Eggs Benedict", "Croque Monsieur"],
    },
    {
      title: "Dinner (Coming Soon)",
      description: "We're excited to announce our upcoming dinner service",
      link: "/menus/dinner",
      highlights: ["Stay Tuned", "More Details Coming"],
    },
    {
      title: "Coffee Bar",
      description:
        "Specialty lattes, espresso drinks, and non-coffee beverages",
      link: "/menus/coffee",
      highlights: ["Specialty Lattes", "Espresso Drinks", "Fresh Teas"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-12">
          Our Menus
        </h1>

        <div className="space-y-8">
          {menuTypes.map((menu) => (
            <Link
              key={menu.title}
              href={menu.link}
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{menu.title}</CardTitle>
                  <CardDescription>{menu.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {menu.highlights.map((item) => (
                      <span
                        key={item}
                        className="bg-[#f6f1d8] text-[#5a6b5c] px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
