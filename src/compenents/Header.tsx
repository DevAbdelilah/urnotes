import React, { useMemo, useState } from "react";
import { IconButton, type PaletteMode, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack p={"16px 24px"} direction={"row"} justifyContent={"space-between"}>
        <Typography fontSize={"25px"} fontWeight={600}>
          URnotes
        </Typography>
        <IconButton onClick={toggleTheme}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
}
