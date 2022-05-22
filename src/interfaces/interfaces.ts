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
  companyWeb: string;
  year: string;
}

export interface SocialInterface {
  title: string;
  name: string;
  url: string;
}

export interface MenuInterface {
  toggleMenu: boolean;
  setToggleMenu: (toggle: boolean) => void;
}
export interface MenuOptionInterface {
  name: string;
  link: string;
  toggleMenu: boolean;
  setToggleMenu: (toggle: boolean) => void;
}