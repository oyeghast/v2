import ChumbiParallax, { ParallaxLayer } from "@/components/site/ChumbiParallax";

export default function Chumbi() {
  return (
    <section className="relative" style={{ backgroundColor: "#101616" }}>
      <ChumbiParallax height="120vh">
        {/* 0: Sky/back haze */}
        <ParallaxLayer speed={0.05} z={0} baseY={-60} className="left-1/2 top-0 -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2F7d10f77fa2cf4a6a93b323225410c1c4?format=webp&width=1600" alt="sky" className="w-[1600px] max-w-none" />
        </ParallaxLayer>

        {/* 1: Logo (floats center-top) */}
        <ParallaxLayer speed={0.12} z={5} baseY={20} className="left-1/2 top-12 -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2Fa83bfecdee18419fae22e9c7081e9f09?format=webp&width=900" alt="Steel Wing logo" className="w-[520px] sm:w-[620px] md:w-[720px] max-w-none" />
        </ParallaxLayer>

        {/* 2: Mid forest + tiny characters */}
        <ParallaxLayer speed={0.18} z={1} baseY={60} className="left-1/2 top-[16%] -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2Fabf9d833451442549c2303aa65a1f75a?format=webp&width=1600" alt="forest mid" className="w-[1600px] max-w-none" />
        </ParallaxLayer>

        {/* 3: Foreground character with dog */}
        <ParallaxLayer speed={0.32} z={2} baseY={120} className="left-1/2 top-[22%] -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2F45c78757ddaa47baa09e3d4fd083c6f0?format=webp&width=1400" alt="character with dog" className="w-[1000px] sm:w-[1200px] max-w-none" />
        </ParallaxLayer>

        {/* 4: Grass bottom (anchored foreground) */}
        <ParallaxLayer speed={0.42} z={3} baseY={220} className="left-1/2 bottom-0 top-[36%] -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2F4ee50a382b5240f088c584ffeb4921cf?format=webp&width=1600" alt="grass foreground" className="w-[1600px] max-w-none" />
        </ParallaxLayer>

        {/* 5: Leaves layer on top for depth */}
        <ParallaxLayer speed={0.55} z={6} baseY={-10} className="left-1/2 top-[6%] -translate-x-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F1c9168b4a50a4c9280a7726b1994c470%2Ffa150ddbf06247ee97d81d6dbcfdc333?format=webp&width=1600" alt="leaf layer" className="w-[1600px] max-w-none" />
        </ParallaxLayer>

        {/* Note: Not using the final composite image, it's only for visual reference */}
      </ChumbiParallax>

      <div className="h-[40vh]" />
    </section>
  );
}
