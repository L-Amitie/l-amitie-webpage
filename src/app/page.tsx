import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const featuredSections = [
    {
      title: "Special Events",
      description:
        "Host your next celebration with us. From intimate gatherings to grand celebrations.",
      href: "/events",
    },
    {
      title: "Our Menus",
      description:
        "Explore our carefully crafted breakfast, lunch, and coffee selections.",
      href: "/menus",
    },
    {
      title: "Visit Us",
      description:
        "Find us in downtown Denton. Open Tuesday through Sunday, 8 AM to 2 PM.",
      href: "/location",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1d8]">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#2b3a2d]/75 z-10"></div>
        <div className="relative z-20 text-center text-[#f8f3dc] px-4">
          <h1 className="text-7xl md:text-8xl script-font mb-6">
            Welcome to L&lsquo;Amitié
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium">
            Experience the finest French-inspired breakfast and lunch in an
            atmosphere of warmth and friendship. Dinner service coming soon!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-[#2b3a2d] text-[#f8f3dc] px-8 py-3 rounded-md hover:bg-[#8ab17d] hover:text-[#2b3a2d] transition-colors font-medium"
            >
              Make a Reservation
            </Link>
            <Link
              href="/menus"
              className="bg-[#f8f3dc] text-[#2b3a2d] px-8 py-3 rounded-md hover:bg-[#8ab17d] hover:text-[#2b3a2d] transition-colors font-medium"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Preview Section */}
      <section className="py-16 px-4 bg-[#2b3a2d] text-[#f8f3dc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl script-font mb-8">Our Story</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
            In the heart of downtown Denton, L&lsquo;Amitié was born from a deep
            love of French culinary traditions and a desire to create a space
            where food and friendship intertwine. Our name, meaning
            &ldquo;friendship&rdquo; in French, reflects our commitment to
            fostering genuine connections through exceptional dining
            experiences.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium">
            Every dish we serve is crafted with care, combining classic French
            techniques with local Texas ingredients to create something truly
            unique. From our freshly baked croissants to our signature brunch
            specialties, each plate tells a story of passion, tradition, and
            innovation.
          </p>
          <Link
            href="/our-story"
            className="inline-block bg-[#f8f3dc] text-[#2b3a2d] px-8 py-3 rounded-md hover:bg-[#8ab17d] hover:text-[#2b3a2d] transition-colors font-medium"
          >
            Read More About Our Journey
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="script-font text-4xl md:text-5xl">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
