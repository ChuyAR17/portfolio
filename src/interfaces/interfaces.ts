export interface SchoolInterface {
  title: string;
  imgUrl: string;
  schoolName: string;
  website?: string;
}

export interface ProjectInterface {
  name: string;
  description: string;
  imgUrl: string;
  github: string;
  web: string;
}

export interface WorkPlaceInterface {
  jobPosition: string;
  companyName: string;
  year: string;
}

export interface SocialInterface {
  title: string;
  name: string;
  url: string;
}