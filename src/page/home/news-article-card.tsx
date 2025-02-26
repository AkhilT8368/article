// src/components/ArticleCard.tsx
import React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import heart from "src/images/heart.png";
import { NewsArticle } from "src/types/news-article";

const NewsArticleCard: React.FC<NewsArticle> = ({
  title,
  content,
  source,
  author,
  description,
  urlToImage,
  url,
  publishedAt,
}) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          rel="noopener noreferrer"
          component="a"
          target="_blank"
          href={url}
          variant="h5"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1">{author}</Typography>
        <Typography variant="caption">{description}</Typography>
        {/* Add more fields as needed */}
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between" }}
        disableSpacing
      >
        <IconButton aria-label="add to favorites">
          <img src={heart} width={20} height={20} />
        </IconButton>
        <Typography variant="caption">
          {new Date(publishedAt).toLocaleString("en-GB")}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsArticleCard;
