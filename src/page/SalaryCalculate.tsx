import React from "react";
import NavbarBaru from "../components/navbar";
import {
  Box,
  Typography,
  styled,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import {useState} from "react"
import count from "../assets/count.svg"

const SalaryCalculate = () => {
    const [pokok, setPokok]=useState(0)
    const [tunjangan, setTunjangan]=useState(0)
    const [kebutuhan, setKebutuhan]=useState(0)
    const [isOpen, setIsOpen] = useState(false)

    
    const HitungSalary = ()=>{
        const salary = pokok + tunjangan - kebutuhan
        return salary
    }

    const Reset = ()=>{
        setPokok(0)
        setTunjangan(0)
        setKebutuhan(0)
        setIsOpen(false)
    }
  return (
    <div>
      <NavbarBaru text="Salary Calculate" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Typography
          component={"p"}
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "primary.main",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          <PaidIcon />
          yuk hitung gaji mu!!
          <PaidIcon />
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Gaji Pokok
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={pokok}
               onChange={(e) => {
                 setPokok(Number(e.target.value))
               }}
                startAdornment={
                  <InputAdornment position="start">Rp.</InputAdornment>
                }
                label="Gaji Pokok"
                sx={{
                  marginBottom: "20px",
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Tunjangan
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={tunjangan}
                onChange={(e) => {
                  setTunjangan(Number(e.target.value))
                }}
                startAdornment={
                  <InputAdornment position="start">Rp.</InputAdornment>
                }
                label="Tunjangan"
                sx={{
                  marginBottom: "20px",
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Pengeluaran per bulan
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={kebutuhan}
               onChange={(e) => {
                 setKebutuhan(Number(e.target.value))
        
                }}
                startAdornment={
                  <InputAdornment position="start">Rp.</InputAdornment>
                }
                label="Pengeluaran per bulan"
                sx={{
                  marginBottom: "20px",
                }}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
              onClick={() => {
                  setIsOpen(true)
              }}
            >
              Hitung
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
             onClick={Reset}
            >
              Reset
            </Button>
          </form>

          <div
            style={{
              borderRadius: "10px",
              color: "white",
              display: "flex",
              alignItems:"center",
              justifyContent:"center",
              flexDirection:"column",
              padding: "20px",
              background: "#00A36C",
              width: "300px",
            }}
          >
            {
                isOpen? (
                    <>
                    
            <Typography component={"p"} sx={{
                textTransform:"Uppercase"
            }}>gaji bersih kamu adalah</Typography>
            <Typography component={"p"} variant="h4">
            {new Intl.NumberFormat('id-ID',{
                    style:'currency',
                    currency:'IDR',
                }).format(HitungSalary())}
            </Typography>
         

            <Typography component={"p"}>
                Gaji Pokok : {new Intl.NumberFormat('id-ID',{
                    style:'currency',
                    currency:'IDR',
                }).format(pokok)}
            </Typography>
            <Typography component={"p"}>
                Tunjangan : {new Intl.NumberFormat('id-ID',{
                    style:'currency',
                    currency:'IDR',
                }).format(tunjangan)}
            </Typography>
            <Typography component={"p"}>
                Pengeluaran :  {new Intl.NumberFormat('id-ID',{
                    style:'currency',
                    currency:'IDR',
                }).format(kebutuhan)}
            </Typography>
                    </>
                ): <img  style={{
                    width:"100px",
                    height:"100px"
                }}
                 src={count} alt="loading" />
            }
            </div>

          </div>
      
      </Box>
    </div>
  );
};

export default SalaryCalculate;
