import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceCard from "@/components/ServiceCard";
import Callout from "@/components/Callout";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const HomePage = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="text-lg text-muted-foreground">
                👋 Hi, I'm Ahmed Tawfeeq from Egypt
              </motion.p>
              
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                AI & Automation Specialist
              </motion.h1>
              
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-xl md:text-2xl text-muted-foreground">
                Founder & Product Lead at GenuDo
              </motion.h2>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                I help individuals and organizations unlock the power of intelligent systems by blending business acumen with technical execution.
              </motion.p>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/ai-agent-coaching">
                    Explore the AI Agent Coaching Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://genudo.ai" target="_blank" rel="noopener noreferrer">
                    Let GenuDo Build it For You
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="flex-1 max-w-sm">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-muted p-1">
                <img alt="Ahmed Tawfeeq" className="w-full h-auto rounded-xl" src="/lovable-uploads/56b5fac4-fe84-4117-837f-f0e002dd8b3a.png" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <SectionHeading title="About Me" subtitle="Building the future of intelligent automation" />
          
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="space-y-6">
              <p className="text-lg">
                With 6+ years of experience at the intersection of AI, automation, business intelligence, and software, I've helped companies across the MENA region evolve their operations. I specialize in deploying intelligent agents that do real work — sales, support, marketing, and operations.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AnimatedCounter value={250} title="Agents Built" />
                <AnimatedCounter value={13} title="Job Functions" delay={0.2} />
                <AnimatedCounter value={35} title="Companies Served" delay={0.4} />
                <AnimatedCounter value={40} title="Professionals Coached" delay={0.6} />
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img src="/lovable-uploads/4a852cb8-ead7-482a-a43b-4597decad2fb.png" alt="Ahmed Tawfeeq" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading title="My Services" subtitle="Expert guidance to help you succeed with AI and automation" centered={true} />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <ServiceCard title="1-on-1 Coaching" description="Book a session with me for strategic guidance on AI, automation, business transformation, or startup growth." ctaText="Book a Session" ctaLink="https://icancoachyou.online/en/coaches/ahmed-tawfeeq" colorVariant="blue" external={true} />
            
            <ServiceCard title="AI Agent Coaching Program" description="A structured, hands-on program for professionals and teams to learn, build, and launch their own AI agents — guided by me over 4 weeks of intensive training and 3 months of follow-up." ctaText="Learn More" ctaLink="/ai-agent-coaching" colorVariant="yellow" />
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <Callout title={<span>
                Not ready to build it yourself? Let <strong>GenuDo</strong> do it for you.
              </span>} ctaText="Visit GenuDo" ctaLink="https://genudo.ai" external={true} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Let's Build Something Intelligent" subtitle="Tell me about your goals — I'll help you unlock your next milestone." centered={true} />
          
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;