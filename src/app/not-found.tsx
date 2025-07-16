import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f1d8] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-8xl md:text-9xl script-font text-[#343f35] mb-4">
          404
        </h1>
        <Card className="bg-white/80 backdrop-blur">
          <CardContent className="p-8">
            <h2 className="text-3xl md:text-4xl script-font text-[#343f35] mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-[#343f35]/80 mb-8">
              It seems we can&lsquo;t find the page you&lsquo;re looking for.
              Perhaps we could interest you in some of our signature dishes
              instead?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="bg-[#343f35] text-[#f6f1d8] px-6 py-3 rounded-md hover:bg-[#5a6b5c] transition-colors"
              >
                Return Home
              </Link>
              <Link
                href="/menus"
                className="bg-[#343f35] text-[#f6f1d8] px-6 py-3 rounded-md hover:bg-[#5a6b5c] transition-colors"
              >
                View Our Menu
              </Link>
              <Link
                href="/contact"
                className="bg-[#343f35] text-[#f6f1d8] px-6 py-3 rounded-md hover:bg-[#5a6b5c] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
