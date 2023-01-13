import { PaletteOptions } from "@mui/material";

export enum Color {
  Primary = "#ffffff",
  Secondary = "#CCCCCC",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
  secondary: {
    main: Color.Secondary,
  },
};
