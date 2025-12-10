import { set } from "date-fns";
import { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, X , Menu} from "lucide-react";

const navLinks = [
  {href : "#about", label: "About"},
  {href : "#education", label: "Education"},
  {href : "#experience", label: "Experience"},
  {href : "#projects", label: "Projects"},
  {href : "#youtube", label: "YouTube"},
  {href : "#spotify", label: "Spotify"},
  {href : "#hobbies", label: "Hobbies"},
  {href : "#connect", label: "Connect"},
  {href : "/avgeek" , label: "Avgeek"},
];

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // dark mode is by default cause its my choice :)
    document.documentElement.classList.add("dark");
  },[]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass py-3" : "py-6"
    }`}>
      <div className = "container mx-auto px-4 md:px-6">
        <div className = "flex items-center justify-between">
          <a href = "#" className = "text-xl font-bold graient-text">
            Portfolio
          </a>
          {/* Desktop Navigation */}
          <div className = "hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key = {link.href}
                href = {link.href}
                className = "px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">
                  {link.label}
              </a>
            ))}
            <Button variant = "ghost" size = "icon" onClick = {toggleTheme} className = "ml-2" >
              {isDark ? <Sun className = "h-5 w-5"/> : <Moon className = "h-5 w-5"/>}
            </Button>
          </div>
          {/* Mobile Menu Button */ }
          <div className="flex items-center gap-2 md:hidden">
            <Button variant = "ghost" size = "icon" onClick = {toggleTheme}>
              {isDark ? <Sun className = "h-5 w-5"/> : <Moon className = "h-5 w-5"/>}
            </Button>
            <Button variant = "ghost" size = "icon" onClick = {() => setIsMobileMenuOpen(true)}>
              {isMobileMenuOpen ? <X className = "h-5 w-5"/> : <Menu className ="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation :( */}
        {isMobileMenuOpen && (
          <div className = "md:hidden mt-4 glass rounded-xl p-4 animate-fade-up">
            {navLinks.map((link) => (
              <a href = {link.href} key = {link.href} className = "block px=4 py-3 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-colors" onClick = {() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
