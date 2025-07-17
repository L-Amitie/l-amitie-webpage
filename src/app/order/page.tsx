import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/order/service-card";
import { PhoneLink } from "@/components/shared/phone-link";

const deliveryServices = [
  {
    title: "Toast",
    description: "Order directly through our system",
    href: "https://www.toasttab.com/local/order/l-amitie-529-bolivar-st",
  },
  {
    title: "Grubhub",
    description: "Order through Grubhub",
    href: "https://www.grubhub.com/restaurant/lamiti-529-bolivar-st-denton/8105176",
  },
  {
    title: "DoorDash",
    description: "Order through DoorDash",
    href: "https://www.doordash.com/store/l%E2%80%99amiti%C3%A9-denton-28125837/?srsltid=AfmBOor1LcQ5c6FeAh8HvYKLbaq07ZsZB2G2Re7rlyj_k1TlpBBcw5Fi",
  },
  {
    title: "Uber Eats",
    description: "Order through Uber Eats",
    href: "https://www.ubereats.com/store/lamitie/OY5czE3kRjW8FBTIo907Kg?srsltid=AfmBOorwyA5HWQreC6Y11tnwM4OB0KjlNjvCien_QSimxbxCnkrwu0my",
  },
];

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[#f6f1d8] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] mb-8">
          Online Ordering
        </h1>
        <Card className="bg-[#5a6b5c] text-[#f6f1d8]">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-[#f6f1d8] mb-6">
              Order Online
            </h2>
            <p className="text-lg text-[#f6f1d8] mb-8">
              Choose your preferred way to order from L&apos;Amitié:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {deliveryServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
            <div className="mt-12 space-y-4 text-[#f6f1d8]">
              <p>
                <strong>Hours:</strong> Tuesday - Sunday, 8:00 AM to 2:00 PM
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <PhoneLink phoneNumber="(940) 381-0001" />
              </p>
              <p>
                <strong>Location:</strong> 529 Bolivar St, Denton, TX 76201
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
