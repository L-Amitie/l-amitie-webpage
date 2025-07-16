import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-12">
          Our Story
        </h1>

        {/* History Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>A Legacy of French Cuisine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="leading-relaxed">
              Founded in 2020, L&apos;Amitié was born from a passion for
              authentic French cuisine and a desire to create a warm, welcoming
              dining experience. Our name, meaning &quot;friendship&quot; in
              French, reflects our commitment to treating every guest as family.
            </p>
            <p className="leading-relaxed">
              Our executive chef, trained in the finest culinary schools of
              Paris, brings decades of experience and innovation to every dish.
              We combine traditional French techniques with locally-sourced
              ingredients to create a menu that&apos;s both authentic and
              uniquely our own.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Our Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                We believe that great food should be accompanied by great
                company. Our restaurant is designed to be a place where friends
                and family can gather, share stories, and create lasting
                memories over exceptional meals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Quality and sustainability are at the heart of everything we do.
                We work closely with local farmers and suppliers to ensure the
                freshest ingredients while supporting our community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card>
          <CardHeader>
            <CardTitle>Meet Our Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="leading-relaxed">
              Our team of passionate culinary professionals brings together
              years of experience from renowned restaurants across France and
              beyond. From our expert sommeliers to our talented kitchen staff,
              every member of our team is dedicated to providing you with an
              exceptional dining experience.
            </p>
            <p className="leading-relaxed">
              We take pride in fostering a collaborative environment where
              creativity flourishes and traditional techniques are honored. This
              synergy is reflected in every dish we serve and every interaction
              with our guests.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
