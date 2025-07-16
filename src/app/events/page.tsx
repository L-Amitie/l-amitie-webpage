import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function EventsPage() {
  const eventTypes = [
    {
      title: "Private Dining",
      description: "Intimate gatherings in our exclusive private dining room",
      capacity: "Up to 20 guests",
    },
    {
      title: "Corporate Events",
      description:
        "Professional settings for business meetings and celebrations",
      capacity: "Up to 50 guests",
    },
    {
      title: "Wedding Receptions",
      description: "Elegant celebrations for your special day",
      capacity: "Up to 100 guests",
    },
    {
      title: "Social Gatherings",
      description: "Birthday parties, anniversaries, and family reunions",
      capacity: "Flexible arrangements",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-8">
          Special Events at L&apos;Amitie
        </h1>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {eventTypes.map((event) => (
            <Card key={event.title}>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-[#f6f1d8]/80">
                  {event.capacity}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Plan Your Event</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              For event inquiries, please email us at{" "}
              <a
                href="mailto:lamitie76201@gmail.com"
                className="text-[#f6f1d8] hover:underline"
              >
                lamitie76201@gmail.com
              </a>{" "}
              or fill out the form below:
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-2 border-[#f6f1d8]/20 bg-transparent shadow-sm focus:border-[#f6f1d8] focus:ring focus:ring-[#f6f1d8] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-2 border-[#f6f1d8]/20 bg-transparent shadow-sm focus:border-[#f6f1d8] focus:ring focus:ring-[#f6f1d8] focus:ring-opacity-50"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
