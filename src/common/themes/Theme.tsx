import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./Color";

// MUI에 적용될 테마를 정의 합니다.
export const theme = createTheme({
  // 컬러 팔레트
  palette: lightPalette,

  // 컴포넌트 둥글기
  shape: { borderRadius: 4 },

  // MUI 컴포넌트 Overriding
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          whiteSpace: "pre-line",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
