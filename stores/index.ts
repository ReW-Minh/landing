import type { IAdminAuth, IProfile } from '~/types/types';
import { CONTACT_TYPE, PROFILE_GROUP } from '~/utils/constant'

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
        group: PROFILE_GROUP.LEADERSHIP,
        clickUp: true
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
        clickUp: true,
        group: PROFILE_GROUP.LEADERSHIP
    },

    // TJ
    {
        content: `With over 13 years of experience in technical and leadership roles, I specialize in data analytics, student information systems, and strategic enrollment management within higher education. I’ve worked with institutions of all sizes and stages—from Tier 1 research universities and Ivy League campuses to schools just getting off the ground—and discovered that while challenges often look different on the surface, the core solutions are remarkably consistent. I bring a proven track record of using data to drive enrollment strategies, improve operational efficiency, and support institutional goals. With an agile, results-oriented approach, I effectively balance long-term strategic initiatives with day-to-day operations and team leadership, consistently delivering outcomes through cross-functional collaboration.
    
                Outside of work, I enjoy raising my daughter and our chocolate lab alongside my spouse, a meteorologist in the Navy. As a military family, we embrace the adventure of frequent moves and love exploring new places around the world together. I’m also an avid runner—many of my best solutions to complex system challenges tend to arrive somewhere between mile two and five.`,
        id: 4,
        name: "TJ Backofen",
        picture: 'https://reworkflow.com/static/tj.jpg',
        title: "Executive Director",
        cert: 'https://reworkflow.com/static/slate_certified.png',
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/backofentb/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Atj-backofen%7D+%7Btype%3Apage%7D'
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
        clickUp: true,
        group: PROFILE_GROUP.CUSTOM_SOLUTIONS
    },

    // Alice
    {
        content: `Alice Byrd is a two-time graduate of Gardner-Webb University with a BA in Communication Studies and an MBA. Alice has a variety of experience in Slate administration, implementation, and auditing. She enjoys working with clients to teach them about all of the great things that Slate can do and takes pride in helping teams find creative, efficient solutions. She and her family live in the beautiful mountains of Asheville, North Carolina.`,
        id: 5,
        name: "Alice Byrd",
        order: 1,
        picture: 'https://reworkflow.com/static/amanning.jpg',
        title: "Senior Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/alice-manning-mba-2b366b135/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3AAlice-Bryd%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/SW8YKG8StE'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'abyrd@reworkflow.com'
            }
        ],
        clickUp: true,
        group: PROFILE_GROUP.CLIENT_SERVICES
    },

    // Ryan
    {
        content: `Like many in the world of Higher Ed, I fell into my first admissions job doing traditional front-facing work with students (I do not miss lunchroom visits or circular tables at college fairs). During the fall of 2013 while serving in one of these roles, I was introduced to a wonderful CRM platform called Slate by Technolutions. Over the course of my career, I've transitioned from being a "power user" within the system to most recently serving in various Director-level roles for a variety of institutions. I've had the privilege of supervising amazing teams responsible for the management of software systems (including several campuses with multi-instances of Slate), database integrations, and overall technical operations designed to streamline and optimize admission and enrollment functions across Enrollment Management. I'm very involved in the Slate community, whether it's serving as a User Group Leader or presenting as part of the Slate Summit experience. As a first-generation college student raised in a single-parent, low-income household in the foothills of Appalachia, I have a strong commitment to leveraging technology to improve the overall student experience, ensuring access to education, and enhancing student outcomes.
        
        I earned my Bachelor's degree from Miami University, and I later attended the University of Louisiana at Monroe (without visiting or ever stepping foot in Louisiana prior!) for grad school earning my MBA. I enjoy outdoor adventures, live music and festivals, exploring bourbon distilleries (and sharing recommendations), listening to podcasts, and indulging in movie-quote conversations. I live in Ohio with my wife, Rachel, and two children (6 and 2)`,
        id: 6,
        name: "Ryan Chapman",
        order: 1,
        picture: 'https://reworkflow.com/static/rchapman.jpg',
        title: "Senior Slate Strategist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/ryrichapman/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Aryan-chapman%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/iC6d1W1t0J'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'rchapman@reworkflow.com'
            }
        ],
        group: PROFILE_GROUP.CLIENT_SERVICES
    },

    // Kelly
    {
        content: `Is there anything more fulfilling than improving the lives of those around you? A passion of mine is helping others, whether it be volunteering in the community through programs like Big Brothers Big Sisters, chaperoning service trips around the globe, or using my professional Slate expertise to make better the work experiences of my colleagues and fellow Slate users. I have been in the world of Slate since 2013 when I was among the implementation team at The University of Scranton. From there I became Slate Captain in 2016 where I touched upon all aspects of Slate, working diligently to create an easy user experience for both prospective students as well as internal staff.  True to my passion, I have kept an active presence in the Slate Community forums and was selected by Technolutions as an inaugural Slate Community Ambassador in 2021.  I also co-moderate both the PA Slate Users Group (since 2014) and the national Slate Slack Users Group (since 2021).  I currently work full-time as a Slate Captain for Lynn University.

                 My husband and I live in beautiful Northeastern Pennsylvania with our spunky German Shepherd, Nala. We enjoy the great outdoors, recreational sports, and all manner of travel and exploration. We are also open to adventure suggestions so feel free to pass them my way!`,
        id: 7,
        name: "Kelly Connor Lewis",
        picture: 'https://reworkflow.com/static/klewis.jpg',
        title: "Senior Slate Strategist",
        cert: 'https://reworkflow.com/static/slate_certified.png',
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/kelly-lewis6'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Akelly-connor-lewis%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/5mLhZiwoZW'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'klewis@reworkflow.com'
            },
        ],
        group: PROFILE_GROUP.CLIENT_SERVICES
    },

    // Josh
    {
        content: `Josh is a graduate of Indiana University of PA (BS + BA) and Shippensburg University (MBA) – but none of the degrees covered SQL, HTML, information system design, or communications plans - these were skills acquired in on-the-job training. Josh has dabbled in just about every Slate feature imaginable in his mission to help support schools and students in his time working in Slate and is always up for learning something new or finding a new innovative solution to a problem. Making Slate as user-friendly for all parties and with all integrated systems is one of his favorite challenges. He is eager to share what he knows, having presented at the national Slate Summit 3x, and serves on the PA Slate User Group Committee. Josh and his family live in wonderful south-central Pennsylvania.`,
        id: 8,
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
                link: 'https://community.technolutions.net/member/5c22zsNxpP'
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
        group: PROFILE_GROUP.CLIENT_SERVICES
    },

    // Bailey
    {
        content: `Bailey brings nearly a decade of experience in higher education IT and CRM management to his role as Custom Solutions Analyst at ReWorkflow. Since 2016, he has worked at the intersection of technology and enrollment management, helping institutions optimize systems and processes that support student success.

                  Before joining ReWorkflow, Bailey served as CRM Manager for the Graduate School at Texas A&M University, where he led initiatives to streamline data, communications, and application workflows. He began his career at Valdosta State University, supporting admissions and student success as the IT liaison for enrollment management.

                  Since first working in Slate in 2021, Bailey has focused on bridging the gap between technical solutions and enrollment strategy. At ReWorkflow, he is excited to apply this expertise to support partner institutions and advance innovative CRM solutions across the higher education community.`,
        id: 9,
        name: "Bailey Raffield",
        picture: 'https://reworkflow.com/static/braffield.jpg',
        title: "Slate Developer",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/bailey-raffield-73a3b3256/'
            },
            {
                type: CONTACT_TYPE.RESOURCE,
                link: 'https://resource.reworkflow.com/search?term=%7Bcreated_by%3Abailey-raffield%7D+%7Btype%3Apage%7D'
            },
            {
                type: CONTACT_TYPE.SLATE_COMMUNITY,
                link: 'https://community.technolutions.net/member/jejNLPQLB8'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'braffield@reworkflow.com'
            }
        ],
        clickUp: true,
        group: PROFILE_GROUP.CUSTOM_SOLUTIONS
    },

    // Wyatt
    {
        content: `I started working for a computer repair shop in high school, then joined the Helpdesk in undergrad. Finding myself at home in higher ed IT, I authored many PowerCampus resources over 10+ years at three schools, received community contributor awards from Ellucian, and served on the board of the PowerCampus Users Group, Inc.
    
                In 2016, I got the chance to work with Slate, a truly fantastic product. I wrote and maintain an open-source, RESTful integration between Slate and PowerCampus used by at least five institutions. I have extensive experience other areas as well, including Dynamic Forms by NG Web Solutions (a terrific, little-known product), Campus Café (SIS), PowerFAIDS, AMAG Symmetry access control, Azure, VMWare, ShoreTel, etc. Your IT department will like working with ReWorkflow because we understand the demands on their time.
    
                In our spare time, my wife and I are building a Carpenter Gothic/Victorian cottage and running a restaurant and cabaret for our children, cats, chickens, etc.`,
        id: 10,
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
        clickUp: true,
        group: PROFILE_GROUP.CUSTOM_SOLUTIONS
    },

    // Minh
    {
        content: `I'm a JavaScript/TypeScript software engineer with a passion for building clean, efficient, and scalable applications. Whether working on frontend interfaces or backend systems, I enjoy solving complex problems with elegant code and staying on top of the latest in web technologies. I’m always tinkering—whether it's optimizing a workflow, learning a new framework, or diving into side projects that blend creativity and code.

                  Outside of work, I’m a husband and proud dad to a curious and energetic daughter. My free time is usually spent behind a camera, building elaborate Lego creations, or geeking out over the latest in tech gear. I love projects that merge tech with play, and I’m always up for a deep dive into anything that sparks curiosity.`,
        id: 11,
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
        group: PROFILE_GROUP.CUSTOM_SOLUTIONS
    },

    // Nhu
    {
        content: `I am Nhu, a multilingual researcher with over eight years of experience across media production, translation, and content development. My academic background includes an MA in Critical Theory & Cultural Studies from the University of Nottingham in UK, and a BA in Comparative Social & Cultural Studies from Ritsumeikan APU in Japan.

                  After taking time away from my career, I’ve come back with a stronger appreciation for resilience and openness — to opportunities, to advice, and to growth. Although my background is in journalism and translation, but what really drives me now is the chance to learn, and contribute in new ways. At ReWorkflow, I’m excited to bring this mindset into my work, supporting projects with care, adaptability, and a collaborative spirit.
                  
                  Outside of work, I am a proud dog mom, a book lover, and an enthusiastic traveler. My other hobbies include doing aerial sports and baking up sweet goods for people around me.`,
        id: 12,
        name: "Nhu Nguyen",
        picture: 'https://reworkflow.com/static/nnguyen.jpg',
        title: "Admission Operations Specialist",
        contact: [
            {
                type: CONTACT_TYPE.LINKEDIN,
                link: 'https://www.linkedin.com/in/quynh-nhu-nguyen-ngoc-748b10369/'
            },
            {
                type: CONTACT_TYPE.EMAIL,
                link: 'nnguyen@reworkflow.com'
            }
        ],
        group: PROFILE_GROUP.CUSTOM_SOLUTIONS
    },
])

export const useAdminAuth = () => useState<IAdminAuth>('AdminAuth', () => ({
    logged: false,
    token: null
}))
