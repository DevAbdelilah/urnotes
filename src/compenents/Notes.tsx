import { InputBase, Stack, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

function Notes() {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack>
      <Stack pl={"50px"} alignItems={"center"}>
        <Stack
          bgcolor={isDarkMode ? grey[600] : grey[100]}
          width={"80%"}
          p={"8px 24px"}
          borderRadius={"40px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <InputBase sx={{ width: "100%" }} placeholder="Search for a note" />
          <SearchIcon />
        </Stack>
      </Stack>
      <Stack
        m={" 25px 50px"}
        borderRadius={"8px"}
        width={"350px"}
        height={"200px"}
        bgcolor={"#dddddd"}
      >
        <Stack sx={{ width: "100%", height: "100%", padding: "8px" }}>
          <InputBase
            placeholder=" Add your Note"

            // Ensure padding is included in the width
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Notes;
