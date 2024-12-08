import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Ratings = ({
  value,
  text,
  starSize = "default",
  textSize = "default",
}) => {
  const getStarIcon = (index) => {
    if (value >= index) {
      return <StarIcon style={{ fontSize: starSize }} />;
    } else if (value >= index - 0.5) {
      return <StarHalfIcon style={{ fontSize: starSize }} />;
    } else {
      return <StarBorderIcon style={{ fontSize: starSize }} />;
    }
  };

  return (
    <Box component="div" display="flex" alignItems="center">
      {[1, 2, 3, 4, 5].map((index) => (
        <Box key={index} component="span" sx={{ color: "gold" }}>
          {getStarIcon(index)}
        </Box>
      ))}
      <Typography
        variant="body2"
        component="span"
        sx={{ fontSize: textSize, ml: 1 }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Ratings;
