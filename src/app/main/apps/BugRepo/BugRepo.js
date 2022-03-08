import _ from '@lodash';
import Card from '@mui/material/Card';
import MDEditor from '@uiw/react-md-editor';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Icon from '@mui/material/Icon';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, } from '@mui/material';
import Cwe from './Cwe';
import Asset from './Asset';


function BugRepo() {
    const [values, setValues] = React.useState({
        assets: '',
        title: '',
        weekness: ''
    });
    const handleChange = (props) => (event) => {
        setValues({
            ...values, [props]: event.target.value
        });
    };

    const FilterAsset = Asset.filter((values.assets == "") ? row => true : row => row.plat.toLowerCase().includes(values.assets.toLowerCase) == true);
    const FilterCwe = Cwe.filter((values.weekness == "") ? row => true : row => row.Name.toLowerCase().includes(values.weekness.toLowerCase()) == true);


    const [tabValue, setTabValue] = useState(0);
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
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


            <br />
            <Card className="w-full" varient="outlined" square >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} sizes='small'>
                            1
                        </Avatar>
                    }

                    title="Assets"
                    subheader="Select the attack surface of this issue."
                />
                <CardContent>
                    <FormControl fullWidth >
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.assets}
                            onChange={handleChange('assets')}
                            startAdornment={<InputAdornment position="start"><Icon>search</Icon></InputAdornment>}
                        />


                    </FormControl>
                    <TableContainer component={Paper} sx={{ maxHeight: 100 }} square>
                        <Table stickyHeader><TableBody>
                            {FilterAsset.map((row) => (<TableRow key={row['id']} align="center"><TableCell sx={{ marginLeft: "4%" }}>{row['asset'] + "          " + row['plat']}</TableCell></TableRow>))}
                        </TableBody></Table>
                    </TableContainer>
                </CardContent>

            </Card>
            <br />

            <Card className="w-full" varient="outlined" square >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} sizes='small'>
                            2
                        </Avatar>
                    }

                    title="Weekness"
                    subheader="Select the type of the potential issue you have discovered. Can't pick just one? Select the best match or submit a seperate report for each distinct weakness."
                />
                <CardContent>
                    <FormControl fullWidth >
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.weekness}
                            onChange={handleChange('weekness')}
                            startAdornment={<InputAdornment position="start"><Icon>search</Icon></InputAdornment>}
                        />


                    </FormControl>
                    <TableContainer component={Paper} sx={{ maxHeight: 200 }} square>
                        <Table stickyHeader><TableBody>
                            {FilterCwe.map((row) => (<TableRow key={row['CWE-ID']}>
                                <TableCell sx={{ marginLeft: "4%" }}>{"CWE-" + row['CWE-ID'] + " : " + row['Name']}
                                </TableCell>
                            </TableRow>))}</TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>

            </Card>
            <br />


            <Card className="w-full" varient="outlined" square >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} sizes='small'>
                            3
                        </Avatar>
                    }

                    title="Severity(optional)"
                    subheader="Estimate the severity of this issue."
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        search
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        content    </Typography>
                </CardContent>

            </Card>
            <br />
            <Card className="w-full" varient="outlined" square >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} sizes='small'>
                            4
                        </Avatar>
                    }

                    title="Proof of Concept"
                    subheader="The proof of concept is the most important part of your report submission. Clear, reproducible steps will help us validate this issue as quickly as possible."
                />
                <CardContent>
                    < Typography className="h4 sm:h2 font-medium" sx={{ marginLeft: "2%", marginTop: "4%", marginBottom: "%" }}>Title   </Typography>
                    <div className="flex flex-row items-center">
                        <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                    </div>

                    < Typography className="h4 sm:h2 font-medium" sx={{ marginLeft: "2%", marginTop: "4%", marginBottom: "%" }}>Description</Typography>
                    <div className="flex flex-row items-center">
                        <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                    </div>

                    < Typography className="h4 sm:h2 font-medium" sx={{ marginLeft: "2%", marginTop: "4%", marginBottom: "%" }}>Impact</Typography>
                    <div className="flex flex-row items-center">
                        <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                    </div>

                    < Typography className="h4 sm:h2 font-medium items-center" sx={{ marginLeft: "2%", marginTop: "4%", marginBottom: "%" }}>Remediation</Typography>
                    <div className="flex flex-row items-center">
                        <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                    </div>

                </CardContent>

            </Card>
            <br />











            <br /><>
                {/* <Card className="w-full" varient="outlined" square={true}>

               
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>Severity   </Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>CVSS   </Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>CWE/OWASP</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>Vulnerable Parameter</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>Description</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>STR</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>
                < Typography className="h4 sm:h2 font-medium" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>Impact</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required sx={{ marginLeft: "2%", marginRight: "2%" }} />
                </div>

                < Typography className="h4 sm:h2 font-medium items-center" align="center" sx={{ marginTop: "4%", marginBottom: "%" }}>Remediation</Typography>
                <div className="flex flex-row items-center">
                    <TextField fullWidth required align="center" />
                </div>

            </Card> */}

            </>

        </motion.div>


    </>
    );
}

export default BugRepo;
