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

interface pubProps {
    //    publicationProp:
    //    {
    name: string,
    url: string,
    authors: string[],
    status: string,
    conference: string,
    year: number,
    acceptRate: number,
    //    }
}


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


// axios.get('https://scholar.google.com/citations?hl=en&user=n1pDIggAAAAJ').then(resp => {
//     console.log(resp.data);
// });


const citationAll = 7;
const publicationItemListAll = [
    {
        'name': "Meta-Learning with an Adaptive Scheduler.",
        'url': "https://arxiv.org/abs/2110.14057",
        'authors': ["Huaxiu Yao*", "Yu Wang*", "Peilin Zhao", "Mehrdad Mahdavi", "Defu Lian", "Ying Wei", "Chelsea Finn"],
        'status': "Accepted",
        'conference': "NeurIPS",
        'year': 2021,
        'acceptRate': 26,
    },
    {
        'name': "Learning Robust Recommenders through Cross-Model Agreement.",
        'url': "https://arxiv.org/abs/2105.09605",
        'authors': ['Yu Wang', 'Xin Xin', 'Zaiqiao Meng', 'Xiangnan He', 'Joemon Jose', 'Fuli Feng'],
        'status': "Accepted",
        'conference': 'WWW',
        'year': 2022,
        'acceptRate': 17.7,
    },
    {
        'name': "Improving Out-of-Distribution Robustness via Selective Augmentation.",
        'url': "https://arxiv.org/abs/2201.00299",
        'authors': ['Huaxiu Yao*', 'Yu Wang*', 'Sai Li', 'Weixin Liang', 'Linjun Zhang', 'James Zou', 'Chelsea Finn'],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2022,
        'acceptRate': 21.9,
    },
    {
        'name': "Differentiable Invariant Causal Discovery.",
        'url': 'https://arxiv.org/abs/2205.15638',
        'authors': ['Yu Wang', 'An Zhang', 'Xiang Wang', 'Xiangnan He', 'Tat-Seng Chua'],
        'status': "Submitted",
        'conference': 'NeurIPS',
        'year': 2022,
        'acceptRate': 0,
    },
    {
        'name': 'AutoOD: Automatic Outlier Detection.',
        'url': '',
        'authors': ['Lei Cao', 'Yizhou Yan', 'Yu Wang', 'Samuel Madden', 'Elke A. Rundensteiner'],
        'status': "Submitted",
        'conference': 'SIGMOD',
        'year': 2023,
        'acceptRate': 0,
    },
    {
        'name': 'Interpretable Outlier Summarization.',
        'url': '',
        'authors': ['Yu Wang', 'Lei Cao', 'Samuel Madden'],
        'status': 'Submitted',
        'conference': 'SIGMOD',
        'year': 2023,
        'acceptRate': 0,
    },
    {
        'name': 'Probabilistic and Variational Label Denoising.',
        'url': '',
        'authors': ['Xin Xin*', 'Yu Wang*', 'Zaiqiao Meng', 'Xiangnan He', 'Joemon Jose', 'Fuli Feng'],
        'status': 'Submitted',
        'conference': 'TKDE',
        'year': 2022,
        'acceptRate': 0,
    }
]


function PublicationItem(props: pubProps) {
    return (<>
        <div className="display-12 mb-8">
            <a className="text-white">{props.name + ' '}</a>
            {props.url !== '' ? <a href={props.url}>PDF</a> : <></>}
            <br />
            {/* <div> */}
            {props.authors.map(
                (item, index) => {
                    if (item === 'Yu Wang' || item === 'Yu Wang*') {
                        return <a key={index} style={{ color: 'limegreen' }}><strong>{item + ', '}</strong></a>;
                    } else {
                        return <a key={index}>{item + ', '}</a>
                    }
                }
            )}
            {/* </div> */}
            <br />
            <strong>{props.status} to {props.conference} {props.year}. {
                props.status === 'Accepted' ? '(Accept rate: ' + props.acceptRate + '%)' : ''
            }</strong>
        </div>
        <br></br>
    </>)
}

export function authorship(value: string[]) {
    if (value[0] === 'Yu Wang') {
        return 'First';
    }
    if (value[0] === 'Yu Wang*' || value[1] === 'Yu Wang*') {
        return 'Co-First';
    }
    return 'Other';
}

