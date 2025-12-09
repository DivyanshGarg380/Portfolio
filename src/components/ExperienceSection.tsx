import { Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    period: "Oct'2025 - Nov'25",
    type: "Open Source Event",
    description: "Participated in Hacktoberfest by contributing meaningful pull requests to public repositories across the community.",
    skills: ["Open Source", "Git", "GitHub", "Issue Tracking", "Frontend Web Development"],
    link: null,
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "Aug'25 - Oct'25",
    type: "Open Source Event",
    description: "Contributing to multiple open-source projects, fixing bugs, improving features, and collaborating with maintainers.",
    skills: ["Open Source", "Git", "GitHub", "Issue Tracking", "Frontend Web Development"],
    link: null,
  },
];

export default function ExperienceSection(){
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp,index) =>(
              <div key = {index} className="glass rounded-2xl p-6 md:p-8 hover:bg-secondary/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/*Icon*/}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                          {exp.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.skills.map((skill) => (
                        <span key = {skill} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                          {skill}
                        </span>
                      ))}
                     </div>
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