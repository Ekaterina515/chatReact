import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
      border: `${ctx.palette.glassmorphism.border}`,
    },
    chatName: {
      color: `${ctx.palette.secondary.light}`,
      width: "100%",
    },
    link: {
      textDecoration: "none",
    },
    listItem: {
      userSelect: "none",
      "&:active svg": {
        visibility: "visible",
      },
      "&:focus svg": {
        visibility: "visible",
      },
      "& .Mui-selected": {
        backgroundColor: `${ctx.palette.secondary.main}`,
      },
      "& .Mui-selected:hover": {
        backgroundColor: `${ctx.palette.secondary.main}`,
      },
    },
    delete: {
      color: "#fff",
      visibility: "hidden",
    },
    add: {
      color: "gray",
      alignSelf: "center",
      marginRight: "0.8rem",
      cursor: "pointer",
      transition: "color 0.2s linear",
      "&:hover": {
        color: `${ctx.palette.secondary.light}`,
      },
      // marginTop: "100%",
    },
    chatText: {
      letterSpacing: "0.025em",
      fontWeight: "600",
      color: "#fff",
      textTransform: "capitalize",
      paddingTop: "25%",
      paddingLeft: "30%",
      userSelect: "none",
    },
  };
});
