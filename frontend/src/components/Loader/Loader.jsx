import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

const Loader = () => {
  let [isInSleepMode, setIsInSleepMode] = useState(false);
  setTimeout(() => setIsInSleepMode(true), 1500);
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
      {isInSleepMode && (
        <Typography variant="h5" mt={4} width={"60%"} textAlign={"center"}>
          "Please bear with us. It may take a moment for your request to be
          processed as our service wakes up from sleep mode. Thank you for your
          patience!☺️"
        </Typography>
      )}
    </Backdrop>
  );
};

export default Loader;
