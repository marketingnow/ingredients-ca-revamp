import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  href?: string;
}

const CTAButton = ({
  children = "Try It Risk-Free",
  className,
  size = "lg",
  href = "#",
}: CTAButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-display font-bold text-gold-foreground bg-gold rounded-full transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 hover:shadow-elevated",
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
