import { Box , Typography , useTheme} from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";


function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    { field: "registrarId", headerName: "Enregistrement" },
    {
      field: "name",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-collumn--cell",
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
      field: "cost",
      headerName: "Montant",
      flex: 1,
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          XPF{params.row.cost}
        </Typography>
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Factures" subtitle="Liste des factures" />
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
        "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
        },
        
      }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns}  components={{ Toolbar: GridToolbar }} checkboxSelection/>
      </Box>
    </Box>
  );
}

export default Invoices;
