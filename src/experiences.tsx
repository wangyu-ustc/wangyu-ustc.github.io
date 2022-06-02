import * as React from 'react';
import styled from 'styled-components';
import { List, Button, Avatar } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';

import ustcBadge from './assets/ustc_badge.png'
import stanfordBadge from './assets/stanford_badge.png'
import nusBadge from './assets/nus_badge.png'
import mitBadge from './assets/MIT_badge.png'




const StyledDiv = styled.div`
    flex-grow: 1;
    overflow-y: auto;    
    display: flex;
    max-height: 100%;

    &> .up {
        width: 100%;
        height: 200px;
        position: sticky;
    }

    &> .right {
    width: 300px;
    min-width: 300px;
    max-height: 100%;
    height: 100%;
    overflow-y: auto;
    }

    @media only screen and (max-width: 1000px) {
    &> .right {
        display: none;
    }
    }

    &> .left {
    max-height: 100%;
    height: 100%;
    padding-bottom: 100px;
    padding-top: 30px;
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    justify-content: center
    }
`;


interface expProps {
    lab: string,
    univ: string,
    badge: string,
    professor: string,
    profUrl: string,
    startYear: number,
    endYear: number,
    startMonth: number,
    endMonth: number
}

const experienceItemListAll = [
    {
        'lab': 'LDS',
        'univ': 'University of Science and Technology of China',
        'badge': ustcBadge,
        'professor': 'Prof. Xiangnan He',
        'profUrl': 'http://staff.ustc.edu.cn/~hexn/',
        'startYear': 2020,
        'startMonth': 8,
        'endYear': 2021,
        'endMonth': 4,
        'project': 'Debias(or denoise) in recommendation systems'
    },
    {
        'lab': 'SAIL',
        'univ': 'Stanford University',
        'badge': stanfordBadge,
        'professor': 'Dr. Huaxiu Yao',
        'profUrl': 'https://huaxiuyao.mystrikingly.com/',
        'startYear': 2021,
        'startMonth': 3,
        'endYear': 2021,
        'endMonth': 10,
        'project': 'Meta-Learning, Domain Shifts'
    },
    {
        'lab': 'NExT++',
        'univ': 'National University of Singapore',
        'badge': nusBadge,
        'professor': 'Prof. Tat-Seng Chua',
        'profUrl': 'https://www.chuatatseng.com/',
        'startYear': 2021,
        'startMonth': 8,
        'endYear': 2021,
        'endMonth': 11,
        'project': 'Causal Discovery'
    },
    {
        'lab': 'CSAIL',
        'univ': 'Massachusetts Institute of Technology',
        'badge': mitBadge,
        'professor': 'Prof. Samuel Madden',
        'profUrl': 'http://db.csail.mit.edu/madden/',
        'startYear': 2021,
        'startMonth': 4,
        'endYear': 2022,
        'endMonth': 1,
        'project': 'Outlier Detection'
    }
]


function ExpItem(props: expProps) {
    return (<>

        <img
            alt="badge"
            className="logo"
            src={require(props.badge)}
            width="100"
            height="100"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.lab}, {props.univ} <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.startYear}.{props.startMonth} - {props.endYear}.{props.endMonth}</>)
}


export function Experiences() {

    const marks = [
        {
            value: 0,
            year: 2020,
            label: 'Year 2020',
        },
        {
            value: 33,
            year: 2021,
            label: 'Year 2021',
        },
        {
            value: 66,
            year: 2022,
            label: 'Year 2022',
        },
        {
            value: 99,
            year: 2023,
            label: 'Year 2023',
        },
    ];

    const [range, setRange] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
    };

    return (
        <div style={{
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <StyledDiv>
                <div className='left' style={{
                    paddingBottom: '200px',
                    paddingTop: '40px',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <div style={{ width: '70%', fontSize: '20px' }}>

                        {/* <ExpItem {...experienceItemListAll[0]}/> */}
                        {
                            experienceItemListAll.filter(
                                (item) => {
                                    const endYearItem = marks.find((item) => (item.value === range[1]))
                                    const endYear = !endYearItem ? 2023 : endYearItem.year

                                    const beginYearItem = marks.find((item) => (item.value === range[0]))
                                    const beginYear = !beginYearItem ? 2021 : beginYearItem.year

                                    return (item.startYear <= endYear && item.startYear >= beginYear)
                                }
                            ).map(
                                (item) => {
                                    return <>
                                        <div style={{ width: '100%', display: 'flex', }}>
                                            <img
                                                alt="badge"
                                                className="logo"
                                                src={item.badge}
                                                width="100"
                                                height="100"
                                            />
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {item.lab}.&nbsp; {item.univ} <br></br>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {item.startYear}.{item.startMonth} - {item.endYear}.{item.endMonth}, &nbsp; 
                                            {/* <a href={item.profUrl}>Advisor: {item.professor}</a> */}
                                            Advisor: {item.professor}, <br></br>
                                            &nbsp;&nbsp;&nbsp;
                                            About: {item.project}
                                        </div>
                                        <br/>
                                    </>

                                }
                            )
                        }
                    </div>

                </div>
                <div className="right">
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center', height: 500 }}>
                        <Box sx={{ width: '90%', height: '80%' }}>
                            <Slider
                                orientation="vertical"
                                getAriaLabel={() => 'Year'}
                                // defaultValue={[0, 100]}
                                value={range}
                                onChange={handleChange}
                                step={33}
                                marks={marks}
                                color="secondary"
                            // valueLabelDisplay="on"
                            />
                        </Box>
                    </div>


                </div>

            </StyledDiv>
        </div>
    )
}