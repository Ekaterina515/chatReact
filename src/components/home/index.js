import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { useStyles } from "./use-styles";
export const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <List className={styles.list} component="nav">
          <Link className={styles.link} to={"/"}>
            <ListItem>
              <p className={styles.itemText}>HomePage</p>
            </ListItem>
          </Link>
          <Link className={styles.link} to={"/chat"}>
            <ListItem>
              <p className={styles.itemText}>Chat</p>
            </ListItem>
          </Link>
          <Link className={styles.link} to={"/profile"}>
            <ListItem>
              <p className={styles.itemText}>Profile</p>
            </ListItem>
          </Link>
        </List>
        <h1 className={styles.welcome}>Welcome to Chat</h1>
      </div>
    </div>
  );
};
