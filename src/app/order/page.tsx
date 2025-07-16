import { Card, CardContent } from "@/components/ui/card";

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[#f6f1d8] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] mb-8">
          Online Ordering
        </h1>
        <Card className="bg-white/80 backdrop-blur">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-[#343f35] mb-6">
              Coming Soon
            </h2>
            <p className="text-lg text-[#343f35]/80 mb-6">
              We're currently working on bringing you a seamless online ordering
              experience. In the meantime, please feel free to visit us in
              person or call us to place your order for pickup.
            </p>
            <div className="space-y-4 text-[#343f35]/80">
              <p>
                <strong>Hours:</strong> Tuesday - Sunday, 8:00 AM to 2:00 PM
              </p>
              <p>
                <strong>Phone:</strong> (940) 555-0123
              </p>
              <p>
                <strong>Location:</strong> 123 Main Street, Denton, TX 76201
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
