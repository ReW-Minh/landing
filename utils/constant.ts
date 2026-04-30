export const PODCAST_LINK = 'https://podcast.reworkflow.com/'

export const RESOURCE_LINK = 'https://resource.reworkflow.com/shelves/public-knowledgebase'

export const POWERCAMPUS_LINK = 'https://resource.reworkflow.com/books/powercampus'

export const SLATE_LINK = 'https://resource.reworkflow.com/books/slate'

export enum CONTACT_TYPE {
    LINKEDIN = 1,
    RESOURCE = 2,
    SLATE_COMMUNITY = 3,
    PRESENTATIONS_PUBLICATIONS = 4,
    EMAIL = 5,
    GITHUB = 6,
    PODCAST = 7
}

export const NAVIGATION_MENU = [
    {
        label: 'Services',
        route: '/services',
        external: false
    },
    {
        label: 'Pricing',
        route: '/pricing',
        external: false
    },
    {
        label: 'ReSources',
        items: [

            {
                label: 'Slate',
                route: 'https://resource.reworkflow.com/books/slate',
                external: true
            },
            {
                label: 'PowerCampus',
                route: 'https://resource.reworkflow.com/books/powercampus',
                external: true
            },
            {
                label: 'Our Trusted Partners',
                route: '/resources/trusted-partners',
                external: false
            }
        ],
        external: false
    },
    {
        label: 'Podcast',
        route: '/podcast',
        external: false
    },
    {
        label: 'Testimonials',
        route: '/testimonials',
        external: false
    },
    /* {
         label: 'ReViews',
         route: '/reviews'
     },*/
    {
        label: 'About',
        route: '/about',
        items: [
            {
                label: 'Mission',
                route: '/about#mission',
                external: false
            },
            {
                label: 'Values',
                route: '/about#values',
                external: false
            },
            {
                label: 'Our Team',
                route: '/about#team',
                external: false
            }
        ],
        external: false
    }
]

export const ACTION = {
    ADD: 'Add',
    EDIT: 'Edit'
}

export const PODCAST_EP_PAGE_LIMIT = 8

export const BLOG_PAGE_LIMIT = 10

export enum PROFILE_GROUP {
    CLIENT_SERVICES = 'Client Services',
    CUSTOM_SOLUTIONS = 'Custom Solutions',
    LEADERSHIP = 'Leadership & Operations'
}

export interface Testimonial {
    quote: string
    person: string
    title: string
}

export interface School {
    name: string
    logo: string
    testimonial?: Testimonial
}

