import { Github, Twitter, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTheResource from '/public/images/logos/logo-the_resource.png';
import LogoTheResourceDark from '/public/images/logos/logo-the_resource_dark.png';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoPrisma from '/public/images/logos/icon-prisma.svg';
import LogoDrizzle from 'public/images/logos/logo-drizzle.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoLinux from '/public/images/logos/logo-linux.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoFireBase from '/public/images/logos/icon-firebase.svg';
import LogoNestJS from '/public/images/logos/icon-nest.svg';
import LogoFlutter from '/public/images/logos/icon-flutter.svg';
import LogoDart from '/public/images/logos/icon-dart.svg';
import LogoGithub from '/public/images/logos/icon-github.svg';
import LogoSpectrum from '/public/images/logos/logo-spectrum.svg';
import LogoSheetz from '/public/images/logos/logo-sheetz.svg';

import ProjectQuizzical from '/public/images/project-quizzical.png';
import ProjectAbodeHunt from '/public/images/project-abodehunt.png';
import ProjectVanLife from '/public/images/project-vanlife.png';
import ProjectPulseVote from '/public/images/project-pulseVote.png';
import ProjectPraisePal from '/public/images/project-praisePal.png';

import { ExperienceDetails, ProjectDetails, TechDetails, TestimonialDetails } from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'mhttps://github.com/ianfrye0818',
  GITHUB_REPO: 'https://github.com/ianfrye0818/personal-site',
  TWITTER: 'https://twitter.com/ianfrye818',
  LINKEDIN: 'https://www.linkedin.com/in/ianfrye3/',
  WIFRYE: 'https://ian.wifrye.net',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/ianfrye0818',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/ianfrye818',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ianfrye3/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'NestJs',
    logo: LogoNestJS,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },

  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },

  {
    label: 'Prisma',
    logo: LogoPrisma,
    url: 'https://www.prisma.io/',
  },
  {
    label: 'Drizzle ORM',
    logo: LogoDrizzle,
    url: 'https://orm.drizzle.team/',
  },
  {
    label: 'Firebase',
    logo: LogoFireBase,
    url: 'https://firebase.google.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: LogoGithub,
    url: 'https://github.com',
  },
  {
    label: 'Linux',
    logo: LogoLinux,
    url: 'https://www.linux.org/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Dart',
    logo: LogoDart,
    url: 'https://dart.dev/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Praise Pal',
    description:
      'This is a passion project of mine. It is a platform for sending and receiving praises and kudos between employees in a company. Long term goals are to provide a platform for companies to track and reward employees for their hard work and be a one-stop-shop for everything employee engagement.',
    previewImage: ProjectPraisePal,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'ShadCnUI',
      'Postgres',
      'NestJS',
      'Tanstack Router',
      'Tanstack Query',
    ],
    url: 'https://praise-pal.com',
    videoUrl: 'https://youtu.be/72P5Z6azshk?si=CZVnaConIEDOl_7m',
  },
  {
    name: 'Pulse Vote',
    description:
      'A real-time graphical interface for users to vote. Great for presentations, meetings, or just for fun.',
    previewImage: ProjectPulseVote,
    technologies: ['React', 'Typescript', 'Tailwindcss', 'ShadCnUI', 'Firebase', 'Vercel', 'Clerk'],
    url: 'https://pulse-vote.com',
    videoUrl: 'https://youtu.be/yrpDCgRteq0?si=sUL_tLhupU4XezOv',
  },
  {
    name: 'Abode Hunt',
    description:
      'A platform for listing and viewing properties for rent or sale. It also provides a platform for real estate agents to list their properties.',
    url: 'https://abodehunt.wifrye.net',
    previewImage: ProjectAbodeHunt,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'ShadCnUI',
      'MongoDB',
      'Styled Components',
    ],
  },
  {
    name: 'VanLife',
    description:
      'A platform for renting and viewing camping vans. It also provides a platform for van owners to list their vans for rent.',
    url: 'https://vanlife.wifrye.net',
    previewImage: ProjectVanLife,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'ShadCnUI',
      'React Query',
      'Firebase',
    ],
  },
  {
    name: 'Quizzical',
    description:
      'A fun online game for testing you knowledge. You can select by number of questions or difficulty level.',
    url: 'https://quiz.netlify.wifrye.net/',
    previewImage: ProjectQuizzical,
    technologies: ['React', 'Typescript'],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoTheResource,
    darkModeLogo: LogoTheResourceDark,
    logoAlt: 'The Resource',
    position: 'Recruiting and Process Specialist',
    startDate: new Date('2022-07-01'),
    currentlyWorkHere: true,
    summary: [
      'Serve as a direct hire recruiter placing candidates bringing in over $50,000 in revenue for the company per year.',
      'Create comprehensive documentation including training material as well as contributed to an overhaul of the recruiting process in our CRM.',
      'Create and test solutions for staffing software with integrations with Indeed and Linked in to get the best technologies for the best value.',
    ],
  },
  {
    logo: LogoSpectrum,
    logoAlt: 'Spectrum',
    position: 'Low Voltage Technician',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2022-07-01'),
    summary: [
      'Achieved less than 5% repeat rate within my first 3 months of employment.',
      'Averaged over 95% productivity - highest on my team of 10 technicians.',
      'Completed NCTI BroadBand Certified Technician within 6 months of hire.',
    ],
  },
  {
    logo: LogoSheetz,
    logoAlt: 'Sheetz',
    position: 'Kitchen Manager | HVAC Technician',
    startDate: new Date('2014-09-01'),
    endDate: new Date('2021-09-01'),
    summary: [
      'Managed a team of 20+ employees and consistently exceeded sales goals.',
      'Completed HVAC training and certification.',
      'Managed the installation of new equipment and the maintenance of current equipment.',
    ],
  },
];
export const TESTIMONIALS: TestimonialDetails[] = [];
