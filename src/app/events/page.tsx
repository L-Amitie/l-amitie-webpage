import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { EventForm } from "@/components/events/event-form";
import { Toaster } from "@/components/ui/sonner";

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
      capacity: "Up to 75 guests",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-8">
            Special Events at L&apos;Amitié
          </h1>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {eventTypes.map((event) => (
              <Card key={event.title} className="bg-[#5a6b5c]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#f6f1d8]">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-[#f6f1d8]/80">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-[#f6f1d8]/80">
                    {event.capacity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Form */}
          <Card className="bg-[#5a6b5c]">
            <CardHeader>
              <CardTitle className="text-[#f6f1d8]">Request an Event</CardTitle>
              <CardDescription className="text-[#f6f1d8]/80">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EventForm eventTypes={eventTypes} />
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster
        theme="dark"
        className="font-sans"
        toastOptions={{
          classNames: {
            toast: "bg-[#343f35] text-[#f6f1d8] border-[#f6f1d8]",
            title: "text-[#f6f1d8] font-medium",
            description: "text-[#f6f1d8]/80",
            actionButton: "bg-[#f6f1d8] text-[#343f35]",
            cancelButton: "bg-transparent text-[#f6f1d8] border-[#f6f1d8]",
            success: "!bg-[#343f35] !text-[#f6f1d8] border-[#f6f1d8]",
            error: "!bg-red-600 !text-[#f6f1d8] border-[#f6f1d8]",
            loading: "!bg-[#343f35] !text-[#f6f1d8] border-[#f6f1d8]",
          },
        }}
      />
    </>
  );
}
