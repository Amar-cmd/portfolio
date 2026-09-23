export type ResumeLogo={src:string;alt:string;width:number;height:number};
export type ResumeIntroData={name:string;tags:string[]};
export type ResumeTimelineItem={id:string;title:string;subtitle:string;date:string;href?:string;logo?:ResumeLogo;points?:string[]};
export type ResumeTimelineSection={id:string;title:string;items:ResumeTimelineItem[]};
export type ResumeSkillItem={id:string;label:string;icon?:ResumeLogo};
export type ResumeSkillGroup={id:string;items:ResumeSkillItem[]};
export type ResumeSkillsSection={id:string;title:string;groups:ResumeSkillGroup[]};
export type ResumeActionLink={id:string;label:string;href:string};
export type ResumeCertificationItem={id:string;title:string;subtitle:string;logo?:ResumeLogo;actions:ResumeActionLink[]};
export type ResumeCertificationSection={id:string;title:string;items:ResumeCertificationItem[]};
export type ResumeProjectItem={id:string;title:string;href?:string;logo?:ResumeLogo;points:string[]};
export type ResumeProjectsSection={id:string;title:string;items:ResumeProjectItem[]};
export type ResumePageData={intro:ResumeIntroData;timelineSections:ResumeTimelineSection[];skillsSection:ResumeSkillsSection;certificationSection:ResumeCertificationSection;projectsSection:ResumeProjectsSection};
const u=(host:string,path="")=>["https:","//",host,path].join("");
const dev=(name:string,file:string)=>u("cdn.jsdelivr.net","/gh/devicons/devicon@latest/icons/"+name+"/"+file);
const fav=(domain:string)=>u("www.google.com","/s2/favicons?domain="+domain+"&sz=128");
const drive=(id:string)=>u("drive.google.com","/file/d/"+id+"/view?usp=sharing");
const icon=(src:string,alt:string):ResumeLogo=>({src,alt,width:72,height:72});
const genericSaasLogo=u("cdn.jsdelivr.net","/npm/bootstrap-icons@1.11.3/icons/cloud-check.svg");
export const resumeData:ResumePageData={
intro:{name:"Amar Jyoti",tags:["AI Product","Product Analytics","GenAI SaaS","SQL & Python"]},
timelineSections:[
{id:"experience",title:"Experience",items:[
{id:"fooracles",title:"Product Testing & Research Intern",subtitle:"Fooracles",date:"May 2026 to Jul 2026",logo:icon("/images/logos/fooracles.png","Fooracles"),href:drive("1RHxzQh9YDPj2O2M5FyJzfv8gwwg5I96m"),points:["Benchmarked **18 SaaS competitors** and analysed **10 products**.","Selected product and interface recommendations were adopted."]},
{id:"premier",title:"Founder & Technical Educator",subtitle:"Premier Programmer",date:"Mar 2024 to Present",href:u("www.youtube.com","/@PremierProgrammer"),logo:icon("/images/logos/youtube.png","Premier Programmer"),points:["Published **165+ Python tutorials** and **40+ hours** of content.","Created **750+ coding questions** and **25 hands-on projects**."]}]},
{id:"education",title:"Education",items:[
{id:"ims",title:"PGDM, Finance & Business Analytics",subtitle:"IMS Ghaziabad",date:"2025 to 2027",logo:icon("/images/logos/ims.png","IMS Ghaziabad"),points:["Year 1 CGPA: **9.27 / 10**"]},
{id:"btech",title:"B.Tech, CSE (AI & Data Science)",subtitle:"Galgotias University",date:"2020 to 2024",logo:icon("/images/logos/galgotias.png","Galgotias University"),href:u("certificates.galgotiasuniversity.edu.in","/verify/2024/0c44fecf-10c5-490d-b3e6-8703ee08a064"),points:["CGPA: **8.81 / 10**, First Class with Distinction"]},
{id:"class12",title:"Class XII (CBSE)",subtitle:"Evergreen Public School",date:"85.4%",logo:icon("/images/logos/evergreen.png","Evergreen Public School"),href:drive("18roR6Zg9wnQ-xR_khz_N3tBCSqHLr0zu")},
{id:"class10",title:"Class X (ICSE)",subtitle:"St. Xavier's High School, Patna",date:"90.6%",logo:icon("/images/logos/xaviers.png","St. Xavier's High School"),href:drive("1V9sVB0DCeHliFPSoiiumUZ8s1iY-xW5w")}]}
],
skillsSection:{id:"skills",title:"Skills",groups:[
{id:"analytics",items:[{id:"postgres",label:"SQL / PostgreSQL",icon:icon(dev("postgresql","postgresql-original.svg"),"PostgreSQL")},{id:"python",label:"Python",icon:icon("/images/skills/python.png","Python")},{id:"powerbi",label:"Power BI",icon:icon("/images/skills/powerbi.png","Power BI")}]},
{id:"build",items:[{id:"nextjs",label:"Next.js",icon:icon(dev("nextjs","nextjs-original.svg"),"Next.js")},{id:"typescript",label:"TypeScript",icon:icon(dev("typescript","typescript-original.svg"),"TypeScript")},{id:"supabase",label:"Supabase",icon:icon(dev("supabase","supabase-original.svg"),"Supabase")},{id:"figma",label:"Figma",icon:icon(dev("figma","figma-original.svg"),"Figma")},{id:"saas",label:"Software as a Service (SaaS)",icon:icon(genericSaasLogo,"SaaS cloud")}]},
{id:"product",items:[{id:"workflow-automation",label:"Workflow Automation"},{id:"research",label:"Product Research"},{id:"ux",label:"UX Research"}]}
]},
certificationSection:{id:"certification",title:"Certifications and Achievements",items:[
{id:"aiml-iitr",title:"Artificial Intelligence & Machine Learning Certification Program",subtitle:"E&ICT Academy, IIT Roorkee · Ongoing",logo:icon("/images/logos/iitr.png","IIT Roorkee"),actions:[]},
{id:"genai",title:"Generative AI Literacy",subtitle:"Ministry of Electronics and Information Technology",logo:icon("/images/logos/miety.jpg","Ministry of Electronics and Information Technology"),actions:[{id:"view",label:"View certificate",href:drive("15dO_l-vav3-d5Fk4aStdiov0geTBP7wN")}]},
{id:"oracle",title:"Oracle Academy SQL",subtitle:"Oracle Academy",logo:icon(dev("oracle","oracle-original.svg"),"Oracle"),actions:[{id:"view",label:"View certificate",href:drive("18TNxct65a3uAyfwnBeQauwTirKm-Zwam")}]},
{id:"pcap",title:"PCAP Python",subtitle:"Cisco / OpenEDG Python Institute",logo:icon(fav("pythoninstitute.org"),"Python Institute"),actions:[{id:"view",label:"View certificate",href:drive("1Eu9m5s7E1jH8Pa17ZaJaXHgTHccGn_bD")}]},
{id:"aima",title:"Regional Qualifier, Business Simulation",subtitle:"All India Management Association",logo:icon(fav("aima.in"),"AIMA"),actions:[]},
{id:"scholarship",title:"₹50,000 B.Tech Merit Scholarship",subtitle:"Merit-based academic scholarship",actions:[]}
]},
projectsSection:{id:"projects",title:"Selected Projects",items:[
{id:"project-z",title:"AI Subjective Evaluation Engine (Project Z)",href:u("projectz.vercel.app"),logo:icon("/images/logos/saas.webp","Project Z"),points:["Professor-first GenAI evaluation with human review and final authority.","Controlled validation: **100 successful AI evaluations** and **0 failed tasks**."]},
{id:"placement",title:"Placement Cell Workflow Automation",href:u("validation-docs.netlify.app","/"),points:["Automated placement-data consolidation, standardization and routing.","Reduced repetitive processing by approximately **50–60%**."]},
{id:"ai-buddy",title:"AI Buddy",href:u("college-ai-helpdesk-chatbot.vercel.app"),points:["Authenticated college assistant with managed knowledge and LLM fallback."]},
{id:"churn",title:"Counterfactual Learning in Customer Churn",href:u("github.com","/Amar-cmd/Counterfactual-Learning-In-Customer-Churn-Prediction-Under-Class-Imbalance"),logo:icon("/images/logos/github.png","GitHub"),points:["Class-imbalance analysis with counterfactual explanations and a research paper."]}
]}
};
