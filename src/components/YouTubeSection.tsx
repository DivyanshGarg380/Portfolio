import { Youtube, Play, Users, Video, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const channelStats = [
  { icon: Users, value: "200+", label: "Subscribers" },
  { icon: Video, value: "90+", label: "Videos" },
  { icon: ThumbsUp, value: "278K+", label: "Total Views" },
];

export default function YoutubeSection(){
  return (
    <section id="youtube" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">YouTube</span> Channel
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch my latest content and subscribe for more!
            </p>
          </div>

           <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Latest Video Embed */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-4 overflow-hidden">
                <div className="aspect-video bg-secondary/50 rounded-xl relative overflow-hidden group">
                  {/* Placeholder for YouTube embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/8WcGcWWUwI8?si=IllxDQbWIPIHAJBi"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg mb-1">Air Traffic CONTROL Chaos A320 vs B787 Close Call at BHX Airport</h3>
                </div>
              </div>
            </div>

            {/* Channel Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <img src="../../public/yt.jpg" alt="Channel" className="w-full h-full rounded-full object-cover"/>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">2.5 Minutes Of Aviation</h3>
                    <p className="text-muted-foreground text-sm">@2.5MinutesOfAviation</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {channelStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white"
                 onClick={() => window.open("https://www.youtube.com/@2.5MinutesOfAviation", "_blank")}>
                  <Youtube className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>

              {/* Viral Shorts List */}
              <div className="glass rounded-2xl p-6">
                <h4 className="font-semibold mb-4">Most Viewed Shorts</h4>

                <div className="space-y-3">
                  {[
                    {
                      id: "Yb8XaQy34yI",
                      title: "F-35 flying over the NH air show",
                      views: "33K+ views",
                      age: "5 days ago",
                    },
                    {
                      id: "1RMEaVLQoYs",
                      title: "Indian Air Force Su-30MKI’s impressive takeoff display at AeroIndia 2025",
                      views: "26K+ views",
                      age: "2 weeks ago",
                    },
                    {
                      id: "U306FnnvJgw",
                      title: "F-39 Gripen flybly at Sao Paulo, Brazil airshow today",
                      views: "25K+ views",
                      age: "2 weeks ago",
                    },
                  ].map((short, i) => (
                    <a
                      key={i}
                      href={`https://www.youtube.com/shorts/${short.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <div className="w-24 h-14 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={`https://img.youtube.com/vi/${short.id}/hqdefault.jpg`}
                          alt={short.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0">
                        <p className="font-medium text-sm line-clamp-2">{short.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {short.views} • {short.age}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}