import { makeStyles } from "@mui/styles";
import Image from "../../images/back.jpg";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    },
  };
});
