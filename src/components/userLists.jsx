import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";

import axios from "axios";

export default function UserList({ onClick }) {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  async function getData() {
    try {
      setLoading(true);
      const data = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      console.log(data);
      if (data.status !== 200) {
        throw new Error("something went wrong");
      }
      setUsersData(data.data);
      console.log(usersData);
    } catch (e) {
      console.log(e);
      setErrorMsg(e?.message || "Something went wrong");
    }
    setLoading(false);
  }
  useEffect(function () {
    getData();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "20px",
          paddingBottom: "0",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && !!errorMsg && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          <Typography fontSize={"14px"} color={"red"}>
            {errorMsg}
          </Typography>
        </Box>
      )}
      {!loading && !errorMsg && (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {usersData.length > 0 &&
            usersData.map((user, i) => (
              <ListItem
                onClick={onClick.bind(null, user)}
                key={i}
                sx={{
                  marginBottom: "5px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                {/* // not using the "user.id" because it contains duplicate ids */}
                <ListItemAvatar>
                  <Avatar src={user.avatar} />
                  {/* some user avatar url is not working */}
                </ListItemAvatar>
                <ListItemText
                  primary={user.profile.username}
                  secondary={user.jobTitle}
                />
              </ListItem>
            ))}
        </List>
      )}
    </>
  );
}
