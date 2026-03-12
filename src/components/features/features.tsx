import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { ChartNoAxesColumnIcon, FlameIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <ZapIcon size={20} />,
    title: "Smart Insights",
    description: "Thamani reveals patterns in your M-PESA transactions you never noticed. See where your money flows and why, with clear breakdowns by category.",
    image: "/app-image-1.png",
  },
  {
    icon: <FlameIcon size={20} />,
    title: "Streak Shields",
    description: "Build mindful money habits with daily streaks. Check in, reflect on your spending, and earn shields as you build financial clarity over time.",
    image: "/app-image-1.png",
  },
  {
    icon: <ChartNoAxesColumnIcon size={20} />,
    title: "Spending Clarity",
    description: "Set limits for categories like Food, Transport, or Entertainment. Thamani gives you a heads up when you&apos;re approaching your boundaries.",
    image: "/app-image-1.png",
  },
  {
    icon: <ShieldCheckIcon size={20} />,
    title: "Uncompromising Privacy",
    description: "Your financial data never leaves your device. We read your M-PESA messages locally, with transparent options to export or delete your data at any time.",
    image: "/app-image-1.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        One App. <div className="text-muted-foreground">Complete Understanding of Your Money.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Everything you need to navigate your finances with confidence and clarity, all in one place.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
