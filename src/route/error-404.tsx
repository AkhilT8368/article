import { Box, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/custom-button";
import errorImage from "src/images/404.jpg";
const Error404 = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/home");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "160px",
      }}
    >
      <Stack flexDirection="column" direction="row">
        <img width="600px" height="auoto" src={errorImage} />
        <Box sx={{ textAlign: "center" }}>
          <CustomButton onClick={handleBack} label="Back to home" />
        </Box>
      </Stack>
    </div>
  );
};

export default Error404;
