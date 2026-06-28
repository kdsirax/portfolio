export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "NGINX"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Qdrant"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Git", "Docker", "Apache Kafka", "AWS", "Postman", "CI/CD"],
  },
  {
    label: "Gen AI",
    skills: [
      "RAG Pipelines",
      "Vector Databases",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
];
