import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import SperoteckLogo from "./SperoteckLogo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-110 origin-left group">
          <SperoteckLogo size={32} className="group-hover:drop-shadow-[0_0_8px_hsl(82,75%,42%,0.5)]" />
          <span className="text-sm text-foreground font-extrabold tracking-widest uppercase group-hover:text-primary">SPEROTECK</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="/work" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            WORK
          </a>
          <a href="/services" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            SERVICES
          </a>
          <a href="/about" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            ABOUT
          </a>
          <a href="/blog" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            BLOG
          </a>
          <a href="/contact" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            CONTACT
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/work" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              WORK
            </a>
            <a href="/services" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              SERVICES
            </a>
            <a href="/about" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              ABOUT
            </a>
            <a href="/blog" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              BLOG
            </a>
            <a href="/contact" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              CONTACT
            </a>
            
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
