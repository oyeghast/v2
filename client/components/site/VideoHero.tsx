import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure autoplay on iOS/Android; retry on readiness and orientation changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => void 0);
    };
    tryPlay();
    const onCanPlay = () => tryPlay();
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    const onOrientation = () => tryPlay();
    v.addEventListener("canplay", onCanPlay as any, { passive: true } as any);
    document.addEventListener("visibilitychange", onVisibility, { passive: true } as any);
    window.addEventListener("orientationchange", onOrientation, { passive: true } as any);
    return () => {
      v.removeEventListener("canplay", onCanPlay as any);
      document.removeEventListener("visibilitychange", onVisibility as any);
      window.removeEventListener("orientationchange", onOrientation as any);
    };
  }, []);

  return (
    <section id="home-video" className="relative w-full" style={{ backgroundColor: "#05160e" }}>
      <div className="mx-auto w-full max-w-[1400px] px-0">
        <div className="relative w-full aspect-[16/9] max-h-[70vh]">
          <video
            ref={videoRef}
            className="pointer-events-none absolute inset-0 h-full w-full object-contain object-top"
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
            disableRemotePlayback
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </section>
  );
}
