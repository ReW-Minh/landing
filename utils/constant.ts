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
        route: '/services'
    },
    {
        label: 'Pricing',
        route: '/pricing'
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
                route: '/resources/trusted-partners'
            }
        ]
    },
    {
        label: 'Podcast',
        route: '/podcast'
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
                label: 'Our Team',
                route: '/about#team'
            }
        ]
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