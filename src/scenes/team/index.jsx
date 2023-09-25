import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlindedIcon from "@mui/icons-material/SecurityOutlined";

import React from "react";
import Header from "../../components/Header";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headername: "Nom",
      flex: 1,
      cellClassName: "name-collumn--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Téléphone",
      flex: 1,
    },
    {
      field: "email",
      headername: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Rôle",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin" ? colors.greenAccent[600] : colors.primary[700]
            }
            borderRadius="5px"
          >
            {access === "admin" ? (
              <AdminPanelSettingsOutlinedIcon />
            ) : access === "user" ? (
              <LockOpenOutlinedIcon />
            ) : (
              <SecurityOutlindedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ml:"5px"}}>

            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Equipe" subtitle="Gestion des utilisateurs" />
      <Box 
      m= "40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
            border: "none",
        },
        "& .MuiDataGrid-cell": {
            borderBottom: "none"
        },
        "& .name-collumn--cell": {
            color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[700],
            borderBottom:"none",
        },

        "& .MuiDataGrid-virtualScoller": {
            
            backgroundColor: colors.primary[400],
        },  
        "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
        },  
        
      }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
