export interface JourneyEntry {
  title: string;
  org: string;
  period: string;
  type: "work" | "education";
  description?: string;
  bullets?: string[];
  logo?: string;
}

export const journeyEntries: JourneyEntry[] = [
 
  {
    title: "Software Development Intern",
    org: "Huemanx",
    period: "Feb 2026 – April 2026",
    type: "work",
    bullets: [
      "RAG-based lead scoring using Qdrant vector database; 30% accuracy improvement",
      "Kafka-based bulk pipeline supporting 10,000+ records per batch, sub-second latency",
      "Web scrapers for email discovery & Messenger data extraction; 80% reduction in manual effort",
    ],
  },
  {
    title: "B.Tech. Information Technology",
    org: "IIIT Una",
    period: "2024 – 2028",
    type: "education",
    description: "CGPA: 8.3 · Finalist, Hacksagon 2026",
    logo: "/iiitu-logo.png",
  },
  {
    title: "Senior Secondary",
    org: "JNV Jojawar (CBSE)",
    period: "2023",
    type: "education",
    description: "86.2% · AIR 96, IMU-CET 2024",
    logo: "/jnv-logo.png",
  },
];
