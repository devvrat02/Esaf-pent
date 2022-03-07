import _ from '@lodash';
import Card from '@mui/material/Card';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';

import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



function BugRepo() {
    const Riskstate = [
        {
            id: 1,
            name: 'INFO',
            color: 'text-white',
            bg: "#780000"
        },
        {
            id: 2,
            name: 'LOW',
            color: 'text-white',
            bg: "#780000"
        },
        {
            id: 3,
            name: 'MEDIUM',
            color: 'text-white',
            bg: "#780000"
        },
        {
            id: 4,
            name: 'HIGH',
            color: 'text-white',
            bg: "#780000"
        },
        {
            id: 5,
            name: 'CRITICAL',
            color: 'text-white',
            bg: "#780000"
        },
    ];

    const [tabValue, setTabValue] = useState(0);
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    const [severity, setseverity] = React.useState('Critical');
    // const co = (_.find(Riskstate, { name: severity }).color);
    // const bg = (_.find(Riskstate, { name: severity }).bg);
    const handleChange = (event, severity) => {
        setseverity(severity);
    };
    return (<>
        <motion.div variants={item} className="widget w-full p-16 pb-48">
            <Card className="w-full" varient="outlined" square >
                <div className="relative p-20 flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <Typography className="h3 sm:h2 font-medium">Bug Report</Typography>
                    </div>

                    <div className="flex flex-row items-center">
                        <Tabs
                            value={tabValue}
                            onChange={(event, value) => setTabValue(value)}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="scrollable"
                            scrollButtons={false}
                            className="w-full px-24 -mx-4 min-h-40"
                            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
                            TabIndicatorProps={{
                                children: (
                                    <Box
                                        sx={{ bgcolor: 'text.disabled' }}
                                        className="w-full h-full rounded-full opacity-20"
                                    />
                                ),
                            }}
                        >

                            <Tab

                                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                                disableRipple
                                label="IOS"
                            />

                            <Tab

                                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                                disableRipple
                                label="Android"
                            />

                            <Tab

                                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                                disableRipple
                                label="WEB"
                            />

                        </Tabs>
                    </div>
                </div>
            </Card>
            {/* </motion.div>
        <motion.div variants={item} className="widget w-full p-16 pb-48"> */}

            <Card className="w-full" varient="outlined" square={true}>

                <div className="flex flex-row items-center">
                    < Typography className="h4 sm:h2 font-medium" sx={{ marginTop: "4%", marginBottom: "2%", marginLeft: "2%", marginRight: "2%" }}>Title   </Typography>
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                <div className="flex flex-row items-center">
                    < Typography className="h4 sm:h2 font-medium" sx={{ marginTop: "4%", marginBottom: "4%", marginLeft: "2%", marginRight: "2%" }}>Severity   </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={severity}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="Critical" sx={{ backgroundColor: '#780000', textColor: "#000000" }}>Critical</ToggleButton>
                        <ToggleButton value="High" sx={{ backgroundColor: '#780000', Color: "#FFFFFF" }}>High</ToggleButton>
                        <ToggleButton value="Medium" sx={{ backgroundColor: '#780000', Color: "#FFFFFF" }}>Medium</ToggleButton>
                        <ToggleButton value="Low" sx={{ backgroundColor: '#780000', Color: "#FFFFFF" }}>Low</ToggleButton>
                        <ToggleButton value="Info" sx={{ backgroundColor: '#780000', Color: "#FFFFFF" }}>Info</ToggleButton>

                    </ToggleButtonGroup>
                </div>
                <div className="flex flex-row items-center">
                    < Typography className="h4 sm:h2 font-medium" sx={{ marginTop: "4%", marginBottom: "2%", marginLeft: "2%", marginRight: "2%" }}>CVSS   </Typography>
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
            </Card>



        </motion.div>


    </>
    );
}

export default BugRepo;
