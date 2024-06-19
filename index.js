import {
  mobile,                        //ICON FOR SERCIVE CARD 2 IN ABOUT TAG
  backend,                       //ICON FOR SERCIVE CARD 3 IN ABOUT TAG
  creator,                       //ICON FOR SERCIVE CARD 4 IN ABOUT TAG
  web,                           //ICON FOR SERCIVE CARD 1 IN ABOUT TAG
  javascript,                           //TECHNOLOGIES THAT WE KNOW 3
  typescript,                           //TECHNOLOGIES THAT WE KNOW 4
  html,                                 //TECHNOLOGIES THAT WE KNOW 1
  css,                                  //TECHNOLOGIES THAT WE KNOW 2
  reactjs,                              //TECHNOLOGIES THAT WE KNOW 5         
  redux,                                //TECHNOLOGIES THAT WE KNOW 6        
  tailwind,                             //TECHNOLOGIES THAT WE KNOW 7         
  nodejs,                               //TECHNOLOGIES THAT WE KNOW 8      
  mongodb,                              //TECHNOLOGIES THAT WE KNOW 9      
  git,                                  //TECHNOLOGIES THAT WE KNOW 11      
  figma,                                //TECHNOLOGIES THAT WE KNOW 12     
  docker,                               //TECHNOLOGIES THAT WE KNOW 13
  meta,                 //ICON FOR EXPERIENCE CARD 4 IN WORK TAG
  starbucks,            //ICON FOR EXPERIENCE CARD 1 IN WORK TAG
  tesla,                //ICON FOR EXPERIENCE CARD 2 IN WORK TAG
  shopify,              //ICON FOR EXPERIENCE CARD 3 IN WORK TAG
  threejs,                              //TECHNOLOGIES THAT WE KNOW 10
  projectimg1,                                                                     //image for project card 1
  projectimg2,                                                                     //image for project card 2
  projectimg3,                                                                     //image for project card 3
  projectimg4,                                                                     //image for project card 4
  projectimg5,                                                                     //image for project card 5
  projectimg6,                                                                     //image for project card 6
  projectimg7,                                                                     //image for project card 7 
  projectimg8,                                                                     //image for project card 8
  projectimg9,                                                                     //image for project card 9                             
} from "../src/assets";


// ======================================================================1.Navbar has tabs  =====================================================================//
// ================================================= tabs connect all portions introduction work experienxe etc... or the whole website ===========================//
//exported here only 
export const callingeveryeachTab = [
  
  {
    id: "con8introdef",
    title: "Introduction",
  },
  {
    id: "con8workexpdef",
    title: "Work Experience",
  },
  {
    id: "con8techlangdef",
    title: "Tech languages I know",
  },
  {
    id: "con8projdef",
    title: "Projects",
  },
  {
    id: "con8testfeeddef",
    title: "Testmonials Feedback",
  },
  {
    id: "con8contdef",
    title: "Contact Us",
  },



];







// ===========================================================================2.Hero: no tags or cards =========================================================================//



// ==========================================================================3.Introduction:SERVICE CARD CONTENTS =====================================================================//
const callingeveryeachintrocard = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];



// ======================================================4.WorkEXPERIENCES: VERICAL TIMELINE IN EXPERIENCES cards ======================================================================//

