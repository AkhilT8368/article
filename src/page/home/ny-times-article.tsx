import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { NyTimesProps } from "src/types/ny-times-types";

const NyTimesArticle: React.FC<NyTimesProps> = ({
  abstract,
  web_url,
  snippet,
  lead_paragraph,
  source,
  pub_date,
  multimedia,
  byline,
  headline,
  document_type,
  news_desk,
  section_name,
  type_of_material,
  word_count,
  uri,
}) => {
  return (
    <>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={`https://www.nytimes.com/${multimedia?.[0]?.url}`}
            alt="Paella dish"
          />
          <Typography
            variant="h5"
            component="a"
            href={web_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {lead_paragraph}
          </Typography>

          <Stack spacing={2}>
            <Stack mt={2} direction="row" justifyContent="flex-end">
              <Typography variant="body2">
                {new Date(pub_date).toLocaleString("en-GB")}
              </Typography>
            </Stack>
            <Typography variant="body2">{snippet}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default NyTimesArticle;
