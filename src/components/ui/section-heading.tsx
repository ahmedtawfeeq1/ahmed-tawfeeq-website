
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = false,
}: SectionHeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={cn(
        centered ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <motion.h2
        variants={itemVariants}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "mt-4 text-lg text-muted-foreground max-w-3xl",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
