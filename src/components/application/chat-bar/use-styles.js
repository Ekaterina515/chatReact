import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    box: {
      marginInline: "auto",
      width: "15%",
      height: "90%",
      position: "fixed",
      top: "2.6rem",
      left: "0",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
    chatName: {
      color: `${ctx.palette.secondary.light}`,
    },
  };
});
