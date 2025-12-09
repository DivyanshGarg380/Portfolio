import { Music, Play, ExternalLink } from "lucide-react";
import { useState } from "react";

const topTracks = [
  { title: "The Less I Know The Better", artist: "Tame Impala", duration: "3:36", id: "4Wa1TSeIpFVzPkSACAUmHd" },
  { title: "No Plan B", artist: "Eric Reprid", duration: "2:32", id: "13FQFDoyaB4sLwCiTHlqlJ" },
  { title: "Baptized in Fear", artist: "The Weeknd", duration: "3:52", id: "5rzI6Jnlhx8DgVgsOLorfW" },
  { title: "Music Sounds Better With You", artist: "Stardust", duration: "6:43", id: "303ccTay2FiDTZ9fZ2AdBt" },
  { title: "Starly (Slowed)", artist: "LONOWN · riserayss",  duration: "2:53", id: "2ao4kVf8DsGghi3mUGaVEr" },
];

const favSongs = [
  { name: "Music Sounds Better With You", color: "from-green-500/20 to-emerald-500/20", id: "303ccTay2FiDTZ9fZ2AdBt" },
  { name: "Starly (Slowed)", color: "from-purple-500/20 to-pink-500/20", id: "2ao4kVf8DsGghi3mUGaVEr" },
  { name: "Shayad", color: "from-orange-500/20 to-red-500/20" , id: "1smFN2CLqGROu0J0UyvDfL" },
];

export default function SpotifySection() {

  const [currentImage, setCurrentImage] = useState(null);
  async function fetchArtwork(id) {
    try {
      const res = await fetch(`https://spotify-image-api.vercel.app/track/${id}`);
      const data = await res.json();
      setCurrentImage(data.image);
    } catch (e) {
      console.log("Error getting artwork", e);
    }
  }



  return (
    <section id="spotify" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I'm <span className="gradient-text">Listening</span> To
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My favorite tracks and playlists on Spotify
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Top Tracks */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Music className="h-5 w-5 text-green-500" />
                    Top Tracks
                  </h3>
                </div>

                <div className="space-y-2">
                  {topTracks.map((track, index) => (
                    <div key = {track.id} onClick = {() => fetchArtwork(track.id)} className = "cursor-pointer">
                      <iframe
                        src={`https://open.spotify.com/embed/track/${track.id}`}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Favourite Songs */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎧</span> My Fav Songs
                </h3>
                
                <div className="space-y-3">
                  {favSongs.map((playlist, index) => (
                    <div key = {playlist.id} onClick = {() =>  fetchArtwork(playlist.id)} className = "cursor-pointer">
                      <iframe
                        src={`https://open.spotify.com/embed/track/${playlist.id}`}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl"
                      />
                    </div>
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