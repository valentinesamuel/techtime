const size = {
  xs: "320px ", // for small screen mobile
  sm: "480px", // for mobile screen
  md: "768px", // for tablets
  lg: "1024px", // for laptops
  xl: "1200px", // for desktop / monitors
};

export const theme = {
  colors: {
    primary: "#004DB3",
    secondary: "#004DB3",
    white: "#ffffff",
    lightBlue: "#E7E7E7",
  },
  fonts: {
    familiy: {
      amazingkids: "amazing-kids",
      satoshi: "'Satoshi', sans-serif",
      clashdisplay: "Clash Display",
    },
    weight: {
      500: 500,
      400: 400,
      700: 700,
    },
    size: {
      8: ".5rem",
      16: "1rem",
      20: "1.25rem",
      32: "2rem",
      47: "2.9375rem",
      25: "1.5625rem",
      64: "4rem",
    },
    lineHeight: {
      10: ".625rem",
      14: ".875rem",
      22: "1.375rem",
      26: "1.625rem",
      30: "1.875rem",
      45: "2.8125rem",
      47: "2.9375rem",
      82: "82px",
    },
  },
  paddings: {
    6: ".375rem",
    8: ".5rem",
    12: ".75rem",
    13: ".8125rem",
    16: "1rem",
    20: "1.25rem",
    25: "1.5625rem",
    32: "2rem",
    40: "40px",
    48: "3rem",
    120: "7.5rem",
  },
  margins: {
    16: "1rem",
    24: "1.5rem",
    32: "2rem",
    120: "7.5rem",
  },

  device: {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
  },
  radii: {
    4: ".25rem",
  },
};
