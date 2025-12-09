import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computers & Communication Engineering",
    institution: "Manipal Institute of Technology",
    location: "Manipal, India",
    period: "2024 - Present",
    description: "Currently pursuing my degree with focus on software development, algorithms, and system design.",
    current: true,
  },
  {
    degree: "High School",
    field: "Science Stream",
    institution: "Delhi Public School",
    location: "Hyderabad, India",
    period: "2022 - 2024",
    description: "Completed with distinction. Developed interest in programming and technology.",
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and learning experiences
            </p>
          </div>

          <div className="relative">
           
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                    {edu.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    )}
                  </div>

               
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 hover:bg-secondary/30 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {edu.current && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.field}</p>
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>
                      
                      <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}