import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PropTypes from "prop-types";

const LoadingSpinner = ({ message = "Chargement..." }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap="20px"
    >
      <CircularProgress size={60} sx={{ color: colors.greenAccent[500] }} />
      <Typography variant="h5" color={colors.grey[100]}>
        {message}
      </Typography>
    </Box>
  );
};

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

export default LoadingSpinner;
