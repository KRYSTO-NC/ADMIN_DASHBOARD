import { useContext } from "react";
import { ColorModeContext } from "../theme";

export const useColorMode = () => {
  const colorMode = useContext(ColorModeContext);

  if (!colorMode) {
    throw new Error("useColorMode must be used within ColorModeContext.Provider");
  }

  return colorMode;
};
