import { Box } from "@mui/material";
import { mockDataContacts } from "../../../data/mockData";
import Header from "../../../components/Header";
import StyledDataGrid from "../../../components/StyledDataGrid";

function Contacts() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
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
      <StyledDataGrid
        rows={mockDataContacts}
        columns={columns}
        showToolbar={true}
      />
    </Box>
  );
}

export default Contacts;
