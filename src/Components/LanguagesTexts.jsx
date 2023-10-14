import { Typography } from "@mui/material";

export const About = ({ textColor, children }) => {
  return (
    <Typography
      sx={{
        textAlign: "justify",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "1.2rem",
        color: textColor,
        boxSizing: "border-box",
        p: "1rem",
        letterSpacing: "0.10em",
      }}
    >
      {children}
    </Typography>
  );
};

export const PythonCrud = ({ textColor, children }) => {
  return (
    <Typography
      sx={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "1.2rem",
        color: textColor,
        p: "0.6rem",
        letterSpacing: "0.10em",
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
      }}
    >
      {children}
    </Typography>
  );
};

export const ChromeTimerExtension = ({ textColor, children }) => {
  return (
    <Typography
      sx={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "1.2rem",
        color: textColor,
        p: "0.6rem",
        letterSpacing: "0.10em",
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
      }}
    >
      {children}
    </Typography>
  );
};

export const MinimalistPortfolio = ({ textColor, children }) => {
  return (
    <Typography
      sx={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "1.2rem",
        color: textColor,
        p: "0.6rem",
        letterSpacing: "0.10em",
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
      }}
    >
      {children}
    </Typography>
  );
};
