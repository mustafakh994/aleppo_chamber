import { Hero } from "@/components/home/Hero";
import { QuickAccess } from "@/components/home/QuickAccess";
import { About } from "@/components/home/About";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InvestmentHub } from "@/components/home/InvestmentHub";
import { NewsTicker } from "@/components/home/NewsTicker";
import { MediaGallery } from "@/components/home/MediaGallery";
import { VoiceOfMerchant } from "@/components/home/VoiceOfMerchant";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <Hero />
      <QuickAccess />
      <About />
      <ServicesOverview />
      <InvestmentHub />
      <NewsTicker />
      <MediaGallery />
      <VoiceOfMerchant />
    </div>
  );
}
