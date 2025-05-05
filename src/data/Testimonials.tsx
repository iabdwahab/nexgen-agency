import TestimonialCard from "../components/testimonials/TestimonialCard";
import personOne from "/people/person-1.png";
import personTwo from "/people/person-2.png";
import personThree from "/people/person-3.png";
import personFour from "/people/person-4.png";

export const testimonialsList = [
  {
    author: "wade warren",
    position: "CEO of BlueBloom",
    title: "NexGen turned our business around!",
    testimonial: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    image: personOne,
    link: "#",
  },
  {
    author: "john doe",
    position: "art director",
    title: "Working with NexGen was a pleasure.",
    testimonial: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    image: personTwo,
    link: "#",
  },
  {
    author: "walter white",
    position: "CEO Of HealthTech",
    title: "NexGen turned our business around!",
    testimonial: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    image: personThree,
    link: "#",
  },
  {
    author: "michael doe",
    position: "COO of Foodie Haven",
    title: "NexGen's web design brought our vision",
    testimonial: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
    image: personFour,
    link: "#",
  },
];

export const testimonialsElements = testimonialsList.map((testimonial, index) => <TestimonialCard key={index} data={testimonial} />);
