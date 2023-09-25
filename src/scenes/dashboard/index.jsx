import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header
          title="Tableau de bord"
          subtitle="Bienvenue sur votre tableau de bord"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
