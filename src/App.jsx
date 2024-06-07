import { useState } from "react";
import "./App.css";
import UserList from "./components/userLists";
import UserDetails from "./components/userDetails";
import { Grid, Typography } from "@mui/material";
import "./index.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  function handleUserSelect(user) {
    setSelectedUser(user);
  }

  return (
    <Grid container spacing={2} height={"100vh"} padding={"50px"}>
      <Grid
        container
        height={"100%"}
        width={"1200px"}
        margin={"0 auto"}
        bgcolor={"white"}
        borderRadius={"10px"}
        overflow={"hidden"}
      >
        <Grid item xs={4} sx={{ overflowY: "auto", height: "100%" }}>
          <UserList onClick={handleUserSelect} />
        </Grid>
        <Grid item xs={8} sx={{ borderLeft: "1px solid #eee" }}>
          {!selectedUser && (
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
              }}
            >
              <Typography color={"text.secondary"}>
                Please select a user
              </Typography>
            </div>
          )}
          {selectedUser && <UserDetails user={selectedUser} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
