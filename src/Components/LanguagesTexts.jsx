import { Typography } from "@mui/material";

export const About = ({ textColor, children, switchLanguage }) => {
  return (
    <Typography
      id={switchLanguage === "en" ? "About me text" : "Texto sobre mim"}
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

export const PythonCrud = ({ textColor, children, switchLanguage }) => {
  return (
    <Typography
      id={
        switchLanguage === "en" ? "Python Crud Project" : "Projeto Crud Python"
      }
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

export const ChromeTimerExtension = ({
  textColor,
  children,
  switchLanguage,
}) => {
  return (
    <Typography
      id={
        switchLanguage === "en"
          ? "Chrome Extension Project"
          : "Projeto de Extensão do Chrome"
      }
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

export const MinimalistPortfolio = ({ textColor, children, switchLanguage }) => {
  return (
    <Typography
    id={switchLanguage === "en" ? "Portfolio Project" : "Projeto do Portfolio"}
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
