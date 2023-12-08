import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
type NavbarBaruProps = {
  text: string;
}
const NavbarBaru = (props: NavbarBaruProps) => {
  return (
    <AppBar position="sticky">
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <HomeIcon sx={{ mr: 2, color:"secondary.main" }} />
          </Link>
          <Typography variant="h6">{props.text}</Typography>
        </Toolbar>
      </AppBar>
 
  );
};

export default NavbarBaru;
