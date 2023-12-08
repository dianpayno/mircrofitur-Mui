import {
  Box,
  Container,
  styled,
  Typography,
  Avatar,
  TextField,
} from "@mui/material";
import NavbarBaru from "../components/navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useQuery } from "react-query";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { useState } from "react";

const MobileLegend = () => {
  const [search, setSearch] = useState("");
  const Search = {
    width: "50%",
    borderRadius: "10px",
    display: "flex",
    overflow: "hidden",
    padding: "5px",
    alignItems: "center",
    backgroundColor: "#00A36C",

  };

 


  const CardHero = styled("div")(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    padding: "5px 5px",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
  }));

  const { data: heroData, isLoading } = useQuery("hero", async () => {
    try {
      const response = await axios.get(
        "https://api.dazelpro.com/mobile-legends/hero"
      );
      return response.data;
    } catch (error) {
      console.log("ini error", error);
    }
  });

  const heroFilter = heroData?.hero.filter((item: any) => {
    if (search === "") {
      return item;
    } else if (item.hero_name.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  return (
    <>
      <NavbarBaru text="Mobile Legend" />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div

        style={Search}>
          <input
          style={{ width: "100%",
            borderRadius: "10px",
            padding: "10px",
            border: "none",
            outline: "none",
           
          
        }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
          />
        
            <SearchOutlinedIcon fontSize="large" sx={{ color: "secondary.main" }} />
        </div>
        {heroFilter?.length === 0 ? (
          <Typography
            component={"p"}
            sx={{
              textTransform: "capitalize",
              textAlign: "left",
              marginLeft: "5px",
              fontSize: "14px",
            }}
          >
            Hero Tidak ditemukan
          </Typography>
        ) : (
          <Typography
            component={"p"}
            sx={{
              textTransform: "capitalize",
              textAlign: "left",
              marginLeft: "5px",
              fontSize: "14px",
            }}
          >
            {heroFilter?.length} Hero ditemukan
          </Typography>
        )}

      
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "50%",
            height: "400px",
            padding: "10px",
            position: "relative",
            overflowY: "scroll",
          }}
        >
          {heroFilter?.map((item: any) => {
            return (
              <CardHero>
                <Avatar src="" sx={{ width: "50px", height: "50px" }} />
                <Box
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Typography component={"p"}>
                    {item.hero_name}
                  </Typography>
                  <Typography component={"p"}>
                    Role : {item.hero_role}
                  </Typography>
                  <Typography component={"p"}>
                    Special Ability :{item.hero_specially}
                  </Typography>
                </Box>
              </CardHero>
            );
          })}

          {isLoading && (
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                bgcolor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BeatLoader color="#36d7b7" />
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default MobileLegend;
