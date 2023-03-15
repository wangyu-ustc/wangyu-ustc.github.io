import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import ustcBadge from './assets/ustc_badge.png'
import stanfordBadge from './assets/stanford_badge.png'
import nusBadge from './assets/nus_badge.png'
import mitBadge from './assets/MIT_badge.png'
import ucsdBadge from './assets/ucsd_badge.png'




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
    width: 200px;
    min-width: 200px;
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
    },
    {
        'lab': 'Lab',
        'univ': 'University of California, San Diego',
        'badge': ucsdBadge,
        'professor': 'Prof. Julian McAuley',
        'profUrl': 'https://cseweb.ucsd.edu/~jmcauley/',
        'startYear': 2022,
        'startMonth': 4,
        'endYear': 'Present',
        'endMonth': '',
        'project': 'Natural Language Processing & Data Mining'
    }
]



const MyA = styled.a`
    &:hover {
        background: #addee4;
    }
`;

export function Experiences() {


    const marks = [
        {
            value: 0,
            year: 2023,
            label: 'Year 2023',
        },
        {
            value: 33,
            year: 2022,
            label: 'Year 2022',
        },
        {
            value: 66,
            year: 2021,
            label: 'Year 2021',
        },
        {
            value: 99,
            year: 2020,
            label: 'Year 2020',
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
                    display: 'flex',
                    color: 'black'
                }}>
                    <div style={{ width: '64%', fontSize: '20px' }}>
                        <Typography fontSize='20px'>Research Experiences: </Typography>
                        <br></br>
                        {/* <ExpItem {...experienceItemListAll[0]}/> */}
                        {
                            experienceItemListAll.filter(
                                (item) => {
                                    const endYearItem = marks.find((item) => (item.value === range[0]))
                                    const endYear = !endYearItem ? 2023 : endYearItem.year

                                    const beginYearItem = marks.find((item) => (item.value === range[1]))
                                    const beginYear = !beginYearItem ? 2020 : beginYearItem.year

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
                                                width="80"
                                                height="80"
                                            />


                                            <div>
                                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; {item.lab}.&nbsp; {item.univ}</Typography>
                                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; {item.startYear}.{item.startMonth} - {item.endYear}.{item.endMonth},
                                                    Advisor: <MyA href={item.profUrl} style={{ color: '#265d75', textDecoration: 'none' }}>{item.professor}</MyA> <br></br> </Typography>
                                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; About: {item.project}</Typography>
                                                {/* Advisor: {item.professor}, <br></br> */}
                                            </div>

                                        </div>
                                        <br />
                                    </>

                                }
                            )
                        }
                        <Typography fontSize='20px'>Education Experiences:</Typography>
                        <br></br>
                        <div style={{ width: '100%', display: 'flex', }}>
                            <img
                                alt="badge"
                                className="logo"
                                src={ustcBadge}
                                width="80"
                                height="80"
                            />
                            <div>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; University of Science and Technology of China</Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; 2018.9 - 2022.7</Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; B.S. in Data Science and Big Data Technology</Typography>
                                {/* Advisor: {item.professor}, <br></br> */}
                            </div>
                        </div>
                        <br></br>
                        <div style={{ width: '100%', display: 'flex', }}>
                            <img
                                alt="badge"
                                className="logo"
                                src={ucsdBadge}
                                width="80"
                                height="80"
                            />
                            <div>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; University of California, San Diego</Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; 2022.7 - Unknown</Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; P.h.D in Computer Science Engineering</Typography>
                                {/* Advisor: {item.professor}, <br></br> */}
                            </div>
                        </div>
                        <br></br>

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