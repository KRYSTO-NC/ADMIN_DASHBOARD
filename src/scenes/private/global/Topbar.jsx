import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarktModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { userInfo } = useSelector((state) => state.auth);

  return <Box display="flex" justifyContent="space-between" p={2}>
    {/* Searbar */}
    {userInfo &&  (
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ml:2, flex:1}} placeholder= "Rechercher"/>
        <IconButton type="button" sx={{mr:1}}><SearchOutlinedIcon/></IconButton>
    </Box>
    )} {/* Show Sidebar only if user is logged in */}
    
    {/* Icons */}
    <Box>
    <IconButton type="button" onClick={colorMode.toggleColorMode}>
            {colorMode.colorMode === "dark" ? <LightModeOutlinedIcon/> : <DarktModeOutlinedIcon/>}
        </IconButton>
        {userInfo && (
          <>
 <IconButton type="button" sx={{mr:1}}><NotificationsOutlinedIcon/></IconButton>
 <IconButton type="button" sx={{mr:1}}><SettingsOutlinedIcon/></IconButton>
 <IconButton type="button" sx={{mr:1}}><PersonOutlinedIcon/></IconButton>
          </>
        )}
       
      

    </Box>
    
  </Box>;
};

export default Topbar;
