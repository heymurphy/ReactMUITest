import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery } from "@mui/material";

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yogurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const DenseTable = () => {
  // Hide table on small screens
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  if (isSmallScreen) return null; // Don't render on small screens

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 2, overflowX: "auto" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "rgba(50, 205, 50, 0.2)" }}>
            <TableCell sx={{ fontWeight: "bold", color: "#ADFF2F" }}>Dessert</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold", color: "#ADFF2F" }}>Calories</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold", color: "#ADFF2F" }}>Fat (g)</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold", color: "#ADFF2F" }}>Carbs (g)</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold", color: "#ADFF2F" }}>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:nth-of-type(even)": { backgroundColor: "rgba(255, 255, 255, 0.05)" }, // Alternate row color
                "&:hover": { backgroundColor: "rgba(226, 196, 252, 0.2)", cursor: "pointer" }, // Hover effect
                transition: "all 0.2s ease-in-out",
              }}
            >
              <TableCell sx={{ color: "#F5F5F5" }}>{row.name}</TableCell>
              <TableCell align="right" sx={{ color: "#F5F5F5" }}>{row.calories}</TableCell>
              <TableCell align="right" sx={{ color: "#F5F5F5" }}>{row.fat}</TableCell>
              <TableCell align="right" sx={{ color: "#F5F5F5" }}>{row.carbs}</TableCell>
              <TableCell align="right" sx={{ color: "#F5F5F5" }}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
