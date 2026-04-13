// resume filimport { Icons } from "@/components/icons";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Lightbulb, LightbulbIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Nagbanshi",
  initials: "AR",
  url: "https://replacewithyourportfolio.com",
  location: "Dresden, Germany",
  locationLink: "https://www.google.com/maps/place/dresden",
  description:
    "I build scalable systems and AI-powered products.Usually hopping from one tmux session to another, now chasing ideas worth turning into something big.",
  summary:
    "Full-Stack Developer and MSc Computer Science student at TU Dresden, working across backend systems, DevOps, and AI-driven applications. Previously, [I led backend and infrastructure at AISOLO](#experience), building production systems and shipping features that improved real user metrics. I’ve [won global and national hackathons including NASA Space Apps and Quasar](#hackathons), and also have a Springer publication in AI-based recommendation systems. I enjoy [turning complex ideas into systems that actually run in production](#projects).",
  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "React",
    "Next.js",
    "LLM's",
    "Node.js",
    "Postgres",
    "Redis",
    "Docker",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/hackathon", icon: LightbulbIcon, label: "Hackathons" },

  ],
  contact: {
    email: "aryan.s.nag@gmail.com",
    tel: "+49 15123865499",
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
      href: "https://aisolo.tech",
      badges: [],
      location: "India",
      title: "Full Stack Developer",
      logoUrl: "/aisolo2.svg",
      start: "Dec 2024",
      end: "Aug 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Ural Federal University",
      href: "https://urfu.ru/en/",
      badges: [],
      location: "Russia",
      title: "Software Developer Intern",
      logoUrl: "/urfu.jpeg",
      start: "Jun 2024",
      end: "July 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Hira Coach",
      href: "https://olly.social",
      badges: [],
      location: "India",
      title: "Software Developer Intern",
      logoUrl: "/hira.png",
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
      school: "Technische Universität Dresden",
      href: "https://www.tu-dresden.de/",
      degree: "Master of Science in Computer Science",
      logoUrl: "/tud.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "Mumbai University",
      href: "https://mu.ac.in/",
      degree:
        "Bachelor's Degree of Computer Science with Specialization in AI/ML (CSE-AMIL)",
      logoUrl: "/mumbai-uni.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "explainx.ai",
      href: "https://www.explainx.ai/",
      dates: "Jun 2025 - Aug 2025",
      description:
        "AI RAG System with various features for modern learning.",
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
        "data:image/png;base64,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",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7qkfkJ2Vcri_qMAq93tOosNtzi3oTR8taw&s",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Victory",
          icon: <Icons.trophy className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/aryan-sanjay-nagbanshi-9109911b5_nasa-spaceappchallenge-chandigarhuniversity-activity-7117202881769816064-JKEV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADIoINwBpV09k_HUZ3tbMcx4tVd-nCzUcFw",
        }

      ],
    },
    {
      title: "Quasar 2.0",
      dates: "March 8th - 9th, 2024",
      location: "Mumbai , India",
      description:
        "Developed an online testing app that enables students to take online tests while an AI is proctoring the exam.",
      icon: "public",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEUXFxcAAAAPDw+YmJhEREQICAi0tLT29vZlZWVaWlqjo6PCwsKsrKxsbGzY2Nj8/PyOjo7///8UFBRQUFDg4ODu7u7Pz88aGho1NTUrKytLS0t4eHh+fn6dnZ0GBgZra2snNTrs6OrZZCIABhRfX18rBRL9fQCYZwZkPBMMExcADhaHTg9PNxUAFRc6CAAgAABgAAD/39X/69s3AAB5AADyiAA7OzvMDwD6VQ7RhQDS2eDdBQD/ZgD/mACygQAgHw6+NgD/sADVsAllYxR5dRJRThVDIBGnYQ7Hlwu9sAwAABhncgbMAAABWUlEQVR4AaXRA4LFMBQF0N6k9kv7bWNs27P/BU36mbFu3RNH+3fAvjCuQzOQ5QM0LRuO63l+8JYZDDuMYpokiiFUSzhgpjmfpskrdUWhWILL87l8UNYr+dcKL4VOVtULa3UGNKRWF8qcALJ84Gn5ppBlAyILynggx4HEb7U78hMhUddYaF02ZaLU6w+GI4kxUU3ptUrEIcYrq2P5ZTiyqIrTshkJUbczNNhioovhr61voEYUwy7PFXL4JZbZ5tb2jkVUROphjj5RCiZxl2jPpRCF/ZKYoUAktQiZg8P+0XEZ3FEmk5BM6Lt5/+T07LzTwYW6Z+WIpjEv+1fXN7d3I0XrcK0Jes37h8enm2fFhCGA/SAoA2LUeX7uqFYKwIQBGQFRZ5oa5gV+UizGjlMtcVFJVBUlE75vV32vWqu4sQdNDQIztms6rzZ4wp3AUEjGAAyw6Y2p9mleAIttHNmVgPfAAAAAAElFTkSuQmCC",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/WiseyXD/proctor.ai",
        },
        {
          title: "Victory",
          icon: <Icons.trophy className="h-4 w-4" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7175540616968224768/",
        }
      ],
    },
    {
      title: "Nirman 2.0",
      dates: "May 3rd - 4th, 2024",
      location: "Mumbai, India",
      description:
        "Developed an image generation application that translates furniture ideas writtent in natural language into 3D images.",
      image:
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/WiseyXD/visionToFurniture-V2",
        },
      ],
    },
    {
      title: "Mumbai Hacks",
      dates: "Ocotber 25th - 26th  2024",
      location: "Mumbai, India",
      description:
        "Developed an application that integrates AI into Slack using Large Language Models (LLMs).",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOElEQVR4AaSW05YcURSGa81cj23btm3b9lvEtu1cxsmYbxCPEdyFY+yc/6KS6ll9OjU9e61WVe39fcctyImignLNIN9YZw+n0DZnm8CHDpb+7+zNfb/bmflu4IXvuIZ77JlWPFtUUKEp7Dbyc0o0fd0jA1nh07ZmvpPWxl7rloaepOqFZ/AsclhuQH5OqXoiQT6xpi62QXttTH2+orA6L+Q62wbuRa0dwb1cwv3tLfz6rYy8tuTB+C/UQC3UlAX3cAqLsjXzeasekP9iNd+w+RH135bjwd0D+RLcnmAz1xRdJU2wMPDASz0gJ58x+sBSgB87eUCDzdq9bLwUkoO8EsjPPZbM9d13DEcOclFDKgEGWCdOH9IQxPBxiwxiM/aLtICprhvVV3bRs8fdFOAZz5HgwllOHHKpjtVALel9sMAUEJevn0brT28vgiQkr6+v06sX/RwJPvzV837kKhXAC8yrt85qCMG+cS5sN5vgC2wQoptJBIoSMuAIlstqdCoVABNsAdursh0OSUhGK8TofjlAgV7KJER4PHqLxEAuT4Ax18AWsH/zWhMblk3v342TNHpECT13PlyGAF5gC+wQeauqS3PTK2n8w6SixKtBJpGA+3/h3VK4TAGwBZxkqiaVmZ4bk6ii8Y9TJI1eSDCwv0ccgw8QYqcCYAs4TnlwqUReRhVNjCtKDA2M0WDfKEljcXGJNjc3ZQmALUNAlHCn/MxqmhyfJl5MTczQkQNn6PevRdkCnCHgSxRk1dAkA22P2el5Ksqpo+zUclr8vSh/CPiTkC9RmFVLU5P/JGYYvDS/gYy1XTBpZQuAzVmGMiSyaxl4juZmFqgkrwHLUpywsgXAFjeiNT5Q9RLNy6gWNya+AH8jauVuxTIlRLgMAc5WfPXmGelhpN5LDQEwr985p8E5jncrsAS+5DR05R3H/D8k6g5JmH8KnTlxmS6du0nnz1yn+MjcPwOJYzZIpnQx4mySUYSFwQ6BYWxNsn2IZjpmo9SYDo1SYwLNcgtbkEK6N8vp3zEh3DUTp0bXDGQGyCwyO6cRlHVONW1MwJ1TSkFYcDSse54B7Z5fw9I9v4bonjuqhRHZPQcA9HGusIaBLjUAAAAASUVORK5CYII=",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/WiseyXD/WorkPulse",
        },
      ],
    },
    {
      title: "Codecrafters 2.0",
      dates: "April 25th - 26th  2025",
      location: "Mumbai, India",
      description:
        "Developed a unified security application that integrates multiple sensor feeds into a single dashboard to monitor parameters and trigger alarms upon detecting suspicious movement.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQEW7w5Ee6InJQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708415447627?e=1777507200&v=beta&t=Xm50Ti9QaPdghNb0k2iLkH0p8kI6mWcpue7_cs99KKI",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/WiseyXD/codecrafter",
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
