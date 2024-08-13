import * as React from 'react';
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
import "./Publications.css"; 

// axios.get('https://www.google.com/').then(
//     resp => {console.log(resp.data)}
// )

// const citationAll = 197;
const citationAll = 332;
const NLP = 'Natural Language Processing';
const ML = 'Machine Learning';
const RS = 'Recommendation System';
const CV = 'Computer Vision';

interface PublicationItem {
    name: string;
    url: string;
    authors: string[];
    status: string;
    conference: string;
    year: number;
    abstract: string;
    field: string[];  // Assuming 'NLP' and other fields are strings
}

const selectedPublicationItemListAll = [
    {
        'name': "Large Scale Knowledge Washing",
        "url": "https://arxiv.org/abs/2405.16720",
        'authors': ["Yu Wang", "Ruihan Wu", "Zexue He", "Xiusi Chen", "Julian McAuley"],
        'status': "Submitted",
        'conference': "",
        'year': 2024,
        'abstract': "",
        'field': [NLP]
    },
    {
        'name': "LVChat: Facilitating Long Video Comprehension",
        'url': 'https://arxiv.org/abs/2402.12079',
        'authors': ["Yu Wang*", "Zeyuan Zhang*", "Julian McAuley", "Zexue He"],
        'status': "Submitted",
        'conference': '',
        'year': 2024,
        'abstract': '',
        'field': [CV, NLP]
    },
    {
        'name': "MemoryLLM: Towards Self-Updatable Large Language Models",
        'url': 'https://arxiv.org/abs/2402.04624',
        'authors': ["Yu Wang", "Yifan Gao", "Xiusi Chen", "Haoming Jiang", "Shiyang Li", "Jingfeng Yang", "Qingyu Yin", "Zheng Li", "Xian Li", "Bing Yin", "Jingbo Shang", "Julian McAuley"],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2024,
        'abstract': '',
        'field': [NLP]
    },
]

const trashPublicationItemListAll = [
    {
        'name': "Robust and Interpretable Medical Image Classifiers via Concept Bottleneck Models.",
        'url': 'https://arxiv.org/abs/2308.03685',
        'authors': ['An Yan', 'Yu Wang', 'Petros Karypis', 'Zexue He', 'Chengyu Dong', 'Zihan Wang', 'Yiwu Zhong', "Jingbo Shang", "Amilcare Gentili", "Chun-Nan Hsu", "Julian McAuley"],
        'status': "Accepted",
        'conference': '',
        'year': 2023,
        'abstract': '',
        'field': [CV]
    },
    {
        'name': "Differentiable Invariant Causal Discovery.",
        'url': 'https://arxiv.org/abs/2205.15638',
        'authors': ['Yu Wang', 'An Zhang', 'Xiang Wang', 'Yancheng Yuan', 'Xiangnan He', 'Tat-Seng Chua'],
        'status': "Accepted",
        'conference': '',
        'year': 2022,
        'abstract': 'We proposes Differentiable Invariant Causal Discovery (DICD), utilizing the multi-environment information based on a differentiable framework to avoid learning spurious edges and wrong causal directions. Theoretical guarantees for the identifiability of proposed DICD are provided under mild conditions with enough environments. Extensive experiments on synthetic and real-world datasets verify that DICD outperforms state-of-the-art causal discovery methods up to 36% in SHD. ',
        'field': [ML]
    },
    {
        'name': 'Label Denoising through Cross-Model Agreement',
        'url': 'https://arxiv.org/pdf/2308.13976.pdf',
        'authors': ['Yu Wang', 'Xin Xin', 'Zaiqiao Meng', 'Joemon Jose', 'Fuli Feng'],
        'status': 'Accepted',
        'conference': '',
        'year': 2023,
        'abstract': 'In this work, we propose a novel framework to learn robust machine learning models from noisy labels. Through an empirical study, we find that different models make relatively similar predictions on clean examples, while the predictions on noisy examples vary much more across different models. we further extend the proposed DeCA to the image classification task which corresponds to multi-class label scenarios. Experimental results demonstrate that the proposed methods significantly improve the model performance compared with normal training and other denoising methods on both the recommendation task and multi-class image classification task.',
        'field': [RS]
    },
    {
        'name': 'Interpretable Outlier Summarization.',
        'url': 'https://arxiv.org/pdf/2303.06261.pdf',
        'authors': ['Yu Wang', 'Lei Cao', 'Yizhou Yan', 'Samuel Madden'],
        'status': 'Accepted',
        'conference': '',
        'year': 2023,
        'abstract': '',
        'field': ['Others']
    },
]