export const TESTIMONIALS: School[] = [
    {
        name: 'Moore College of Art and Design',
        logo: '/img/schools/moore.png',
        testimonial: {
            quote: `ReWorkflow really suits our needs because we're a small independent school, and they've developed a plan to suit our needs, whatever that may be at the time. And they also provide us with a security blanket if we do run into a situation where something may go wrong with our instance. And the questions become more complex as you go down the Slate rabbit hole, so it's great to have the broad wisdom that ReWorkflow has whenever we need it. It is definitely a good thing for us, having ReWorkflow as a partner, because they care about our goals.`,
            person: 'Jonathan Squire',
            title: 'Vice President of Enrollment Management'
        }
    },
    {
        name: 'Loyola Law School',
        logo: '/img/schools/lls.png',
        testimonial: {
            quote: `Well, the team is amazing. I trust them with anything Slate-related! ReWorkflow isn’t a transactional business model, they’re very, very customer service-oriented and very responsive. I\'m just grateful to the entire team for making our lives easier. I truly don\'t think ReWorkflow could get enough praise.`,
            person: 'Mina Mizutani',
            title: 'Assistant Director, JD Admissions'
        }
    },
    {
        name: 'City Tech, CUNY',
        logo: '/img/schools/citytech.png',
        testimonial: {
            quote: `The staff we work with at ReWorkflow, there’s no other company that can match their value. They’re very can-do, very friendly, very approachable—almost instant connectivity with the team. They understand our admissions process and the application journey as well as Slate’s nuts and bolts. They really know their stuff. It’s just a pleasure working with them!`,
            person: 'John Albanese',
            title: 'Director of Admissions and Recruitment'
        }
    },
    {
        name: 'Marymount Manhattan College',
        logo: '/img/schools/mmc.png',
        testimonial: {
            quote: `I love working with the team at ReWorkflow! They’re good at communication, I can rely on whoever I’m working with, and they’re very knowledgeable in the field. They all have good critical thinking skills and apply extra thought to projects, and suggest best practice improvements that are very helpful. It’s not just a tick-the-box relationship. Basically, ReWorkflow is my secret weapon.`,
            person: 'Sunay Tamashev',
            title: 'Director of Enrollment Marketing'
        }
    },
    {
        name: 'NYU School of Professional Studies',
        logo: '/img/schools/nyu.png',
        testimonial: {
            quote: `ReWorkflow has the feeling of “my expert friend is helping me.” With everyone on the team, we feel really supported. And we’ve learned so much from ReWorkflow’s people because they don’t just do it for you, they explain why. We’ve come so far as an organization since we’ve partnered with them, because it really has felt like we have an extra set of hands which is crucial in higher ed when it feels like you’re always trying to do more things without enough resources. We couldn’t be happier with our ReWorkflow partnership.`,
            person: 'Sara Edmunds',
            title: 'Assistant Dean, Administration & Strategy'
        }
    },
    {
        name: 'Paul Smith’s College',
        logo: '/img/schools/ps.png',
        testimonial: {
            quote: `So I am an organizer, an executor, a developer, an enhancer—a team of one— with limited bandwidth supporting all of the admissions departments across the school, as well as senior administration for reporting. My time for troubleshooting Slate and understanding new enhancements is limited. ReWorkflow came in with a listening ear, understood my challenges, and provided me with very supportive team members. 
            
            They understand the nuances of Slate, and really helped me understand where the friction points are, and what to do about them. Everyone I’ve communicated with makes me feel like I’m not just a client, but also part of the bigger ReWorkflow organization, which is a really nice partner relationship.`,
            person: 'Nathan Eisenberg',
            title: 'Director of Enrollment Operations, Interim Director of Admissions'
        }
    },
    {
        name: 'University of Alabama, Huntsville',
        logo: '/img/schools/uah.png',
        testimonial: {
            quote: `Since implementing Slate with ReWorkflow’s help, we have seen a drastic difference in processing times for students submitting an application, and the time it takes us to review it and communicate a decision. We have been processing way more quickly this year, and our enrollment numbers are reflecting that. And the team is not just knowledgeable about Slate. They\'re also knowledgeable about how an admissions operation runs, and how it could run more efficiently. So they’re also helping us work through what our business process could be, and it’s extremely valuable.`,
            person: 'Haley Kennedy',
            title: 'Director of Admissions Operations'
        }
    },
    {
        name: 'JM Partner Solutions',
        logo: 'https://static.wixstatic.com/media/7cb5bc_9f00498cca45490c9a1f6697f2074d8b~mv2.png',
        testimonial: {
            quote: `We have recommended a lot of clients to ReWorkflow because they do great work and exceed our clients’ expectations, every time. The team is smart. They understand the system. And they\'re able to get in and either create the reports, write the trigger, or fix the issue with the system to get it so that it\'s functioning, and the campus isn\'t having to do manual workarounds. ReWorkflow has been very good at focusing on what the client needs are, and the team does what they say they will.`,
            person: 'Jessica Mireles',
            title: 'Founder & President'
        }
    },
    {
        name: 'Brown University',
        logo: 'https://caddellprep.com/wp-content/uploads/2020/01/Brown-U-logo.png',
        testimonial: {
            quote: `We wanted someone who could help us take the “out of the box” functionality of Slate and get it to that next level in our system, and help our team increase knowledge and skills too—and wow has ReWorkflow delivered. Their under-the-hood knowledge is just stellar. 
            
            The ReWorkflow team has a great vibe—they\'re patient, they explain things, and when we have non-technical folks on the calls, they’re able to pivot between having conversations with me and then explaining clearly to a ‘further down the line’ user who might not know the first thing about the nitty-gritty side of Slate. They have been such a time-saver, helping us manage the day-to-day as well as larger high-priority projects.`,
            person: 'Tony Sylvester',
            title: 'Director of Systems'
        }
    },
    {
        name: 'Westcliff University',
        logo: '/img/schools/wu.png',
        testimonial: {
            quote: `I wouldn’t change ReWorkflow for any other solution. It’s honestly the first time we’ve worked with a vendor who’s delivered such results, and with such camaraderie.`,
            person: 'Amanda Olmos',
            title: 'Director of Systems Solutions'
        }
    }
]