import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Topbar from "./scenes/private/global/Topbar";
import Sidebar from "./scenes/private/global/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const [theme, colorMode] = useMode();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar /> */}
          {userInfo && <Sidebar />} {/* Show Sidebar only if user is logged in */}
          <main className="content">
            <Topbar />
          
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
