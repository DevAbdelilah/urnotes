import { InputBase, Stack, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect } from "react";

function Notes() {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack p={"16px 24px"}>
      <Stack
        bgcolor={isDarkMode ? grey[600] : grey[100]}
        maxWidth={"300px"}
        p={"8px 24px"}
        borderRadius={"40px"}
      >
        <InputBase placeholder="Search for a note" />
      </Stack>
    </Stack>
  );
}

export default Notes;
