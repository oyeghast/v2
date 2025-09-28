import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure autoplay on iOS and some Android variants by nudging play() after mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => void 0);
    };
    // Attempt immediately and after readiness
    tryPlay();
    const onCanPlay = () => tryPlay();
    v.addEventListener("canplay", onCanPlay, { passive: true } as any);
    return () => v.removeEventListener("canplay", onCanPlay as any);
  }, []);

  return (
    <section
      id="home-video"
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[86vh]"
      style={{ backgroundColor: "#05160e" }}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          src="https://cdn.builder.io/o/assets%2F9fb80d7fad534337856f857bfc00a930%2Fd35953d587e640b49d959907a5ffa9cf?alt=media&token=63535c1b-a53a-42e8-9df1-39582fa493ef&apiKey=9fb80d7fad534337856f857bfc00a930"
          aria-hidden="true"
          role="presentation"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          crossOrigin="anonymous"
        />
      </div>
    </section>
  );
}
