import { createContext } from "react";
import { theme } from "../theme/theme";
import { btnStyle } from "../theme/btnStyle";

export const ThemeColorContext = createContext(theme);
export const BtnStyleContext = createContext(btnStyle);
