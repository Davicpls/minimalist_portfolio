import { styled } from "@mui/system";

const StyledBoxComponent = styled("div")(({ theme, switchTheme }) => ({
    width: "100%",
    height: "100%",
    minWidth: "390px",
    backgroundColor: switchTheme,
    boxSizing: "border-box",

}));


export const StyledBox = (props) => {
    return <StyledBoxComponent {...props} />;
}

const StyledBoxWidthComponent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    minWidth: "30rem",

    [theme.breakpoints.down(880)]: {
        minWidth: "revert",
    },

    [theme.breakpoints.down(560)]: {
        minWidth: "revert",
    },
}));

export const StyledBoxWidth = (props) => {
    return <StyledBoxWidthComponent {...props} />;
}

const StyledBoxRowToColumnComponent = styled("div")(({ theme }) => ({
    width: "100%",
    maxWidth: "80rem",
    display: "flex",
    gap: "3rem",
    margin: "auto",
    paddingTop: "10rem",
    paddingBottom: "10rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    position: "relative",
    zIndex: "2",
    background: "transparent",

    [theme.breakpoints.down(880)]: {
        flexDirection: "column",
    },

    [theme.breakpoints.down(560)]: {
        flexDirection: "column",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
    }

}));

export const StyledBoxRowToColumn = (props) => {
    return <StyledBoxRowToColumnComponent {...props} />;
}

const StyledBoxRowToColumnAndWitdhComponent = styled("div")(({ theme }) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    [theme.breakpoints.down(880)]: {
        width: "100%",
        flexDirection: "row",
    },

    [theme.breakpoints.down(560)]: {
        flexDirection: "column"
    },
}));

export const StyledBoxRowToColumnAndWidth = (props) => {
    return <StyledBoxRowToColumnAndWitdhComponent {...props} />;
}


const StyledBoxColumnToRowComponent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "50%",

    [theme.breakpoints.down(880)]: {
        flexDirection: "row",


    },

    [theme.breakpoints.down(560)]: {
        flexDirection: "column",

    },
}));

export const StyledBoxColumnToRow = (props) => {
    return <StyledBoxColumnToRowComponent {...props} />;
}


const StyledBoxImageComponent = styled("div")(({ theme }) => ({
    maxWidth: "21.25rem",
    maxHeight: "21.25rem",
    minWidth: "20.625rem",
    minHeight: "20.625rem",

    [theme.breakpoints.down(560)]: {
        minWidth: "2.5rem",
        minHeight: "2.5rem",
        maxWidth: "100%",
        maxHeight: "100%"

    },
}));

export const StyledBoxImage = (props) => {
    return <StyledBoxImageComponent {...props} />;
}