import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FlightScope",
    description: "A full-stack + AI/ML aviation dashboard where users can track flights, get delay notifications, view maps, and explore avgeek-focused features.",
    tech: ["Full Stack", "AI/ML"],
    github: "https://github.com/DivyanshGarg380/FlightScope",
    live: null,
    status: "Under Construction",
  },
  {
    title: "Tomato",
    description: "A Zomato-style food discovery app built using ReactJS. Fully deployed, frontend only (no backend).",
    tech: ["ReactJS"],
    github: "https://github.com/DivyanshGarg380/Tomato-ReactJS",
    live: "https://tomato-gamma-lac.vercel.app/",
    status: "Deployed",
  },
  {
    title: "Crypto Tracker",
    description: "A ReactJS crypto price tracker with real-time price updates and graph-based charts to view price variation. Frontend only (no backend).",
    tech: ["ReactJS"],
    github: "https://github.com/DivyanshGarg380/Crypto-Tracker",
    live: "https://crypto-tracker-chi-three.vercel.app/",
    status: "Deployed",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on
            </p>
          </div>

          {/* My Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project,index) => (
              <div key = {index} className="glass rounded-2xl p-6 md:p-8 hover:bg-secondary/30 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
               <div className="relative">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </a>
                      {project.live && (
                        <a href={project.live} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                          <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        </a>
                      )}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tc) => (
                    <span key = {tc} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono">
                      {tc}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
    </section>
  );
}
