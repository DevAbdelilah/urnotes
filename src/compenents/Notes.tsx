import { ChangeEvent, useState } from "react";
import { Button, InputBase, Stack, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

function Notes() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [note, setNote] = useState("");

  const MAX_COUNT = 200;
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const _newValue = event.target.value;
    if (_newValue.length >= MAX_COUNT + 1) {
      return;
    }
    setNote(_newValue);
  };

  const remainingChars = MAX_COUNT - note.length;

  return (
    <Stack spacing={3} p={"16px 24px"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography fontSize={30} fontWeight={400} lineHeight={"120%"}>
            My notes
          </Typography>
          <Typography
            sx={{ width: "100%", color: isDarkMode ? grey[100] : grey[900] }}
          >
            here you can save, update, delete your notes
          </Typography>
        </Stack>
        <Stack
          bgcolor={isDarkMode ? grey[600] : grey[100]}
          width="400px"
          p="8px 24px"
          borderRadius="40px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <InputBase
            sx={{ width: "100%", color: isDarkMode ? grey[100] : grey[800] }}
            placeholder="Search for a note"
            inputProps={{ "aria-label": "search for a note" }}
          />
          <SearchIcon sx={{ color: isDarkMode ? grey[100] : grey[800] }} />
        </Stack>
      </Stack>

      <Stack
        borderRadius="8px"
        width="350px"
        height="200px"
        bgcolor={isDarkMode ? grey[700] : grey[200]}
      >
        <Stack sx={{ width: "100%", height: "100%", padding: "10px 8px" }}>
          <InputBase
            sx={{
              width: "100%",
              height: "100%",
              color: isDarkMode ? grey[100] : grey[800],
            }}
            placeholder="Add your Note"
            multiline
            rows={4}
            value={note}
            onChange={handleChange}
            inputProps={{ "aria-label": "add your note" }}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize="20px" color="gray" fontWeight="500">
              {remainingChars} Remaining
            </Typography>
            <Stack gap={2} direction="row" alignItems="center">
              <RefreshIcon
                sx={{
                  fontSize: "28px",
                  cursor: "pointer",
                  color: isDarkMode ? grey[300] : grey[700],
                  bgcolor: isDarkMode ? grey[900] : grey[50],
                  borderRadius: "50%",
                }}
                onClick={() => setNote("")}
                aria-label="refresh note"
              />
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Notes;
