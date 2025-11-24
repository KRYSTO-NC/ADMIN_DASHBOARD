import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { mockDataInvoices } from "../../../data/mockData";
import Header from "../../../components/Header";
import StyledDataGrid from "../../../components/StyledDataGrid";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "registrarId",
      headerName: "Enregistrement"
    },
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
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          XPF {params.row.cost}
        </Typography>
      ),
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
      <StyledDataGrid
        rows={mockDataInvoices}
        columns={columns}
        showToolbar={true}
        checkboxSelection={true}
      />
    </Box>
  );
}

export default Invoices;
