import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description: "An AI-powered tool that helps automate repetitive tasks. Built with machine learning capabilities.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with seamless payment integration and inventory management.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Project Four",
    description: "An open-source CLI tool for developers to streamline their workflow and automate deployments.",
    tech: ["Go", "Cobra", "Docker"],
    github: "#",
    live: null,
    featured: false,
  },
];


const ProjectsSection = () => {
  return (
    <div>
      
    </div>
  )
}

export default ProjectsSection
