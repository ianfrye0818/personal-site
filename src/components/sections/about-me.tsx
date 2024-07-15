import Image from 'next/image';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';
import FullBodyImage from '/public/images/ian-full-body.jpeg';

const AboutMeSection = () => {
  return (
    <Container
      className='bg-gray-50'
      id='about'
    >
      <div className='self-center'>
        <Tag label='About me' />
      </div>

      <div className='flex w-full flex-col justify-between gap-12 md:flex-row'>
        {/* Image */}
        <div className='flex justify-center md:order-first md:justify-end'>
          <div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
            <Image
              src={FullBodyImage}
              alt='Fullpose of Ian'
              className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
          </div>
        </div>

        {/* Content */}
        <div className='flex max-w-xl flex-col gap-6'>
          <Typography variant='h3'>Curious about me? Here you have it:</Typography>
          <Typography>
            I&apos;m a passionate Web Developer who specializes in full stack development using
            technologies like React, NodeJS, Express, and NextJS. I thrive on bringing the technical
            and visual aspects of digital products to life, with a strong focus on user experience,
            pixel-perfect design, and writing clear, readable, highly performant code.
          </Typography>
          <Typography>
            Since beginning my journey as a web developer in 2023, I have grown and evolved by
            taking on new challenges and learning the latest technologies. I&apos;ve built several
            full stack projects with real-world applications, including a kudo sharing app for
            workplaces and a real-time polling app for presentations and general use. I&apos;m eager
            to create more cutting-edge web applications using modern technologies such as Next.js,
            TypeScript, TailwindCSS, PostgreSQL, and more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products end to end, from
            ideation all the way to development.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me hiking 🥾, spending time
            with my family 🧑‍🧑‍🧒‍🧒, or riding roller coasters 🎢. You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              Linked In
            </Link>{' '}
            for tech-related insights and to see my projects in progress, or you can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
            <ul className='flex list-inside list-disc flex-col gap-2'>
              <Typography component='li'>Full time freelancer</Typography>
            </ul>
            <ul className='flex list-inside list-disc flex-col gap-2'>
              <Typography component='li'>Avid learner</Typography>
            </ul>
          </div>
          <Typography>
            I&apos;m available for work and open to remote or relocation opportunities! Feel free to
            reach out and say hello—I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
