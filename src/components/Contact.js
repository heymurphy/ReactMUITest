import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import theme from "../theme";

const Contact = () => {
    return (

<Box sx={{ mt: 5, p: 3, backgroundColor: "rgba(10, 1, 19, 0.6)", borderRadius: 2, width: { xs: '100%', md: '45%' }, margin: '0 auto' }}>
<Typography variant="h4" color="secondary" gutterBottom sx={{ opacity: ".5"}}>
  Contact Us
</Typography>
<form>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField placeholder="Name" fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField placeholder="Email" fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField placeholder="Message" multiline rows={4} fullWidth />
    </Grid>
    <Grid item xs={12}>
      <Button type="submit" variant="contained" sx={{ width: '35%', mx: 'auto', display: 'block', opacity: ".65"}}>
        Submit
      </Button>
    </Grid>
  </Grid>
</form>
</Box>
    );
};

export default Contact;