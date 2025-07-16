import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Footer, FooterContent } from "@/components/ui/footer";

export default function RestaurantFooter() {
  return (
    <Footer className="bg-[#f6f1d8]">
      <FooterContent>
        <h2 className="text-2xl mb-4 text-[#343f35]">Follow Us</h2>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center">
            <Link
              href="https://instagram.com/lamitie_76201"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#343f35] hover:text-[#343f35]/80 transition-colors mb-2"
            >
              <Instagram size={32} />
            </Link>
            <span className="text-sm text-[#343f35]/80">@lamitie_76201</span>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="https://facebook.com/lamitiebistro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#343f35] hover:text-[#343f35]/80 transition-colors mb-2"
            >
              <Facebook size={32} />
            </Link>
            <span className="text-sm text-[#343f35]/80">@lamitiebistro</span>
          </div>
        </div>
      </FooterContent>
    </Footer>
  );
}
