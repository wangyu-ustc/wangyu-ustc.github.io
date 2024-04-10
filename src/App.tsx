import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Menu from '@mui/material/Menu';

import { BasicInformation } from './components/BasicInformation';
import { Publications } from './components/Publications';
import { Experiences } from './components/Experiences';
import { ProjectStructure } from "./components/ProjectStructure";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const options = [
  'Basic Information',
  'Publications',
  'Experiences',
  'Project Structure'
];

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
          {value === 3 && <ProjectStructure />}
      </div>
  );
}



function App() {

  const [value, setValue] = React.useState(0);
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
      height: '100vh',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#D5DBDB',
          fontSize: '0.7cm',
          height: '50px'
        }}>
          <div className='adjustToWidth'>
            <div style={{
              width: '70%',
              height: '100%',
              display: 'flex'
            }}>
              <div style={{
                        width: '40px',
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
                    <DensityMediumIcon />
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
                  color: 'black',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
              }}>
                  Yu Wang
              </div>
            </div>
          </div>
      </div>
       <div style={{
                flexGrow: 1,
                maxHeight: 'calc(100% - 50px)',
                display: 'flex',
                width: '100%'
            }}>
                <Box
                    sx={{ bgcolor: 'background.paper', display: 'flex', width: '100%' }}
                >
                    <TabPanel value={value} index={0} >
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    </TabPanel>
                </Box>
            </div>
    </div>
  )
}

export default App;
