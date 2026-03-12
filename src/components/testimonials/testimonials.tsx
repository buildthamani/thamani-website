import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Wanjiku M.",
    date: "Feb 12",
    title: "Finally, clarity",
    content: `"I used to dread checking my M-PESA balance. Now I actually look forward to my weekly reflection. Thamani makes understanding my money feel simple."`,
    rating: 5,
  },
  {
    name: "Brian K.",
    date: "Jan 28",
    title: "Streaks keep me going",
    content: `"The streak feature is genius. 30 days of checking in on my spending and I've already saved KES 4,000 this month without even trying hard."`,
    rating: 5,
  },
  {
    name: "Amina H.",
    date: "Mar 1",
    title: "Private and beautiful",
    content: `"I love that my financial data stays on my phone. No cloud, no worries. And the insights actually help me find balance in how I spend."`,
    rating: 5,
  },
  {
    name: "Dennis O.",
    date: "Feb 20",
    title: "Built for how we use money",
    content: `"Other finance apps don't understand M-PESA. Thamani was clearly built by people who get how money works in Kenya. It just fits."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonial
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Don&apos;t Take<div className="text-muted-foreground">Our Word for It</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Thousands of M-PESA users are building clarity with Thamani every day. Here&apos;s what they have to say.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
