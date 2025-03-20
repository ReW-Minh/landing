import type { IAdminAuth, IProfile } from '~/types/types';

export const useProfiles = () => useState<IProfile[]>('Profiles', () => [
    {
        content: `I'm all about puzzles. Most definitely of the jigsaw kind (picture proofs upon request 🧩😄), but also those that take us down rabbit holes for improved office efficiencies and technical difficulties troubleshooting. To a greater extent, each phase of the project management process is energizing from ideation to iteration with research, testing, and evaluation being where I particularly thrive. In particular, learning about colleagues’ operational needs, orchestrating a solution, and then our growing excitement together as light bulb moments spur our next collaborations.
    
                I am blessed that my 20+ year career in international higher education has taken me around the world and provided me with invaluable opportunities to wear a kaleidoscope of hats. English teacher --> university lecturer --> consultant --> senior administrator --> service provider. Each step along the way continues to fuel my passion for lifelong learning and actively giving back to the Slater community.
    
                Outside of work and my amazing family adventures, we may cross paths in the great outdoors. You can also find me binging on podcasts and audiobooks at 2x speed (I just can’t slow down! 😆) 🎧 as well as listening to an eclectic expanse of music on real-time (open to all recommendations!), and/or enjoying a local craft beer while watching all things sports. 🍻`,
        id: 1,
        name: "Jon Rowand",
        picture: 'https://live.staticflickr.com/65535/53939568495_fd701673b8.jpg',
        title: "Chief Executive Officer",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/jonmaesrowand/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Ajon-rowand%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/Y51AbuXxly'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'jrowand@reworkflow.com'
            },
        ],
        visible: false
    },
    {
        content: `I started working for a computer repair shop in high school, then joined the Helpdesk in undergrad. Finding myself at home in higher ed IT, I authored many PowerCampus resources over 10+ years at three schools, received community contributor awards from Ellucian, and served on the board of the PowerCampus Users Group, Inc.
    
                In 2016, I got the chance to work with Slate, a truly fantastic product. I wrote and maintain an open-source, RESTful integration between Slate and PowerCampus used by at least five institutions. I have extensive experience other areas as well, including Dynamic Forms by NG Web Solutions (a terrific, little-known product), Campus Café (SIS), PowerFAIDS, AMAG Symmetry access control, Azure, VMWare, ShoreTel, etc. Your IT department will like working with ReWorkflow because we understand the demands on their time.
    
                In our spare time, my wife and I are building a Carpenter Gothic/Victorian cottage and running a restaurant and cabaret for our children, cats, chickens, etc.`,
        id: 3,
        name: "Wyatt Best",
        order: 1,
        picture: 'https://live.staticflickr.com/65535/53939365973_8b39036dfb.jpg',
        title: "Chief Technology Officer",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/wyattbest/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Awyatt-best%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/A8GL9OxVPb'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.GITHUB,
                link: 'https://github.com/WyattBest'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'wbest@reworkflow.com'
            },
        ],
        visible: false
    },
    {
        content: `I have been living the life of a global citizen roaming around the world. My first destination was Japan. In 2008, I was a part of the little world village at Ritsumeikan Asia Pacific University, Japan's first international university on top of a mountain. I then received a full scholarship to be an Eramus Mundus student in 2014. The Master in Research and Innovation in Higher Education allowed me to study in 4 countries during 2 years, and deepened my interest in international higher education.
    
                Upon moving to the US, I worked in admissions and admissions operations at Oklahoma City University and Columbia University. The experience working with prospective students front-end from my recruitment days has helped me tremendously when I moved to a more back-end roles, working with systems and processes to help student's application process more seamless. There are still a lot of questions: How to automatically load the student's enrollment history from their resume to their application in Slate? How to better communicate the official transcript submission instruction? The list goes on. These questions are the foundation of ReWorkflow. Jon & I started this adventure to help support institutions with streamlining their admissions and operations processes so the admission team can spend more time interacting with their students. Our ReWers work everyday towards building a more sustainable and evergreen system for teammate schools.`,
        id: 5,
        name: "Binh Rowand",
        picture: 'https://live.staticflickr.com/65535/53939365953_b2618988b9.jpg',
        title: "Chief Operating Officer",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/binh-ha-rowand-a64201107/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: ''
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: ''
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'browand@reworkflow.com'
            },
        ],
        visible: false
    },
    {
        content: `Megan Story joined ReWorkflow in August 2022 with 10 years of experience in higher education, including 4 years as a Slate Captain for graduate admissions at the University of California, Irvine. At ReWorkflow, Megan leverages her extensive background to support clients, drawing from her experience managing a Slate instance with 1,400 users and over 20,000 applications annually. During her tenure at UCI, she successfully developed drip campaigns, generated detailed reports, and created comprehensive documentation. Megan is a dedicated member of the Slate user community with highlights including presenting at the Slate Summit in 2022 and 2024 and serving on the leadership team for the Graduate Slate Community User Group.
    
                Megan hosts The ReWorkflow Podcast and in her free time is a frequent guest on a podcast about strategy board games.`,
        id: 4,
        name: "Megan Story",
        picture: 'https://live.staticflickr.com/65535/53939568465_74c51baf15.jpg',
        title: "Director of Slate Systems & Operations",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/mpstory/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Amegan-story%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/dVj6MFzD6r'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'mstory@reworkflow.com'
            },
        ],
        visible: false
    },
    {
        content: `Although I can't say I had a childhood dream of becoming a higher education technology consultant, I first met Slate back in 2014 and I was hooked.
    
                After implementing Slate at Lewis & Clark College, I joined the staff of Technolutions where I spent 6 years learning about Slate and helping clients find the resources they needed to be succesful. In addition to overseeing Support staff as the Assistant Director of Support, I was active in Community Conservations, Slate Labs, Launchpad, and resource creation for implementations through Cycle Prep. I directly supported dozens of Slate implementations, responded to over 2,500 Support Desk requests and even wrote a Dr Seuss-inspired ode to CJs called “Oh the Joins You Will Join!”
    
                I am currently based in Milan, Italy meaning that ReWorklow is the only Preferred Partner with a physical presence on three continents! Over the next year, my goal is to travel to a dozen countries with my husband and our two kids (8 and 11). European travel suggestions welcomed at <a href="mailto:pmckay@reworkflow.com" target="_blank">pmckay@reworkflow.com<a/>!`,
        id: 1,
        name: "Peter McKay",
        picture: 'https://live.staticflickr.com/65535/53938209747_2eaf3dced3.jpg',
        title: "Senior Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/peter-mckay-a6083217/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Apeter-mckay%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/kFAC0J3piL'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'pmckay@reworkflow.com'
            },
        ],
        visible: false
    },
    {
        content: `My name is Isaac Best and I am a Slate Specialist here at ReWorkflow. My background is in the world of IT and computer repair; after tinkering with computers and servers from childhood and providing friends and family with informal support, I eventually owned and ran a computer repair & support business for several years, gaining valuable customer service and troubleshooting skills in the process. I transitioned to Slate in the spring of 2023 and have been working with it since then. To date, I have the most experience in the areas of Cycle Prep, custom PDFs, the Reader/Workflows, Reports, and of course good ol' queries but I regularly assist clients with whatever Slate needs they bring to us.
    
                I am currently pursuing a Master's degree in theology. In my spare time, I love reading theology, history, and fiction and am a frequent contributor to the <a href="https://www.openstreetmap.org" rel="noopener noreferrer" target="_blank">OpenStreetMap project</a>. I also enjoy the occasional round of the <a href="https://www.openra.net/" rel="noopener noreferrer" target="_blank">OpenRA clone of C&amp;C Red Alert</a> with friends.`,
        id: 6,
        name: "Isaac Best",
        picture: 'https://live.staticflickr.com/65535/53939365968_85e282db4f.jpg',
        title: "Slate Specialist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: ''
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Aisaac-best%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/fR4dCoPQr7'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'ibest@reworkflow.com'
            },
        ],
        visible: false
    }
])

export const useAdminAuth = () => useState<IAdminAuth>('AdminAuth', () => ({
    logged: false,
    token: null
}))
