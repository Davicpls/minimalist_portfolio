import React from "react";
import { useState, useEffect } from "react";
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
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import javaScript from "./Images/javaScript.png";
import react from "./Images/react.png";
import python from "./Images/python_icon.png";
import postgre from "./Images/postgre.png";
import docker from "./Images/docker.png";
import azure from "./Images/Azure.png";
import kubernetes from "./Images/kubernetes.png";
import aws from "./Images/AWS.png";
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
} from "./LanguagesTexts";

const StyledBoxWidth = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    minWidth: "30rem",

    [theme.breakpoints.down(880)]: {
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        minWidth: "revert",
    },

    [theme.breakpoints.down(560)]: {
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        minWidth: "revert",
    },
}));

const StyledBoxRowToColumn = styled("div")(({ theme }) => ({
    width: "100%",
    maxWidth: "80rem",
    display: "flex",
    gap: "3rem",
    margin: "0 auto",
    paddingTop: "10rem",
    paddingBottom: "10rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    position: "relative",
    zIndex: "2",
    background: "transparent",

    [theme.breakpoints.down(880)]: {
        width: "100%",
        maxWidth: "80rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        margin: "0 auto",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        position: "relative",
        zIndex: "2",
        background: "transparent",
    },

    [theme.breakpoints.down(560)]: {
        width: "100%",
        maxWidth: "80rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        margin: "0 auto",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        position: "relative",
        zIndex: "2",
        background: "transparent",
    },
}));

const StyledBoxRowToColumnAndWitdh = styled("div")(({ theme }) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    WebkitFontSmoothing: "antialised",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    fontFeatureSettings: styleSettings,

    [theme.breakpoints.down(880)]: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        WebkitFontSmoothing: "antialised",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        fontFeatureSettings: styleSettings,
    },

    [theme.breakpoints.down(560)]: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        WebkitFontSmoothing: "antialised",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        fontFeatureSettings: styleSettings,
    },
}));

const StyledBoxColumnToRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "50%",
    WebkitFontSmoothing: "antialised",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    fontFeatureSettings: styleSettings,

    [theme.breakpoints.down(880)]: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        minWidth: "50%",
        WebkitFontSmoothing: "antialised",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        fontFeatureSettings: styleSettings,
    },

    [theme.breakpoints.down(560)]: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minWidth: "50%",
        WebkitFontSmoothing: "antialised",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        fontFeatureSettings: styleSettings,
    },
}));

const styleFeatures = [
    "cv11",
    "salt",
    "ss01",
    "ss03",
    "cv01",
    "cv02",
    "cv03",
    "cv04",
    "cv05",
    "cv06",
    "cv09",
    "cv10",
];

const styleSettings = styleFeatures.map((feature) => `"${feature}"`).join(", ");

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
        } catch (err) { }
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

    const StyledBox = styled("div")(({ theme }) => ({
        width: "100%",
        height: "100%",
        minWidth: "390px",
        backgroundColor: switchTheme,
        boxSizing: "border-box",

        [theme.breakpoints.down(880)]: {
            width: "100%",
            height: "100%",
            minWidth: "390px",
            backgroundColor: switchTheme,
        },

        [theme.breakpoints.down(560)]: {
            width: "100%",
            height: "100%",
            minWidth: "390px",
            backgroundColor: switchTheme,
        },
    }));

    const [height, setHeight] = useState(determinarAltura(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setHeight(determinarAltura(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function determinarAltura(larguraAtual) {
        const larguraInicial = 1039;
        const alturaInicial = 2457.25;

        const minLargura = 320;
        const alturaFinal = 5025.44;

        if (larguraAtual > larguraInicial) {
            return alturaInicial;
        }

        if (larguraAtual <= minLargura) {
            return alturaFinal;
        }

        const slope = (alturaFinal - alturaInicial) / (minLargura - larguraInicial);
        return slope * (larguraAtual - larguraInicial) + alturaInicial;
    }

    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setTranslateY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const birthDate = new Date("1999/08/16");

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const myAge = age;

    const handleRedirectTo = (ref) => {
        switch (ref) {
            case "crud_python":
                window.open("https://github.com/Davicpls/crud_python", "_blank");
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
                boxSizing: "border-box",
            }}
        >
            <StyledBox>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        minWidth: "390px",
                        boxSizing: "border-box",
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
                            boxSizing: "border-box",
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
                                    minWidth: "25.625rem",
                                }}
                            >
                                <StyledBoxRowToColumn>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            flexGrow: "revert",
                                            minWidth: "21.25rem",
                                        }}
                                    >
                                        <StyledBoxRowToColumnAndWitdh
                                            component="body"
                                            sx={{
                                                margin: "0 auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "2rem",
                                                WebkitFontSmoothing: "antialised",
                                                MozOsxFontSmoothing: "grayscale",
                                                textRendering: "optimizeLegibility",
                                                fontFeatureSettings: styleSettings,
                                            }}
                                        >
                                            <StyledBoxColumnToRow>
                                                <Box
                                                    sx={{
                                                        alignSelf: "center",
                                                        maxWidth: "21.25rem",
                                                        maxHeight: "21.25rem",
                                                        minWidth: "20.625rem",
                                                        minHeight: "20.625rem",
                                                    }}
                                                >
                                                    <img src={ff} className="myPhoto" alt="my_photo" />
                                                </Box>
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
                                        </StyledBoxRowToColumnAndWitdh>
                                    </Box>
                                    <StyledBoxWidth>
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
                                                    <Box sx={{ display: "flex", gap: "1rem" }}>
                                                        <img alt="javascript" src={javaScript} />{" "}
                                                        <img alt="javascript" src={react} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Javascript, React.js,"
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
                                                    <Box sx={{ display: "flex", gap: "1rem" }}>
                                                        <img alt="javascript" src={python} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Python, FastAPI,"
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
                                                    <Box sx={{ display: "flex", gap: "1rem" }}>
                                                        <img alt="javascript" src={postgre} />{" "}
                                                        <img alt="javascript" src={docker} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="PostgreSQL, Docker,"
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
                                                    <Box sx={{ display: "flex", gap: "1rem" }}>
                                                        <img alt="javascript" src={azure} />{" "}
                                                        <img alt="javascript" src={kubernetes} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Azure Devops, Kubernetes,"
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
                                                    <Box sx={{ display: "flex", gap: "1rem" }}>
                                                        <img alt="javascript" src={aws} />
                                                    </Box>
                                                }
                                            >
                                                <ListItemIcon sx={{ minWidth: "20px" }}>
                                                    <CircleIcon
                                                        sx={{ fontSize: "7px", color: textColor }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="AWS services - S3, CloudFormation, DynamoDB."
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

                                        {switchLanguage === "en" ? (
                                            <PythonCrudEnglish textColor={textColor}>
                                                <Button
                                                    sx={{
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: "1.2rem",
                                                        color: "#9FCC2E",
                                                    }}
                                                    onClick={() => handleRedirectTo("crud_python")}
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
                                                        color: "#9FCC2E",
                                                    }}
                                                    onClick={() => handleRedirectTo("crud_python")}
                                                >
                                                    Project Link
                                                </Button>
                                            </PythonCrudPortuguese>
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
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "16px",
                    }}
                >
                    Email copiado com sucesso
                </Alert>
            </Snackbar>
        </Box>
    );
}
