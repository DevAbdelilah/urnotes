import { ChangeEvent, useState } from "react";
import {
  Button,
  InputBase,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MdDeleteForever } from "react-icons/md";

function Notes() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

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

  const handleSave = () => {
    if (note.trim()) {
      setSavedNotes([...savedNotes, note]);
      setNote("");
    }
  };

  const handleDelete = (index: number) => {
    const newNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(newNotes);
  };

  const remainingChars = MAX_COUNT - note.length;

  return (
    <Stack p={"16px 24px"} bgcolor={"red"} minHeight={"calc(100svh - 72px)"}>
      <Stack
        bgcolor={isDarkMode ? grey[600] : grey[100]}
        maxWidth={"300px"}
        p="8px 24px"
        borderRadius="40px"
        direction="row"
        justifyContent={"end"}
        mb={2}
      >
        <InputBase
          sx={{
            width: "100%",
            color: isDarkMode ? grey[100] : grey[800],
          }}
          placeholder="Search for a note"
          inputProps={{ "aria-label": "search for a note" }}
          endAdornment={
            <SearchIcon sx={{ color: isDarkMode ? grey[100] : grey[800] }} />
          }
        />
      </Stack>
      <Stack>
        <Stack>
          <Typography fontSize={30} fontWeight={400} lineHeight={"120%"}>
            My notes
          </Typography>
          <Typography
            sx={{
              width: "100%",
              color: isDarkMode ? grey[400] : grey[800],
            }}
          >
            Here you can save, update, and delete your notes
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent={"center"} gap={2} flexWrap="wrap">
        <Stack
          borderRadius="8px"
          width="350px"
          height="200px"
          bgcolor={isDarkMode ? grey[700] : grey[200]}
          direction="column"
          justifyContent="space-between"
          p="16px 24px"
          order={isLargeScreen ? 0 : undefined}
        >
          <InputBase
            sx={{
              color: isDarkMode ? grey[100] : grey[800],
            }}
            placeholder="Add your Note"
            multiline
            value={note}
            onChange={handleChange}
            inputProps={{ "aria-label": "add your note" }}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize="10px" color="gray" fontWeight="500">
              {remainingChars} Remaining
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
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
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {savedNotes.map((savedNote, index) => (
          <Stack
            key={index}
            borderRadius="8px"
            position={"relative"}
            width="350px"
            height="200px"
            bgcolor={isDarkMode ? grey[700] : grey[200]}
            p="10px 8px"
            justifyContent={isLargeScreen ? "center" : "center"}
          >
            <Typography
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                color: isDarkMode ? grey[100] : grey[800],
              }}
              fontSize="16px"
            >
              {savedNote}
            </Typography>
            <MdDeleteForever
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                fontSize: "30px",
                bottom: 10,
                right: 10,
                cursor: "pointer",
                color: isDarkMode ? grey[300] : grey[700],
              }}
              aria-label="delete note"
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Notes;
