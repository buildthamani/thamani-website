import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Everything you need to know about Thamani.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="https://play.google.com/store">Get Started</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="privacy" className="grid w-full gap-4">
        <AccordionItemFAQs value="privacy">
          <AccordionTriggerFAQs>Is my financial data private and secure?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Your data never leaves your device. Period. Thamani reads your M-PESA messages locally on your phone and never uploads them to any server. You can export or completely delete your data at any time.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="mpesa">
          <AccordionTriggerFAQs>How does Thamani read my M-PESA messages?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Thamani reads your M-PESA SMS messages on your device to automatically categorize transactions and surface insights. Everything happens locally — your messages are never sent to a server or shared with anyone.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="streaks">
          <AccordionTriggerFAQs>What are Streaks and Shields?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Streaks reward you for checking in on your finances daily. The longer your streak, the higher your shield level — from Wood to Gold. It&apos;s a simple way to build the habit of financial mindfulness without pressure.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="offline">
          <AccordionTriggerFAQs>Does Thamani work offline?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Yes. Since all your data is stored locally, you can view your insights, check your streaks, and review your spending patterns without an internet connection. Thamani works wherever you are.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