const callingeveryeachworkexpcard = [
  {
    title: "OneFormer: One Transformer to Rule Universal Image Segmentation",
    company_name: "Jitesh Jain, ✱Jiachen Li, ✱MangTik Chiu, Ali Hassani, Nikita Orlov, Humphrey Shi",
    icon: starbucks,
    iconBg: "#383E56",
    date : "June 2023 CVPR 23",
    points: [
      "OneFormer combines multiple segmentation tasks into a single, efficient framework::Unified Framework",
      "Train OneFormer once on diverse tasks, eliminating the need for multiple models::Multi-Task Training ",
      "OneFormer optimizes efficiency and accuracy by leveraging shared features::Enhanced Performance",
      "Built on insights from previous methods, OneFormer offers an advanced segmentation solution::Proven Foundations",

    ],
  },
  {
    title: "Keys to Better Image Inpainting: Structure and Texture Go Hand in Hand",
    company_name: "✱Jitesh Jain, ✱Yuqian Zhou, Ning Yu, Humphrey ShiAugust ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2022  WACV'23",
    points: [
      "We introduce a novel inpainting architecture that combines powerful elements for improved results::Enhanced Inpainting Architecture",
      "Our model augments the potent comodulated StyleGAN2 generator for superior performance::StyleGAN2 Integration",
      "We leverage the high receptiveness ability of FFC to handle both textures and structures effectively::FFC Receptiveness:",
      " The proposed architecture achieves equally good performance on both textures and structural elements::Balanced Performance",
    ],
  },
  {
    title: "Language Guided Meta-Control for Embodied Instruction Following",
    company_name: "Divyam Goel, Kunal Pratap Singh, Jonghyun Choi",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022  Workshop CVPR'22",
    points: [
      "We propose an LMC for improved language grounding in the agent's large action space::Language Guided Meta-Controller (LMC)",
      "An auxiliary reasoning loss enhances the agent's conceptual grounding capabilities::Auxiliary Reasoning Loss",
      " Our approach outperforms strong baselines on the Execution from Dialogue History (EDH) benchmark::Empirical Validation",
      "We demonstrate superior performance on the TEACh benchmark with our proposed methods::TEACh Benchmark Success",
    ],
  },
  {
    title: "Leveraging Dependency Grammar for Fine-Grained Offensive Language Detection using Graph Convolutional Networks",
    company_name: "Divyam Goel, Raksha Sharma",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022  SocialNLP @ NAACL 2022",
    points: [
      "Our novel approach, SyLSTM, combines syntactic and semantic features for enhanced detection::Introducing SyLSTM",
      "SyLSTM integrates dependency parse trees and word embeddings into a deep learning framework using a Graph Convolutional Network",
      " SyLSTM significantly outperforms the state-of-the-art BERT model::Superior Performance",
      "Our approach achieves better results with far fewer parameters than BERT::Efficiency",
    ],
  },

  {
    title: "On The Cross-Modal Transfer from Natural Language to Code through Adapter Modules",
    company_name: "Divyam Goel, Ramansh Grover, Fatemeh H Fard",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022  ICPC'22",
    points: [
      "Pre-trained neural Language Models (PTLMs) like CodeBERT are revolutionizing software engineering by leveraging large source code corpora.",
      "Adapters simplify adaptation to various downstream tasks, outperforming traditional fine-tuning which demands retraining the entire model.",
      "Their plug-and-play nature and parameter efficiency make adapters a versatile tool in diverse applications.",
      "Despite their potential, the use of adapters in software engineering remains largely unexplored, presenting exciting new research opportunities.",
    ],
  },
];




// =========================================================================5.TECH BALLS :THAT WE LEARNED =====================================================================//

const callingeveryeachtechball = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];









// =========================================================================6.Projects: COMPONENTS=====================================================================//

