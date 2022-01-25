import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useStyles } from "./use-styles";

export const ChatBar = () => {
  const styles = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chats] = useState([
    { name: "CHAT #1", id: "0" },
    { name: "CHAT #2", id: "1" },
    { name: "CHAT #3", id: "2" },
  ]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box className={styles.box}>
      <List component="nav" aria-label="secondary mailbox folder">
        {chats.map((chat, i) => (
          <ListItemButton
            selected={selectedIndex === i}
            onClick={(event) => handleListItemClick(event, i)}
            key={chat.id}
          >
            <ListItemText className={styles.chatName} primary={chat.name} />
          </ListItemButton>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );
};
