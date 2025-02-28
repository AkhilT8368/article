import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GuardianArticle } from "src/types/guardian-article";

const GuardianArticleCard: React.FC<GuardianArticle> = ({
  apiUrl,
  pillarName,
  sectionId,
  sectionName,
  webUrl,
  webTitle,
  webPublicationDate,
  id,
  type
}) => {
  
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
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          fullWidth
          to={`/guardian/${type}?id=${id}`}
          component={Link}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default GuardianArticleCard;
