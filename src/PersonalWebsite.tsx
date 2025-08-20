import React from 'react';
import './PersonalWebsite.css';

// Experience assets
import ustcBadge from './assets/ustc_badge.png';
import stanfordBadge from './assets/stanford_badge.png';
import nusBadge from './assets/nus_badge.png';
import mitBadge from './assets/MIT_badge.png';
import ucsdBadge from './assets/ucsd_badge.png';
import amazonLogo from './assets/Amazon-Logo.png';
import ibmLogo from './assets/ibm_logo.png';
import lettaLogo from './assets/letta_logo.png';

// Personal assets
import myPicture from './assets/about5.jpg';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  abstract?: string;
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  mentor?: string;
  mentorUrl?: string;
  topic: string;
  logo: string;
}

interface ResearchExperience {
  lab: string;
  university: string;
  duration: string;
  advisor: string;
  advisorUrl: string;
  topic: string;
  badge: string;
}

interface Education {
  university: string;
  duration: string;
  degree: string;
  badge: string;
}

const PersonalWebsite: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workExperiences: WorkExperience[] = [
    {
      company: 'Letta',
      role: 'Research Scientist Intern',
      duration: '2025.1 - 2025.6',
      topic: 'Memory Agents',
      logo: lettaLogo
    },
    {
      company: 'MIT-IBM Watson AI Lab',
      role: 'Research Scientist Intern',
      duration: '2024.6 - 2024.9',
      mentor: 'Zexue He',
      mentorUrl: 'https://zexuehe.github.io/',
      topic: 'Memory Large Language Model',
      logo: ibmLogo
    },
    {
      company: 'Amazon',
      role: 'Applied Scientist Intern',
      duration: '2023.6 - 2023.12',
      mentor: 'Yifan Gao',
      mentorUrl: 'https://yifan-gao.github.io/',
      topic: 'Memory Large Language Model',
      logo: amazonLogo
    }
  ];

  const researchExperiences: ResearchExperience[] = [
    {
      lab: 'McAuley Lab',
      university: 'University of California, San Diego',
      duration: '2022.4 - 2022.9',
      advisor: 'Prof. Julian McAuley',
      advisorUrl: 'https://cseweb.ucsd.edu/~jmcauley/',
      topic: 'Fashion Explanation',
      badge: ucsdBadge
    },
    {
      lab: 'CSAIL',
      university: 'Massachusetts Institute of Technology',
      duration: '2021.4 - 2022.1',
      advisor: 'Prof. Samuel Madden',
      advisorUrl: 'http://db.csail.mit.edu/madden/',
      topic: 'Outlier Detection',
      badge: mitBadge
    },
    {
      lab: 'NExT++',
      university: 'National University of Singapore',
      duration: '2021.8 - 2021.11',
      advisor: 'Prof. Tat-Seng Chua',
      advisorUrl: 'https://www.chuatatseng.com/',
      topic: 'Causal Discovery',
      badge: nusBadge
    },
    {
      lab: 'SAIL',
      university: 'Stanford University',
      duration: '2021.3 - 2021.10',
      advisor: 'Dr. Huaxiu Yao',
      advisorUrl: 'https://huaxiuyao.mystrikingly.com/',
      topic: 'Meta-Learning, Domain Shifts',
      badge: stanfordBadge
    },
    {
      lab: 'LDS',
      university: 'University of Science and Technology of China',
      duration: '2020.8 - 2021.4',
      advisor: 'Prof. Xiangnan He',
      advisorUrl: 'http://staff.ustc.edu.cn/~hexn/',
      topic: 'Denoising Recommendation Systems',
      badge: ustcBadge
    }
  ];

  const educationExperiences: Education[] = [
    {
      university: 'University of California, San Diego',
      duration: '2022.9 - 2025.12',
      degree: 'Ph.D in Computer Science Engineering',
      badge: ucsdBadge
    },
    {
      university: 'University of Science and Technology of China',
      duration: '2018.9 - 2022.7',
      degree: 'B.S. in Data Science and Big Data Technology',
      badge: ustcBadge
    }
  ];

  const publications: Publication[] = [
    {
      title: "Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions",
      authors: "Yuanzhe Hu*, Yu Wang*, Julian McAuley",
      venue: "Submitted",
      year: 2025,
      link: "https://arxiv.org/abs/2507.05257"
    },
    {
      title: "M+: Extending MemoryLLM with Scalable Long-Term Memory",
      authors: "Yu Wang, Dmitry Krotov, Yuanzhe Hu, Yifan Gao, Wangchunshu Zhou, Julian McAuley, Dan Gutfreund, Rogerio Feris, Zexue He",
      venue: "ICML",
      year: 2025,
      link: "https://arxiv.org/abs/2502.00592"
    },
    {
      title: "Self-Updatable Large Language Models by Integrating Context into Model Parameters",
      authors: "Yu Wang*, Xinshuang Liu*, Xiusi Chen, Sean O'Brien, Junda Wu, Julian McAuley",
      venue: "ICLR",
      year: 2025,
      link: "https://arxiv.org/abs/2410.00487"
    },
    {
      title: "Large Scale Knowledge Washing",
      authors: "Yu Wang, Ruihan Wu, Zexue He, Xiusi Chen, Julian McAuley",
      venue: "ICLR",
      year: 2025,
      link: "https://arxiv.org/abs/2405.16720"
    },
    {
      title: "Towards LifeSpan Cognitive Systems",
      authors: "Yu Wang*, Chi Han*, Tongtong Wu*, Xiaoxin He*, Wangchunshu Zhou, Nafis Sadeq, Xiusi Chen, Zexue He, Wei Wang, Gholamreza Haffari, Heng Ji, Julian McAuley",
      venue: "TMLR",
      year: 2025,
      link: "https://arxiv.org/abs/2409.13265"
    },
    {
      title: "MemoryLLM: Towards Self-Updatable Large Language Models",
      authors: "Yu Wang, Yifan Gao, Xiusi Chen, Haoming Jiang, Shiyang Li, Jingfeng Yang, Qingyu Yin, Zheng Li, Xian Li, Bing Yin, Jingbo Shang, Julian McAuley",
      venue: "ICML",
      year: 2024,
      link: "https://arxiv.org/abs/2402.04624"
    }
  ];

  const allPublications: Publication[] = [
    {
      title: "Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions",
      authors: "Yuanzhe Hu*, Yu Wang*, Julian McAuley",
      venue: "Submitted",
      year: 2025,
      link: "https://arxiv.org/abs/2507.05257"
    },
    {
      title: "A comprehensive survey in llm (-agent) full stack safety: Data, training and deployment",
      authors: "Kun Wang, Guibin Zhang, Zhenhong Zhou, Jiahao Wu, Miao Yu, Shiqian Zhao, Chenlong Yin, Jinhu Fu, Yibo Yan, Hanjun Luo, Liang Lin, Zhihao Xu, Haolang Lu, Xinye Cao, Xinyun Zhou, Weifei Jin, Fanci Meng, Junyuan Mao, Yu Wang, Hao Wu, Minghe Wang, Fan Zhang, Junfeng Fang, Wenjie Qu, Yue Liu, Chengwei Liu, Yifan Zhang, Qiankun Li, Chongye Guo, Yalan Qin, Zhaoxin Fan, Yi Ding, Donghai Hong, Jiaming Ji, Yingxin Lai, Zitong Yu, Xinfeng Li, Yifan Jiang, Yanhui Li, Xinyu Deng, Junlin Wu, Dongxia Wang, Yihao Huang, Yufei Guo, Jen-tse Huang, Qiufeng Wang, Wenxuan Wang, Dongrui Liu, Yanwei Yue, Wenke Huang, Guancheng Wan, Heng Chang, Tianlin Li, Yi Yu, Chenghao Li, Jiawei Li, Lei Bai, Jie Zhang, Qing Guo, Jingyi Wang, Tianlong Chen, Joey Tianyi Zhou, Xiaojun Jia, Weisong Sun, Cong Wu, Jing Chen, Xuming Hu, Yiming Li, Xiao Wang, Ningyu Zhang, Luu Anh Tuan, Guowen Xu, Jiaheng Zhang, Tianwei Zhang, Xingjun Ma, Jindong Gu, Xiang Wang, Bo An, Jun Sun, Mohit Bansal, Shirui Pan, Lingjuan Lyu, Yuval Elovici, Bhavya Kailkhura, Yaodong Yang, Hongwei Li, Wenyuan Xu, Yizhou Sun, Wei Wang, Qing Li, Ke Tang, Yu-Gang Jiang, Felix Juefei-Xu, Hui Xiong, Xiaofeng Wang, Dacheng Tao, Philip S Yu, Qingsong Wen, Yang Liu",
      venue: "Submitted",
      year: 2025,
      link: "https://arxiv.org/abs/2504.15585"
    },
    {
      title: "The recency and geographical origins of the bat viruses ancestral to SARS-CoV and SARS-CoV-2",
      authors: "Jonathan E. Pekar, Spyros Lytras, Mahan Ghafari, Andrew F. Magee, Edyth Parker, Yu Wang, Xiang Ji, Jennifer L. Havens, Aris Katzourakis, Tetyana I. Vasylyeva, Marc A. Suchard, Alice C. Hughes, Joseph Hughes, Andrew Rambaut, David L. Robertson, Simon Dellicour, Michael Worobey, Joel O. Wertheim, Philippe Lemey",
      venue: "Cell",
      year: 2025,
      link: "https://www.sciencedirect.com/science/article/pii/S0092867425003538"
    },
    {
      title: "RM-R1: Reward Modeling as Reasoning",
      authors: "Xiusi Chen, Gaotang Li, Ziqi Wang, Bowen Jin, Cheng Qian, Yu Wang, Hongru Wang, Yu Zhang, Denghui Zhang, Tong Zhang, Hanghang Tong, Heng Ji",
      venue: "Submitted",
      year: 2025,
      link: "https://arxiv.org/abs/2505.02387"
    },
    {
      title: "Sleep-time Compute: Beyond Inference Scaling at Test-time",
      authors: "Kevin Lin, Charlie Snell, Yu Wang, Charles Packer, Sarah Wooders, Ion Stoica, Joseph E. Gonzalez",
      venue: "Submitted",
      year: 2025,
      link: "https://arxiv.org/abs/2504.13171"
    },
    {
      title: "LaViC: Adapting Large Vision-Language Models to Visually-Aware Conversational Recommendation",
      authors: "Hyunsik Jeon, Satoshi Koide, Yu Wang, Zhankui He, Julian McAuley",
      venue: "KDD",
      year: 2025,
      link: "https://arxiv.org/abs/2503.23312"
    },
    {
      title: "Mitigating Visual Knowledge Forgetting in MLLM Instruction-tuning via Modality-decoupled Gradient Descent",
      authors: "Junda Wu, Yuxin Xiong, Xintong Li, Yu Xia, Ruoyu Wang, Yu Wang, Tong Yu, Sungchul Kim, Ryan A. Rossi, Lina Yao, Jingbo Shang, Julian McAuley",
      venue: "EMNLP Findings",
      year: 2025,
      link: "https://arxiv.org/abs/2502.11740"
    },
    {
      title: "M+: Extending MemoryLLM with Scalable Long-Term Memory",
      authors: "Yu Wang, Dmitry Krot, Yuanzhe Hu, Yifan Gao, Wangchunshu Zhou, Julian McAuley, Dan Gutfreund, Rogerio Feris, Zexue He",
      venue: "ICML",
      year: 2025,
      link: "https://arxiv.org/abs/2502.00592"
    },
    {
      title: "Self-Updatable Large Language Models by Integrating Context into Model Parameters",
      authors: "Yu Wang*, Xinshuang Liu*, Xiusi Chen, Sean O'Brien, Junda Wu, Julian McAuley",
      venue: "ICLR",
      year: 2025,
      link: "https://arxiv.org/abs/2410.00487"
    },
    {
      title: "Large Scale Knowledge Washing",
      authors: "Yu Wang, Ruihan Wu, Zexue He, Xiusi Chen, Julian McAuley",
      venue: "ICLR",
      year: 2025,
      link: "https://arxiv.org/abs/2405.16720"
    },
    {
      title: "Transmission dynamics of the 2022 mpox epidemic in New York City",
      authors: "Jonathan E. Pekar, Yu Wang, Jade C. Wang, Yucai Shao, Faten Taki, Lisa A. Forgione, Helly Amin, Tyler Clabby, Kimberly Johnson, Lucia V. Torian, Sarah L. Braunstein, Preeti Pathela, Enoma Omoregie, Scott Hughes, Marc A. Suchard, Tetyana I. Vasylyeva, Philippe Lemey, Joel O. Wertheim",
      venue: "Nature Medicine",
      year: 2025,
      link: "https://www.nature.com/articles/s41591-025-03526-9"
    },
    {
      title: "Disentangling Likes and Dislikes in Personalized Generative Explainable Recommendation",
      authors: "Ryotaro Shimizu, Takashi Wada, Yu Wang, Johannes Kruse, Sean O'Brien, Sai HtaungKham, Linxin Song, Yuya Yoshikawa, Yuki Saito, Fugee Tsung, Masayuki Goto, Julian McAuley",
      venue: "WWW",
      year: 2025,
      link: "https://arxiv.org/abs/2410.13248"
    },
    {
      title: "Towards LifeSpan Cognitive Systems",
      authors: "Yu Wang*, Chi Han*, Tongtong Wu*, Xiaoxin He*, Wangchunshu Zhou, Nafis Sadeq, Xiusi Chen, Zexue He, Wei Wang, Gholamreza Haffari, Heng Ji, Julian McAuley",
      venue: "TMLR",
      year: 2025,
      link: "https://arxiv.org/abs/2409.13265"
    },
    {
      title: "CoMMIT: Coordinated Instruction Tuning for Multimodal Large Language Models",
      authors: "Junda Wu, Xintong Li, Tong Yu, Yu Wang, Xiang Chen, Jiuxiang Gu, Lina Yao, Jingbo Shang, Julian McAuley",
      venue: "EMNLP",
      year: 2025,
      link: "https://arxiv.org/abs/2407.20454"
    },
    {
      title: "A Fashion Item Recommendation Model in Hyperbolic Space",
      authors: "Ryotaro Shimizu, Yu Wang, Masanari Kimura, Yuki Hirakawa, Takashi Wada, Yuki Saito, Julian McAuley",
      venue: "CVPR WorkShop",
      year: 2024,
      link: "https://www.arxiv.org/abs/2409.02599"
    },
    {
      title: "Generating, Reconstructing, and Representing Discrete and Continuous Data: Generalized Diffusion with Learnable Encoding-Decoding",
      authors: "Guangyi Liu*, Yu Wang*, Zeyu Feng*, Qiyu Wu, Liping Tang, Yuan Gao, Zhen Li, Shuguang Cui, Julian McAuley, Eric P. Xing, Zichao Yang, Zhiting Hu",
      venue: "ICML",
      year: 2024,
      link: "https://arxiv.org/abs/2402.19009"
    },
    {
      title: "Outlier Summarization via Human Interpretable Rules",
      authors: "Yuhao Deng, Yu Wang, Lei Cao, Lianpeng Qiao, Yu-Ping Wang, Yizhou Yan, Samuel Madden",
      venue: "VLDB",
      year: 2024,
      link: "https://www.vldb.org/pvldb/vol17/p1591-deng.pdf"
    },
    {
      title: "MemoryLLM: Towards Self-Updatable Large Language Models",
      authors: "Yu Wang, Yifan Gao, Xiusi Chen, Haoming Jiang, Shiyang Li, Jingfeng Yang, Qingyu Yin, Zheng Li, Xian Li, Bing Yin, Jingbo Shang, Julian McAuley",
      venue: "ICML",
      year: 2024,
      link: "https://arxiv.org/abs/2402.04624"
    },
    {
      title: "Deciphering Compatibility Relationships with Textual Descriptions via Extraction and Explanation",
      authors: "Yu Wang, Zexue He, Zhankui He, Hao Xu, Julian McAuley",
      venue: "AAAI",
      year: 2024,
      link: "https://arxiv.org/abs/2312.11554"
    },
    {
      title: "MedEval: A Multi-Level, Multi-Task, and Multi-Domain Medical Benchmark for Language Model Evaluation",
      authors: "Zexue He, Yu Wang, An Yan, Yao Liu, Eric Y Chang, Amilcare Gentili, Julian McAuley, Chun-Nan Hsu",
      venue: "EMNLP",
      year: 2023,
      link: "https://arxiv.org/pdf/2310.14088.pdf"
    },
    {
      title: "Learning Concise and Descriptive Attributes for Visual Recognition",
      authors: "An Yan*, Yu Wang*, Yiwu Zhong*, Chengyu Dong, Zexue He, Yujie Lu, William Yang Wang, Jingbo Shang, Julian McAuley",
      venue: "ICCV",
      year: 2023,
      link: "https://arxiv.org/abs/2308.03685"
    },
    {
      title: "AutoOD: Automatic Outlier Detection",
      authors: "Lei Cao, Yizhou Yan, Yu Wang, Samuel Madden, Elke A. Rundensteiner",
      venue: "SIGMOD",
      year: 2023,
      link: "https://dl.acm.org/doi/10.1145/3588700"
    },
    {
      title: "Controlling Bias Exposure for Fair Interpretable Predictions",
      authors: "Zexue He, Yu Wang, Julian McAuley, Bodhisattwa Prasad Majumder",
      venue: "Findings of EMNLP",
      year: 2022,
      link: "https://arxiv.org/abs/2210.07455"
    },
    {
      title: "Improving Out-of-Distribution Robustness via Selective Augmentation",
      authors: "Huaxiu Yao*, Yu Wang*, Sai Li, Weixin Liang, Linjun Zhang, James Zou, Chelsea Finn",
      venue: "ICML",
      year: 2022,
      link: "https://arxiv.org/abs/2201.00299"
    },
    {
      title: "Learning Robust Recommenders through Cross-Model Agreement",
      authors: "Yu Wang, Xin Xin, Zaiqiao Meng, Xiangnan He, Joemon Jose, Fuli Feng",
      venue: "WWW",
      year: 2022,
      link: "https://arxiv.org/abs/2105.09605"
    },
    {
      title: "Meta-Learning with an Adaptive Scheduler",
      authors: "Huaxiu Yao*, Yu Wang*, Peilin Zhao, Mehrdad Mahdavi, Defu Lian, Ying Wei, Chelsea Finn",
      venue: "NeurIPS",
      year: 2021,
      link: "https://arxiv.org/abs/2110.14057"
    }
  ];

  return (
    <div className="personal-website">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-info">
              <h1 className="name">Yu Wang</h1>
              <p className="title">PhD Student</p>
              <p className="affiliation">University of California, San Diego</p>
            </div>
            <nav className="navigation">
              <button 
                className="nav-button" 
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                className="nav-button" 
                onClick={() => scrollToSection('publications')}
              >
                Publications
              </button>
              <button 
                className="nav-button" 
                onClick={() => scrollToSection('experiences')}
              >
                Experiences
              </button>
              <button 
                className="nav-button" 
                onClick={() => scrollToSection('all-publications')}
              >
                All Publications
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Basic Information */}
      <section id="about" className="basic-info">
        <div className="container">
          <div className="profile-container">
            <div className="profile-left">
              <img
                src={myPicture}
                alt="Yu Wang"
                className="profile-photo"
              />
              <div className="profile-links">
                <a href="https://yuwang.us/home/CV.pdf" target="_blank" rel="noopener noreferrer" className="profile-link">CV</a>
                <span className="link-separator">|</span>
                <a href="https://scholar.google.com/citations?hl=en&user=n1pDIggAAAAJ" target="_blank" rel="noopener noreferrer" className="profile-link">Google Scholar</a>
              </div>
              <div className="contact-info-left">
                <div className="contact-item-left">
                  <strong>Email:</strong> yuw164@ucsd.edu
                </div>
              </div>
            </div>
            <div className="profile-right">
              <div className="info-card">
                  <p>
                    I am a third-year PhD student in Computer Science at UC San Diego (UCSD), fortunate to be advised by Prof. <a href="https://cseweb.ucsd.edu/~jmcauley/" target="_blank" rel="noopener noreferrer">Julian McAuley</a>. 
                    I obtained my B.S. from School of Gifted Young in University of Science and Technology of China (USTC), fortunately advised by Prof. <a href="https://hexiangnan.github.io/" target="_blank" rel="noopener noreferrer">Xiangnan He</a>.
                    My research focuses on building memory for LLMs (<a href="https://arxiv.org/abs/2402.04624" target="_blank" rel="noopener noreferrer">MemoryLLM</a>, <a href="https://arxiv.org/abs/2410.00487" target="_blank" rel="noopener noreferrer">SELF-PARAM</a>, <a href="https://arxiv.org/abs/2405.16720" target="_blank" rel="noopener noreferrer">LaW</a>, <a href="https://arxiv.org/abs/2502.00592" target="_blank" rel="noopener noreferrer">M+</a>) and LLM-based Agents (<a href="https://arxiv.org/abs/2409.13265" target="_blank" rel="noopener noreferrer">LSCS</a>, <a href="https://arxiv.org/abs/2504.13171" target="_blank" rel="noopener noreferrer">Sleep-Time Compute</a>, <a href="https://arxiv.org/abs/2507.05257" target="_blank" rel="noopener noreferrer">MemoryAgentBench</a>). I have interned at Amazon, MIT-IBM Watson AI Lab, Letta and Anuttacon. 
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="publications">
        <div className="container">
          <h2 className="section-title">Selected Publications</h2>
          <div className="publications-list-compact">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item-compact">
                <div className="publication-header">
                  <span className="publication-number">[{index + 1}]</span>
                  <span className="publication-title-compact">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </span>
                  {/* {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pdf-link">PDF</a>} */}
                  <span className="publication-venue-year">{pub.venue} {pub.year}</span>
                </div>
                <div className="publication-authors-compact">
                  {pub.authors.split(', ').map((author, authorIndex) => (
                    <span key={authorIndex}>
                      {author.includes('Yu Wang') ? (
                        <span className="primary-author">{author}</span>
                      ) : (
                        <span className="co-author">{author}</span>
                      )}
                      {authorIndex < pub.authors.split(', ').length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="experiences">
        <div className="container">
          <h2 className="section-title">Experiences</h2>
          
          {/* Work Experiences */}
          <div className="experience-category-compact">
            <h3 className="category-title-compact">Work Experiences</h3>
            <div className="experience-list-compact">
              {workExperiences.map((exp, index) => (
                <div key={index} className="experience-item-compact">
                  <div className="experience-header-compact">
                    <img src={exp.logo} alt={exp.company} className="logo-img-compact" />
                    <div className="experience-main-info">
                      <div className="experience-title-line">
                        <span className="experience-role-compact">{exp.role} @ {exp.company}</span>
                        <span className="experience-duration-compact">{exp.duration}</span>
                      </div>
                      <div className="experience-details">
                        {exp.mentor && (
                          <span className="experience-mentor-compact">
                            Mentor: {exp.mentorUrl ? (
                              <a href={exp.mentorUrl} target="_blank" rel="noopener noreferrer" className="mentor-link">
                                {exp.mentor}
                              </a>
                            ) : exp.mentor}
                          </span>
                        )}
                        <span className="experience-topic-compact">Topic: {exp.topic}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experiences */}
          <div className="experience-category-compact">
            <h3 className="category-title-compact">Undergraduate Research Experiences</h3>
            <div className="experience-list-compact">
              {researchExperiences.map((exp, index) => (
                <div key={index} className="experience-item-compact">
                  <div className="experience-header-compact">
                    <img src={exp.badge} alt={exp.university} className="logo-img-compact" />
                    <div className="experience-main-info">
                      <div className="experience-title-line">
                        <span className="experience-role-compact">{exp.lab} @ {exp.university}</span>
                        <span className="experience-duration-compact">{exp.duration}</span>
                      </div>
                      <div className="experience-details">
                        <span className="experience-mentor-compact">
                          Advisor: <a href={exp.advisorUrl} target="_blank" rel="noopener noreferrer" className="mentor-link">
                            {exp.advisor}
                          </a>
                        </span>
                        <span className="experience-topic-compact">Topic: {exp.topic}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Experiences */}
          <div className="experience-category-compact">
            <h3 className="category-title-compact">Education</h3>
            <div className="experience-list-compact">
              {educationExperiences.map((exp, index) => (
                <div key={index} className="experience-item-compact">
                  <div className="experience-header-compact">
                    <img src={exp.badge} alt={exp.university} className="logo-img-compact" />
                    <div className="experience-main-info">
                      <div className="experience-title-line">
                        <span className="experience-role-compact">{exp.university}</span>
                        <span className="experience-duration-compact">{exp.duration}</span>
                      </div>
                      <div className="experience-details">
                        <span className="experience-topic-compact">{exp.degree}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section id="all-publications" className="publications">
        <div className="container">
          <h2 className="section-title">All Publications</h2>
          <div className="publications-list-compact">
            {allPublications.map((pub, index) => (
              <div key={index} className="publication-item-compact">
                <div className="publication-header">
                  <span className="publication-number">[{index + 1}]</span>
                  <span className="publication-title-compact">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </span>
                  {/* {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pdf-link">PDF</a>} */}
                  <span className="publication-venue-year">{pub.venue} {pub.year}</span>
                </div>
                <div className="publication-authors-compact">
                  {pub.authors.split(', ').map((author, authorIndex) => (
                    <span key={authorIndex}>
                      {author.includes('Yu Wang') ? (
                        <span className="primary-author">{author}</span>
                      ) : (
                        <span className="co-author">{author}</span>
                      )}
                      {authorIndex < pub.authors.split(', ').length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Yu Wang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite; 