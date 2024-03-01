import "./Publications.css"


import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import ustcBadge from '../assets/ustc_badge.png'
import stanfordBadge from '../assets/stanford_badge.png'
import nusBadge from '../assets/nus_badge.png'
import mitBadge from '../assets/MIT_badge.png'
import ucsdBadge from '../assets/ucsd_badge.png'
import amazonLogo from "../assets/Amazon-Logo.png"

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

    return (
        <div style={{
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <div className='styledDiv'>
                <div className='expleft'>
                    <div style={{"width": '70%'}}>
                        <Typography fontSize='20px'>Work Experiences: </Typography>
                        <br/>
                        <div style={{ width: '100%', display: 'flex', }}>
                            <div>
                            <img
                                alt="badge"
                                className="logo responsive-logo"
                                src={amazonLogo}
                                width="80"
                                height="80"
                            />
                            </div>
                            <div>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; Applied Scientist Intern @ Amazon</Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; 2023.6 - 2023.9, Mentor: <MyA href={"https://yifan-gao.github.io/"} style={{ color: '#265d75', textDecoration: 'none' }}>Yifan Gao</MyA></Typography>
                                <Typography fontSize='15px'>&nbsp;&nbsp;&nbsp;&nbsp; About: Large Language Model</Typography>
                                {/* Advisor: {item.professor}, <br></br> */}
                            </div>
                        </div>
                        <br></br>

                        <Typography fontSize='20px'>Research Experiences: </Typography>
                        <br></br>
                        {
                            experienceItemListAll.map(
                                (item) => {
                                    return <>
                                        <div style={{ width: '100%', display: 'flex', }}>
                                            <img
                                                alt="badge"
                                                className="logo responsive-logo"
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
                                className="logo responsive-logo"
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
                                className="logo responsive-logo"
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
            </div>
        </div>
    )
}