export function Publications() {

    const [checked, setChecked] = React.useState([2021, 2022, 2023]);
    const [authorChecked, setAuthorChecked] = React.useState(['First', 'Co-First', 'Other']);
    const [statusChecked, setStatusChecked] = React.useState(['Accepted', 'Submitted']);
    const [citation, setCitation] = React.useState(0);

    const [publicationItemList, setPublicationItemList] = React.useState(publicationItemListAll.slice(0, 0));

    React.useEffect(() => {
        // console.log('useEffect called')
        const appendPublication = () => {
            if (publicationItemList.length === publicationItemListAll.length) return;
            setPublicationItemList((publicationItemList) => {
                return publicationItemListAll.slice(0, publicationItemList.length + 1);
            });
            setTimeout(appendPublication, 100);
        };
        appendPublication();

    }, []);

    React.useEffect(() => {
        let cit = 0;
        const appendCitation = () => {
            // if (publicationItemList.length === publicationItemListAll.length) return;
            if (cit === citationAll) return;
            cit++;
            setCitation(citation => citation + 1);
            setTimeout(appendCitation, 100);
        };

        appendCitation();

    }, []);

    const handleStatusToggle = (value: string) => () => {
        const currentIndex = statusChecked.indexOf(value);
        const newChecked = [...statusChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setStatusChecked(newChecked);
    };



    const handleAuthorToggle = (value: string) => () => {
        const currentIndex = authorChecked.indexOf(value);
        const newAuthorChecked = [...authorChecked];

        if (currentIndex === -1) {
            newAuthorChecked.push(value);
        } else {
            newAuthorChecked.splice(currentIndex, 1);
        }

        setAuthorChecked(newAuthorChecked);
    };

    // function valuetext(value: number) {
    //     return `year: ${value}`;
    // }
    function valuetext(value: number) {
        return `${value}°C`;
    }

    const marks = [
        {
            value: 0,
            year: 2021,
            label: 'Year 2021',
        },
        {
            value: 50,
            year: 2022,
            label: 'Year 2022',
        },
        {
            value: 100,
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
            {/* <div className='up' style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'forestgreen',
                fontSize: '0.7cm'
            }}>
                Publications
            </div> */}
            <StyledDiv>
                <div className='left' style={{
                    paddingBottom: '200px',
                    paddingTop: '40px'
                }}>
                    {/* <br /> */}
                    {/* <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '20%'
                    }}>
                    </div> */}
                    <div style={{ width: '70%' }}>
                        <div>
                            {
                                Array.from({ length: publicationItemList.length }, (item, index) => index).filter(
                                    (idx) => {
                                        const endYearItem = marks.find((item) => (item.value === range[1]))
                                        const endYear = !endYearItem ? 2023 : endYearItem.year

                                        const beginYearItem = marks.find((item) => (item.value === range[0]))
                                        const beginYear = !beginYearItem ? 2021 : beginYearItem.year

                                        return (publicationItemList[idx].year <= endYear && publicationItemList[idx].year >= beginYear)
                                            && (authorChecked.indexOf(authorship(publicationItemList[idx].authors)) !== -1)
                                            && (statusChecked.indexOf(publicationItemList[idx].status) !== -1)
                                    }
                                ).map((idx) => (
                                    <div key={idx} className='board-row'>
                                        <PublicationItem {...publicationItemList[idx]} />
                                    </div>))
                            }

                        </div>
                        <Box sx={{ width: "60%" }}>
                            <Skeleton width={'60%'} />
                            <Skeleton width={'100%'} />
                            <Skeleton width={'30%'} />
                        </Box>
                    </div>


                </div>
                <div className="right">
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center', height: 200 }}>
                        <Box sx={{ width: '90%', height: '80%' }}>
                            <Slider
                                orientation="vertical"
                                getAriaLabel={() => 'Year'}
                                // defaultValue={[0, 100]}
                                value={range}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                step={50}
                                marks={marks}
                                color="secondary"
                            // valueLabelDisplay="on"
                            />
                        </Box>
                    </div>

                    <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {['First', 'Co-First', 'Other'].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    // secondaryAction={
                                    //   <IconButton edge="end" aria-label="comments">
                                    //     <CommentIcon />
                                    //   </IconButton>
                                    // }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleAuthorToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={authorChecked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>


                    <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {['Accepted', 'Submitted'].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    // secondaryAction={
                                    //   <IconButton edge="end" aria-label="comments">
                                    //     <CommentIcon />
                                    //   </IconButton>
                                    // }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleStatusToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={statusChecked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '50%'
                    }}>
                        <Typography>Citation {citation}</Typography>
                        &nbsp;&nbsp;
                        <CircularProgress size={20} />
                        &nbsp;&nbsp;
                        {/* <Typography>Collecting...</Typography> */}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '50%'
                    }}>
                        <Typography>Collecting...</Typography>
                    </div>

                </div>

            </StyledDiv>
        </div>
    )
}