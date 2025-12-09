import {
  Gamepad2,      
  Camera,     
  Binoculars,       
  CarFront ,
  Dumbbell,
  Plane,
  Coffee,
  Music,
  Film
} from "lucide-react";

const hobbies = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "From competitive FPS to relaxing RPGs",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and landscapes",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: CarFront ,
    title: "Driving",
    description: "Late Night driving in my city",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Staying active and healthy",
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Plane,
    title: "Traveling",
    description: "Exploring new places and cultures",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Binoculars,
    title: "Planespotting",
    description: "you can find me planespotting near Hyderabad Airport some days",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Music,
    title: "Music",
    description: "Creating beats and discovering artists",
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
  {
    icon: Film,
    title: "Movies",
    description: "Cinema enthusiast and critic",
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400",
  },
];


export default function HobbiesSection(){
  return (
    <section id="hobbies" className = "py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond <span className="gradient-text">Code</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Things I enjoy when I'm not programming
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gao-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-6 bg-gradient-to-br ${hobby.color} hover:scale-105 transition-all cursor-default group`}
              >
                <hobby.icon className={`h-8 w-8 ${hobby.iconColor} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-bold mb-1">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}