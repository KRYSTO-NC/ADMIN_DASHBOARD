import { Box, IconButton, useTheme, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useColorMode } from "../../../hooks/useColorMode";
import { useAuth } from "../../../hooks/useAuth";
import { tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useColorMode();
  const { userInfo, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    await logout();
  };

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Searchbar */}
      {userInfo && (
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Rechercher" />
          <IconButton type="button" sx={{ mr: 1 }}>
            <SearchOutlinedIcon />
          </IconButton>
        </Box>
      )}

      {/* Icons */}
      <Box display="flex" gap="5px">
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>

        {userInfo && (
          <>
            <IconButton type="button">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton type="button">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton type="button" onClick={handleMenuOpen}>
              <PersonOutlinedIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: colors.primary[400],
                  color: colors.grey[100],
                  mt: "5px",
                },
              }}
            >
              <MenuItem disabled>
                <Typography variant="body2" color={colors.grey[300]}>
                  {userInfo.email || userInfo.name || "Utilisateur"}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <PersonOutlinedIcon sx={{ mr: 1 }} />
                Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SettingsOutlinedIcon sx={{ mr: 1 }} />
                Paramètres
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <LogoutOutlinedIcon sx={{ mr: 1 }} />
                Déconnexion
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
