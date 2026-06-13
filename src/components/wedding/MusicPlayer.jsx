import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ playing }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.volume = 0.35;
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} src="/background.mp3" loop preload="auto" />
      {playing && (
        <button
          onClick={() => setMuted((m) => !m)}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 border border-primary/30 shadow-lg backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={muted ? "Activar música" : "Silenciar música"}
        >
          {muted ? (
            <VolumeX className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
          ) : (
            <Volume2 className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
          )}
        </button>
      )}
    </>
  );
}
