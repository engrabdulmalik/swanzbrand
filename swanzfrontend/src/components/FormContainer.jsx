import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FormContainer = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 900, width: "100%", padding: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FormContainer;
