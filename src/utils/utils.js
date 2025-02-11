export const wowAnimation = () => {
  if (typeof window !== "undefined") {
    import("aos").then((module) => {
      const WOW = module.default; // Keep the same `WOW` constant to avoid changes elsewhere
      WOW.init({
        duration: 1200, // Adjust animation duration
        once: false, // Ensures animations play every time they scroll into view
      });
    });
  }
};
