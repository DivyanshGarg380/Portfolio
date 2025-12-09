import { Mail, Github, Linkedin, Twitter, Instagram, Youtube, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Github, href: "https://github.com/DivyanshGarg380", label: "GitHub", color: "hover:text-foreground" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/divyansh-garg-b82471325/", label: "LinkedIn", color: "hover:text-blue-500" },
  { icon: Twitter, href: "https://x.com/divugarg330528", label: "Twitter", color: "hover:text-sky-400" },
  { icon: Instagram, href: "https://www.instagram.com/divyansh_737x/", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "https://www.youtube.com/@2.5MinutesOfAviation", label: "YouTube", color: "hover:text-red-500" },
];

export default function ConnectSection() {
  return (
    <section id="connect" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form
                className="space-y-4"
                action="https://formsubmit.co/himynameisdivyansh@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-secondary/50 border-border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    className="bg-secondary/50 border-border resize-none"
                    required
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>

            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:your@email.com" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">Himynameisdivyansh@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-110 text-muted-foreground ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Stats */}
              <div className="glass rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold gradient-text">180+</p>
                    <p className="text-sm text-muted-foreground">Cups of Coffee</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">20+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">∞</p>
                    <p className="text-sm text-muted-foreground">Curiosity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}