const callingeveryeachprojectcard = [


 

  {
    name: "GROUP-LEVEL-EMOTION-RECOGNITION - 2018",
    description:
    "Paper Implementation of a end-to-end model for jointly learning the scene and facial features of an image for group-level emotion recognition.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg5,
    source_code_link: "https://github.com/vlgiitr/Group-Level-Emotion-Recognition",
    source_code_link_project:"https://vlgiitr.github.io/project/emoticon/" ,
  },


  {
    name: "DYNAMIC MEMORY NETWORK PLUS - 2018",
    description:
    "Pytorch implementation of the paper Dynamic Memory Network for Visual and Textual Question Answering",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg7,
    source_code_link: "https://github.com/vlgiitr/dmn-plus",
    source_code_link_project: "https://vlgiitr.github.io/project/dmn_plus/ " ,
  },

  {
    name: "NEURAL TURING MACHINES - 2018",
    description:
"This PyTorch repository provides a reliable implementation of a Neural Turing Machine (NTM) for training, evaluating, and visualizing results across Copy, Repeat Copy, Associative Recall, and Priority Sort tasks, with results matching those reported in the paper.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg6,
    source_code_link: "https://github.com/vlgiitr/ntm-pytorch",
    source_code_link_project:"https://vlgiitr.github.io/project/ntm/" ,
  },

  {
    name: "GENZOO - 2019",
    description:
    "GenZoo is a repository that provides implementations of generative models in various frameworks",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg4,
    source_code_link: "https://github.com/vlgiitr/GenZoo",
    source_code_link_project: "https://vlgiitr.github.io/project/genzoo/" ,
  },
  {
    name: "DEEP CACHE REPLACEMENT - 2020",
    description:
    "The PyTorch codebase for DEAP Cache: Deep Eviction Admission and Prefetching for Cache.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg1,
    source_code_link: "https://github.com/vlgiitr/deep_cache_replacement",
    source_code_link_project: "https://vlgiitr.github.io/project/deap/" ,
  },
  {
    name: "SENSORIUM 2022",
    description:
    "In the NeurIPS 2022 SENSORIUM competition, we aimed to enhance the baseline model in the Sensorium+ track for predicting mouse primary visual cortex neuron activity based on natural images and behavioral data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg9,
    source_code_link: "https://github.com/vlgiitr/Sensorium-2022",
    source_code_link_project:"https://vlgiitr.github.io/project/sensorium/"  ,
  },

  {
    name: "LAYER LEVEL LOSS OPTIMISATION - 2023",
    description:
    "Experiment to test a method to train neural networks inspired by the Forward-Forward Algorithm",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg8,
    source_code_link: "https://github.com/",
    source_code_link_project:"https://vlgiitr.github.io/project/layer-level-loss-optimisation/"  ,
  },
  
  {
    name: "DL TOPICS",
    description:
    "Resources for DL",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg2,
    source_code_link: "https://github.com/vlgiitr/DL_Topics",
    source_code_link_project: "https://vlgiitr.github.io/project/dl_topics/" ,
  },
  

  {
    name: "PAPERS WE READ",
    description:
    "Repo containig summaries we read",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectimg3,
    source_code_link: "https://github.com/vlgiitr/papers_we_read",
    source_code_link_project: "https://vlgiitr.github.io/project/papers_we_read/" ,
  },



];




// ========================================================7.Testimonialsfeed :data content of the testimonials card=====================================================================//

const callingeveryeachtestfeedcard = [
 
  {
    testimonial:
    "Over the years neuroscience has inspired many quantum leaps in Artificial Intelligence. One such remarkable development inspired by the visual ventral system of the brain is Disentangled Variational Autoencoders. So first things first ",
    name: "Chris Brown",
    blog: "Dismantling Disentanglement in VAEs",
    designation: "Aayan Yadav",
    company: "Oct 25, 2023",
  },
  {
    testimonial:
    "Widely used machine learning algorithms are able to learn from new data using batch or online training methods but are incapable of efficiently adapting to data removal. Why do we need data removal though you might think.",
    name: "Sara Lee",
    blog: "Machine Unlearning",
    designation: "Authors",
    company: "Jan 3, 2024",
  },
  {
    testimonial:
    "Alright, people! This article will share my experience and learnings during the last eight months as an undergrad researcher. For those reading one of my blogs for the first time, I am a CSE undergrad (about to enter 3rd year) and am working as a Research Intern at SHI Lab @ UO and Picsart.",
    name: "Lisa Wang",
    blog: "Riding the Noisy Research Track",
    designation: "Jitesh Jain",
    company: "Jul 28, 2021",
  },
];




export { callingeveryeachintrocard, callingeveryeachtechball, callingeveryeachworkexpcard, callingeveryeachtestfeedcard, callingeveryeachprojectcard };
