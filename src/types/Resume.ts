export interface SocialLink {
    url: string;
    label: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements?: string[];
    responsibilities?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
    details: string[];
}

export interface Accolade {
    title: string;
    year: string;
}

export interface Activity {
    name: string;
    period: string;
}