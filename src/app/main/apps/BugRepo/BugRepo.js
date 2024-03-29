import _ from '@lodash';
import Card from '@mui/material/Card';
import MDEditor from '@uiw/react-md-editor';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { blue, red } from '@mui/material/colors';
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
import { FormControl, OutlinedInput, InputAdornment, Switch, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, } from '@mui/material';
import Cwe from './Cwe';
import Asset from './Asset';
import { List, ListItem, Divider, ListItemText } from '@mui/material'
import { FormControlLabel, FormGroup } from '@mui/material';
import { Stack } from '@mui/material';
import Cvss from 'cvss-calculator';
import WYSIWYGEditor from 'app/shared-components/WYSIWYGEditor';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import MiniBadge from './MiniBadge';
import { Alert, AlertTitle } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';

function BugRepo() {
    const schema = yup.object().shape({
        to: yup.string().required('You must enter Full Details').email('You must enter Full Details'),
    });
    const { watch, handleSubmit, formState, control } = useForm({
        mode: 'onChange',
        defaultValues: {
            Asset: '',
            Title: '',
            Weekness: '',
            severity: '',
            Description: '',
            Impact: '',
            Remedy: '',
        },
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;
    function onSubmit(data) {
        // console.info(data);

    }

    const [values, setValues] = React.useState({
        assets: '',
        title: '',
        weekness: '',
        severity: ''
    });
    const [severity, setSeverity] = React.useState(0);
    const [selectedValues, setselectedValues] = React.useState({
        assets: '',
        title: '',
        weekness: '',
        severity: ''
    });
    const [cvsScore, setScore] = React.useState({
        AV: 'N',
        AC: 'L',
        PR: 'N',
        UI: 'N',
        S: 'U',
        C: 'N',
        I: 'N',
        A: 'N'
    }
    );

    const handleCVSS = (props) => (event, val) => {
        if (val !== null) {
            setScore({
                ...cvsScore, [props]: val
            })
        }
    }

    const handleSV = (props) => (event) => {
        setselectedValues({ ...selectedValues, [props]: event.target.innerText });

    };
    const handleSVR = (props) => (event) => {
        setselectedValues({ ...selectedValues, [props]: "" });

    };

    const handleChange = (props) => (event) => {
        setValues({
            ...values, [props]: event.target.value
        });

    };

    const handleChangeS = (event, val) => {
        if (val !== null) {
            setSeverity(val);
        }
    };
    const Sevcolor = { Critical: "#cc2600", High: "#df3d03", Medium: "#f9a008", Low: "#ffcb0b", None: "#53aa33" };


    const FilterAsset = Asset.filter((values.assets == "") ? row => true : row => row.plat.toLowerCase().includes(values.assets.toLowerCase) == true);
    const FilterCwe = Cwe.filter((values.weekness == "") ? row => true : row => row.Name.toLowerCase().includes(values.weekness.toLowerCase()) == true);


    const [tabValue, setTabValue] = useState(0);
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const Str = "CVSS:3.1/AV:" + cvsScore.AV + "/AC:" + cvsScore.AC + "/PR:" + cvsScore.PR + "/UI:" + cvsScore.UI + "/S:" + cvsScore.S + "/C:" + cvsScore.C + "/I:" + cvsScore.I + "/A:" + cvsScore.A;
    const cvss = new Cvss(Str);

    return (<>
        <motion.div variants={item} className="widget w-full p-16 pb-48">
            <>
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

            </>
            <br />

            <>
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
                        <TableContainer component={Paper} sx={{ maxHeight: 150 }} square>
                            <Table stickyHeader><TableBody>

                                {FilterAsset.map((row) => (
                                    ((selectedValues.assets === row['asset'] + " " + row['plat'])) ?
                                        <TableRow key={row['id']} onClick={handleSV('assets')} >
                                            <TableCell sx={{ marginLeft: "4%", bgcolor: "#7eb2dd20" }}>{row['asset'] + " " + row['plat']}  </TableCell></TableRow>
                                        :
                                        <TableRow key={row['id']} onClick={handleSV('assets')} >
                                            <TableCell sx={{ marginLeft: "4%" }}>{row['asset'] + " " + row['plat']}  </TableCell>
                                        </TableRow>
                                ))}

                            </TableBody></Table>
                        </TableContainer>
                        <Box sx={{ background: "#71717120", marginTop: "1.5%", padding: "1%" }} >
                            <Typography sx={{ fontSize: "12px" }}>Currently selected: {(selectedValues.assets == "") ? <>None</> : <span onClick={handleSVR('assets')} sx={{ color: "#023442" }}>(Selected)</span>}<br /> </Typography>
                            {(selectedValues.assets != "") ? <Alert severity="success" onClose={handleSVR('assets')} square>
                                {selectedValues.assets}
                            </Alert> : <></>}
                        </Box>
                    </CardContent>

                </Card>
                <br />
            </>


            <>
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
                                {FilterCwe.map((row) => (
                                    ((selectedValues.weekness === "CWE-" + row['CWE-ID'] + " : " + row['Name'])) ?
                                        <TableRow key={row['CWE-ID']} onClick={handleSV('weekness')}>
                                            <TableCell sx={{ marginLeft: "4%", bgcolor: "#7eb2dd20" }}>{"CWE-" + row['CWE-ID'] + " : " + row['Name']}
                                            </TableCell>
                                        </TableRow>
                                        :
                                        <TableRow key={row['CWE-ID']} onClick={handleSV('weekness')}>
                                            <TableCell sx={{ marginLeft: "4%" }}>{"CWE-" + row['CWE-ID'] + " : " + row['Name']}
                                            </TableCell>
                                        </TableRow>))}</TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ background: "#71717120", marginTop: "1.5%", padding: "1%" }} >
                            <Typography sx={{ fontSize: "12px" }}>Currently selected: {(selectedValues.weekness == "") ? <>None</> :
                                <span onClick={handleSVR('weekness')} sx={{ color: 'text.secondary' }}>(Selected)</span>}<br />
                            </Typography>
                            {(selectedValues.weekness != "") ? <Alert severity="success" onClose={handleSVR('weekness')} square>
                                {selectedValues.weekness}
                            </Alert> : <></>}
                        </Box>
                    </CardContent>
                </Card>
                <br />

            </>


            <>
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
                        <Box sx={{ padding: "1%" }} >

                            <div className="relative p-20 flex flex-row items-center justify-between border">
                                <div className="flex flex-col">
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={severity}
                                        exclusive
                                        size="small"
                                        onChange={handleChangeS}
                                    >
                                        <ToggleButton value="Critical">Critical</ToggleButton>
                                        <ToggleButton value="High">High</ToggleButton>
                                        <ToggleButton value="Medium">Medium</ToggleButton>
                                        <ToggleButton value="Low">Low</ToggleButton>
                                        <ToggleButton value="Info">Info</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>

                                <div className="flex flex-row items-center">
                                    {(severity === '') ? <></> : <MiniBadge name={severity} />}
                                </div>

                            </div>
                        </Box>
                        <Divider>OR</Divider>

                        <Box className='border relative p-18' sx={{ margin: "1%", marginTop: "1%", marginBottom: "1%", padding: "2%" }} >
                            <div className='relative  flex flex-row items-center justify-between'><Typography className='text-20 '>CVSS v3.0 Calculator</Typography>        <Avatar sx={{ bgcolor: Sevcolor[cvss.getRating()] }} sizes='small'>
                                {cvss.getBaseScore()}
                            </Avatar></div>
                            <Stack direction={{ xs: 'column', sm: 'row' }}
                                spacing="10%"
                            >

                                <Stack
                                    direction='column'
                                    spacing={1}
                                >
                                    <FormGroup >
                                        <Typography>Attack Vector</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.AV}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('AV')}
                                        >
                                            <ToggleButton value="N" >Network</ToggleButton>
                                            <ToggleButton value="A" >Adjacent</ToggleButton>
                                            <ToggleButton value="L" >Local</ToggleButton>
                                            <ToggleButton value="P" >Physical</ToggleButton>
                                        </ToggleButtonGroup>
                                    </FormGroup>


                                    <FormGroup >
                                        <Typography>Attack Complexity</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.AC}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('AC')}
                                        >
                                            <ToggleButton value="L" >Low</ToggleButton>
                                            <ToggleButton value="H" >High</ToggleButton>
                                        </ToggleButtonGroup>
                                    </FormGroup>


                                    <FormGroup sx={{ marginBottom: "3%", marginTop: "1%" }}>
                                        <Typography>Privileges Required</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.PR}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('PR')}
                                        >
                                            <ToggleButton value="N" >None</ToggleButton>
                                            <ToggleButton value="L" >Low</ToggleButton>
                                            <ToggleButton value="H" >High</ToggleButton>
                                        </ToggleButtonGroup>
                                    </FormGroup>


                                    <FormGroup >
                                        <Typography>User Interaction</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.UI}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('UI')}
                                        >
                                            <ToggleButton value="N" >None</ToggleButton>
                                            <ToggleButton value="R" >Required</ToggleButton>
                                        </ToggleButtonGroup>
                                    </FormGroup>
                                </Stack>

                                <Stack
                                    direction="column"
                                    spacing={1}

                                >
                                    <FormGroup >
                                        <Typography>Scope</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.S}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('S')}
                                        >
                                            <ToggleButton value="U" >Unchanged</ToggleButton>
                                            <ToggleButton value="C" >Changed</ToggleButton>
                                        </ToggleButtonGroup>
                                    </FormGroup>
                                    <FormGroup >
                                        <Typography>Confidentiality</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.C}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('C')}
                                        >
                                            <ToggleButton value="N" >None</ToggleButton>
                                            <ToggleButton value="L" >Low</ToggleButton>
                                            <ToggleButton value="H" >High</ToggleButton>

                                        </ToggleButtonGroup>
                                    </FormGroup>
                                    <FormGroup >
                                        <Typography>Integrity</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.I}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('I')}
                                        >
                                            <ToggleButton value="N" >None</ToggleButton>
                                            <ToggleButton value="L" >Low</ToggleButton>
                                            <ToggleButton value="H" >High</ToggleButton>

                                        </ToggleButtonGroup>
                                    </FormGroup>
                                    <FormGroup >
                                        <Typography>Availability</Typography>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={cvsScore.A}
                                            exclusive
                                            size="small"
                                            onChange={handleCVSS('A')}
                                        >
                                            <ToggleButton value="N" >None</ToggleButton>
                                            <ToggleButton value="L" >Low</ToggleButton>
                                            <ToggleButton value="H" >High</ToggleButton>

                                        </ToggleButtonGroup>
                                    </FormGroup>

                                </Stack>

                            </Stack>
                            <Box sx={{ background: "#71717120", marginTop: "1.5%", padding: "1%" }} >
                                <Typography sx={{ fontSize: "18px" }}>Currently Severity: {cvss.getBaseScore()} <br />
                                </Typography>
                                <Alert severity="success" square>
                                    {Str}
                                </Alert>

                            </Box>

                        </Box>

                    </CardContent>

                </Card>
            </>
            <br />






            <>
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
                        < Typography className="h4 sm:h2 font-medium" sx={{ marginBottom: "%" }}>Title   </Typography>
                        <div className="flex flex-row items-center">     <TextField fullWidth required />

                        </div>

                        < Typography className="h4 sm:h2 font-medium" sx={{ marginTop: "2%", marginBottom: "%" }}>Description</Typography>
                        <div className="flex flex-row items-center">
                            <Controller
                                className="mt-8 mb-16"
                                render={({ field }) => <WYSIWYGEditor {...field} />}
                                name="Description"
                                control={control}
                            />

                        </div>

                        < Typography className="h4 sm:h2 font-medium" sx={{ marginTop: "2%", marginBottom: "%" }}>Impact</Typography>
                        <div className="flex flex-row items-center">
                            <Controller
                                className="mt-8 mb-16"
                                render={({ field }) => <WYSIWYGEditor {...field} />}
                                name="Impact"
                                control={control}
                            />
                        </div>

                        < Typography className="h4 sm:h2 font-medium items-center" sx={{ marginTop: "2%", marginBottom: "%" }}>Remediation</Typography>
                        <div className="flex flex-row items-center"  >
                            <Controller
                                className="mt-8 mb-16"
                                render={({ field }) => <WYSIWYGEditor {...field} />}
                                name="Remediation"
                                control={control}
                            />
                        </div>

                    </CardContent>


                    <div className="relative p-20 flex flex-row items-center justify-between">
                        <div className="flex flex-col">

                        </div>

                        <div className="flex flex-row items-center">
                            <Button variant="contained" sx={{ borderRadius: "4px", color: "#FFFFFF" }}>Submit Report</Button>
                        </div>
                    </div>
                </Card>
                <br />


            </>








            <br />




            <>

            </>



        </motion.div>


    </>
    );
}

export default BugRepo;
