import { workCardInterface } from "../types/ourWorks";

import zenithFitnessAppImageSmall from "/our_works/zenith-fitness-app-small.png";
import zenithFitnessAppImageLarge from "/our_works/zenith-fitness-app-large.png";
import auraEcommerceImageSmall from "/our_works/a-aura-ecommerce-small.png";
import auraEcommerceImageLarge from "/our_works/a-aura-ecommerce-large.png";
import WorkCard from "../components/our_works/WorkCard";

import teamMemberOne from "/our_works/team-member-1.png";
import teamMemberTwo from "/our_works/team-member-2.png";
import teamMemberThree from "/our_works/team-member-3.png";
import teamMemberFour from "/our_works/team-member-4.png";
import teamMemberFive from "/our_works/team-member-5.png";

export const ourWorksList: workCardInterface[] = [
  {
    summary: {
      title: "Zenith Fitness App",
      description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance",
      link: "#",
      badges: [
        {
          title: "Category",
          value: "Mobile App Development",
        },
        {
          title: "Time Taken",
          value: "6 months",
        },
      ],
    },
    details: {
      technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      teamImages: [teamMemberFive, teamMemberFour, teamMemberThree],
    },
    image: {
      small: zenithFitnessAppImageSmall,
      large: zenithFitnessAppImageLarge,
    },
  },
  {
    summary: {
      title: "A-Aura Ecommerce",
      description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      link: "#",
      badges: [
        {
          title: "Category",
          value: "Web Design & Development",
        },
        {
          title: "Time Taken",
          value: "3 months",
        },
      ],
    },
    details: {
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      teamImages: [teamMemberOne, teamMemberTwo, teamMemberThree],
    },
    image: {
      small: auraEcommerceImageSmall,
      large: auraEcommerceImageLarge,
    },
  },
];

export const ourWorksElements = ourWorksList.map((work, index) => <WorkCard key={index} data={work} />);
