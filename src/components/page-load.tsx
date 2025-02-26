import { Box, CircularProgress } from "@mui/material";
import React from "react";

const PageLoad = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop
    : "50px" }}>
      <CircularProgress />
    </Box>
  );
};

export default PageLoad;
