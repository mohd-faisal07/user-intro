import { Avatar, Chip, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function UserDetails({ user }) {
  console.log(user);
  return (
    <>
      <Container
        style={{
          height: "180px",
          background:
            "linear-gradient(90deg,  hsla(67, 87%, 82%, 1) 0% ,hsla(169, 76%, 48%, 1) 100%)",
          position: "relative",
        }}
      >
        <Avatar
          src={user.avatar}
          style={{
            height: "220px",
            width: "220px",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            bottom: "0",
            transform: "translate(-160% , 50%)",
          }}
        />
      </Container>
      <Container>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          mt={2}
          mb={7}
          textAlign={"right"}
        >
          {user.profile.firstName} {user.profile.lastName}
          <span>
            <Typography variant="body2" color="text.secondary">
              @{user.profile.username}
            </Typography>
          </span>
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1}>
          <Chip
            size="small"
            label={user.jobTitle}
            sx={{
              marginRight: "10px",
              fontSize: "12px",
              fontWeight: "600",
              color: "gray",
            }}
          />
          <Chip
            size="small"
            label={user.profile.email}
            sx={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
          />
        </Typography>
        {/* <Typography variant="body2" color="text.primary" mb={1}>
          {user.createdAt}
        </Typography> */}

        <Typography
          variant="body2"
          color="text.primary"
          letterSpacing={"0.8px"}
          marginLeft={"4px"}
          marginTop={"20px"}
        >
          {user.Bio}
        </Typography>
      </Container>
    </>
  );
}

export default UserDetails;
