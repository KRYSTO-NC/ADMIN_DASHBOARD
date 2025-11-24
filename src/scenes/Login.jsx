import { Box, Button, TextField, useTheme, CircularProgress } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import { tokens } from "../theme";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { login, isLoggingIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleFormSubmit = async (values) => {
    await login(values.email, values.password);
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="75vh"
    >
      <Header
        title="Connexion"
        subtitle="Connectez-vous pour accéder au dashboard"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 2fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
                disabled={isLoggingIn}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
                disabled={isLoggingIn}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isLoggingIn}
                sx={{
                  minWidth: "120px",
                  backgroundColor: colors.greenAccent[600],
                  "&:hover": {
                    backgroundColor: colors.greenAccent[700],
                  },
                }}
              >
                {isLoggingIn ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Connexion"
                )}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est requis"),
  password: yup
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est requis"),
});
const initialValues = {
  email: "",
  password: "",
};

export default Login;
