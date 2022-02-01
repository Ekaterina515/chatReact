import { makeStyles } from "@mui/styles";
import Image from "../../images/back.jpg";
export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "95vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1%",
      paddingTop: "2%",
    },
    linkHome: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: "#000080",
    },
    linkChat: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      right: "5px",
      color: "#000080",
    },
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: "#000080",
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    radioDiv: {
      display: "flex",
      width: "15%",
      justifyContent: "space-between",
      color: "#fff",
      fontSize: "1rem",
    },
    profileText: {
      color: "#fff",
    },
    chats: {
      marginInline: "auto",
      width: "20%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
  };
});
