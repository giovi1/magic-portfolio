import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Giovanni",
  lastName: "Panella",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer | PhD student",
  avatar: "/images/avatar.jpg",
  email: "panellagnni@gmail.com",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Italian", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I'm a PhD candidate at the University of Naples Federico II. 
      My research focuses on developing AI-powered applications for precision agriculture,
      aiming to enhance crop health monitoring and promote sustainable farming practices.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/giovi1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/giovannipanella/",
  },
  {
    name: "Google Scholar",
    icon: "googleScholar",
    link: "https://scholar.google.com/citations?user=NkoSWDAAAAAJ",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:panellagnni@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Giovanni Panella</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm a PhD candidate at the University of Naples Federico II. My research focuses on developing AI-powered applications for precision agriculture, aiming to enhance crop health monitoring and promote sustainable farming practices.

    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
  I'm a PhD candidate at the University of Naples Federico II. My research focuses on developing AI-powered applications for precision agriculture, aiming to enhance crop health monitoring and promote sustainable farming practices.      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "University of Naples Federico II & CNR (Italian National Research Council)",
        timeframe: "2023 - 2026",
        role: "PhD Candidate",
        achievements: [
          <>
            Researching and developing AI models for precision agriculture applications based on Bioristor sensor.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/unina.jpg",
            alt: "Once UI Project",
            width: 10,
            height: 10,
          },
          {
            src: "/images/projects/project-01/logo_CNR_compatto.png",
            alt: "Once UI Project",
            width: 16,
            height: 10,
          },
        ],
      },
      {
        company: "Pi Campus",
        timeframe: "2024-2025",
        role: "Pi School of AI | AI Fellow",
        achievements: [
          <>
            Full €12.500 scholarship recipient
          </>,
          <>
            Developed LLM-based contract drafting system          
          </>,
          <>
            Collaborated with global engineering team
          </>,
          <>
            Project-based AI school taught by experts from world-leading AI companies such as OpenAI, Google, Meta and sponsored by Translated.
          </>
        ],
        images: [
          {
            src: "/images/projects/project-01/pischool.jpg",
            alt: "Pi Campus Project",
            width: 16,
            height: 10,
          },
        ],
      },
      {
        company: "University of Modena and Reggio Emilia",
        timeframe: "2019",
        role: "Msc in Computer Science",
        achievements: [
          <>
            Thesis on Human Action Recognition
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/unimore.jpg",
            alt: "unimore",
            width: 10,
            height: 10,
          },
        ],
      },
    ],
  },
  beyondAI: {
    display: true, // set to false to hide this section
    title: "Beyond AI",
    description: (
      <>
        When I'm not working on AI research and development, I enjoy exploring other interests and activities that keep me balanced and inspired.
      </>
    ),
    interests: [
      {
        title: "My Hometown",
        description: (
          <>
            Born and raised in the beautiful city of Reggio Calabria,
            where the Mediterranean Sea meets the mountains. The city's rich history, stunning architecture, and vibrant culture have shaped who I am today.
            From the famous Riace Bronzes to the breathtaking views of the Strait of Messina, Reggio Calabria is truly a gem of southern Italy.
          </>
        ),
        images: [
          {
            src: "/images/gallery/reggio1.jpg",
            alt: "Reggio Calabria",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/reggio2.jpg",
            alt: "Reggio Calabria",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/reggio3.jpg",
            alt: "Reggio Calabria",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/reggio4.jpg",
            alt: "Reggio Calabria",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Photography",
        description: <>Capturing moments and exploring through the lens.</>,
        images: [
          {
            src: "/images/gallery/isole1.jpeg",
            alt: "isole1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/isole2.jpeg",
            alt: "isole2",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Playing trumpet",
        description: <>Former trumpet player with the Orchestra of Reggio Calabria, having performed under the legendary Maestro Riccardo Muti. I hold a degree from the conservatory, which has greatly enhanced my musical expertise. 🎺 🎵</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
