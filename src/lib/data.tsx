import { Github, Twitter, Linkedin } from 'lucide-react';

import LogoTheResource from '/public/images/logos/logo-the_resource.png';
import LogoTheResourceDark from '/public/images/logos/logo-the_resource_dark.png';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoSpringBoot from '/public/images/logos/logo-springboot.svg';
import LogoDotNet from '/public/images/logos/logo-dotnet.svg';
import LogoCSharp from '/public/images/logos/logo-csharp.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoPrisma from '/public/images/logos/icon-prisma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoLinux from '/public/images/logos/logo-linux.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoNestJS from '/public/images/logos/icon-nest.svg';
import LogoFlutter from '/public/images/logos/icon-flutter.svg';
import LogoDart from '/public/images/logos/icon-dart.svg';
import LogoGithub from '/public/images/logos/icon-github.svg';
import LogoSpectrum from '/public/images/logos/logo-spectrum.svg';
import LogoSheetz from '/public/images/logos/logo-sheetz.svg';
import QualityOilLogo from '/public/images/logos/quality_oil_logo.png';
import ProjectQuizzical from '/public/images/project-quizzical.png';
import ProjectAbodeHunt from '/public/images/project-abodehunt.png';
import ProjectVanLife from '/public/images/project-vanlife.png';
import ProjectPulseVote from '/public/images/project-pulseVote.png';
import ProjectPraisePal from '/public/images/project-praisePal.png';
import ProjectResumeBuilder from '/public/images/project-resume-builder.png';
import ProjectJavaEmpMgmnt from '/public/images/project-java-emp-mgmnt.png';

import {
  ContactInfo,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

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
  {
    label: 'Spring Boot',
    logo: LogoSpringBoot,
    url: 'https://spring.io/projects/spring-boot',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/',
  },
  {
    label: 'C#',
    logo: LogoCSharp,
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    label: '.NET',
    logo: LogoDotNet,
    url: 'https://dotnet.microsoft.com/',
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Java Swing Employee Management System',
    description:
      'A simple employee management system built with Java Swing. It allows you to add, edit, and delete employees. It also allows you to search for employees by social security number.',
    previewImage: ProjectJavaEmpMgmnt,
    technologies: ['Java', 'Swing', 'Derby'],
    url: 'https://github.com/ianfrye0818/JavaSwingEmployeeMgmnt',
    videoUrl: 'https://youtu.be/hYMeTCeOvKE',
  },
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
    videoUrl: 'https://youtu.be/72P5Z6azshk?si=CZVnaConIEDOl_7m',
  },
  {
    name: 'Resume Builder',
    description:
      'A platform for formatting resumes into a standard format. It also enhances and optimizes the resume for the job you are applying for.',
    previewImage: ProjectResumeBuilder,
    technologies: ['React', 'Typescript', 'Tailwindcss', 'ShadCnUI', 'Google Gemini', 'Vercel'],
    videoUrl: 'https://youtu.be/K5TW1nsONyo',
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
    logo: QualityOilLogo,
    darkModeLogo: QualityOilLogo,
    logoAlt: 'Quality Oil Company',
    position: 'Full Stack Developer',
    startDate: new Date('2024-09-30'),
    currentlyWorkHere: true,
    summary:
      'I am a passionate full-stack software developer with extensive experience building robust web applications and managing full project lifecycles. I’ve worked on key projects that optimize business processes for both internal teams and clients. My technical expertise spans across various tech stacks and databases, with a focus on delivering seamless and efficient solutions. I also contribute to IT administration and data-driven reporting.',

    bulletPoints: [
      'Lead development and project management for CRM, ERP, and Ticketing Systems. ',
      'Work closely with executives and stakeholders to deliver high-quality software solutions.',
      'Conduct weekly stakeholder meetings to present progress updates and design changes.',
      'Utilize SQL Server, Postgres, and MySQL for business intelligence and executive reporting',
    ],
  },
  {
    logo: LogoTheResource,
    darkModeLogo: LogoTheResourceDark,
    logoAlt: 'The Resource',
    position: 'IT Admin/Recruiter',
    startDate: new Date('2022-07-01'),
    endDate: new Date('2025-09-30'),
    currentlyWorkHere: false,
    summary: '',
    bulletPoints: [
      'Successfully matched candidates with client job requirements, enhancing hiring outcomes.',
      'Streamlined onboarding processes and maintained documentation for new hires.',
      'Fostered strong client and candidate relationships to enhance collaboration and trust.',
      'Identified process gaps and implemented innovative solutions to improve operational efficiency.',
      'Provided IT support and developed strategies to align technology with business objectives',
    ],
  },
  {
    logo: LogoSpectrum,
    logoAlt: 'Spectrum',
    position: 'Low Voltage Technician',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2022-07-01'),
    summary: '',
    bulletPoints: [
      'Installed and maintained networking and communication systems, ensuring reliable connectivity.',
      'Delivered exceptional customer service and resolved issues promptly.',
      'Analyzed and troubleshot broadband network problems, optimizing performance and functionality.',
      'Adhered to safety protocols and engaged in continuous learning of emerging technologies.',
    ],
  },
  {
    logo: LogoSheetz,
    logoAlt: 'Sheetz',
    position: 'HVAC Technician',
    startDate: new Date('2020-07-01'),
    endDate: new Date('2021-09-01'),
    summary: '',
    bulletPoints: [
      'Diagnosed and repaired HVAC and refrigeration systems, optimizing costs and resources.',
      'Communicated effectively with management regarding equipment status and repairs.',
      'Managed inventory to ensure parts availability and performed regular equipment inspections.',
      'Achieved 608 Universal Certification for compliance with refrigerant regulations.',
    ],
  },
  {
    logo: LogoSheetz,
    logoAlt: 'Sheetz',
    position: 'Kitchen Manager',
    startDate: new Date('2014-09-01'),
    endDate: new Date('2020-07-01'),
    summary: '',

    bulletPoints: [
      'Led recruitment and training of new staff, enhancing team integration and performance.',
      'Managed a diverse team of 20-30, promoting a positive work environment and operational efficiency.',
      'Ensured compliance with health regulations and maintained high food safety standards.',
      'Developed financial reports, implemented cost-control measures, and drove sales initiatives.',
      'Coordinated team-building events and special projects to foster collaboration and communication.',
    ],
  },
];
export const TESTIMONIALS: TestimonialDetails[] = [];

export const CONTACT_INFO: ContactInfo = {
  email: 'ianfrye.dev@gmail.com',
  phone: '336-618-7663',
  city: 'Winston Salem',
  state: 'North Carolina',
};
