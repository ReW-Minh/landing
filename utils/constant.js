export const PODCAST_LINK = 'https://podcast.reworkflow.com/'

export const RESOURCE_LINK = 'https://resource.reworkflow.com/shelves/public-knowledgebase'

export const POWERCAMPUS_LINK = 'https://resource.reworkflow.com/books/powercampus'

export const SLATE_LINK = 'https://resource.reworkflow.com/books/slate'

export const CONTACT_TYPE = {
    LINKEDIN: 1,
    RESOURCE: 2,
    SLATE_COMMUNITY: 3,
    PRESENTATIONS_PUBLICATIONS: 4,
    EMAIL: 5,
    GITHUB: 6,
    PODCAST: 7
}

export const NAVIGATION_MENU = [
    {
        label: 'Services',
        items: [
            {
                label: 'Slate',
                route: '/services/slate'
            },
            {
                label: 'PowerCampus',
                route: '/services/powercampus'
            }
        ]
    },
    {
        label: 'ReSource',
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
            }
        ]
    },
    {
        label: 'Podcast',
        route: '/podcast'
    },
    {
        label: 'About',
        items: [
            {
                label: 'Our Team',
                route: '/about/team'
            },
            {
                label: 'Careers',
                route: '/about/careers'
            }
        ]
    },
]

export const PODCAST_EP_PAGE_LIMIT = 8