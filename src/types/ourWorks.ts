export interface workCardInterface {
  summary: workCardSummaryInterface;
  details: workCardDetailsInterface;
  image: workCardImageInterface;
}

export interface workCardImageInterface {
  small: string;
  large: string;
}

export interface workCardDetailsInterface {
  technologies: string[];
  teamImages: string[];
}

export interface workCardSummaryInterface {
  title: string;
  description: string;
  link: string;
  badges: {
    title: string;
    value: string;
  }[];
}
