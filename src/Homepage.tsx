import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import { Publications } from './Publications';
import { BasicInformation } from './BasicInformation';
import { Experiences } from './experiences';

const StyledDiv = styled.div`
    flex-grow: 1;
    overflow-y: auto;    
    display: flex;
    max-height: 100%;

    /* &> .up {
        width: 100%;
        height: 200px;
        position: sticky;
    } */

    &> .left {
    width: 300px;
    min-width: 300px;
    max-height: 100%;
    height: 100%;
    overflow-y: auto;
    }

    @media only screen and (max-width: 640px) {
    &> .left {
        display: none;
    }
    }

    &> .right {
    max-height: 100%;
    height: 100%;
    padding-bottom: 100px;
    flex-grow: 1;
    overflow-y: auto;
    }
`;




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: '100%' }}
            {...other}
        >

            {value === 0 && <BasicInformation/>}
            {value === 1 && <Publications />} 
            {value === 2 && <Experiences />}
            {/* {value === 3 && <Box sx={{ p: 3 }}>
                                <Typography>{children}</Typography>
                            </Box>} */}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



export default function VerticalTabs() {


    const [value, setValue] = React.useState(0);

    // function SelectPublication() {
    //     console.log("publication")
    //     setValue(1);
    // }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ bgcolor: 'background.paper', display: 'flex', width:'100%'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', overflowY: 'hide'}}
            >
                <Tab label="Basic Information" {...a11yProps(0)} />
                <Tab label="Publications" {...a11yProps(1)} />
                <Tab label="Experiences" {...a11yProps(2)} />
                {/* <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} /> */}
            </Tabs>
            <TabPanel value={value} index={0} >
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            {/* <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel> */}
        </Box>
    );
}





export function Homepage() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div className='up' style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'grey',
                fontSize: '0.7cm',
                height: '50px'
            }}>
                Yu Wang
            </div>
            <div style={{
                flexGrow: 1,
                maxHeight: 'calc(100% - 50px)',
                display: 'flex',
                width: '100%'
            }}>
                <VerticalTabs />
            </div>
            {/* <StyledDiv>
                <div className="left">
                    <VerticalTabs/>
                </div>
                <div className="right">
                    Very Good
                </div>
            </StyledDiv> */}





        </div>
    )
}
