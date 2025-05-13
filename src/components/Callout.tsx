
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  className?: string;
  external?: boolean;
}

const Callout = ({
  title,
  ctaText,
  ctaLink,
  className,
  external = false,
}: CalloutProps) => {
  const calloutVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={calloutVariants}
      className={cn(
        "border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm rounded-lg p-8 md:p-10",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl md:text-2xl font-medium">{title}</div>
        <Button
          asChild
          size="lg"
          className="group"
        >
          {external ? (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <a href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default Callout;
