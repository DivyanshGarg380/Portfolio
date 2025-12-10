export default function AvGeekPage() {
  const photos = Array.from({ length: 23 }, (_, i) => ({
  src: `/pic${i + 1}.jpg`,
  id: i + 1,
}));


  const videos = [
    {
      src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      caption: "Aviation Edit",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05050a] text-white px-6 py-10">
      <a
        href="/"
        className="inline-flex items-center gap-2 mb-8 
                    text-white font-semibold 
                    bg-blue-600 px-5 py-2 rounded-lg
                    shadow-[0_0_15px_rgba(0,123,255,0.7)]
                    hover:bg-blue-500 
                    hover:shadow-[0_0_25px_rgba(0,123,255,1)]
                    transition-all"
        >
        ← Back to Home
        </a>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          ᯓ ✈︎ AvGeek Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A cinematic collection of my aviation photography, spotting moments,
          and airplane edits.
        </p>
      </section>

      {/* Photography Section */}
      <section>
        <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-3 mb-6">
          📸 Aviation Photography
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {photos.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid p-3 bg-[#0a0a14] rounded-xl shadow-lg hover:shadow-blue-800/30 transition-all"
            >
              <img
                src={p.src}
                className="rounded-lg w-full h-auto"
              />
              {(() => {
                let caption = "";
                switch (p.id) {
                    case 1:
                    caption = "Lufthansa B787-900 at RGIA";
                    break;
                    case 2:
                    caption = "Vistara A320 at RWY 27 RGIA";
                    break;
                    case 3:
                    caption = "@ FL360 ";
                    break;
                    case 4:
                    caption = "Runway 29R Finals – DEL";
                    break;
                    case 5:
                    caption = "Taxiway Foxtrot - DEL";
                    break;
                    case 6:
                    caption = "Sneak view of IGIA ATC";
                    break;
                    case 7:
                    caption = "HYD ATC Tower";
                    break;
                    case 8:
                    caption = "Air India's old A319 at VIJP";
                    break;
                    case 9:
                    caption = "Aerial View of HYD";
                    break;
                    case 10:
                    caption = "IXE Late Night departure";
                    break;
                    case 11:
                    caption = "RGIA ATC Tower";
                    break;
                    case 12:
                    caption = "Aerial View of Jaipur";
                    break;
                    case 13:
                    caption = "IGO ATR @ MMA";
                    break;
                    case 14:
                    caption = "IGO A320 Departing Bangalore";
                    break;
                    case 15:
                    caption = "Norse leased B787 to Indigo departing CSMIA";
                    break;
                    case 16:
                    caption = "Air India new livery A320 departing";
                    break;
                    case 17:
                    caption = "Air India A350 approaching HYD";
                    break;
                    case 18:
                    caption = "Air India A350 test flight";
                    break;
                    case 19:
                    caption = "Private Jet at RGIA";
                    break;
                    case 20:
                    caption = "Garuda Indonesia approaching RGIA RWY 27L";
                    break;
                    case 21:
                    caption = "FL91 from GOX";
                    break;
                    case 22:
                    caption = "Indigo on the taxiway @ RGIA";
                    break;
                    case 23:
                    caption = "Boeing 777X @ Begumpet Airport";
                    break;
                    default:
                    caption = "Aviation Shot";
                }
                return <p className="text-sm text-gray-300 mt-2">{caption}</p>;
                })()}

            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-3 mb-6">
          🎥 Aviation Videos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div
              key={i}
              className="bg-[#0a0a14] p-4 rounded-xl shadow-lg hover:shadow-blue-800/30 transition-all"
            >
              <iframe
                src={v.src}
                className="w-full h-52 rounded-lg"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-300 mt-2">{v.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
