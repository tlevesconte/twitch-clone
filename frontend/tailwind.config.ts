import type { Config } from "tailwindcss";

// Twitch Purples
const twitchPurpleLightest = "#bf94ff"
const twitchPurpleLighter = "#a970ff";
const twitchPurpleLight = "#9147ff";
const twitchPurple = "#772ce8";
const twitchPurpleDark = "#5c16c5";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Twitch Purples
        twitchPurpleLightest: twitchPurpleLightest,
        twitchPurpleLighter: twitchPurpleLighter,
        twitchPurpleLight: twitchPurpleLight,
        twitchPurple: twitchPurple,
        twitchPurpleDark: twitchPurpleDark,
        // Primary Button Colours
        primaryButtonDefault: twitchPurpleLight,
        primaryButtonHover: twitchPurple,
        primaryButtonActive: twitchPurpleDark,
        // Secondary Button Colours
        secondaryButtonDefault: "rgba(83,83,95,.38)",
        secondaryButtonHover: "rgba(83,83,95,.48)",
        secondaryButtonActive: "rgba(83,83,95,.55)",
        // Text Colours
        primaryTextDefault: "#efeff1",
        // Background Colours
        bodyBackgroundColour: "#0e0e10",
        headerBackgroundColour: "#18181b",
        modalBackgroundColour: "#18181b",
        // Border Colours
        inputBorderColour: "#67676B",
        inputBorderHighlight: twitchPurpleLighter,
      }
    },
  },
  plugins: [],
};
export default config;
