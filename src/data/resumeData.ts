import { SocialLink, Skill, Experience, Education, Accolade, Activity } from '../types/Resume'

export const personalInfo = {
    name: 'Lewis Hyman',
    title: 'Software Engineer',
    email: 'LewisHymanPersonal@gmail.com',
    phone: '(+61) 405 178 301',
    location: 'Sydney, NSW'
}

export const socialLinks: SocialLink[] = [
    {
        url: 'https://github.com/XL-Lewis',
        label: 'Github.com/XL-Lewis'
    },
    {
        url: 'https://linkedin.com/in/xl-lewis',
        label: 'linkedin.com/in/xl-lewis'
    }
]

export const skills: Skill[] = [
    {
        category: 'Languages',
        items: ['Rust', 'Ruby', 'Python', 'Javascript']
    },
    {
        category: 'Frameworks',
        items: ['Ruby on Rails', 'React']
    },
    {
        category: 'Infrastructure',
        items: ['Docker', 'Kubernetes', 'OpenSearch', 'Git/Github', 'AWS (+ EKS)']
    }
]

export const experiences: Experience[] = [
    {
        title: 'Software Developer',
        company: 'Master Communications (Radio Telecom)',
        period: 'Aug 2021 – Mar 2024 / Oct 2024 - Present',
        location: 'Sydney, NSW',
        achievements: [
            'Reduced cluster operation costs for OpenSearch by over 50% implementing an automated storage tiering system',
            'Reduced code and deployment complexity for internal data translation pipelines by 85%',
            'Designed and implemented a Rust websocket server to manage Vehicle charging for EV Buses',
            'Refactored API communication with backend services via protocol buffers'
        ],
        responsibilities: [
            'Write, test, and deploy maintainable code via Github',
            'Review pull requests and refactor existing code',
            'Engage with clients to gather requirements (via BDD) and manage project timelines',
            'Collaborate with team members in an Agile workplace with daily scrum meetings',
            'Manage deployments via AWS Cloud & Kubernetes'
        ]
    },
    {
        title: 'IT / Operations Consultant',
        company: 'Process / Automation Consulting',
        period: 'May 2024 – Oct 2024',
        location: 'Sydney, NSW',
        responsibilities: [
            'Identify, document and propose efficiency improvements to internal workflows',
            'Assist with migration of project management software',
            'Improve process automation w/ Microsoft Power Platform'
        ]
    },
    {
        title: 'QA / Maintenance Engineer (Mechatronics)',
        company: 'Concourse Technology',
        period: 'Dec 2020 – Dec 2021',
        location: 'Sydney, NSW',
        responsibilities: [
            'Diagnose and repair issues with motor-driven bluetooth controlled wheels',
            'Design and implement fixes where possible to improve the quality of future manufacturing',
            'Assist with mechanical and electrical design of upcoming products'
        ]
    }
]

export const education: Education[] = [
    {
        degree: 'Bachelor of Engineering (Mechatronics) with Bachelor of Science (Computing)',
        institution: 'Macquarie University',
        period: 'April 2022',
        location: 'Sydney, NSW',
        details: [
            'Second Class, Division 1 Honors',
            'International Placement in Indonesia, partnered with Taman Pintar',
            'Thesis project: \'Drone Mounted Magnetometer-Based Meteorite Detection System\''
        ]
    }
]

export const accolades: Accolade[] = [
    {
        title: 'Finalist - ITS Australia Young Professional of the Year',
        year: '2022'
    },
    {
        title: 'Silver Duke of Edinburgh',
        year: '2016'
    }
]

export const activities: Activity[] = [
    {
        name: 'Inala Charity Lunch Volunteer',
        period: '2012-2024'
    },
    {
        name: 'AV Technician / Technical Director with Macquarie Musical and Drama Societies',
        period: '2018-2022'
    },
    {
        name: 'Macquarie University Hockey',
        period: '2021-2024'
    }
]