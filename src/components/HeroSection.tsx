import { ArrowDown , Github , Linkedin , Mail , Twitter } from 'lucide-react';
import {Button} from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className = "relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-300" />
      {/* Grid Overlay */}
      <div className = "absolute inset-0 bg-[linear-gradient(rgba(0,200,200,0.03)_1px, linear-gradient(90deg,rgba(0,200,200,0.03)_1px)] bg-[size:100px_100x]" />
      <div className = "container mx-auto px-4 md:px-6 relative z-10">
        <div className = "max-w-4xl mx-auto text-center">
          <div className = "animate-fade-up opacity-0" style = {{ animationDelay : "100ms" , animationFillMode: "forwards"}}>
            <span className='inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6'>
              👋 Welcome to my corner of the internet
            </span>
          </div>

          <h1 className="animate-fade-up opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Hi, I'm{" "}
            <span className="gradient-text">Divyansh Garg</span>
          </h1>

          <p className="animate-fade-up opacity-0 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            A passionate college student exploring the realms of technology, 
            creativity, and everything in between. Building cool stuff, one project at a time.
          </p>

          <div className="animate-fade-up opacity-0 flex flex-wrap items-center justify-center gap-4 mb-12" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <Button size="lg" className="gradient-border bg-primary hover:bg-primary/90"
             onClick = {() => window.open("mailto:Himynameisdivyansh@gmail.com")}
             >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="glass"
              onClick = {() => {
                document.getElementById("projects") ?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </Button>
          </div>
          
          <div className="animate-fade-up opacity-0 flex items-center justify-center gap-4" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            {[
              { icon: Github, href: "https://github.com/DivyanshGarg380", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/divyansh-garg-b82471325/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/divugarg330528", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-xl glass hover:bg-secondary/50 transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection