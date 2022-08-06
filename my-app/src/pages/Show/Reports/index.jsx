import React from "react";
import { Paper } from '@mui/material';
import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';
  
  
const index = () => {
  
// Sample data
const data = [
  { argument: 'Monday', value: 30 },
  { argument: 'Tuesday', value: 20 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 50 },
  { argument: 'Friday', value: 60 },
];
return (
    <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);
}
  
export default index;