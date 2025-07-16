import React from "react";
import { Clock, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LocationPage() {
  const hours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "8:00 AM - 2:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 2:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 2:00 PM" },
    { day: "Friday", hours: "8:00 AM - 2:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 2:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-12">
          Location & Hours
        </h1>

        {/* Location Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1" />
              <div>
                <p className="font-medium">529 Bolivar St</p>
                <p>Denton, TX 76201</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=L'Amitié,Denton+TX`}
              ></iframe>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-[#f6f1d8]">
                Parking Information
              </h3>
              <p className="text-[#f6f1d8]">
                Convenient parking options are available:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-[#f6f1d8]">
                <li>Dedicated parking lot at the restaurant</li>
                <li>
                  Ample street parking available throughout downtown Denton
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Hours Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock />
              <CardTitle>Hours of Operation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-2 border-b border-[#f6f1d8]/20 last:border-0"
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
