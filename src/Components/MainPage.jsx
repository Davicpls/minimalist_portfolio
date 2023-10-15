import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  ListItemButton,
  IconButton,
  Snackbar,
  Divider,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ff from "./Images/ff.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import javaScript from "./Images/javaScript.png";
import dynamo from "./Images/dynamo.png";
import s3 from "./Images/s3.png";
import react from "./Images/react.png";
import python from "./Images/python_icon.png";
import postgre from "./Images/postgre.png";
import docker from "./Images/docker.png";
import azure from "./Images/Azure.png";
import kubernetes from "./Images/kubernetes.png";
import CircleIcon from "@mui/icons-material/Circle";
import EmailIcon from "@mui/icons-material/Email";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import gitgif from "./Images/mona-loading-dark.gif";
import { useTheme } from "@mui/material/styles";
import {
  About,
  PythonCrud,
  ChromeTimerExtension,
  MinimalistPortfolio,
} from "./LanguagesTexts";
import { determinarAltura, myAgeToday } from "./Utilities";
import {
  StyledBox,
  StyledBoxWidth,
  StyledBoxRowToColumn,
  StyledBoxRowToColumnAndWidth,
  StyledBoxColumnToRow,
  StyledBoxImage,
} from "./CustomComponents";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MainPage() {
  const [openSnack, setOpenSnack] = useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const copyEmailToClipBoard = async (e) => {
    try {
      await navigator.clipboard.writeText("davic2stl@outlook.com");

      handleClickSnack();
    } catch (err) {
      console.log(err);
    }
  };
  const yearData = new Date();
  const actualYear = yearData.getFullYear();

  const theme = useTheme();

  const [switchTheme, setSwitchTheme] = useState(theme.palette.primary.main);

  const textColor =
    switchTheme === theme.palette.primary.main
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  const projectLinkButtonStyle = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "1.2rem",
    color: textColor,
    marginTop: "1.4rem",
    padding: "0",
    letterSpacing: "0.10em",
  };

  const [switchLanguage, setSwitchLanguage] = useState("en");

  const handleSwitchLanguage = (language) => {
    setSwitchLanguage(language);
  };

  const handleSwitchTheme = () => {
    if (switchTheme === theme.palette.primary.main) {
      setSwitchTheme(theme.palette.secondary.main);
    } else {
      setSwitchTheme(theme.palette.primary.main);
    }
  };

  const [height, setHeight] = useState(determinarAltura(window.innerWidth));

  const handleResize = useCallback(() => {
    setHeight(determinarAltura(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const [translateY, setTranslateY] = useState(0);

  const handleScroll = useCallback(() => {
    setTranslateY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const myAge = myAgeToday();

  const handleRedirectTo = (ref) => {
    switch (ref) {
      case "minimalist_portfolio":
        window.open(
          "https://github.com/Davicpls/minimalist_portfolio",
          "_blank"
        );
        break;
      case "crud_python":
        window.open("https://github.com/Davicpls/crud_python", "_blank");
        break;
      case "chrome_extension":
        window.open("https://github.com/Davicpls/chrome_extension", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/davicpls/", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/davicpls/", "_blank");
        break;
      case "github":
        window.open("https://github.com/Davicpls", "_blank");
        break;
      default:
        window.open("", "_blank");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minWidth: "390px",
      }}
    >
      <StyledBox theme={theme} switchTheme={switchTheme}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            minWidth: "390px",

            fontSize: "13px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "1px",
              height: `${height}px`,
              m: "0",
              p: "0",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                left: "0px",
                top: "0px",
                zIndex: "2",
                width: "100%",
                transform: `translateY(${-translateY}px)`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  minWidth: "20.625rem",
                }}
              >
                <StyledBoxRowToColumn theme={theme}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: "revert",
                      minWidth: "21.25rem",
                    }}
                  >
                    <StyledBoxRowToColumnAndWidth theme={theme}>
                      <StyledBoxColumnToRow theme={theme}>
                        <StyledBoxImage theme={theme}>
                          <img
                            decoding="async"
                            data-ning
                            src={ff}
                            className="myPhoto"
                            alt="my_photo"
                          />
                        </StyledBoxImage>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <List>
                            <ListItemButton
                              onClick={() => handleRedirectTo("github")}
                              disableGutters
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <GitHubIcon sx={{ color: textColor }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="GitHub"
                                  sx={{
                                    color: textColor,
                                    ml: "2vmin",
                                    "& .MuiListItemText-primary": {
                                      fontFamily: "JetBrains Mono, monospace",
                                      letterSpacing: "0.10em",
                                    },
                                  }}
                                />
                              </ListItem>
                            </ListItemButton>
                            <ListItemButton
                              onClick={() => handleRedirectTo("linkedin")}
                              disableGutters
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <LinkedInIcon sx={{ color: textColor }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="LinkedIn"
                                  sx={{
                                    color: textColor,
                                    ml: "2vmin",
                                    "& .MuiListItemText-primary": {
                                      fontFamily: "JetBrains Mono, monospace",
                                      letterSpacing: "0.10em",
                                    },
                                  }}
                                />
                              </ListItem>
                            </ListItemButton>
                            <ListItemButton
                              onClick={() => handleRedirectTo("instagram")}
                              disableGutters
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <InstagramIcon sx={{ color: textColor }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Instagram"
                                  sx={{
                                    color: textColor,
                                    ml: "2vmin",
                                    "& .MuiListItemText-primary": {
                                      fontFamily: "JetBrains Mono, monospace",
                                      letterSpacing: "0.10em",
                                    },
                                  }}
                                />
                              </ListItem>
                            </ListItemButton>
                            <ListItemButton
                              onClick={() => copyEmailToClipBoard()}
                              disableGutters
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <EmailIcon sx={{ color: textColor }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Email"
                                  sx={{
                                    color: textColor,
                                    ml: "2vmin",
                                    "& .MuiListItemText-primary": {
                                      fontFamily: "JetBrains Mono, monospace",
                                      letterSpacing: "0.10em",
                                    },
                                  }}
                                />
                              </ListItem>
                            </ListItemButton>
                          </List>
                        </Typography>
                      </StyledBoxColumnToRow>
                    </StyledBoxRowToColumnAndWidth>
                  </Box>
                  <StyledBoxWidth theme={theme}>
                    <Box
                      sx={{
                        color: textColor,
                        width: "50%",
                        display: "flex",
                        alignSelf: "end",
                        justifyContent: "end",
                        gap: "2rem",
                      }}
                    >
                      <IconButton
                        id={switchLanguage === "en" ? "English" : "Inglês"}
                        onClick={() => handleSwitchLanguage("en")}
                        sx={{
                          color: textColor,
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "35px",
                          letterSpacing: "0.10em",
                        }}
                      >
                        EN
                      </IconButton>
                      <IconButton
                        id={
                          switchLanguage === "en" ? "Portuguese" : "Português"
                        }
                        onClick={() => handleSwitchLanguage("pt")}
                        sx={{
                          color: textColor,
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "35px",
                          letterSpacing: "0.10em",
                        }}
                      >
                        PT
                      </IconButton>
                      <IconButton onClick={() => handleSwitchTheme()}>
                        {switchTheme === theme.palette.primary.main ? (
                          <LightModeIcon
                            id={
                              switchLanguage === "en"
                                ? "Lightmode"
                                : "Modo claro"
                            }
                            sx={{
                              color: theme.palette.secondary.main,
                              fontSize: "35px",
                            }}
                          />
                        ) : (
                          <DarkModeIcon
                            id={
                              switchLanguage === "en"
                                ? "Darkmode"
                                : "Modo escuro"
                            }
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: "30px",
                            }}
                          ></DarkModeIcon>
                        )}
                      </IconButton>
                    </Box>
                    <Typography
                      id="Portfolio"
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "2rem",
                        color: textColor,
                        alignSelf: "center",
                        letterSpacing: "0.10em",
                      }}
                    >
                      Portfolio
                    </Typography>
                    <Typography
                      id={switchLanguage === "en" ? "About" : "Sobre"}
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "2rem",
                        color: textColor,
                        alignSelf: "start",
                        letterSpacing: "0.10em",
                      }}
                    >
                      {switchLanguage === "en" ? <> About </> : <> Sobre </>}
                    </Typography>

                    <About
                      switchLanguage={switchLanguage}
                      myAge={myAge}
                      textColor={textColor}
                    >
                      {switchLanguage === "en" ? (
                        <>
                          My name is Davi Coelho and I am {myAge} years old.
                          Started programming with Python in 2022. Pursuing
                          Information Systems degree at PUC-MG University.
                          Knowledgeable in Python, Javascript, HTML, CSS,
                          React.js, and C#. Interned at BTG Pactual, where I
                          worked with technologies such as:
                        </>
                      ) : (
                        <>
                          Olá, meu nome é Davi Coelho e tenho {myAge} anos.
                          Iniciei a programação com Python em 2022. Cursando a
                          graduação de Sistemas de Informação na Universidade
                          PUC-MG.. Conhecimentos sólidos em Python, Javascript,
                          React.js, HTML, CSS e C#. Estagiei no BTG Pactual,
                          trabalhando com tecnologias como:
                        </>
                      )}
                    </About>

                    <List>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img
                              decoding="async"
                              alt="javascript"
                              src={javaScript}
                            />{" "}
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed Javascript"
                              : "Javascript listado"
                          }
                          primary="Javascript"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img decoding="async" alt="react" src={react} />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed React.js"
                              : "React.js listado"
                          }
                          primary="React.js"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img decoding="async" alt="python" src={python} />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed Python"
                              : "Python listado"
                          }
                          primary="Python - FastAPI"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img decoding="async" alt="postgre" src={postgre} />{" "}
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed PostgreSQL"
                              : "PostgreSQL listado"
                          }
                          primary="PostgreSQL"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img decoding="async" alt="docker" src={docker} />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed Docker"
                              : "Docker listado"
                          }
                          primary="Docker"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img
                              decoding="async"
                              alt="kubernetes"
                              src={kubernetes}
                            />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed Kubernetes"
                              : "Kubernetes listado"
                          }
                          primary="Kubernetes"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img decoding="async" alt="azure" src={azure} />{" "}
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed Azure Devops"
                              : "Azure Devops listado"
                          }
                          primary="Azure Devops"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img
                              className="dynamo"
                              decoding="async"
                              alt="dynamo"
                              src={dynamo}
                            />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed AWS DynamoDB"
                              : "AWS DynamoDB listado"
                          }
                          primary="AWS DynamoDB"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                        secondaryAction={
                          <Box>
                            <img
                              className="s3"
                              decoding="async"
                              alt="s3"
                              src={s3}
                            />
                          </Box>
                        }
                      >
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <CircleIcon
                            sx={{ fontSize: "7px", color: textColor }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={
                            switchLanguage === "en"
                              ? "Listed AWS S3"
                              : "AWS S3 listado"
                          }
                          primary="AWS S3"
                          sx={{
                            color: textColor,
                            "& .MuiListItemText-primary": {
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "1.1rem",
                              letterSpacing: "0.10em",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                    <Typography
                      id={
                        switchLanguage === "en"
                          ? "Personal projects"
                          : "Projetos pessoais"
                      }
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "1.8rem",
                        color: textColor,
                        alignSelf: "start",
                        letterSpacing: "0.10em",
                      }}
                    >
                      {switchLanguage === "en" ? (
                        <>Personal projects</>
                      ) : (
                        <>Projetos pessoais</>
                      )}
                    </Typography>

                    <Typography
                      id={
                        switchLanguage === "en"
                          ? "Personal projects"
                          : "Projetos pessoais"
                      }
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "1.6rem",
                        color: textColor,
                        alignSelf: "start",
                      }}
                    >
                      {switchLanguage === "en" ? (
                        <> This page </>
                      ) : (
                        <> Essa página </>
                      )}
                    </Typography>

                    <MinimalistPortfolio switchLanguage={switchLanguage} textColor={textColor}>
                      {switchLanguage === "en" ? (
                        <>
                          This Page - Portfolio page where I showcase my skills
                          and personal projects.
                        </>
                      ) : (
                        <>
                          Esta Página - Página Portfolio onde divulgo minhas
                          habilidades e projetos pessoais.
                        </>
                      )}
                      <Button
                        style={projectLinkButtonStyle}
                        sx={{
                          "&:hover": {
                            backgroundColor:
                              textColor === theme.palette.secondary.main
                                ? "rgba(255, 255, 255, 0.08)"
                                : "rgba(0, 0, 0, 0.08)",
                          },
                        }}
                        onClick={() => handleRedirectTo("minimalist_portfolio")}
                      >
                        {switchLanguage === "en" ? (
                          <>Project Link</>
                        ) : (
                          <>Link do Projeto</>
                        )}
                      </Button>
                    </MinimalistPortfolio>

                    <Typography
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "1.6rem",
                        color: textColor,
                        alignSelf: "start",
                      }}
                    >
                      {switchLanguage === "en" ? (
                        <>Stock Management Site</>
                      ) : (
                        <>Site de gerenciamento de estoque</>
                      )}
                    </Typography>

                    <PythonCrud switchLanguage={switchLanguage} textColor={textColor}>
                      {switchLanguage === "en" ? (
                        <>
                          Python Crud - A stock management project with a
                          backend in Python and FastAPI, where the user can
                          insert items with their respective prices, add balance
                          to the account, purchase, edit, and delete items, as
                          well as view all of this in tables.
                        </>
                      ) : (
                        <>
                          Python Crud - Um projeto de gerenciamento de estoque
                          com backend em Python e FastAPI, onde o usuário pode
                          inserir items com seus respectivos preços, adicionar
                          saldo na conta, comprar, editar e deletar items, além
                          de visualizar isso tudo em tabelas.
                        </>
                      )}
                      <Button
                        style={projectLinkButtonStyle}
                        sx={{
                          "&:hover": {
                            backgroundColor:
                              textColor === theme.palette.secondary.main
                                ? "rgba(255, 255, 255, 0.08)"
                                : "rgba(0, 0, 0, 0.08)",
                          },
                        }}
                        onClick={() => handleRedirectTo("crud_python")}
                      >
                        {switchLanguage === "en" ? (
                          <>Project Link</>
                        ) : (
                          <>Link do Projeto</>
                        )}
                      </Button>
                    </PythonCrud>

                    <Typography
                      sx={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "1.6rem",
                        color: textColor,
                        alignSelf: "start",
                      }}
                    >
                      {switchLanguage === "en" ? (
                        <>Chrome Timer Extension</>
                      ) : (
                        <>Extensão de Timer do Chrome</>
                      )}
                    </Typography>

                    <ChromeTimerExtension switchLanguage={switchLanguage} textColor={textColor}>
                      {switchLanguage === "en" ? (
                        <>
                          Customizable Focus Timer - a Google Chrome extension
                          designed for those who crave flexibility in their
                          focus sessions. Inspired by the Pomodoro Technique,
                          the extension takes it a step further by allowing you
                          to tailor your work and break durations to your unique
                          needs.
                        </>
                      ) : (
                        <>
                          Temporizador de Foco Personalizável - uma extensão do
                          Google Chrome projetada para quem deseja flexibilidade
                          em suas sessões de foco. Inspirada na Técnica
                          Pomodoro, ela permite que você ajuste as durações de
                          trabalho, pausa e ciclos de acordo com suas
                          necessidades únicas.
                        </>
                      )}
                      <Button
                        style={projectLinkButtonStyle}
                        sx={{
                          "&:hover": {
                            backgroundColor:
                              textColor === theme.palette.secondary.main
                                ? "rgba(255, 255, 255, 0.08)"
                                : "rgba(0, 0, 0, 0.08)",
                          },
                        }}
                        onClick={() => handleRedirectTo("chrome_extension")}
                      >
                        {switchLanguage === "en" ? (
                          <>Project Link</>
                        ) : (
                          <>Link do Projeto</>
                        )}
                      </Button>
                    </ChromeTimerExtension>

                    <Divider sx={{ backgroundColor: textColor }}></Divider>
                    {switchLanguage === "en" ? (
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          sx={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "1rem",
                            color: textColor,
                            alignSelf: "start",
                            letterSpacing: "0.10em",
                          }}
                        >
                          © {actualYear} Davi Coelho — All rights reserved. v1.1
                        </Typography>
                        <Box className="gitGif">
                          <img
                            decoding="async"
                            data-ning
                            src={gitgif}
                            alt="octoGitGif"
                          />
                          <Box className="texto"> Hi!</Box>
                          <Box className="texto tdbem">Everything is fine?</Box>
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          sx={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "1rem",
                            color: textColor,
                            alignSelf: "start",
                            letterSpacing: "0.10em",
                          }}
                        >
                          © {actualYear} Davi Coelho — Todos os direitos
                          reservados. v1.1
                        </Typography>
                        <Box className="gitGif">
                          <img
                            decoding="async"
                            data-ning
                            src={gitgif}
                            alt="octoGitGif"
                          />
                          <Box className="texto"> Olá!</Box>
                          <Box className="texto tdbem">Tudo bem?</Box>
                        </Box>
                      </Box>
                    )}
                  </StyledBoxWidth>
                </StyledBoxRowToColumn>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledBox>
      <Snackbar
        sx={{ width: "400px" }}
        open={openSnack}
        autoHideDuration={3500}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{
            width: "100%",
            fontSize: "16px",
          }}
        >
          Email copiado com sucesso
        </Alert>
      </Snackbar>
    </Box>
  );
}
