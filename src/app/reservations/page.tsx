import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PrimaryButtonLink } from "@/components/shared/button-variants";
import { PhoneLink } from "@/components/shared/phone-link";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-8">
          Make a Reservation
        </h1>
        <Card className="bg-[#5a6b5c] text-[#f6f1d8]">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-[#f6f1d8] mb-8">
              Reserve your table at L&apos;Amitié through our online booking
              system:
            </p>
            <PrimaryButtonLink
              href="https://www.google.com/maps/reserve/v/dine/c/iPQ6dw87sd0?source=pa&opi=89978449&hl=en-US&gei=dz94aOGIGsuIwbkPrIvrsAI&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dlamitie%2Btoast%26sca_esv%3Dedb9f998570affa4%26rlz%3D1C1VDKB_enUS1028US1036%26sxsrf%3DAE3TifPDucysQ_d-XzEs9lV4KlvNGuTWmg%3A1752711019763%26ei%3Daz94aNCqLvmFwbkP3d_RsAg%26ved%3D0ahUKEwiQjOitzcKOAxX5QjABHd1vFIYQ4dUDCBA%26uact%3D5%26oq%3Dlamitie%2Btoast%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiDWxhbWl0aWUgdG9hc3QyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGApI8CpQ0gtYzylwA3gBkAEAmAGPAaABkQuqAQM1Lji4AQPIAQD4AQGYAhCgAsgLwgIKEAAYsAMY1gQYR8ICBBAjGCfCAgsQABiABBiRAhiKBcICERAuGIAEGJECGMcBGIoFGK8BwgIOEC4YgAQYsQMY0QMYxwHCAgoQABiABBhDGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIKECMYgAQYJxiKBcICDhAAGIAEGLEDGIMBGIoFwgIFEAAYgATCAg0QABiABBixAxhDGIoFwgIHEAAYgAQYCsICChAAGIAEGBQYhwLCAgUQLhiABMICCxAuGIAEGMcBGK8BwgINEC4YgAQYxwEYDRivAcICBhAAGA0YHsICCBAAGAoYDRgewgIcEC4YgAQYxwEYDRivARiXBRjcBBjeBBjgBNgBAcICChAAGAgYChgNGB7CAggQABgIGA0YHsICCBAAGKIEGIkFwgIIEAAYgAQYogTCAgUQABjvBZgDAIgGAZAGCLoGBggBEAEYFJIHAzguOKAH-pcBsgcDNS44uAfAC8IHBjAuNi4xMMgHLg%26sclient%3Dgws-wiz-serp&ihs=9"
              external
              className="text-xl font-semibold px-8 py-4"
            >
              Book a Table
            </PrimaryButtonLink>
            <div className="mt-12 space-y-4 text-[#f6f1d8]">
              <p>
                <strong>Hours:</strong> Tuesday - Sunday, 8:00 AM to 2:00 PM
              </p>
              <p>
                For special reservations or large parties, please contact us at{" "}
                <a
                  href="mailto:lamitie76201@gmail.com"
                  className="text-[#f6f1d8] hover:underline"
                >
                  lamitie76201@gmail.com
                </a>{" "}
                or call us at <PhoneLink phoneNumber="(940) 381-0001" />
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
