import { Container, Box, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import welcome from "../assets/welcome.svg";

const Home = () => {
  const microFeatures = [
    {
      id: 1,
      name: "Tic Tac Toe",
      path: "/tic-tac-toe",
      status: "Coming Soon",
    },
    {
      id: 2,
      name: "Mobile Legend",
      path: "/mobile-legend",
      
    },
    {
      id: 3,
      name: "Currency Convert",
      path: "/currency-convert",
      status: "Coming Soon",
    },
    {
      id: 4,
      name: "Count Duration",
      path: "/count-duration",
    },
    {
      id: 5,
      name: "Word Sramble",
      path: "/word-sramble",
      status: "Coming Soon",
    },
    {
      id: 6,
      name: "Matching Card",
      path: "/matching-card",
      status: "Coming Soon",
    },
    {
      id: 7,
      name: "Salary Calculate",
      path: "/salary-calculate",
    
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box >
        <img style={{
            position: "absolute",
            bottom:20,
            left:100,
            width: "350px" }} src={welcome} alt="welcome" />
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        {microFeatures.map((item: any, index: number) => {
          return (

            <Link
              key={index}
              style={{
                textDecoration: "none",
              }}
              to={item.path}
            ><Tooltip title={item.status} placement="right">
              <Typography
                component="div"
                padding={2}
                sx={{
                  color: "secondary.main",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  backgroundColor: "primary.main",
                  borderRadius: "5px",
                  width: "200px",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    cursor: "pointer",
                    border:"1px"
                  },
                }}
              >
                {item.name}
              </Typography>
            </Tooltip>
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};

export default Home;
