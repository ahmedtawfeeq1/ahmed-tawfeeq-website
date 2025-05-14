
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
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
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-background border-t border-border py-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold">Ahmed Tawfeeq</h3>
            <p className="text-sm text-muted-foreground mt-1">
              AI & Automation Specialist | Founder & Product Lead at GenuDo
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <Link to="/" className="text-sm hover:text-primary">Home</Link>
            <Link to="/ai-agent-coaching" className="text-sm hover:text-primary">AI Agent Coaching</Link>
            {/* <a href="#contact" className="text-sm hover:text-primary">Contact</a> */}
            <a href="https://genudo.ai" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">GenuDo</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} Ahmed Tawfeeq. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
