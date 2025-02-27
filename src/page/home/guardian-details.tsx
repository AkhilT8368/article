import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import useGuardianGetBy from "src/hooks/use-guardian-get-by";

const GuardianDetails: React.FC = () => {
  const data = useGuardianGetBy();
  if (!data) {
    return <Typography>No article data available.</Typography>;
  }
  const {webTitle,webUrl ,sectionName ,webPublicationDate} = data || {};
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="a"
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {webTitle}
        </Typography>

        <Stack mt={2} direction="row" justifyContent="space-between">
          <Typography variant="body2">{sectionName}</Typography>
          <Typography variant="body2">
            {new Date(webPublicationDate).toLocaleString("en-GB")}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GuardianDetails;
