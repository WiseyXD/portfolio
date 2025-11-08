// resume filimport { Icons } from "@/components/icons";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Nagbanshi",
  initials: "AR",
  url: "https://replacewithyourportfolio.com",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Software Engineer. I love building things and helping people. You can find me in the terminal sshing in to my home server.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [won 2 hackathons over numerous hackathons I participated in](/#hackathons). I also had the pleasure of being a founding engineer at an AI based startup AISOLO [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "AI",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aryan.s.nag@gmail.com",
    tel: "+91 9372779529",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/WiseyXD",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aryan-nagbanshi-9109911b5",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AryanNagbanshi",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "aryan.s.nag@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AISOLO",
      href: "https://olly.social",
      badges: [],
      location: "India",
      title: "Software Engineer",
      logoUrl: "/atomic.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Hira Coach",
      href: "https://olly.social",
      badges: [],
      location: "India",
      title: "Software Developer Intern",
      logoUrl: "/atomic.png",
      start: "Feb 2023",
      end: "Aug 2023",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },

    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Mumbai University",
      href: "https://mu.ac.in/",
      degree:
        "Bachelor's Degree of Computer Science with Specialization in AI/ML (CSE-AMIL)",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Presentation convent school",
      href: "https://wlu.ca",
      degree: "Primary and Secondary Education",
      logoUrl: "/laurier.png",
      start: "2008",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Revns",
      href: "https://www.revns.com/",
      dates: "Dec 2024 - Apr 2025",
      description:
        "World's first AI agent to manage and optimize your Amazon ads in real-time",
      active: true,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "LangChain",
        "Bun.js",
        "ExpressJS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.revns.com/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "/waterloo.png",
      video: "/revns.mp4",
    },
    {
      title: "SCEMask",
      href: "https://lucia-auth-psi-one.vercel.app",
      dates: "Apr 2024 - Oct 2024",
      description:
        "A social-media platform where students can anonymously share their experiences and connect with like-minded individuals.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      links: [
        {
          type: "Website",
          href: "https://lucia-auth-psi-one.vercel.app",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Github",
          href: "https://github.com/WiseyXD/sce-mask",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/waterloo.png",
      video: "/revns.mp4",
    },
    {
      title: "Vision to Furniture",
      href: "https://vision-to-furniture-v2.vercel.app/",
      dates: "July 2024 - Aug 2024",
      description:
        "An AI platform that helps users find the perfect furniture piece based on their preferences and budget.",
      technologies: [
        "NextJS",
        "Python",
        "BeautifulSoup",
        "Blender",
        "ExpressJS",
        "Node.js",
        "PostgreSQL",
        "OpenAI",
        "Zustand",
        "AWS EC2",
      ],
      links: [
        {
          type: "Website",
          href: "https://vision-to-furniture-v2.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Github",
          href: "https://github.com/WiseyXD/visionToFurniture-V2",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/waterloo.png",
      video: "/revns.mp4",
    },
    {
      title: "Apurti",
      description: "An intelligent Warehouse Management System",
      href: "https://apurti-iwms.vercel.app/",
      dates: "Jan 2025 - May 2025",
      technologies: [
        "NextJS",
        "Vercel AI SDK",
        "Zustand",
        "Bun.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://apurti-iwms.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Github",
          href: "https://github.com/WiseyXD/Apurti-IWMS",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/waterloo.png",
      video: "/revns.mp4",
    },
  ],
  hackathons: [
    {
      title: "Nirman",
      dates: "February 14th - 16th  2023",
      location: "Mumbai, India",
      description:
        "Developed an alumni network for students to anoynomously share their experiences and connect with like-minded individuals.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Nasa Space Apps Challenge",
      dates: "October 7th - 8th, 2023",
      location: "Chandigarh, India",
      description:
        "Developed an web application 'HitHub' that is a github clone for hardware engineers to collaborate on hardware projects.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Quasar 2.0 Hackathon",
      dates: "March 8th - 9th, 2024",
      location: "Mumbai , India",
      description:
        "Developed an online testing app that enables students to take online tests while an AI is proctoring the exam.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Nirman 2.0",
      dates: "May 3rd - 4th, 2024",
      location: "Mumbai, India",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
  // Adding personal info data from data.ts
  personalInfo: {
    name: "Aryan Nagbanshi",
    profileImage: "https://github.com/shadcn.png",
    title: "Software Engineer",
    bio: "Building SaaS products and AI apps.",
    email: "aryan.s.nag@gmail.com",
    github: "https://github.com/WiseyXD",
    twitter: "https://x.com/AryanNagbanshi",
    linkedin: "www.linkedin.com/in/aryan-nagbanshi-9109911b5",
    status: "Cooking with claude",
  },
} as const;
