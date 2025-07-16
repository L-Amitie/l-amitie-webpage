import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DinnerPage() {
  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-4">
          Dinner Menu
        </h1>
        <p className="text-[#5a6b5c] text-center mb-12">Coming Soon</p>

        <Card>
          <CardHeader>
            <CardTitle>Exciting News!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="leading-relaxed">
              We&apos;re thrilled to announce that L&apos;Amitié will be
              expanding our hours to include dinner service in the near future.
              Our talented chefs are crafting an exquisite dinner menu that will
              feature classic French dishes with a modern twist.
            </p>
            <p className="leading-relaxed">
              Stay tuned for updates on our opening date and menu offerings.
              Follow us on social media or join our mailing list to be the first
              to know when dinner service begins.
            </p>
            <div className="mt-8 text-center">
              <p className="text-sm text-[#5a6b5c]">
                Currently serving breakfast and lunch
                <br />
                Tuesday through Sunday, 8:00 AM to 2:00 PM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
