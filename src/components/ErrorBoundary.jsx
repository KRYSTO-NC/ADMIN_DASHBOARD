import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, onReset }) => {
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
      p="20px"
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: colors.redAccent[500] }} />
      <Typography variant="h2" color={colors.grey[100]}>
        Une erreur s'est produite
      </Typography>
      <Typography variant="h5" color={colors.grey[300]} textAlign="center">
        {error?.message || "Une erreur inattendue s'est produite"}
      </Typography>
      <Button variant="contained" color="secondary" onClick={onReset}>
        Recharger la page
      </Button>
    </Box>
  );
};

export default ErrorBoundary;
