import ReasonCard from "../components/reasons_to_choose/ReasonCard";

export const reasonsToChooseList = [
  {
    title: "Expertise in Cutting-Edge Technologies",
    description: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing top-notch performance and security.",
    link: "#",
  },
  {
    title: "Proven Track Record of Success",
    description: "With a portfolio of successful projects, we have established ourselves as a trusted partner in the digital landscape.",
    link: "#",
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize your needs and work closely with you to deliver tailored solutions that meet your specific requirements.",
    link: "#",
  },
  {
    title: "dedicated team of professionals",
    description: "Our team of experts is committed to delivering high-quality results, ensuring your projects are in capable hands.",
    link: "#",
  },
];

export const reasonsToChooseElements = reasonsToChooseList.map((reason, index) => <ReasonCard key={index} {...reason} />);
