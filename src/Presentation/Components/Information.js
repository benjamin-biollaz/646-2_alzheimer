import React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import "../CSS/Information.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Information() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="personal_infos">
        <span className="patient_name">Emilie Teodoro</span>
        <span className="patient_name">24 ans</span>
      </div>
      <Box sx={{ flexGrow: 1 }} backgroundColor="black">
        <Grid container spacing={70} direction="row">
          <Grid container spacing={10} item xs={12}>
            <Grid xs={6} lg={7}>
              <Item>
                <Box
                  id="category-a"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Passions
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>Musique</li>
                  <li>Tricot</li>
                  <li>Ski</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={10}>
              <Item>
                <Box
                  id="category-b"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Category B
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>Link 2.1</li>
                  <li>Link 2.2</li>
                  <li>Link 2.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={7}>
              <Item>
                <Box
                  id="category-c"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Category C
                </Box>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>Link 3.1</li>
                  <li>Link 3.2</li>
                  <li>Link 3.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3} border={5} borderColor="red">
              <Item>
                <Box
                  id="category-d"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Category D
                </Box>
                <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                  <li>Link 4.1</li>
                  <li>Link 4.2</li>
                  <li>Link 4.3</li>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Information;
