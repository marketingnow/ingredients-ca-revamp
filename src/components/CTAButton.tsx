import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  href?: string;
}

const CTAButton = ({
  children = "TRY IT RISK-FREE",
  className,
  size = "lg",
  href = "https://terrafreeze.com/product/terrafreeze-2oz/",
}: CTAButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide text-gold-foreground bg-gold rounded-md transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 hover:shadow-elevated",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
};

export default CTAButton;
