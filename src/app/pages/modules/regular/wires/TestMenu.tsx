// TestMenu.tsx
import { Box, Menu, MenuItem } from "@mui/joy";
import { useState } from "react";

export function TestMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  console.log(document.body.onclick);

  return (
    <>
      <Box
        sx={{ p: 2, bgcolor: "neutral.500" }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Open
      </Box>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          console.log("closing");
          setAnchorEl(null);
        }}
      >
        <MenuItem>Red</MenuItem>
        <MenuItem>Blue</MenuItem>
      </Menu>
    </>
  );
}