// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "AI Agent Coaching", path: "/ai-agent-coaching" },
  { name: "Contact", path: "#contact" },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      when: "beforeChildren",
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  /* ------------------------------------------------------------------ */
  /*  Body-scroll lock while menu is open                               */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ------------------------------------------------------------------ */
  /*  Hide header when scrolling down, show when scrolling up           */
  /* ------------------------------------------------------------------ */
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > scrollY && currentY > 80) setHidden(true);
      else setHidden(false);
      setScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  /* ------------------------------------------------------------------ */
  /*  Render                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* ====================   FIXED HEADER   ==================== */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300",
          "backdrop-blur-lg bg-background/95 supports-[backdrop-filter]:bg-background/60",
          "border-b border-border shadow-sm",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link to="/">
            <span className="text-xl font-bold tracking-tight">
              Ahmed Tawfeeq
            </span>
          </Link>

          {/* ---------- Desktop nav ---------- */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm transition-colors hover:text-primary relative",
                    "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5",
                    "after:bottom-0 after:left-0 after:bg-primary",
                    "after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* ---------- Mobile buttons ---------- */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* ====================   MOBILE PANEL   ==================== */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.aside
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className={cn(
              "fixed inset-0 z-[60] flex flex-col bg-background text-foreground",
              "supports-[backdrop-filter]:bg-background/95 backdrop-blur-sm"
            )}
          >
            <FocusTrap active>
              <div className="flex flex-col h-full overflow-y-auto px-6 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg hover:text-primary p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </FocusTrap>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;