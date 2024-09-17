import { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "../helpers/ThemeContext.tsx";

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};
