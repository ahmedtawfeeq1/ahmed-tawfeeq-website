
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
  colorVariant?: "blue" | "yellow";
}

const ServiceCard = ({
  title,
  description,
  ctaText,
  ctaLink,
  icon,
  external = false,
  className,
  colorVariant = "blue",
}: ServiceCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const colorClasses = {
    blue: "border-blue-500/20 hover:border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-transparent",
    yellow: "border-amber-500/20 hover:border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-transparent"
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <Card className={cn("overflow-hidden transition-all duration-300", colorClasses[colorVariant], className)}>
        <CardHeader>
          {icon && <div className="mb-4">{icon}</div>}
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
