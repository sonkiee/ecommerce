export const fonts = {
  display: "Plus Jakarta Sans", // primary font
  body: "Plus Jakarta Sans",
  mono: "Menlo",
};

export const fontSizes = {
  xs: 12, // small labels / captions
  sm: 14, // secondary text / small body
  md: 16, // default body text
  lg: 18, // larger body / subtitles
  xl: 20, // headings H4/H3
  "2xl": 24, // H2
  "3xl": 28, // H1 / prominent titles
  "4xl": 32,
  "5xl": 36,
};

export const fontWeights = {
  thin: "100" as const,
  light: "300" as const,
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extrabold: "800" as const,
  black: "900" as const,
};

export const lineHeights = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  "2xl": 36,
  "3xl": 40,
  "4xl": 44,
  "5xl": 48,
};

// import { fontSizes, fontWeights, lineHeights } from "@/constants/typography";

// const sizeStyles = StyleSheet.create({
//   s: {
//     fontSize: fontSizes.sm,
//     fontWeight: fontWeights.semibold,
//     lineHeight: lineHeights.sm,
//   },
//   m: {
//     fontSize: fontSizes.md,
//     fontWeight: fontWeights.semibold,
//     lineHeight: lineHeights.md,
//   },
//   l: {
//     fontSize: fontSizes.lg,
//     fontWeight: fontWeights.semibold,
//     lineHeight: lineHeights.lg,
//   },
// });
