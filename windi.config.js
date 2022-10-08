import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        purple: "#6E07F3",
        green: "#5BE9B9",
        navy: "#141c3a",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
});
