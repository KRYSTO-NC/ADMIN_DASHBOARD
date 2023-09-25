import { Box } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    { field: "registrarId", headerName: "Enregistrement" },
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
      field: "address",
      headerName: "Adresse",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Ville",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Code postal",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="Liste des contacts" />
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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
        },
        
      }}
      >
        <DataGrid rows={mockDataContacts} columns={columns}  components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
}

export default Contacts;
