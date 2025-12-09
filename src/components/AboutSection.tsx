import { Code, Compass, Palette, Plane, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Developer",
    description: "Building web applications and exploring new technologies",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Finding elegant solutions to complex challenges",
  },
  {
    icon: Plane,
    title: "Avgeek",
    description: "Passionate about aviation, aircraft, and everything that flies",
  },
  {
    icon: Compass,
    title: "Explorer",
    description: "Curious mind who loves discovering new ideas and perspectives",
  }
]

const AboutSection = () => {
  return (
    <section id = "about" className="py-24 md:py-32 relative">
      <div className = "container mx-auto px-4 md:px-6">
        <div className = "max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl glass p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <img
                      src="/pic.jpg"
                      alt="error"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hey there! I'm a college student with a passion for technology and creating things 
                  that make a difference. Currently pursuing my degree while diving deep into the 
                  world of software development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me Planespotting ⌯✈︎ , exploring new 
                  music or creating content on Youtube.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl glass hover:bg-secondary/30 transition-colors group"
                  >
                    <item.icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
