import React from "react";
import { 
    LineChart, Line, 
    BarChart, Bar, 
    AreaChart, Area, 
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
  } from "recharts";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import theme from "../theme";

const ChartSamples = () => {
    return (

 <Box sx={theme.typography.fullWidthContainer}>
 <Grid container spacing={2} sx={{ width: '100%', height: '100%', p: 2, justifyContent: 'space-evenly', alignItems: 'stretch' }}>
   {/* Total Sales - Line Chart */}
   <Grid item xs={12} sm={6} md={4}>
     <Card sx={{ height: '100%', minHeight: '200px' }}>
       <CardContent>
         <Typography variant="h6" color="secondary" sx={{ opacity: ".7"}}>Total Sales</Typography>
         <Typography variant="h4" color="textPrimary" sx={{ opacity: ".7"}}>$120,000</Typography>
         <ResponsiveContainer width="100%" height={100}>
           <LineChart data={[{ name: "Jan", value: 400 }, { name: "Feb", value: 300 }, { name: "Mar", value: 500 }, { name: "Apr", value: 600 }, { name: "May", value: 700 }]}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip contentStyle={{ backgroundColor: '#333333', color: '#FFFFFF', borderRadius: '5px', border: 'none' }} />
             <Line type="monotone" dataKey="value" stroke="#32CD32" strokeWidth={2} />
           </LineChart>
         </ResponsiveContainer>
       </CardContent>
     </Card>
   </Grid>

   {/* Active Users - Bar Chart */}
   <Grid item xs={12} sm={6} md={4}>
     <Card sx={{ height: '100%', minHeight: '200px' }}>
       <CardContent>
         <Typography variant="h6" color="secondary" sx={{ opacity: ".7"}}>Active Users</Typography>
         <Typography variant="h4" color="textPrimary" sx={{ opacity: ".7"}}>1,250</Typography>
         <ResponsiveContainer width="100%" height={100}>
           <BarChart data={[{ name: "Jan", value: 400 }, { name: "Feb", value: 300 }, { name: "Mar", value: 500 }, { name: "Apr", value: 600 }, { name: "May", value: 700 }]}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip contentStyle={{ backgroundColor: '#333333', color: '#FFFFFF', borderRadius: '5px', border: 'none' }} />
             <Bar dataKey="value" fill="#32CD32" />
           </BarChart>
         </ResponsiveContainer>
       </CardContent>
     </Card>
   </Grid>

   {/* Conversion Rate - Area Chart */}
   <Grid item xs={12} sm={6} md={4}>
     <Card sx={{ height: '100%', minHeight: '200px' }}>
       <CardContent>
         <Typography variant="h6" color="secondary" sx={{ opacity: ".7"}}>Conversion Rate</Typography>
         <Typography variant="h4" color="textPrimary" sx={{ opacity: ".7"}}>7.5%</Typography>
         <ResponsiveContainer width="100%" height={100}>
           <AreaChart data={[{ name: "Jan", value: 400 }, { name: "Feb", value: 300 }, { name: "Mar", value: 500 }, { name: "Apr", value: 600 }, { name: "May", value: 700 }]}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip contentStyle={{ backgroundColor: '#333333', color: '#FFFFFF', borderRadius: '5px', border: 'none' }} />
             <Area type="monotone" dataKey="value" stroke="#32CD32" fill="#32CD32" />
           </AreaChart>
         </ResponsiveContainer>
       </CardContent>
     </Card>
   </Grid>
 </Grid>
</Box>
    );
};

export default ChartSamples;