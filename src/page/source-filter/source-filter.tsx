import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetSource from "src/hooks/use-get-source";

const SourceFilter: React.FC = () => {
  const data = useGetSource();
  const [selectedSources, setSelectedSources] = useState<string[]>(() => {
    const savedSources = localStorage.getItem("sources");
    return savedSources ? JSON.parse(savedSources) : [];
  });
  useEffect(() => {
    if (selectedSources.length) {
      localStorage.setItem("sources", JSON.stringify(selectedSources));
    }
  }, [selectedSources]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedSources(
      (prevSelected) =>
        checked
          ? [...prevSelected, name] // Add source if checked
          : prevSelected.filter((source) => source !== name) // Remove if unchecked
    );
  };

  return (
    <Box>
      <Typography variant="h5">Choose Source Priority</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Button size="small" variant="outlined" to="/home" component={Link}>
            Home
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setSelectedSources([])}
          >
            Reset
          </Button>
        </Stack>
      </Box>
      {data?.map(({ name, description }) => {
        return (
          <Card sx={{ p: 2, mt: 2 }}>
            <FormGroup>
              <FormControlLabel
                key={name}
                required
                control={
                  <Checkbox
                    checked={selectedSources.includes(name)}
                    name={name}
                    onChange={handleChange}
                  />
                }
                label={name}
              />
            </FormGroup>
            <Typography fontWeight={600} variant="caption">
              {description}
            </Typography>
          </Card>
        );
      })}
    </Box>
  );
};

export default SourceFilter;
