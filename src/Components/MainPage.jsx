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
import dynamo from "./Images/dynamo.png"
import s3 from "./Images/s3.png"
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
import { useTheme } from "@mui/material/styles";
import {
    AboutPortuguese,
    AboutEnglish,
    PythonCrudEnglish,
    PythonCrudPortuguese,
    ChromeTimerExtensionPortuguese,
    ChromeTimerExtensionEnglish,
    MinimalistPortfolioEnglish,
    MinimalistPortfolioPortuguese
} from "./LanguagesTexts";
import { determinarAltura, myAgeToday } from "./Utilities";
import { StyledBox, StyledBoxWidth, StyledBoxRowToColumn, StyledBoxRowToColumnAndWidth, StyledBoxColumnToRow, StyledBoxImage } from "./CustomComponents";

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
            console.log(err)
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
                window.open("https://github.com/Davicpls/minimalist_portfolio", "_blank");
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
                minWidth: "390px"
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
                                                    <img decoding="async" data-ning src={ff} className="myPhoto" alt="my_photo" />
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
                                                onClick={() => handleSwitchLanguage("en")}
                                                sx={{
                                                    color: textColor,
                                                    fontFamily: "JetBrains Mono, monospace",
                                                    fontSize: "35px",
                                                }}
                                            >
                                                EN
                                            </IconButton>
                                            <IconButton
                                                onClick={() => handleSwitchLanguage("pt")}
                                                sx={{
                                                    color: textColor,
                                                    fontFamily: "JetBrains Mono, monospace",
                                                    fontSize: "35px",
                                                }}
                                            >
                                                PT
                                            </IconButton>
                                            <IconButton onClick={() => handleSwitchTheme()}>
                                                {switchTheme === theme.palette.primary.main ? (
                                                    <LightModeIcon
                                                        sx={{
                                                            color: theme.palette.secondary.main,
                                                            fontSize: "35px",
                                                        }}
                                                    />
                                                ) : (
                                                    <DarkModeIcon
                                                        sx={{
                                                            color: theme.palette.primary.main,
                                                            fontSize: "30px",
                                                        }}
                                                    ></DarkModeIcon>
                                                )}
                                            </IconButton>
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "2rem",
                                                color: textColor,
                                                alignSelf: "center",
                                            }}
                                        >
                                            Portfolio
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "2rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            {switchLanguage === "en" ? <> About </> : <> Sobre </>}
                                        </Typography>

                                        {switchLanguage === "en" ? (
                                            <AboutEnglish myAge={myAge} textColor={textColor} />
                                        ) : (
                                            <AboutPortuguese myAge={myAge} textColor={textColor} />
                                        )}
                                        <List>
                                            <ListItem
                                                sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                                                secondaryAction={
                                                    <Box >
                                                        <img decoding="async" alt="javascript" src={javaScript} />{" "}
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Javascript"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem
                                                sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                                                secondaryAction={
                                                    <Box >
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
                                                    primary="React.js"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
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
                                                    primary="Python - FastAPI"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
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
                                                    primary="PostgreSQL"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
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
                                                    primary="Docker"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem
                                                sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                                                secondaryAction={
                                                    <Box >
                                                        <img decoding="async" alt="kubernetes" src={kubernetes} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Kubernetes"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
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
                                                    primary="Azure Devops"
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem
                                                sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                                                secondaryAction={
                                                    <Box>
                                                        <img decoding="async" alt="dynamo" src={dynamo} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary='AWS DynamoDB'
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem
                                                sx={{ p: "0", m: "0", boxSizing: "border-box" }}
                                                secondaryAction={
                                                    <Box>
                                                        <img decoding="async" alt="s3" src={s3} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary='AWS S3'
                                                    sx={{
                                                        color: textColor,
                                                        "& .MuiListItemText-primary": {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: "1.1rem",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                        </List>
                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "2rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            {switchLanguage === "en" ? (
                                                <>Personal projects</>
                                            ) : (
                                                <>Projetos pessoais</>
                                            )}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "1.6rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            {switchLanguage === "en" ? <> This page </> : <> Essa página </>}
                                        </Typography>
                                        {switchLanguage === "en" ? (
                                            <MinimalistPortfolioEnglish textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        backgroundColor: "transparent",
                                                        color: textColor,
                                                        mt: "1.2rem",
                                                        ml: "1.2rem"

                                                    }}
                                                    onClick={() => handleRedirectTo("minimalist_portfolio")}
                                                    
                                                >
                                                    Project Link
                                                </Button>
                                            </MinimalistPortfolioEnglish>
                                        ) : <MinimalistPortfolioPortuguese textColor={textColor}>
                                            <Button
                                                sx={{
                                                    fontFamily: "JetBrains Mono, monospace",
                                                    fontSize: "1.2rem",
                                                    color: textColor,
                                                    mt: "1.2rem",

                                                }}
                                                onClick={() => handleRedirectTo("minimalist_portfolio")}
                                                variant="contained"
                                            >
                                                Project Link
                                            </Button>
                                        </MinimalistPortfolioPortuguese>
                                        }
                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "1.6rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                           {switchLanguage === "en" ? <>Stock Management Site</> : <>Site de gerenciamento de estoque</>} 
                                        </Typography>

                                        {switchLanguage === "en" ? (
                                            <PythonCrudEnglish textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        color: textColor,
                                                        mt: "1.2rem",

                                                    }}
                                                    onClick={() => handleRedirectTo("crud_python")}
                                                    variant="contained"
                                                >
                                                    Project Link
                                                </Button>
                                            </PythonCrudEnglish>
                                        ) : (
                                            <PythonCrudPortuguese textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        color: textColor,
                                                        mt: "1.2rem",
                                                    }}
                                                    onClick={() => handleRedirectTo("crud_python")}
                                                >
                                                    Project Link
                                                </Button>
                                            </PythonCrudPortuguese>
                                        )}

                                        <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "1.6rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            Chrome Timer Extension
                                        </Typography>

                                        {switchLanguage === "en" ? (
                                            <ChromeTimerExtensionEnglish textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        color: textColor,
                                                        mt: "1.2rem",

                                                    }}
                                                    onClick={() => handleRedirectTo("chrome_extension")}
                                                    variant="contained"
                                                >
                                                    Project Link
                                                </Button>
                                            </ChromeTimerExtensionEnglish>
                                        ) : (
                                            <ChromeTimerExtensionPortuguese textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        color: textColor,
                                                        mt: "1.2rem",
                                                    }}
                                                    onClick={() => handleRedirectTo("chrome_extension")}
                                                >
                                                    Project Link
                                                </Button>
                                            </ChromeTimerExtensionPortuguese>
                                        )}
                                        <Divider sx={{ backgroundColor: textColor }}></Divider>
                                        {switchLanguage === 'en' ? <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "1rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            © {actualYear} Davi Coelho — All rights reserved. v1.0
                                        </Typography> : <Typography
                                            sx={{
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "1rem",
                                                color: textColor,
                                                alignSelf: "start",
                                            }}
                                        >
                                            © {actualYear} Davi Coelho — Todos os direitos reservados. v1.0
                                        </Typography>}
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
