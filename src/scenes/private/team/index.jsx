import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../components/Header";
import StyledDataGrid from "../../../components/StyledDataGrid";

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
      headerName: "Nom",
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
      headerName: "Email",
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
              <SecurityOutlinedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Équipe" subtitle="Gestion des utilisateurs" />
      <StyledDataGrid rows={mockDataTeam} columns={columns} />
    </Box>
  );
}

export default Team;
