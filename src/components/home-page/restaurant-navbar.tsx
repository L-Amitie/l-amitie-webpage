"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MobileRestaurantNavbar from "./mobile-restaurant-navbar";

export default function RestaurantNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-24 border-b backdrop-blur-2xl navbar-striped">
      <style jsx>{`
        .navbar-striped {
          background: repeating-linear-gradient(
            90deg,
            #5a6b5c 0px,
            #5a6b5c 8px,
            white 8px,
            white 16px
          );
        }
      `}</style>

      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="flex items-center justify-between w-full lg:justify-center lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/lamitie_logo.png"
              alt="L'Amitié Logo"
              width={200}
              height={150}
              className="w-auto h-auto max-h-24"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Mobile Menu Button - positioned to the right on mobile */}
          <div className="lg:hidden">
            <MobileRestaurantNavbar />
          </div>

          {/* Navigation menu - hidden on mobile */}
          <NavigationMenu viewport={false} className="hidden lg:block">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#343f35] text-[#f6f1d8] h-12 px-6 text-base font-medium hover:bg-[#9abf8c] hover:text-[#5a6b5c]">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4 bg-[#343f35] p-4 text-[#f6f1d8]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/our-story" className="text-[#f6f1d8]">
                          <div className="font-medium">Our Story</div>
                          <div className="text-[#f6f1d8]/70">
                            Learn about our history and values
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/location" className="text-[#f6f1d8]">
                          <div className="font-medium">Location & Hours</div>
                          <div className="text-[#f6f1d8]/70">
                            Find us and plan your visit
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#343f35] text-[#f6f1d8] h-12 px-6 text-base font-medium hover:bg-[#9abf8c] hover:text-[#5a6b5c]">
                  Menus
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid h-full gap-2 md:w-[450px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-[#343f35] p-4 text-[#f6f1d8]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md text-[#f6f1d8] relative overflow-hidden group"
                          href="/menus"
                        >
                          <div className="absolute inset-0 bg-[url('/menu-preview.png')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-black/40"></div>
                          <div className="relative z-10">
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Our Menus
                            </div>
                            <p className="text-[#f6f1d8]/70 text-sm leading-tight">
                              Explore our breakfast, lunch, and specialty coffee
                              offerings, with dinner service coming soon
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <div className="grid h-full gap-3">
                      <ListItem href="/menus/brunch" title="Breakfast & Lunch">
                        Served Tuesday through Sunday, 8:00 AM to 2:00 PM
                      </ListItem>
                      <ListItem
                        href="/menus/dinner"
                        title="Dinner (Coming Soon)"
                      >
                        Stay tuned for our upcoming dinner service
                      </ListItem>
                      <ListItem href="/menus/coffee" title="Coffee Bar">
                        Specialty lattes, espresso drinks, and fresh teas
                      </ListItem>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#343f35] text-[#f6f1d8] h-12 px-6 text-base font-medium hover:bg-[#9abf8c] hover:text-[#5a6b5c]">
                  Contact Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4 bg-[#343f35] p-4 text-[#f6f1d8]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/contact" className="text-[#f6f1d8]">
                          <div className="font-medium">Contact Information</div>
                          <div className="text-[#f6f1d8]/70">
                            Get in touch and connect with us
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/events" className="text-[#f6f1d8]">
                          <div className="font-medium">Special Events</div>
                          <div className="text-[#f6f1d8]/70">
                            Host your special occasion with us
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/reservations"
                  className="bg-[#343f35] text-[#f6f1d8] h-12 px-6 rounded-md hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors inline-flex items-center font-medium"
                >
                  Make a Reservation
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/order"
                  className="bg-[#343f35] text-[#f6f1d8] h-12 px-6 rounded-md hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors inline-flex items-center font-medium"
                >
                  Order Online
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li className="h-full" {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#f6f1d8]"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm text-[#f6f1d8]/70">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
