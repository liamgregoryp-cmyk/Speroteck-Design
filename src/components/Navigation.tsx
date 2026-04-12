import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import SperoteckLogo from "./SperoteckLogo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-110 origin-left group">
          <SperoteckLogo size={32} className="group-hover:drop-shadow-[0_0_8px_hsl(82,75%,42%,0.5)]" />
          <span className="text-sm text-foreground font-extrabold tracking-widest uppercase group-hover:text-primary">SPEROTECK</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/work" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            OUR WORK
          </Link>
          <Link to="/services" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            SERVICES
          </Link>
          <Link to="/about" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            ABOUT US
          </Link>
          <Link to="/blog" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            BLOG
          </Link>
          <Link to="/contact" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            CONTACT
          </Link>
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
            <Link to="/work" onClick={() => setIsMenuOpen(false)} className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              OUR WORK
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              SERVICES
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              ABOUT US
            </Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              BLOG
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              CONTACT
            </Link>
            
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
