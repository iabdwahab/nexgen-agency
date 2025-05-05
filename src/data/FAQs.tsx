import Accordion from "../components/faqs/Accordion";
import { faqInterface } from "../types/faqs";

export const faqsList: faqInterface[] = [
  {
    question: "How long does it take to complete a web development project?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer: "Yes, we have experience in handling large-scale mobile app development projects. Our team is equipped to manage complex requirements and deliver high-quality solutions.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer: "Yes, we can integrate third-party APIs into your mobile app to enhance its functionality and provide a better user experience.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer: "We use responsive design principles and test our apps on various devices and platforms to ensure cross-platform compatibility.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer: "We prioritize user experience by conducting user research, creating wireframes, and testing prototypes to ensure that the final product meets user needs and expectations.",
  },
];

export const faqsElements = faqsList.map((faq, index) => <Accordion key={index} {...faq} />);
