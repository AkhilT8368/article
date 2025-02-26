import { Box, Button, Collapse, Grid, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import NewsArticleCard from "src/page/home/news-article-card";
import CustomDatePicker from "src/components/custom-date-picker";
import PageLoad from "src/components/page-load";
import useGetNews from "src/hooks/use-get-news";
import usePagination from "src/hooks/use-pagination";
import GuardianArticleCard from "./guardian-article-card";
import NyTimesArticle from "./ny-times-article";
import sourceData from "./source.json";
import SourceFilter from "../source-filter/source-filter";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { page } = usePagination();
  const [query, setQuery] = useState("tesla");

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("2025-02-10")
  );

  const { news, guardian, nyTimes, load } = useGetNews({
    query,
    date: selectedDate?.format("YYYY-MM-DD"),
  });

  const list = news.slice(0, page);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <>
      {" "}
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          mb: 4,
          mt: 4,
          gridTemplateColumns: {
            md: "repeat(10, 1fr)",
            sm: "repeat(5, 1fr)",
            xs: "repeat(2, 1fr)",
          },
        }}
      >
        {sourceData.map(({ name, value }) => {
          return (
            <Button
              onClick={() => setQuery(value)}
              variant={query === value ? "contained" : "outlined"}
            >
              {name}
            </Button>
          );
        })}
        {/* <CustomButton onClick={()=>{}} label={name} value={value}></CustomButton> */}
      </Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          mb: 4,
          mt: 4,
          gridTemplateColumns: { sm: "repeat(3, 1fr)", xs: "repeat(1, 1fr)" },
        }}
      >
        <TextField
          sx={{ display: "flex", justifyContent: "flex-end" }}
          size="small"
          label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <CustomDatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <Button to="/source" component={Link} variant="outlined">
          Sort
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {load ? (
          <PageLoad />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              {list.map((item) => {
                return <NewsArticleCard {...item} />;
              })}
            </Grid>
            <Grid item xs={12} sm={4}>
              {nyTimes.slice(0, page).map((item) => {
                return <NyTimesArticle {...item} />;
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              {guardian.slice(0, page).map((item) => {
                return <GuardianArticleCard {...item} />;
              })}
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Home;
