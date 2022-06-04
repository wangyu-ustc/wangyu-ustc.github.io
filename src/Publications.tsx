import * as React from 'react';
import styled from 'styled-components';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ats from './assets/ats.png'
import deca from './assets/deca.png'
import lisa from './assets/lisa.png'
import dicd from './assets/dicd.png'



interface pubProps {
    //    publicationProp:
    //    {
    idx: number,
    name: string,
    url: string,
    authors: string[],
    status: string,
    conference: string,
    year: number,
    acceptRate: number,
    img: string,
    abstract: string
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
    width: 250px;
    min-width: 250px;
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
        'img': ats,
        'abstract': 'We propose an adaptive task scheduler (ATS) for the meta-training process with a neural scheduler to decide which meta-training tasks to use next and train the scheduler to optimize the generalization capacity of the meta-model to unseen tasks. We identify two meta-model-related factors as the input of the neural scheduler, which characterize the difficulty of a candidate task to the meta-model. Theoretically, we show that a scheduler taking the two factors into account improves the meta-training loss and also the optimization landscape.',
    },
    {
        'name': "Learning Robust Recommenders through Cross-Model Agreement.",
        'url': "https://arxiv.org/abs/2105.09605",
        'authors': ['Yu Wang', 'Xin Xin', 'Zaiqiao Meng', 'Xiangnan He', 'Joemon Jose', 'Fuli Feng'],
        'status': "Accepted",
        'conference': 'WWW',
        'year': 2022,
        'acceptRate': 17.7,
        'img': deca,
        'abstract': 'We propose a novel framework to learn robust recommenders from implicit feedback. Through an empirical study, we find that different models make more similar predictions on clean examples than noisy examples. Motivated by this observation, we propose DeCA which aims to minimize the KL-divergence between the real user preference distributions parameterized by two recommendation models while maximizing the likelihood of data observation. We employ the proposed DeCA on four state-of-the-art recommendation models and conduct experiments on four datasets.'
    },
    {
        'name': "Improving Out-of-Distribution Robustness via Selective Augmentation.",
        'url': "https://arxiv.org/abs/2201.00299",
        'authors': ['Huaxiu Yao*', 'Yu Wang*', 'Sai Li', 'Weixin Liang', 'Linjun Zhang', 'James Zou', 'Chelsea Finn'],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2022,
        'acceptRate': 21.9,
        'img': lisa,
        'abstract': "We specifically consider the problems of subpopulation shifts (e.g., imbalanced data) and domain shifts. We propose LISA, which selectively interpolates samples either with the same labels but different domains or with the same domain but different labels. Empirically, we study the effectiveness of LISA on nine benchmarks ranging from subpopulation shifts to domain shifts. We further analyze a linear setting and theoretically show how LISA leads to a smaller worst-group error."
    },
    {
        'name': "Differentiable Invariant Causal Discovery.",
        'url': 'https://arxiv.org/abs/2205.15638',
        'authors': ['Yu Wang', 'An Zhang', 'Xiang Wang', 'Xiangnan He', 'Tat-Seng Chua'],
        'status': "Submitted",
        'conference': 'NeurIPS',
        'year': 2022,
        'acceptRate': 0,
        'img': dicd,
        'abstract': 'We proposes Differentiable Invariant Causal Discovery (DICD), utilizing the multi-environment information based on a differentiable framework to avoid learning spurious edges and wrong causal directions. Theoretical guarantees for the identifiability of proposed DICD are provided under mild conditions with enough environments. Extensive experiments on synthetic and real-world datasets verify that DICD outperforms state-of-the-art causal discovery methods up to 36% in SHD. '
    },
    {
        'name': 'AutoOD: Automatic Outlier Detection.',
        'url': '',
        'authors': ['Lei Cao', 'Yizhou Yan', 'Yu Wang', 'Samuel Madden', 'Elke A. Rundensteiner'],
        'status': "Submitted",
        'conference': 'SIGMOD',
        'year': 2023,
        'acceptRate': 0,
        'img': '',
        'abstract': ''
    },
    {
        'name': 'Interpretable Outlier Summarization.',
        'url': '',
        'authors': ['Yu Wang', 'Lei Cao', 'Samuel Madden'],
        'status': 'Submitted',
        'conference': 'SIGMOD',
        'year': 2023,
        'acceptRate': 0,
        'img': '',
        'abstract': ''
    },
    {
        'name': 'Probabilistic and Variational Label Denoising.',
        'url': '',
        'authors': ['Xin Xin*', 'Yu Wang*', 'Zaiqiao Meng', 'Xiangnan He', 'Joemon Jose', 'Fuli Feng'],
        'status': 'Submitted',
        'conference': 'TKDE',
        'year': 2022,
        'acceptRate': 0,
        'img': '',
        'abstract': ''
    }
]



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

    const [authorChecked, setAuthorChecked] = React.useState(['First', 'Co-First', 'Other']);
    const [statusChecked, setStatusChecked] = React.useState(['Accepted', 'Submitted']);
    const [citation, setCitation] = React.useState(0);
    const [publicationItemList, setPublicationItemList] = React.useState(publicationItemListAll.slice(0, 0));
    const [expanded, setExpanded] = React.useState<(string | boolean)[]>(Array.from({ length: publicationItemListAll.length }, () => false));
    // const [expanded, setExpanded] = React.useState<string | false>(false);


    // const handleAccordionChange =
    //     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    //         setExpanded(isExpanded ? panel : false);
    //     };

    const handleAccordionChange =
        (panel: string, idx: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            console.log(expanded)
            let newExpanded = expanded.slice();
            newExpanded[idx] = isExpanded ? panel : false;
            setExpanded(newExpanded);
        };

    function PublicationItem(props: pubProps) {
        return (<>
            <div className="display-12 mb-8">
                {/* {props.name} {props.url !== '' ? <a href={props.url}>PDF</a> : <></>} <br></br>
                {props.authors.map(
                    (item, index) => {
                        if (item === 'Yu Wang' || item === 'Yu Wang*') {
                            return <Typography display="inline" key={index} style={{ color: 'limegreen' }}><strong>{item + ', '}</strong></Typography>;
                        } else {
                            return <Typography display="inline" key={index}>{item + ', '}</Typography>
                        }
                    }
                )}
                <br></br>
                <strong>{props.status} to {props.conference} {props.year}. {
                    props.status === 'Accepted' ? '(Accept rate: ' + props.acceptRate + '%)' : ''
                }</strong> */}
                <Accordion expanded={expanded[props.idx] === props.name} onChange={handleAccordionChange(props.name, props.idx)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '80%', flexShrink: 0 }}>
                            {props.name} {props.url !== '' ? <a href={props.url}>PDF</a> : <></>} <br></br>
                            {props.authors.map(
                                (item, index) => {
                                    if (item === 'Yu Wang' || item === 'Yu Wang*') {
                                        return <Typography fontSize="10px" display="inline" key={index} style={{ color: 'limegreen' }}><strong>{item + ', '}</strong></Typography>;
                                    } else {
                                        return <Typography fontSize="10px" display="inline" key={index}>{item + ', '}</Typography>
                                    }
                                }
                            )}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{props.conference} {props.year}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.img && <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <img
                                    alt=""
                                    className="paperImage"
                                    src={props.img}
                                    width="250"
                                    height="200"
                                />
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Typography>
                                {props.abstract}
                            </Typography>
                        </div>}
                    </AccordionDetails>
                </Accordion>
            </div>
            <br></br>
        </>)
    }




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
                        {/* <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                    {publicationItemListAll[0].name} {publicationItemListAll[0].url !== '' ? <a href={publicationItemListAll[0].url}>PDF</a> : <></>} <br></br>
                                    {publicationItemListAll[0].authors.map(
                                        (item, index) => {
                                            if (item === 'Yu Wang' || item === 'Yu Wang*') {
                                                return <Typography fontSize="10px" display="inline" key={index} style={{ color: 'limegreen' }}><strong>{item + ', '}</strong></Typography>;
                                            } else {
                                                return <Typography fontSize="10px" display="inline" key={index}>{item + ', '}</Typography>
                                            }
                                        }
                                    )}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{publicationItemListAll[0].conference} {publicationItemListAll[0].year}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <img
                                            alt=""
                                            className="paperImage"
                                            src={publicationItemListAll[1].img}
                                            width="250"
                                            height="200"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Typography>
                                        {publicationItemListAll[1].abstract}
                                    </Typography>
                                </div>
                            </AccordionDetails>
                        </Accordion> */}
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
                                        <PublicationItem idx={idx} {...publicationItemList[idx]} />
                                    </div>))
                            }

                        </div>
                        <Box sx={{ width: "60%" }}>
                            <Skeleton width={'60%'} />
                            <Skeleton width={'100%'} />
                            <Skeleton width={'30%'} />
                        </Box>
                        <br />
                        <br />
                        <br />
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

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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


                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                        width: '70%'
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
                        width: '70%'
                    }}>
                        <Typography>Collecting...</Typography>
                    </div>

                </div>

            </StyledDiv >
        </div >
    )
}