const publicationItemListAll = [
    {
        'name': "CoMMIT: Coordinated Instruction Tuning for Multimodal Large Language Models",
        "url": "https://arxiv.org/abs/2407.20454",
        "authors": ["Junda Wu", "Xintong Li", "Tong Yu", "Yu Wang", "Xiang Chen", "Jiuxiang Gu", "Lina Yao", "Jingbo Shang", "Julian McAuley"],
        "status": "Submitted",
        "conference": "",
        "year": 2024,
        "abstract": "",
        'field': [NLP]
    },
    {
        'name': "Large Scale Knowledge Washing",
        "url": "https://arxiv.org/abs/2405.16720",
        'authors': ["Yu Wang", "Ruihan Wu", "Zexue He", "Xiusi Chen", "Julian McAuley"],
        'status': "Submitted",
        'conference': "",
        'year': 2024,
        'abstract': "",
        'field': [NLP]
    },
    {
        'name': "A Fashion Item Recommendation Model in Hyperbolic Space",
        'url': "",
        'authors': ["Ryotaro Shimizu", "Yu Wang", "Masanari Kimura", "Yuki Hirakawa", "Takashi Wada", "Yuki Saito", "Julian McAuley"],
        'status': "Accepted",
        'conference': 'CVPR WorkShop',
        'year': 2024,
        'abstract': "",
        'field': [CV, RS]
    },
    {
        'name': "Generating, Reconstructing, and Representing Discrete and Continuous Data: Generalized Diffusion with Learnable Encoding-Decoding",
        'url': "https://arxiv.org/abs/2402.19009",
        'authors': ['Guangyi Liu*', 'Yu Wang*', 'Zeyu Feng*', "Qiyu Wu", 'Liping Tang', 'Yuan Gao', 'Zhen Li', "Shuguang Cui", 
        'Julian McAuley', 'Eric P. Xing', "Zichao Yang", "Zhiting Hu"],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2024,
        'abstract': "",
        'field': [CV, NLP]
    },
    {
        'name': "Outlier Summarization via Human Interpretable Rules",
        'url': "",
        'authors': ['Yuhao Deng', "Yu Wang", "Lei Cao", "Lianpeng Qiao", "Yu-Ping Wang", "Yizhou Yan", "Sammual Maddden"],
        'status': "Accepted",
        "conference": "VLDB",
        'year': 2024,
        'abstract': '',
        'field': ['Others']
    },
    {
        'name': "LVChat: Facilitating Long Video Comprehension",
        'url': 'https://arxiv.org/abs/2402.12079',
        'authors': ["Yu Wang*", "Zeyuan Zhang*", "Julian McAuley", "Zexue He"],
        'status': "Submitted",
        'conference': '',
        'year': 2024,
        'abstract': '',
        'field': [CV, NLP]
    },
    {
        'name': "MemoryLLM: Towards Self-Updatable Large Language Models",
        'url': 'https://arxiv.org/abs/2402.04624',
        'authors': ["Yu Wang", "Yifan Gao", "Xiusi Chen", "Haoming Jiang", "Shiyang Li", "Jingfeng Yang", "Qingyu Yin", "Zheng Li", "Xian Li", "Bing Yin", "Jingbo Shang", "Julian McAuley"],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2024,
        'abstract': '',
        'field': [NLP]
    },
    {
        'name': "Deciphering Compatibility Relationships with Textual Descriptions via Extraction and Explanation",
        'url': 'https://arxiv.org/abs/2312.11554',
        'authors': ['Yu Wang', "Zexue He", "Zhankui He", "Hao Xu", "Julian McAuley"],
        'status': "Accepted",
        'conference': 'AAAI',
        'year': 2024,
        'abstract': '',
        'field': [RS]
    },
    {
        'name': "MedEval: A Multi-Level, Multi-Task, and Multi-Domain Medical Benchmark for Language Model Evaluation.",
        'url': 'https://arxiv.org/pdf/2310.14088.pdf',
        'authors': ['Zexue He', 'Yu Wang', 'An Yan', 'Yao Liu', 'Eric Y Chang', 'Amilcare Gentili', 'Julian McAuley', 'Chun-Nan Hsu'],
        'status': "Accepted",
        'conference': 'EMNLP',
        'year': 2023,
        'abstract': '',
        'field': [NLP]
    },
    {
        'name': "Learning Concise and Descriptive Attributes for Visual Recognition.",
        'url': 'https://arxiv.org/abs/2308.03685',
        'authors': ['An Yan*', 'Yu Wang*', 'Yiwu Zhong*', 'Chengyu Dong', 'Zexue He', 'Yujie Lu', 'William Yang Wang', "Jingbo Shang", "Julian McAuley"],
        'status': "Accepted",
        'conference': 'ICCV',
        'year': 2023,
        'abstract': '',
        'field': [CV]
    },
    {
        'name': 'Controlling Bias Exposure for Fair Interpretable Predictions',
        'url': 'https://arxiv.org/abs/2210.07455',
        'authors': ['Zexue He', 'Yu Wang', 'Julian McAuley', 'Bodhisattwa Prasad Majumder'],
        'status': 'Accepted',
        'conference': 'Findings of EMNLP',
        'year': 2022,
        'abstract': 'In this work, we provide a novel debiasing algorithm by adjusting the predictive model’s belief to (1) ignore the sensitive information if it is not useful for the task; (2) use sensitive informa- tion minimally as necessary for the prediction (while also incurring a penalty). Experimental results on two text classification tasks (influ- enced by gender) and an open-ended genera- tion task (influenced by race) indicate that our model achieves a desirable trade-off between debiasing and task performance along with pro- ducing debiased rationales as evidence.',
        'field': [NLP]
    },
    {
        'name': 'AutoOD: Automatic Outlier Detection.',
        'url': 'https://dl.acm.org/doi/10.1145/3588700',
        'authors': ['Lei Cao', 'Yizhou Yan', 'Yu Wang', 'Samuel Madden', 'Elke A. Rundensteiner'],
        'status': "Accepted",
        'conference': 'SIGMOD',
        'year': 2023,
        'abstract': 'We propose AutoOD which uses the existing unsuperviseddetection techniques to automatically produce high quality outliers without any human tuning. AutoOD’s fundamentally new strategy unifies the merits of unsupervised outlier detection and supervised classification within one integrated solution. On a diverse set of benchmarks, AutoOD consistently outperforms the best unsupervised outlier detector selected from hundreds of detectors. It also outperforms other tuning-free approaches from 12 to 97 points (out of 100) in the F-1 score.',
        'field': ['Others']
    },
    {
        'name': "Improving Out-of-Distribution Robustness via Selective Augmentation.",
        'url': "https://arxiv.org/abs/2201.00299",
        'authors': ['Huaxiu Yao*', 'Yu Wang*', 'Sai Li', 'Weixin Liang', 'Linjun Zhang', 'James Zou', 'Chelsea Finn'],
        'status': "Accepted",
        'conference': 'ICML',
        'year': 2022,
        'abstract': "We specifically consider the problems of subpopulation shifts (e.g., imbalanced data) and domain shifts. We propose LISA, which selectively interpolates samples either with the same labels but different domains or with the same domain but different labels. Empirically, we study the effectiveness of LISA on nine benchmarks ranging from subpopulation shifts to domain shifts. We further analyze a linear setting and theoretically show how LISA leads to a smaller worst-group error.",
        'field': [ML]
    },
    {
        'name': "Learning Robust Recommenders through Cross-Model Agreement.",
        'url': "https://arxiv.org/abs/2105.09605",
        'authors': ['Yu Wang', 'Xin Xin', 'Zaiqiao Meng', 'Xiangnan He', 'Joemon Jose', 'Fuli Feng'],
        'status': "Accepted",
        'conference': 'WWW',
        'year': 2022,
        'abstract': 'We propose a novel framework to learn robust recommenders from implicit feedback. Through an empirical study, we find that different models make more similar predictions on clean examples than noisy examples. Motivated by this observation, we propose DeCA which aims to minimize the KL-divergence between the real user preference distributions parameterized by two recommendation models while maximizing the likelihood of data observation. We employ the proposed DeCA on four state-of-the-art recommendation models and conduct experiments on four datasets.',
        'field': [RS]
    },
    {
        'name': "Meta-Learning with an Adaptive Scheduler.",
        'url': "https://arxiv.org/abs/2110.14057",
        'authors': ["Huaxiu Yao*", "Yu Wang*", "Peilin Zhao", "Mehrdad Mahdavi", "Defu Lian", "Ying Wei", "Chelsea Finn"],
        'status': "Accepted",
        'conference': "NeurIPS",
        'year': 2021,
        'abstract': 'We propose an adaptive task scheduler (ATS) for the meta-training process with a neural scheduler to decide which meta-training tasks to use next and train the scheduler to optimize the generalization capacity of the meta-model to unseen tasks. We identify two meta-model-related factors as the input of the neural scheduler, which characterize the difficulty of a candidate task to the meta-model. Theoretically, we show that a scheduler taking the two factors into account improves the meta-training loss and also the optimization landscape.',
        'field': [ML]
    },
]


