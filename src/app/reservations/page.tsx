import React from "react";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#343f35] text-center mb-8">
          Make a Reservation
        </h1>
        <div className="bg-white shadow-xl rounded-lg p-6 border-2 border-[#343f35]">
          <p className="mb-6 text-[#343f35]">
            For reservations, you can email us at{" "}
            <a
              href="mailto:lamitie76201@gmail.com"
              className="text-[#5a6b5c] hover:underline"
            >
              lamitie76201@gmail.com
            </a>{" "}
            or fill out the form below:
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#343f35]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-2 border-[#5a6b5c] shadow-sm focus:border-[#9abf8c] focus:ring focus:ring-[#9abf8c] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#343f35]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-2 border-[#5a6b5c] shadow-sm focus:border-[#9abf8c] focus:ring focus:ring-[#9abf8c] focus:ring-opacity-50"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
