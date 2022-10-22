import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import { Publications } from './Publications';
import { BasicInformation } from './BasicInformation';
import { Experiences } from './experiences';
import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DehazeIcon from '@mui/icons-material/Dehaze';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const options = [
    'Basic Information',
    'Publications',
    'Experiences'
];

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const ITEM_HEIGHT = 48;

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

            {value === 0 && <BasicInformation />}
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

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ bgcolor: 'background.paper', display: 'flex', width: '100%' }}
        >
            {/* <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', overflowY: 'hide' }}
            >
                <Tab label="Basic Information" {...a11yProps(0)} />
                <Tab label="Publications" {...a11yProps(1)} />
                <Tab label="Experiences" {...a11yProps(2)} />
            </Tabs> */}
            <TabPanel value={value} index={0} >
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}





export function Homepage() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option: string) => {
        // window.alert(option)
        options.find((item, idx) => {
            if (item === option) {
                setValue(idx)
            }
        })
        setAnchorEl(null);
    };

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
                backgroundColor: '#D5DBDB',
                fontSize: '0.7cm',
                height: '50px'
            }}>
                <div style={{width:'70%', 
                            height:'100%',
                            display: 'flex'}}>
                <div style={{
                    width:'40px',
                    // backgroundColor: '',
                    height: '100%'
                }}>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <DensityMediumIcon/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} onClick={() => handleClose(option)}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div style={{
                    display: 'flex',
                    width: 'calc(100% - 40px)',
                    justifyContent: 'center',
                }}>
                    Yu Wang
                </div>
                </div>
                {/* Yu Wang */}
            </div>
            <div style={{
                flexGrow: 1,
                maxHeight: 'calc(100% - 50px)',
                display: 'flex',
                width: '100%'
            }}>
                {/* <VerticalTabs /> */}
                <Box
                    sx={{ bgcolor: 'background.paper', display: 'flex', width: '100%' }}
                >
                    {/* <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', overflowY: 'hide' }}
            >
                <Tab label="Basic Information" {...a11yProps(0)} />
                <Tab label="Publications" {...a11yProps(1)} />
                <Tab label="Experiences" {...a11yProps(2)} />
            </Tabs> */}
                    <TabPanel value={value} index={0} >
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
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
