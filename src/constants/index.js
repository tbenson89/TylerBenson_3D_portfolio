import {
    backend,
    creator,
    mobile,
    web,

    angular,
    typescript,
    reactjs,
    vite,
    css,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    sql,
    threejs,
    git,
    docker,

    slconnected,
    backwardGraphics,
    jeunesse,
    tokunu,
    nambi,
    biopav,
    slmodd,
    tesla,
    billHarris,
    jeffPuckett,
    lisaNash,

    amorVidaStyle,
    btcBeachCR,
    greaseApp,

    // Note: Not USED?
    figma,
    html,
    javascript,
    redux,

    tripguide,
    carrent,
    jobit,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web/Software Developer",
        icon: web,
    },
    {
        title: "Angular/React Developer",
        icon: mobile,
    },
    {
        title: "API Developer",
        icon: backend,
    },
    {
        title: "Bitcoin Life",
        icon: creator,
    },
];

// TODO: Action required...
const experiences = [
    {
        title: "Intern/Jr. Software Developer",
        company_name: "SLConnected",
        icon: slconnected,
        iconBg: "#000", // #383E56
        date: "Jan 2015 - Jan 2017",
        points: [
            "Development of New Client Software and Web Applications.",
            "Create Mock-up sketches for mobile applications.",
            "Work with the Team to meet deadlines and exceed expectations.",
            "Design, Develop, and maintain CMS environments",
            "~ Frontend: AngularJS (1 year), Wordpress (1 year)",
            "~ Backend: Java Spring, mySQL",
        ],
    },
    {
        title: "Web/Software Developer",
        company_name: "Backward Graphics",
        icon: backwardGraphics,
        iconBg: "#4DC5CC",
        date: "Jan 2019 - Feb 2020",
        points: [
            "Create Innovative Frontend features for Complex inventory systems.",
            "UI Design, Flex, and Layout User Efficient Application Requirements.",
            "Build, Deploy, and Override CMS environments.",
            "Rapid/Agile Interactive One Page Applications.",
            "Scrum Project Management and Version Control.",
            "~ Frontend: AngularJS / Angular2+, Magento, WP",
            "~ Backend: Node.js, Java/Spring, MongoDB, mySQL",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Jeunesse Global",
        icon: jeunesse,
        iconBg: "#2359A8", // #07A4B5
        date: "May 2020 - May 2022",
        points: [
            "7 Super Star Awards (Employee of the Month) in 2 years",
            "Increased revenue within' a Billion dollar company upwards of 4%",
            "Develop/maintain the Front facing web-app for Customer Onboarding",
            "Enhance User Experience by advancing App Navigation & Mobile Design",
            "Globally Written Code following ADA compliance for many cultures!",
            "~ Frontend: AngularJS, Angular2+",
            "~ Backend: Node.js, .NET, Stored procedures & SQL Server",
        ],
    },
    // Note: Should I put PureTuned/AmorVida?
    {
        title: "Director of IT",
        company_name: "tōkunu",
        icon: tokunu,
        iconBg: "#FAFBFC",
        date: "July 2022 - Sept 2022",
        points: [ // TODO: Come up with good bullet points!
            "Write out all the good points indicate why only thrree months!",
            "Project Manager/IT Director, Solana Project (3 months).",
            "asdf.",
            "asdf.",
        ],
    },
    {
        title: "Partner/Core Dev",
        company_name: "Nambi Sanctuary Fdn.",
        icon: nambi,
        iconBg: "#EA8C19",
        date: "July 2022 - Paused",
        points: [ // TODO: Come up with good bullet points!
            "Write out all the good points",
            "Non-Profit Preservation and Adventure Lodging in Costa Rica (NFT blockchain technology, TestNet Tokenization).",
            "asdf.",
            "asdf.",
        ],
    },
    {
        title: "Partner/Core Dev",
        company_name: "BioPavCanada",
        icon: biopav,
        iconBg: "#00F700",
        date: "Sept 2022 - Jan 2023",
        points: [ // TODO: Come up with good bullet points!
            "Write out all the good points",
            "Ionic Angular Bidding Application for Renewable Energy.",
            "asdf.",
            "asdf.",
        ],
    },
    {
        title: "Development & Consulting",
        company_name: "Slightly Modified Technologies",
        icon: slmodd,
        iconBg: "#E6DEDD",
        date: "May 2017 - Present",
        points: [ // TODO: bullet points for SLMODD
            "Hmmm I want these to be updated and better!.",
            "asdfcreateasdfoducts.",
            "asdf.",
            "asdf.",
        ],
    },
    // {
    //     title: "Mid-Level Software Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2019 - Feb 2020",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const technologies = [
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vite",
        icon: vite,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Boostrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const testimonials = [
    {
        testimonial:
        "I strongly Recommend that you HIRE TYLER ... and assign him to your most ... challenging development projects. He will NOT disappoint you!",
        name: "Bill Harris",
        designation: "CTO",
        company: "Jeunesse Global",
        image: billHarris,
    },
    {
        testimonial: "Tyler always went the extra mile, maintaining and enhancing the site for the business. With little oversight and remained engaged in the work.",
        name: "Jeff Puckett",
        designation: "PM Director",
        company: "Jeunesse Global",
        image: jeffPuckett,
    },
    {
        testimonial: "Tyler's actions consistently inspire and motivate his co-workers. He is hard working, organized and sees his tasks through, no matter the situation.",
        name: "Lisa Nash",
        designation: "HR Project Manager",
        company: "Jeunesse Global",
        image: lisaNash,
    }
];

//  Amor Vida Style - BTCBeachCR - Greaseplatic2bitcoin/bticoinArmy/greaseApp // TODO: NO GO ON THIS IMAGE!
const projects = [
    {
        name: "AmorVida Style",
        description:
            "Our mission is to promote Bitcoin adoption and spread the Bitcoin & Eco lifestyle. Follow our journey as we travel the world with our van, meet, grow, learn and build.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: amorVidaStyle,
        source_code_link: "https://github.com/",
    },
    {
        name: "Bitcoin Beach Costa Rica",
        description:
            "Through the growth of an ecosystem based on a circular economy & Bitcoin, working to improve the lives of the inhabitants of communities through the affiliation of businesses and services who accept Bitcoin.",
            // "Costa Rica Eco-Humanitarian Tokenization Project Web application that enables users to search for job openings, view estimated salary ranges for positions.",
        tags: [
            {
                name: "WP",
                color: "blue-text-gradient",
            },
            {
                name: "LNDapi",
                color: "violet-text-gradient",
            },
            {
                name: "Bitcoin",
                color: "orange-text-gradient",
            },
        ],
        image: btcBeachCR,
        source_code_link: "https://github.com/",
    },
    {
        name: "Grease/Plastic Recycling",
        description:
            "The plastic waste can be reused to fuel the bitcoin mining process, thereby making use of resources that would otherwise be thrown away.",
        tags: [
            {
                name: "ionic",
                color: "blue-text-gradient",
            },
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: greaseApp,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };


// Note: Recycler
const old_technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const old_projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

