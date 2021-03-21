import React from "react";
import { theme } from "src/components/ui/config/theme";

type ThemeContextProps = { theme: typeof theme };

export const ThemeContext = React.createContext<ThemeContextProps>({ theme });

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
