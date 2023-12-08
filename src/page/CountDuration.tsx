import NavbarBaru from "../components/navbar";
import { useState, useEffect } from "react";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Typography, styled, Box, Button } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

const CountDuration = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

const handleError = () => {
  setDuration(0);
  setValue(null);
  setIsOpen(false);
 
}

const calculateDuration = () => {
  const duration = value.getTime() - new Date().getTime();
  if (duration < 0) {
     return setIsOpen(true);
  }else 
  {
    setDuration(duration);
  }
  
};

// const handleClick = () => {
//   setInterval(() => {
//     calculateDuration();
//   }, 1000);
  
// }

useEffect(() => {
  const interval = setInterval(() => {
    calculateDuration();
  }, 1000);
  return () => clearInterval(interval);
}, [value, duration])



  

  const formatDuration = (duration: number) => {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const formatDays = days < 10 ? `0${days}` : days;
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const formatHours = hours < 10 ? `0${hours}` : hours;
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;


    return (
    <>
    {
      formatDays !== "00" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          
          }}
        >
          <CardDuration>{formatDays}</CardDuration>
          <CardText>Hari</CardText>
        </Box>
        
      ):null
    }
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          
          }}
        >
          <CardDuration>{formatHours}</CardDuration>
          <CardText>Jam</CardText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
     
          }}
        >
          <CardDuration>{formatMinutes}</CardDuration>
          <CardText>Menit</CardText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardDuration>{formatSeconds}</CardDuration>
          <CardText>Detik</CardText>
        </Box>
        </>
    );
  };

  const CardCount = styled("div")(({ theme }) => ({
    display: "flex",
    gap:"15px",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    width: "30%",
    marginTop: "20px",
    opacity: 0.7,
    height: "100px",
  }));

  const CardDuration = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: "5px",
    fontWeight: "bold",
  }));

  const CardText = styled("p")(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  }));

  const ErrorNotif = styled("div")(({ theme }) => ({
    position:"fixed",
    top:80,
    left:300,
    right:300,
    bottom:100,
    backgroundColor:"black",
    color:theme.palette.secondary.main,
    opacity:0.7,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textTransform:"capitalize",
    flexDirection:"column",
    gap:"10px",
    borderRadius:"10px",
  }))

  return (
    <div>
      <NavbarBaru text="Count Duration" />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor:"primay.main"
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap:3,
            alignItems: "center",
       
          }}
        >
          <DateTimePicker
            value={value}
            label="MM/DD/YYYY, HH:mm"
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
       
          <Button 
          onClick={()=>setValue(null)}
          variant="contained">Reset</Button>
        </Box>
      
          {
            value === null? <Typography variant="h6"
            sx={{marginTop:"20px",
          textTransform:"capitalize"}}
            >tanggal dan waktu belum disetting</Typography>:
            <CardCount>
              {formatDuration(duration)}
            </CardCount>
          }
      

      {
       isOpen ? 
        <ErrorNotif>
          <Box sx={{display:"flex",gap:"10px",alignItems:"center", flexDirection:"column"}}>
        <ErrorIcon sx={{color:"secondary.main"}}/>
        <Typography variant="h6">
          Upss!  waktu yang anda masukan salah
          </Typography>
          </Box>
          <Button variant="contained"
          onClick={handleError}>
            Reset
          </Button>
        </ErrorNotif>:null
      }
       
      </Box>
    </div>
  );
};

export default CountDuration;
