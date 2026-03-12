import { AnimatedHeroHeading } from "@/components/hero/animated-hero-heading";
import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/user1.svg" />
            <PillAvatar src="/avatars/user3.svg" />
            <PillAvatar src="/avatars/user2.svg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            Join other <span className="text-foreground">financially mindful</span> users.
          </p>
        </Pill>
        <AnimatedHeroHeading />
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Turn your M-PESA messages into clarity. Thamani reveals your spending patterns, builds mindful habits with streaks, and keeps your financial data completely private.
        </p>
        <Button className="rounded-md mb-10 w-fit" size="lg" asChild>
          <Link href="https://play.google.com/store">Start Your Journey</Link>
        </Button>
        <Image src="/app-image-1.png" alt="Thamani App" width={304} height={445} />
      </div>
    </div>
  );
}
