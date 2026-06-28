export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "StoQ",
    subtitle: "AI Stock Intelligence Platform",
    description:
      "An AI-powered stock intelligence platform for Indian retail investors. Delivers real-time BUY/SELL/HOLD signals, RSI, MACD, and sentiment scores per stock within 5 seconds. Features a personalised news feed, ML-driven suggested stocks, and on-demand Hindi translation of financial news via MyMemory API. Secured with Google OAuth 2.0, JWT sessions, and MongoDB Atlas TTL indexing.",
    stack: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "REST APIs"],
    github: "https://github.com/kdsirax/stoq",
    demo: "https://stoq-five.vercel.app",
    featured: true,
  },
  {
    title: "Guftgu",
    subtitle: "Real-Time Messaging & P2P Video Calling",
    description:
      "Premium real-time messaging and HD video calling app. Built with native WebRTC RTCPeerConnection and Google STUN servers. Features live online presence, interactive image sharing, multi-provider Firebase Auth (Email + Google), and auto-offline on tab close.",
    stack: ["React", "Sass", "Firebase", "WebRTC"],
    github: "https://github.com/kdsirax/guftgu",
    demo: "https://guftgu-delta.vercel.app",
    featured: true,
  },
  {
    title: "Ecova",
    subtitle: "Environmental Club Management Platform",
    description:
      "Full-stack club management platform for IIIT Una's environmental club. REST APIs with JWT auth, rate limiting, and centralised error handling. Cloudinary media uploads, Redux Toolkit state management, and a responsive Next.js App Router frontend.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/kdsirax/ecova",
    demo: null,
  },
];
