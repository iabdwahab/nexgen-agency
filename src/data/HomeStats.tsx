import StatCard from "../components/home_landing/StatCard";

export const statsList = [
  {
    title: "clients",
    value: "200+",
  },
  {
    title: "projects",
    value: "280+",
  },
  {
    title: "happy clients",
    value: "100%",
  },
  {
    title: "followers",
    value: "420k",
  },
  {
    title: "years of experience",
    value: "10+",
  },
];

export const statsElements = statsList.map((stat, index) => <StatCard key={index} {...stat} />);
