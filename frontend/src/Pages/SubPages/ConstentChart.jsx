import * as React from 'react';
import Barchart from '../../Components/BarChart/Barchart';
import LineChart from '../../Components/LineChart/LineChart';
import { Typography } from '@mui/material';
import Stackedbar from '../../Components/StackedBar/Stackedbar';

export default function ConstentChart({data}) {
    const [range, setRange] = React.useState("")
    return (
        <>
            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Overall Analytics</Typography>
                <div style={{ margin: "40px", marginTop: "50px", width: "95%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <Barchart  data={data}/>
                    <LineChart data={data}/>
                </div>
            </div>
            <div style={{ margin:"40px", marginTop: "50px",  width: "95%"}}>
                    <Stackedbar data={data}/>
    </div>
        </>

    );
}