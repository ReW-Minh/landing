import type { IAdminAuth, IProfile } from '~/types/types';

export const useProfiles = () => useState<IProfile[]>('Profiles', () => [
    // Jon
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
            }
        ],
        visible: false
    },

    // Binh
    {
        content: `I have been living the life of a global citizen roaming around the world. My first destination was Japan. In 2008, I was a part of the little world village at Ritsumeikan Asia Pacific University, Japan's first international university on top of a mountain. I then received a full scholarship to be an Eramus Mundus student in 2014. The Master in Research and Innovation in Higher Education allowed me to study in 4 countries during 2 years, and deepened my interest in international higher education.
    
                Upon moving to the US, I worked in admissions and admissions operations at Oklahoma City University and Columbia University. The experience working with prospective students front-end from my recruitment days has helped me tremendously when I moved to a more back-end roles, working with systems and processes to help student's application process more seamless. There are still a lot of questions: How to automatically load the student's enrollment history from their resume to their application in Slate? How to better communicate the official transcript submission instruction? The list goes on. These questions are the foundation of ReWorkflow. Jon & I started this adventure to help support institutions with streamlining their admissions and operations processes so the admission team can spend more time interacting with their students. Our ReWers work everyday towards building a more sustainable and evergreen system for teammate schools.`,
        id: 2,
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
            }
        ],
        visible: false
    },

    // Peter
    {
        content: `Although I can't say I had a childhood dream of becoming a higher education technology consultant, I first met Slate back in 2014 and I was hooked.
    
                After implementing Slate at Lewis & Clark College, I joined the staff of Technolutions where I spent 6 years learning about Slate and helping clients find the resources they needed to be succesful. In addition to overseeing Support staff as the Assistant Director of Support, I was active in Community Conservations, Slate Labs, Launchpad, and resource creation for implementations through Cycle Prep. I directly supported dozens of Slate implementations, responded to over 2,500 Support Desk requests and even wrote a Dr Seuss-inspired ode to CJs called “Oh the Joins You Will Join!”
    
                My home base is Portland, Oregon although our family prioritizes travel. We were fortunate enough to spend an incredible year living in Italy and traveling the world, visiting 12 countries in 12 months! Suggestions for our next travel destination welcomed at <a href="mailto:pmckay@reworkflow.com" target="_blank">pmckay@reworkflow.com<a/>!`,
        id: 3,
        name: "Peter McKay",
        picture: 'https://live.staticflickr.com/65535/53938209747_2eaf3dced3.jpg',
        title: "Director of Client Support",
        cert: 'https://reworkflow.com/static/slate_certified.png',
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
            }
        ],
        visible: false
    },

    // TJ
    {
        content: `With over 13 years of experience in technical and leadership roles, I specialize in data analytics, student information systems, and strategic enrollment management within higher education. I’ve worked with institutions of all sizes and stages—from Tier 1 research universities and Ivy League campuses to schools just getting off the ground—and discovered that while challenges often look different on the surface, the core solutions are remarkably consistent. I bring a proven track record of using data to drive enrollment strategies, improve operational efficiency, and support institutional goals. With an agile, results-oriented approach, I effectively balance long-term strategic initiatives with day-to-day operations and team leadership, consistently delivering outcomes through cross-functional collaboration.
    
                Outside of work, I enjoy raising my daughter and our chocolate lab alongside my spouse, a meteorologist in the Navy. As a military family, we embrace the adventure of frequent moves and love exploring new places around the world together. I’m also an avid runner—many of my best solutions to complex system challenges tend to arrive somewhere between mile two and five.`,
        id: 9,
        name: "TJ Backofen",
        picture: 'https://reworkflow.com/static/tj.jpg',
        title: "Director of Custom Solutions",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/backofentb/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: ''
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/RLI9KSKH4D'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'tbackofen@reworkflow.com'
            }
        ],
        visible: false
    },

    // Josh
    {
        content: `Josh is a graduate of Indiana University of PA (BS + BA) and Shippensburg University (MBA) – but none of the degrees covered SQL, HTML, information system design, or communications plans - these were skills acquired in on-the-job training. Josh has dabbled in just about every Slate feature imaginable in his mission to help support schools and students in his time working in Slate and is always up for learning something new or finding a new innovative solution to a problem. Making Slate as user-friendly for all parties and with all integrated systems is one of his favorite challenges. He is eager to share what he knows, having presented at the national Slate Summit 3x, and serves on the PA Slate User Group Committee. Josh and his family live in wonderful south-central Pennsylvania.`,
        id: 7,
        name: "Josh Frankenfield",
        order: 1,
        picture: 'https://reworkflow.com/static/jf.jpg',
        title: "Senior Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/joshua-frankenfield/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3AJosh-frankenfield%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/5c22zsNxpPD'
            },
            {
                type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
                link: ''
            },
            {
                type: CONTACT_TYPE.GITHUB,
                link: ''
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'jfrankenfield@reworkflow.com'
            }
        ],
        visible: false
    },

    // Kelly
    {
        content: `Is there anything more fulfilling than improving the lives of those around you? A passion of mine is helping others, whether it be volunteering in the community through programs like Big Brothers Big Sisters, chaperoning service trips around the globe, or using my professional Slate expertise to make better the work experiences of my colleagues and fellow Slate users. I have been in the world of Slate since 2013 when I was among the implementation team at The University of Scranton. From there I became Slate Captain in 2016 where I touched upon all aspects of Slate, working diligently to create an easy user experience for both prospective students as well as internal staff.  True to my passion, I have kept an active presence in the Slate Community forums and was selected by Technolutions as an inaugural Slate Community Ambassador in 2021.  I also co-moderate both the PA Slate Users Group (since 2014) and the national Slate Slack Users Group (since 2021).  I currently work full-time as a Slate Captain for Lynn University.

                 My husband and I live in beautiful Northeastern Pennsylvania with our spunky German Shepherd, Nala. We enjoy the great outdoors, recreational sports, and all manner of travel and exploration. We are also open to adventure suggestions so feel free to pass them my way!`,
        id: 4,
        name: "Kelly Connor Lewis",
        picture: 'https://reworkflow.com/static/klewis.jpg',
        title: "Senior Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/kelly-lewis6'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/5mLhZiwoZW'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'klewis@reworkflow.com'
            }
        ],
        visible: false
    },

    // Wyatt
    {
        content: `I started working for a computer repair shop in high school, then joined the Helpdesk in undergrad. Finding myself at home in higher ed IT, I authored many PowerCampus resources over 10+ years at three schools, received community contributor awards from Ellucian, and served on the board of the PowerCampus Users Group, Inc.
    
                In 2016, I got the chance to work with Slate, a truly fantastic product. I wrote and maintain an open-source, RESTful integration between Slate and PowerCampus used by at least five institutions. I have extensive experience other areas as well, including Dynamic Forms by NG Web Solutions (a terrific, little-known product), Campus Café (SIS), PowerFAIDS, AMAG Symmetry access control, Azure, VMWare, ShoreTel, etc. Your IT department will like working with ReWorkflow because we understand the demands on their time.
    
                In our spare time, my wife and I are building a Carpenter Gothic/Victorian cottage and running a restaurant and cabaret for our children, cats, chickens, etc.`,
        id: 5,
        name: "Wyatt Best",
        order: 1,
        picture: 'https://live.staticflickr.com/65535/53939365973_8b39036dfb.jpg',
        title: "Custom Solutions Analyst",
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
            }
        ],
        visible: false
    },

    // Alice
    {
        content: `Alice Manning is a two-time graduate of Gardner-Webb University with a BA in Communication Studies and an MBA. Alice has a variety of experience in Slate administration, implementation, and auditing. She enjoys working with clients to teach them about all of the great things that Slate can do and takes pride in helping teams find creative, efficient solutions. She and her family live in the beautiful mountains of Asheville, North Carolina.`,
        id: 6,
        name: "Alice Manning",
        order: 1,
        picture: 'https://reworkflow.com/static/amanning.jpg',
        title: "Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/alice-manning-mba-2b366b135/'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/SW8YKG8StE'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'amanning@reworkflow.com '
            }
        ],
        visible: false
    },

    // Minh
    {
        content: `I'm a JavaScript/TypeScript software engineer with a passion for building clean, efficient, and scalable applications. Whether working on frontend interfaces or backend systems, I enjoy solving complex problems with elegant code and staying on top of the latest in web technologies. I’m always tinkering—whether it's optimizing a workflow, learning a new framework, or diving into side projects that blend creativity and code.

                  Outside of work, I’m a husband and proud dad to a curious and energetic daughter. My free time is usually spent behind a camera, building elaborate Lego creations, or geeking out over the latest in tech gear. I love projects that merge tech with play, and I’m always up for a deep dive into anything that sparks curiosity.`,
        id: 8,
        name: "Minh Ha",
        picture: 'https://reworkflow.com/static/mha.jpg',
        title: "Software Engineer",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/ho%C3%A0ng-minh-h%C3%A0-a99b7923a/'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'mha@reworkflow.com'
            }
        ],
        visible: false
    }
])

export const useAdminAuth = () => useState<IAdminAuth>('AdminAuth', () => ({
    logged: false,
    token: null
}))
