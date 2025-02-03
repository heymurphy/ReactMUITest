import React from "react";
import {Paper, Box} from "@mui/material";
import theme from "../theme";

const LayoutWrapper = ({ children }) => {
    return (
        <Paper sx={theme.typography.PaperBlack}>
            <Box sx={{ width: "100%", padding: "2rem" }}>
                {children} 
            </Box>
        </Paper>
    );
};

export default LayoutWrapper;