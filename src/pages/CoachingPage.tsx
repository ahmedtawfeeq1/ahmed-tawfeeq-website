import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Search, BookOpen, Cpu, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const CoachingPage = () => {
  const [activeTab, setActiveTab] = useState("milestone1");
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const renderWeekCard = (week: string, title: string, description: string, outcomes: string[], icon: React.ReactNode) => <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
      <CardHeader className="relative">
        <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{week}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {description}
        </p>
        <div className="space-y-2">
          <p className="font-medium">What happens:</p>
          <ul className="space-y-2 pl-2">
            {outcomes.map((outcome, i) => <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{outcome}</span>
              </li>)}
          </ul>
        </div>
        <div className="pl-4 border-l-2 border-primary/20">
          <p className="font-medium">Outcome:</p>
          <p>{week === "Week 1" ? "A visual action plan — the blueprint for the next 3 weeks" : week === "Week 2" ? "2–3 knowledge agents running, deployed, and documented" : week === "Week 3" ? "At least 2 action agents ready for production" : "Live automation pipelines connected to your agents"}</p>
        </div>
      </CardContent>
    </Card>;
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden">
              <img alt="Ahmed Tawfeeq" className="w-full h-full object-cover" src="/lovable-uploads/83f8e0f2-8eb5-4048-a57f-93ccbdcfbc28.jpg" />
            </div>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build & Own Team of AI Agents 
              That Actually Work...
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="mt-6 text-xl text-muted-foreground max-w-[800px] mx-auto">
              A step-by-step program that empowers professionals and teams to build intelligent AI agents tailored to their workflows — with personalized guidance, hands-on building, and long-term support.
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <a href="https://wa.me/+201288493425" target="_blank" rel="noopener noreferrer">
                Apply for the Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://genudo.ai" target="_blank" rel="noopener noreferrer">
                  Let GenuDo Build It For You
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Program Structure" subtitle="The program is split into two major milestones, combining training, building, and long-term follow-up" centered={true} />
          
          <div className="mt-12">
            <Tabs defaultValue="milestone1" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                <TabsTrigger value="milestone1">
                  Milestone 1: 4-Week&nbsp;AI&nbsp;Agent&nbsp;Training
                </TabsTrigger>
                <TabsTrigger value="milestone2">
                  Milestone 2: 3-Month&nbsp;Follow-Up
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="milestone1">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
                  {renderWeekCard("Week 1", "Gap Analysis & Action Planning", "Understand your workflows deeply to define what agents to build.", ["We work with you (or your team) to map: Jobs → Responsibilities → Processes → Tasks", "We identify what can be turned into knowledge agents, what needs action agents, and what should be automated", "We determine the tools, platforms, and systems you already use", "We deliver a full Action Plan: Knowledge Agents, Action Agents, Automation Workflows, and Platforms to integrate with"], <Search className="h-5 w-5 text-primary" />)}
                  
                  {renderWeekCard("Week 2", "Building Knowledge Agents", "Build AI agents that handle data retrieval, answering, and smart knowledge queries.", ["Together, we build 1 or 2 Knowledge Agents (based on Week 1 plan)", "We guide your team to build additional ones with us watching and supporting"], <BookOpen className="h-5 w-5 text-primary" />)}
                  
                  {renderWeekCard("Week 3", "Building Action Agents", "Create intelligent agents that perform business actions and respond with intent.", ["We build one Action Agent together with your team", "You then build a second one independently with feedback", "You learn how to configure: Triggers, Responses, and Integrations with apps (email, CRM, etc.)"], <Cpu className="h-5 w-5 text-primary" />)}
                  
                  {renderWeekCard("Week 4", "Building Automations", "Automate your repetitive workflows using low-code/no-code tools or scripting.", ["We co-build one Automation Workflow with you (based on your real ops)", "You build another workflow with our support", "We teach you how to: Trigger workflows from events, Connect them to your agents, and Monitor and optimize them"], <Workflow className="h-5 w-5 text-primary" />)}
                  
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">End of Milestone 1</h3>
                        <p className="text-muted-foreground">You walk away with:</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-background/50 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">2+</p>
                        <p className="text-sm">Knowledge Agents</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">2+</p>
                        <p className="text-sm">Action Agents</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">2</p>
                        <p className="text-sm">Automations</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">1</p>
                        <p className="text-sm">Capable Team</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="milestone2">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                  <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
                    <CardHeader>
                      <CardTitle className="text-2xl">3-Month Follow-Up Program</CardTitle>
                      <p className="text-muted-foreground">Ensure sustainability, continuity, and expansion of what was built</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Three monthly check-in sessions (2–3 hours each)</p>
                            <p className="text-muted-foreground">Personalized guidance to ensure your AI agents continue to evolve and deliver value</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Each session includes:</p>
                            <ul className="space-y-1 pl-6 list-disc text-muted-foreground">
                              <li>Review of progress and usage</li>
                              <li>Fixing or improving agent behavior</li>
                              <li>Planning additional agents or automations</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Think of it as "AI Agent Mentorship"</p>
                            <p className="text-muted-foreground">You're never left alone after building your agents</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="bg-background/50 p-4 rounded-lg text-center relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">1</span>
                          </div>
                          <p className="mt-2 font-medium">Month 1</p>
                          <p className="text-sm text-muted-foreground">Review & Extend</p>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg text-center relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">2</span>
                          </div>
                          <p className="mt-2 font-medium">Month 2</p>
                          <p className="text-sm text-muted-foreground">Optimize & Scale</p>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg text-center relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">3</span>
                          </div>
                          <p className="mt-2 font-medium">Month 3</p>
                          <p className="text-sm text-muted-foreground">Wrap Up & Plan Future</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <p className="font-medium text-center">Final Result</p>
                        <p className="text-center text-muted-foreground">Your team is empowered, your agents are deployed, and your system is alive and growing.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="mt-12 text-center">
            <Button size="lg" className="group">
              <a href="https://wa.me/+201288493425" target="_blank" rel="noopener noreferrer">
              Apply for the Program
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Program Outcomes" subtitle="What you'll gain from the AI Agent Coaching Program" centered={true} />
          
          <div className="mt-12 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10">
              <img src="/lovable-uploads/432a942e-2538-42ff-9528-d75b2d2641fd.png" alt="Ahmed Tawfeeq" className="w-48 h-auto opacity-10 rounded-lg" />
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 overflow-hidden">
                <CardContent className="pt-6">
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Clarity on AI Agents</h3>
                      <p className="text-muted-foreground">
                        Gain a clear understanding of which AI agents will benefit your organization and how to prioritize their implementation.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 overflow-hidden">
                <CardContent className="pt-6">
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Hands-On Experience</h3>
                      <p className="text-muted-foreground">
                        Build your skills through practical exercises and real-world applications, guided by an experienced AI specialist.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 overflow-hidden">
                <CardContent className="pt-6">
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Working System</h3>
                      <p className="text-muted-foreground">
                        Complete the program with functional AI agents already integrated into your organization's workflow.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 overflow-hidden">
                <CardContent className="pt-6">
                  <motion.div variants={fadeIn} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Scalable Foundation</h3>
                      <p className="text-muted-foreground">
                        Develop the capabilities to expand and evolve your AI agent usage as your business grows and technology advances.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="mt-12 text-center">
            <Button size="lg" className="group">
              <a href="https://wa.me/+201288493425" target="_blank" rel="noopener noreferrer">
              Apply for the Program
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default CoachingPage;