export function authorship(value: string[]) {
    if ((value[0] === 'Yu Wang')  || (value[0] === 'Yu Wang*' || value[1] === 'Yu Wang*')){
        return '(Co-)First';
    }
    return 'Other';
}

export function Publications() {

    const [authorChecked, setAuthorChecked] = React.useState(['(Co-)First', 'Other']);
    const [fieldChecked, setFieldChecked] = React.useState([CV, NLP, ML, RS, 'Others'])
    // const [statusChecked, setStatusChecked] = React.useState(['Accepted', 'Submitted']);
    const [citation, setCitation] = React.useState(0);
    const [publicationItemList, setPublicationItemList] = React.useState(publicationItemListAll.slice(0, 0));
    const [selectedPublicationItemList, setSelectedPublicationItemList] = React.useState(selectedPublicationItemListAll);
    const [trashPublicationItemList, setTrashPublicationItemList] = React.useState(trashPublicationItemListAll);
    // const [expanded, setExpanded] = React.useState<(string | boolean)[]>(Array.from({ length: publicationItemListAll.length }, () => false));
    // const handleAccordionChange =
    //     (panel: string, idx: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    //         console.log(expanded)
    //         let newExpanded = expanded.slice();
    //         newExpanded[idx] = isExpanded ? panel : false;
    //         setExpanded(newExpanded);
    //     };

    React.useEffect(() => {
        // console.log('useEffect called')
        let pub = 0;
        const appendPublication = () => {
            if (pub > publicationItemListAll.length) return;
            setPublicationItemList((publicationItemList) => {
                return publicationItemListAll.slice(0, pub++);
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

    const handleFieldToggle = (value: string) => () => {
        const currentIndex = fieldChecked.indexOf(value);
        const newFieldChecked = [...fieldChecked];

        if (currentIndex === -1) {
            newFieldChecked.push(value);
        } else {
            newFieldChecked.splice(currentIndex, 1);
        }

        setFieldChecked(newFieldChecked);
    };


    function valuetext(value: number) {
        return `${value}°C`;
    }

    function staticPublicationList(publicationItemList: PublicationItem[], title: string) {
        return <div>
                            {
                                (() => {
                                    const tmpArray = Array.from({ length: publicationItemList.length }, (item, index) => index).filter(
                                        (idx) => {
                                            
                                            const endYearItem = marks.find((item) => (item.value === range[1]))
                                            const endYear = !endYearItem ? 3000 : endYearItem.year
    
                                            const beginYearItem = marks.find((item) => (item.value === range[0]))
                                            const beginYear = !beginYearItem ? 3000 : beginYearItem.year
    
                                            if (authorChecked.indexOf(authorship(publicationItemList[idx].authors)) === -1){
                                                return false
                                            }
    
                                            // if (fieldChecked.indexOf(publicationItemList[idx].field) === -1){
                                            //     return false
                                            // }
                                            if (!publicationItemList[idx].field.some(field => fieldChecked.includes(field))) {
                                                return false
                                            } 
    
                                            if (endYear === 3000) {
                                                if (publicationItemList[idx].status === 'Submitted'){
                                                    return true
                                                }
                                                if (beginYear < 3000){
                                                    return (publicationItemList[idx].year <= endYear && publicationItemList[idx].year >= beginYear)
                                                }
                                                
                                                // && (statusChecked.indexOf(publicationItemList[idx].status) !== -1)
                                            } else {
                                                return (publicationItemList[idx].year <= endYear && publicationItemList[idx].year >= beginYear)
                                                    && (publicationItemList[idx].status === 'Accepted')
                                            }
                                        }
                                    );
                                    if (!tmpArray.length) {
                                        return <></>;
                                    } else {
                                        return (
                                            <>
                                            <h1 style={{ fontSize: '24px' }}>{title}</h1>
                                            {
                                                tmpArray.map((idx, mapIndex) => (
                                                    <div key={idx}>
                                                        {/* <PublicationItem idx={idx} {...publicationItemList[idx]} /> */}
                                                        <div className="display-12">
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                                <Typography display='inline' sx={{ width: '100%', flexShrink: 0, color: 'black', fontSize: '18px'}}>
                                                                    {"[" + (mapIndex + 1) + "] " + publicationItemList[idx].name} {publicationItemList[idx].url !== '' ? <a href={publicationItemList[idx].url}>PDF</a> : <></>} <br></br>
                                                                    {publicationItemList[idx].authors.map(
                                                                        (item, index) => {
                                                                            // if (item === 'Yu Wang' || item === 'Yu Wang*') {
                                                                            //     return <Typography fontSize="15px" display="inline" key={index} style={{ color: '#1B3A9D' }}><strong>{item + ', '}</strong></Typography>;
                                                                            // } else {
                                                                            //     return <Typography fontSize="15px" display="inline" key={index}>{item + ', '}</Typography>
                                                                            // }
                                                                            if (item === 'Yu Wang' || item === 'Yu Wang*') {
                                                                                return (
                                                                                    <Typography fontSize="14px" display="inline" key={index} style={{ color: '#1B3A9D', fontFamily: 'Rockwell' }}>
                                                                                        <strong>{item + ', '}</strong>
                                                                                    </Typography>
                                                                                );
                                                                            } else {
                                                                                return (
                                                                                    <Typography fontSize="14px" display="inline" key={index} style={{color: "gray", fontFamily: 'Rockwell' }}>
                                                                                        {item + ', '}
                                                                                    </Typography>
                                                                                );
                                                                            }
                                                                        }
                                                                    )}
                                                                </Typography>
                                                                <div className='paperDiv'>
                                                                    <Typography style={{ textAlign: 'right', minWidth: '15ch', color: 'black'}} >
                                                                        {publicationItemList[idx].conference} {publicationItemList[idx].year}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        {/* <hr style={{border: "1px solid #000"}}></hr> */}
                                                    </div>))
                                            }</>
                                        )
                                    }
                                })()
                            }
                        </div>
    }

    const marks = [
        {
            value: 0,
            year: 2021,
            label: 'Year 2021',
        },
        {
            value: 25,
            year: 2022,
            label: 'Year 2022',
        },
        {
            value: 50,
            year: 2023,
            label: 'Year 2023',
        },
        {
            value: 75,
            year: 2024,
            label: 'Year 2024',
        },
        {
            value: 99,
            year: 3000,
            label: 'Preprint',
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
            <div className='styledDiv'>
                <div className='left' style={{
                    paddingBottom: '200px',
                    paddingTop: '40px',
                    background: 'url(./assets/background.png)',
                }}>
                    <div className='adjustToWidthStyle'>
                        {staticPublicationList(selectedPublicationItemList, "Selected Publications")}
                        <h1 style={{ fontSize: '24px' }}>All Publications</h1>
                        <div>
                            {
                                Array.from({ length: publicationItemList.length }, (item, index) => index).filter(
                                    (idx) => {
                                        
                                        const endYearItem = marks.find((item) => (item.value === range[1]))
                                        const endYear = !endYearItem ? 3000 : endYearItem.year

                                        const beginYearItem = marks.find((item) => (item.value === range[0]))
                                        const beginYear = !beginYearItem ? 3000 : beginYearItem.year

                                        if (authorChecked.indexOf(authorship(publicationItemList[idx].authors)) === -1){
                                            return false
                                        }

                                        // if (fieldChecked.indexOf(publicationItemList[idx].field) === -1){
                                        //     return false
                                        // }
                                        if (!publicationItemList[idx].field.some(field => fieldChecked.includes(field))) {
                                            return false
                                        } 

                                        if (endYear === 3000) {
                                            if (publicationItemList[idx].status === 'Submitted'){
                                                return true
                                            }
                                            if (beginYear < 3000){
                                                return (publicationItemList[idx].year <= endYear && publicationItemList[idx].year >= beginYear)
                                            }
                                            
                                            // && (statusChecked.indexOf(publicationItemList[idx].status) !== -1)
                                        } else {
                                            return (publicationItemList[idx].year <= endYear && publicationItemList[idx].year >= beginYear)
                                                && (publicationItemList[idx].status === 'Accepted')
                                        }
                                    }
                                ).map((idx, mapIndex) => (
                                    <div key={idx}>
                                        {/* <PublicationItem idx={idx} {...publicationItemList[idx]} /> */}
                                        <div className="display-12">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <Typography display='inline' sx={{ width: '100%', flexShrink: 0, color: 'black', fontSize: '18px'}}>
                                                    {"[" + (mapIndex + 1) + "] " + publicationItemList[idx].name} {publicationItemList[idx].url !== '' ? <a href={publicationItemList[idx].url}>PDF</a> : <></>} <br></br>
                                                    {publicationItemList[idx].authors.map(
                                                        (item, index) => {
                                                            if (item === 'Yu Wang' || item === 'Yu Wang*') {
                                                                return (
                                                                    <Typography fontSize="14px" display="inline" key={index} style={{ color: '#1B3A9D', fontFamily: 'Rockwell' }}>
                                                                        <strong>{item + ', '}</strong>
                                                                    </Typography>
                                                                );
                                                            } else {
                                                                return (
                                                                    <Typography fontSize="14px" display="inline" key={index} style={{color: "gray", fontFamily: 'Rockwell' }}>
                                                                        {item + ', '}
                                                                    </Typography>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </Typography>
                                                <div className='paperDiv'>
                                                    <Typography style={{ textAlign: 'right', minWidth: '15ch', color: 'black'}} >
                                                        {publicationItemList[idx].conference} {publicationItemList[idx].year}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        {/* <hr style={{border: "1px solid #000"}}></hr> */}
                                    </div>))
                            }
                        </div>
                        <Box sx={{ width: "60%" }}>
                            <Skeleton width={'80%'} />
                            <Skeleton width={'100%'} />
                        </Box>
                        <br/>
                        {staticPublicationList(trashPublicationItemList, "Publications Not Accepted (and Not Getting a Second Chance)")}
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
                                step={25}
                                marks={marks}
                                color="secondary"
                            // valueLabelDisplay="on"
                            />
                        </Box>
                    </div>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {['(Co-)First', 'Other'].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
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
                                        <ListItemText style={{color: 'black'}} id={labelId} primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {[CV, NLP, ML, RS, 'Others'].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleFieldToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={fieldChecked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText style={{color: 'black'}} id={labelId} primary={`${value}`} />
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
                        {/* F-Citation means "Fake Citation", this number is fake*/}
                        <Typography style={{color: 'black'}}>Citation {citation}</Typography>
                        &nbsp;&nbsp;
                        <CircularProgress size={20} />
                        &nbsp;&nbsp;
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '70%'
                    }}>
                        <Typography style={{color: 'black'}}>Collecting...</Typography>
                    </div>

                </div>

            </div>
        </div>
    )
}