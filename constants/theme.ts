export const colors = {
  // 🎨 Brand colors
  primary: "#EA2A33", // matches Tailwind `primary` in your HTML
  primary_light: "#FF4D58", // lighter shade for pressed states
  primary_dark: "#C61E26",

  // 🖼️ Backgrounds
  background_light: "#F8F6F6", // matches Tailwind `background-light`
  background_dark: "#211111", // matches Tailwind `background-dark`

  // 🧱 Surfaces (cards, panels)
  surface_light: "#FFFFFF",
  surface_dark: "#2A1C1C",

  // ✏️ Text
  text_black: "#000000",
  text_white: "#FFFFFF",
  text_gray_light: "#F5F5F7", // optional fallback
  text_gray_medium: "#4B5563", // matches `text-gray-700`
  text_gray_dark: "#9CA3AF", // matches `text-gray-400`

  // 🪟 Borders
  border_gray_light: "#E5E7EB", // Tailwind `border-gray-200`
  border_gray_medium: "#D1D5DB", // Tailwind `border-gray-300`
  border_gray_dark: "#374151", // Tailwind `border-gray-700`

  // 🌗 State colors
  success: "#22C55E",
  warning: "#FACC15",
  danger: "#EF4444",
  info: "#3B82F6",

  // 🕶️ Overlays / Transparencies
  overlay_dark_30: "rgba(0, 0, 0, 0.3)",
  overlay_dark_50: "rgba(0, 0, 0, 0.5)",
  overlay_light_20: "rgba(255, 255, 255, 0.2)",
};

export const radius = {
  sm: 4, // 0.25rem
  default: 8, // 0.5rem
  md: 10, // 0.625rem
  lg: 12, // 0.75rem
  xl: 16, // 1rem
  full: 9999, // full pill
};

export const spacing = {
  xs: 4, // 0.25rem
  sm: 8, // 0.5rem
  md: 16, // 1rem
  lg: 24, // 1.5rem
  xl: 32, // 2rem
  "2xl": 40,
};

// ✅ You can even add optional shadow presets:
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  lg: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
};
