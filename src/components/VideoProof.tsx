import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import video01 from "@/assets/video-01.mp4.asset.json";
import video02 from "@/assets/video-02.mp4.asset.json";
import video03 from "@/assets/video-03.mp4.asset.json";
import video04 from "@/assets/video-04.mp4.asset.json";

type VideoItem = {
  id: string;
  thumbnail: string;
  videoUrl: string;
};

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const videos: VideoItem[] = [
  {
    id: "video-01",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    videoUrl: video01.url,
  },
  {
    id: "video-02",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    videoUrl: video02.url,
  },
  {
    id: "video-03",
    thumbnail:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    videoUrl: video03.url,
  },
  {
    id: "video-04",
    thumbnail:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    videoUrl: video04.url,
  },
];

function VideoTile({
  video,
  onOpen,
}: {
  video: VideoItem;
  onOpen: (v: VideoItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={() => onOpen(video)}
      className="group relative block aspect-[9/16] h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-[oklch(0.78_0.13_85_/_0.55)] hover:shadow-[0_40px_100px_-30px_oklch(0.55_0.18_265_/_0.55)]"
    >
      {!ready && (
        <img
          src={video.thumbnail}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <video
        ref={videoRef}
        src={video.videoUrl}
        poster={video.thumbnail}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        onLoadedData={() => setReady(true)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, oklch(0.55 0.2 265 / 0.32), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-80 transition-opacity duration-500 group-hover:opacity-100">
        <span className="relative flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[oklch(0.78_0.13_85_/_0.25)] blur-xl transition-all duration-500 group-hover:bg-[oklch(0.78_0.13_85_/_0.55)]" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[oklch(0.85_0.13_85)]">
            <Play className="h-6 w-6 fill-white text-white" strokeWidth={1.5} />
          </span>
        </span>
      </div>
    </button>
  );
}

export function VideoProof() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const loop = [...videos, ...videos];

  return (
    <section
      id="video-proof"
      className="relative overflow-hidden bg-[oklch(0.14_0.02_265)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.48 0.22 263 / 0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.13 85 / 0.1), transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[oklch(0.78_0.13_85)]">
              Prova Real
            </p>
            <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
              Resultados reais.{" "}
              <span className="text-gradient-gold">
                Naturalidade que aparece em cada detalhe.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Veja alguns resultados e histórias reais de pacientes da Full
              Plástica.
            </p>
          </div>
        </div>

        {/* Desktop — 4 vídeos lado a lado */}
        <div className="container mx-auto mt-16 hidden px-6 md:block">
          <div className="grid grid-cols-4 gap-6 lg:gap-8">
            {videos.map((v) => (
              <div key={v.id} className="aspect-[9/16]">
                <VideoTile video={v} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — carrossel autoplay com swipe */}
        <div
          className="vp-marquee group/marquee relative mt-12 max-w-[100vw] w-full overflow-x-auto overflow-y-hidden md:hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            scrollSnapType: "x mandatory",
          }}
        >
          <div className="vp-track flex w-max gap-5 px-6">
            {loop.map((v, i) => (
              <div
                key={`${v.id}-${i}`}
                className="h-[460px] w-[260px] flex-shrink-0"
                style={{ scrollSnapAlign: "center" }}
              >
                <VideoTile video={v} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div
            className="mx-auto mt-16 max-w-2xl text-center animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <p className="font-serif text-xl text-white md:text-2xl">
              Seu caso também pode ser avaliado por nossa equipe especializada.
            </p>
            <a
              href="#lead-form"
              className="btn-gold mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em]"
            >
              Quero entender meu caso
            </a>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[420px] border-white/10 bg-black/95 p-0 backdrop-blur-2xl [&>button]:hidden">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {active && (
            <div className="relative overflow-hidden rounded-lg bg-black">
              <video
                key={active.id}
                src={active.videoUrl}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="aspect-[9/16] w-full bg-black"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default VideoProof;
