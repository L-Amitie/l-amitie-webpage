"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileRestaurantNavbar() {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    {
      title: "About Us",
      submenu: [
        { title: "Our Story", href: "/our-story" },
        { title: "Location & Hours", href: "/location" },
      ],
    },
    {
      title: "Menus",
      submenu: [
        { title: "Breakfast & Lunch", href: "/menus/brunch" },
        { title: "Dinner (Coming Soon)", href: "/menus/dinner" },
        { title: "Coffee Bar", href: "/menus/coffee" },
      ],
    },
    {
      title: "Contact Us",
      submenu: [
        { title: "Contact Information", href: "/contact" },
        { title: "Special Events", href: "/events" },
      ],
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="lg:hidden bg-[#343f35] text-[#f6f1d8] h-12 px-4 text-base font-medium hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors ml-auto">
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-[#343f35] text-[#f6f1d8] p-0 overflow-y-auto"
      >
        <SheetHeader className="p-6 border-b border-[#f6f1d8]/10 sticky top-0 bg-[#343f35] z-10">
          <SheetTitle className="text-[#f6f1d8]">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-6 min-h-[calc(100vh-5rem)]">
          {menuItems.map((section, index) => (
            <div key={index} className="px-6">
              <h3 className="mb-2 text-lg font-medium">{section.title}</h3>
              <div className="ml-4 space-y-2 mb-6">
                {section.submenu.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="block text-[#f6f1d8]/70 hover:text-[#9abf8c] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="px-6 space-y-4 mt-4">
            <Link
              href="/reservations"
              className="block w-full bg-[#9abf8c] text-[#343f35] px-4 py-2 rounded-md text-center font-medium hover:bg-[#5a6b5c] hover:text-[#f6f1d8] transition-colors"
              onClick={() => setOpen(false)}
            >
              Make a Reservation
            </Link>
            <Link
              href="/order"
              className="block w-full bg-[#9abf8c] text-[#343f35] px-4 py-2 rounded-md text-center font-medium hover:bg-[#5a6b5c] hover:text-[#f6f1d8] transition-colors"
              onClick={() => setOpen(false)}
            >
              Order Online
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
