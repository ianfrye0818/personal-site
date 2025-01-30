import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string;
  bulletPoints: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  videoUrl?: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
};
