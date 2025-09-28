import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        minecrafter: [
          "Mine Crafter",
          "MineCrafter",
          "Minecrafter",
          "MineCrafter Alt",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        minecraftia: [
          "Minecraftia",
          "MinecraftiaRegular",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        hero: ["Baloo 2", "ui-sans-serif", "system-ui", "sans-serif"],
        rebel: ["Rebellion Squad", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(130, 170, 255, 0.65), 0 0 40px rgba(130, 170, 255, 0.25)",
        pixel: "0 0 0 2px rgba(130,170,255,0.35), 4px 4px 0 rgba(0,0,0,0.08)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 0 rgba(130,170,255,0.0))" },
          "50%": { filter: "drop-shadow(0 0 16px rgba(130,170,255,0.8))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "60%": { transform: "scale(1.03)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        "flip-x": {
          "0%": {
            transform: "perspective(800px) rotateX(90deg)",
            opacity: "0",
          },
          "100%": { transform: "perspective(800px) rotateX(0)", opacity: "1" },
        },
        "flip-y": {
          "0%": {
            transform: "perspective(800px) rotateY(90deg)",
            opacity: "0",
          },
          "100%": { transform: "perspective(800px) rotateY(0)", opacity: "1" },
        },
        "wing-sway": {
          "0%,100%": { transform: "rotate(-3deg) translateY(0)" },
          "50%": { transform: "rotate(3deg) translateY(-3px)" },
        },
        pan: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.2" },
          "50%": { opacity: "0.9" },
        },
        crossfade: {
          "0%": { opacity: "0" },
          "8%": { opacity: "1" },
          "33%": { opacity: "1" },
          "41%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.06) translate3d(2%, -2%, 0)" },
        },
        "block-float": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-in": "fade-in 0.8s ease-out both",
        "fade-up": "fade-up 0.8s ease-out both",
        "scale-pulse": "scale-pulse 2.2s ease-in-out infinite",
        "bounce-in": "bounce-in 0.6s ease-out both",
        "flip-x": "flip-x 700ms cubic-bezier(.2,.8,.2,1) both",
        "flip-y": "flip-y 700ms cubic-bezier(.2,.8,.2,1) both",
        "wing-sway": "wing-sway 4s ease-in-out infinite",
        pan: "pan 18s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        crossfade: "crossfade 24s ease-in-out infinite",
        kenburns: "kenburns 24s ease-in-out infinite",
        "block-float": "block-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
