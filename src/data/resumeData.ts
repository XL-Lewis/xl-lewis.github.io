import { SocialLink, Skill, Experience, Project, Education, Accolade, Activity } from '../types/Resume'

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
        items: ['Python', 'Ruby', 'Rust', 'Svelte']
    },
    {
        category: 'Cloud & Infrastructure',
        items: ['AWS', 'Kubernetes', 'Docker', 'GitHub Actions', 'Terraform']
    },
    {
        category: 'Databases & Data',
        items: ['Databricks', 'SQL', 'OpenSearch', 'Postgres']
    },
    {
        category: 'Frameworks & Tools',
        items: ['FastAPI', 'Ruby on Rails', 'React']
    },
    {
        category: 'Methodologies',
        items: ['Agile', 'Scrum', 'CI/CD']
    }
]

export const experiences: Experience[] = [
    {
        title: 'Mid Level Software Developer - Internal Systems, Tooling and R&D',
        company: 'Betashares - ETF Provider ($100bn FUM)',
        period: 'Aug 2025 - Present',
        location: 'Sydney, NSW',
        achievements: [
            'Assist with a major BigQuery → Databricks migration, redesigning the business-wide ingestion system (Medallion Architecture)',
            'Ingest new data sources and manage the full star schema pipeline via dbt',
            'Design and implement an AI-driven analysis tool to surface insights from sales contact data',
            'Design and implement a configuration-based reconciliation engine',
            'Design and implement a global notification service, wrapping email/Slack/in-app messages for our internal platform'
        ],
        responsibilities: [
            'Operate with a high degree of autonomy, gathering requirements from internal stakeholders and building production-ready tooling that improves operational efficiency',
            'Build and upgrade CI/CD pipelines to improve deployment reliability and release velocity',
            'Architect, deploy, and maintain services within a distributed microservice ecosystem',
            'Manage production infrastructure and deployments using AWS, Kubernetes (EKS), and Terraform',
            'Mentor end users, design/run workshops and uplift software skills business-wide'
        ]
    },
    {
        title: 'Junior / Mid Level Software Developer',
        company: 'Master Communications (Radio Telecom)',
        period: 'Dec 2021 - Aug 2025',
        location: 'Sydney, NSW',
        achievements: [
            'Design and implement an EV bus charging control system (Rust / WebSockets)',
            'Design and implement full-stack features for a Ruby on Rails / React fleet management platform',
            'Mitigate a major potential outage affecting 1000+ devices in the field, restoring functionality and improving security',
            'Optimise OpenSearch infrastructure, cutting AWS operational costs by 50+%'
        ],
        responsibilities: [
            'Maintain production infrastructure and services, managing deployments via AWS and Kubernetes',
            'Write, test, and deploy maintainable code via GitHub',
            'Review pull requests and refactor existing code',
            'Collaborate with clients to gather and translate business requirements (via BDD) and manage project timelines',
            'Work within an Agile team with daily scrum meetings'
        ]
    },
    {
        title: 'QA / Maintenance Engineer (Mechatronics)',
        company: 'Concourse Technology',
        period: 'Dec 2020 – Dec 2021',
        location: 'Sydney, NSW',
        responsibilities: [
            'Diagnose and repair issues with motor-driven bluetooth controlled wheels',
            'Design and implement fixes to improve the quality of future manufacturing',
            'Assist with mechanical and electrical design of upcoming products'
        ]
    }
]

export const projects: Project[] = [
    {
        name: 'Advent of Code 2024',
        language: 'Ruby',
        url: 'https://github.com/XL-Lewis/Advent-of-code-2024'
    },
    {
        name: 'Share Portfolio Tracker',
        language: 'Python',
        url: 'https://github.com/XL-Lewis/share-parcel-tracker'
    },
    {
        name: 'Wordle CLI Assistant',
        language: 'Rust',
        url: 'https://github.com/XL-Lewis/wordle-helper'
    },
    {
        name: 'Index Rebalancer',
        language: 'Python',
        url: 'https://github.com/XL-Lewis/Index-Rebalancer'
    },
    {
        name: 'Follow the Money',
        language: 'Python',
        url: 'https://github.com/XL-Lewis/follow-the-money'
    }
]

export const education: Education[] = [
    {
        degree: 'Bachelor of Engineering (Mechatronics) with Bachelor of Science (Computing)',
        institution: 'Macquarie University',
        period: 'April 2022',
        location: 'Sydney, NSW',
        details: [
            'Second Class, Division 1 Honours',
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
        period: '2012-2025'
    },
    {
        name: 'AV Technician / Technical Director with Macquarie Musical and Drama Societies',
        period: '2018-2022'
    },
    {
        name: 'Macquarie University Hockey',
        period: '2021-2025'
    }
]