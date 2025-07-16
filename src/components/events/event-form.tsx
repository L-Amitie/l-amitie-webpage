"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface EventType {
  title: string;
  description: string;
  capacity: string;
}

interface EventFormProps {
  eventTypes: EventType[];
}

export function EventForm({ eventTypes }: EventFormProps) {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {};

    // Name validation (at least 2 words)
    const name = formData.get("entry.1882201932") as string;
    if (!name || name.trim().split(/\s+/).length < 2) {
      errors["name"] = "Please enter your full name";
    }

    // Email validation
    const email = formData.get("entry.686512355") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors["email"] = "Please enter a valid email address";
    }

    // Phone validation (basic format: at least 10 digits)
    const phone = formData.get("entry.1867376452") as string;
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 10) {
      errors["phone"] =
        "Please enter a valid phone number (at least 10 digits)";
    }

    // Event type validation
    const eventType = formData.get("entry.1319607979") as string;
    if (!eventType) {
      errors["eventType"] = "Please select an event type";
    }

    // Date validation
    const date = formData.get("entry.581558973") as string;
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!date || selectedDate < today) {
      errors["date"] = "Please select a future date";
    }

    // Guest count validation
    const guests = formData.get("entry.719069923") as string;
    const guestCount = parseInt(guests);
    if (!guests || isNaN(guestCount) || guestCount < 1) {
      errors["guests"] = "Please enter a valid number of guests (minimum 1)";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!validateForm(formData)) {
      toast.error("Form Validation Error", {
        description: "Please check the highlighted fields and try again.",
      });
      return;
    }

    toast.loading("Submitting Request", {
      description: "Please wait while we process your event inquiry...",
    });

    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSf0W4XXvedjiNStIKMMqRDf1hG8ZHUvw8_3-jr-CqhPaQkwhg/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      toast.dismiss();
      toast.success("Request Submitted", {
        description:
          "Thank you for your interest! Our team will contact you shortly to discuss your event details.",
      });

      // Reset the form and errors
      form.reset();
      setFormErrors({});
    } catch (error) {
      toast.dismiss();
      toast.error("Submission Error", {
        description:
          "We couldn't process your request. Please try again or contact us directly at lamitie76201@gmail.com",
      });
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-2xl text-[#343f35]">
          Plan Your Event
        </CardTitle>
        <CardDescription className="text-[#343f35]/80">
          For event inquiries, please email us at{" "}
          <a
            href="mailto:lamitie76201@gmail.com"
            className="text-[#343f35] font-medium hover:underline"
          >
            lamitie76201@gmail.com
          </a>{" "}
          or fill out the form below:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-6"
          action="https://docs.google.com/forms/d/e/1FAIpQLSf0W4XXvedjiNStIKMMqRDf1hG8ZHUvw8_3-jr-CqhPaQkwhg/formResponse"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="entry.1882201932" className="text-[#343f35]">
                Name *
              </Label>
              <Input
                type="text"
                id="entry.1882201932"
                name="entry.1882201932"
                required
                className={`border-[#343f35]/20 focus:border-[#343f35] text-[#343f35] ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                placeholder="First and Last Name"
              />
              {formErrors.name && (
                <p className="text-sm text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry.686512355" className="text-[#343f35]">
                Email *
              </Label>
              <Input
                type="email"
                id="entry.686512355"
                name="entry.686512355"
                required
                className={`border-[#343f35]/20 focus:border-[#343f35] text-[#343f35] ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                placeholder="your@email.com"
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry.1867376452" className="text-[#343f35]">
                Phone Number *
              </Label>
              <Input
                type="tel"
                id="entry.1867376452"
                name="entry.1867376452"
                required
                className={`border-[#343f35]/20 focus:border-[#343f35] text-[#343f35] ${
                  formErrors.phone ? "border-red-500" : ""
                }`}
                placeholder="(123) 456-7890"
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">{formErrors.phone}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry.1319607979" className="text-[#343f35]">
                Event Type *
              </Label>
              <select
                name="entry.1319607979"
                id="entry.1319607979"
                required
                className={`w-full rounded-md border border-[#343f35]/20 bg-transparent px-3 py-2 text-[#343f35] focus:border-[#343f35] focus:outline-none ${
                  formErrors.eventType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select an event type</option>
                {eventTypes.map((event) => (
                  <option key={event.title} value={event.title}>
                    {event.title}
                  </option>
                ))}
              </select>
              {formErrors.eventType && (
                <p className="text-sm text-red-500">{formErrors.eventType}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry.581558973" className="text-[#343f35]">
                Preferred Date *
              </Label>
              <Input
                type="date"
                id="entry.581558973"
                name="entry.581558973"
                required
                min={new Date().toISOString().split("T")[0]}
                className={`border-[#343f35]/20 focus:border-[#343f35] text-[#343f35] ${
                  formErrors.date ? "border-red-500" : ""
                }`}
              />
              {formErrors.date && (
                <p className="text-sm text-red-500">{formErrors.date}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry.719069923" className="text-[#343f35]">
                Number of Guests *
              </Label>
              <Input
                type="number"
                id="entry.719069923"
                name="entry.719069923"
                min="1"
                required
                className={`border-[#343f35]/20 focus:border-[#343f35] text-[#343f35] ${
                  formErrors.guests ? "border-red-500" : ""
                }`}
                placeholder="Minimum 1 guest"
              />
              {formErrors.guests && (
                <p className="text-sm text-red-500">{formErrors.guests}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entry.1549253710" className="text-[#343f35]">
              Additional Details
            </Label>
            <Textarea
              id="entry.1549253710"
              name="entry.1549253710"
              rows={4}
              className="border-[#343f35]/20 focus:border-[#343f35] text-[#343f35]"
              placeholder="Please share any specific requirements or questions you have about your event."
            />
          </div>
          <CardFooter className="px-0 pb-0">
            <button
              type="submit"
              className="w-full bg-[#343f35] text-[#f6f1d8] py-3 px-6 rounded-md hover:bg-[#9abf8c] hover:text-[#5a6b5c] transition-colors font-medium"
            >
              Submit Inquiry
            </button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
