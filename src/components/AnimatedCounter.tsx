
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  title: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  title,
  duration = 2,
  delay = 0.2,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animate the counter
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCounter);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="text-4xl md:text-5xl font-bold">
        {count}
        {suffix}
        <span className="text-primary">+</span>
      </div>
      <div className="mt-2 text-sm md:text-base text-muted-foreground">{title}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
