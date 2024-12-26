export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'NailsByTony - Beauty Salon Website/Scheduler',
        desc: 'NailsByTony is a web application that allows user to book appointments and learn about the services offered by the salon. The user can book appointments and the admin can manage the appointments.',
        subdesc:
            'Built with Vite, Tailwind CSS, and TypeScript. With the scheduler library @aldabil/react-scheduler\n',
        href: 'https://github.com/kbuicuong/schedule_app',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/notes.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Aora - Video sharing app',
        desc: 'Aora allows users to share videos with other users. With a fully functional Authentication system with CRUD operation. Aora is a full-stack application. ',
        subdesc:
            'Built with React Native, Appwrite, TailwindCss, and Typescript.',
        href: 'https://github.com/kbuicuong/rn_aora',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/videoApp.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'This website!',
        desc: 'A portfolio website that showcases my skills and projects.',
        subdesc:
            'It is built with React (Vite), TailwindCSS, and Three.js. The website is fully responsive and optimized for performance.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/three.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Openvault LLC',
        pos: 'Software Engineer',
        duration: 'Sept. 2022 - Dec. 2024',
        title: "I developed frontend interfaces for a SaaS app using React and Angular, leading the migration from React to Angular. I built RESTful API endpoints with Django, ensuring smooth frontend-backend communication and optimized performance. I wrote unit tests for frontend, regression tests for backend endpoints, and collaborated with UI/UX designers on custom components. I also contributed to code reviews to improve quality and team collaboration.",
        icon: '/assets/OVLogo.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Money Map Press',
        pos: 'Frontend Developer',
        duration: 'June 2019 - Aug. 2022',
        title: "I led a frontend overhaul using React, GraphQL, and WordPress, enhancing UX and functionality. I developed custom WordPress plugins, integrated third-party apps like Blueshift and Thinkific, and converted Adobe XD designs into responsive interfaces. I also built automation solutions, implemented testing frameworks, and optimized landing pages. Additionally, I modernized legacy code, maintained technical documentation, and used Google Analytics to drive user engagement.",
        icon: '/assets/mmpLogo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Covalent Activewear',
        pos: 'Web Developer',
        duration: 'Aug. 2016 - June 2019',
        title: "I created responsive landing pages with Magento CMS, HTML, CSS, and JavaScript, and developed custom Magento modules using PHP. I integrated third-party extensions, designed email templates for targeted campaigns with Mailchimp, and optimize site performance with Google Analytics and SEO. I also edit product images with Photoshop and maintain code using Git.",
        icon: '/assets/covalentLogo.png',
        animation: 'salute',
    },
];
