import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Octavio-Daniel Vizaru — Automation & Computer Science Student",
  author: "Octavio-Daniel Vizaru",
  description:
    "Final Year Automation & Computer Science Student at the Technical University of Cluj-Napoca. Passionate about AI and Software Development.",
  lang: "en",
  siteLogo: "/octavio-small.webp",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Licenses & Certifications", href: "#certifications" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vizaru-octavio-daniel" },
    { text: "GitHub", href: "https://github.com/notoctavio" },
    { text: "Instagram", href: "https://www.instagram.com/octavio.1312" },
  ],
  // Provide an OG image stored in /public; recommended size 1200x630
  socialImage: "/og-cover.png",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Octavio-Daniel Vizaru",
    specialty: "Junior Full-Stack Developer",
    summary:
      "Final-year Automation & CS student at UTCN focused on AI Engineering, building reliable full-stack products with practical machine learning features.",
    email: "vizaruoctavio@gmail.com",
  },
  experience: [
    {
      company: "Storyteller",
      companyUrl: "https://www.getstoryteller.com",
      position: "Junior Full-Stack Developer",
      startDate: "Dec 2025",
      endDate: "Present",
      summary: [
        "Ship end-to-end features for Storypilot and the Storyteller Web SDK, delivering production updates across content and platform workflows.",
        "Contributed 1,000+ GitHub-visible contributions across 10+ repositories, working across Next.js, TypeScript, .NET 9, SQL Server, Elasticsearch, and Azure.",
        "Resolved 300+ tickets across bugs and feature requests, improving reliability and support responsiveness for client-facing workflows.",
        "Contribute to AI Engineering and internal tooling (AI-ready repositories, agent skills/workflows) while collaborating directly with the CEO and CTO on product and technical decisions.",
      ],
    },
    {
      company: "ROMBAT",
      companyUrl: "https://www.rombat.ro",
      position: "R&D Intern",
      startDate: "July 2025",
      endDate: "Sept 2025",
      summary: [
        "Used Machine Learning and Deep Learning models to predict the Remaining Useful Life (RUL) of lead-acid batteries. Preprocessed raw laboratory data, extracted and calculated necessary features, and applied both classical ML methods and neural\n" +
          "networks.",
        "Achieved an accuracy of 90% in RUL predictions by implementing models such as Random Forest, XGBoost, LSTM, and CNN. Gained experience with technologies such as Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch.",
        "Developed Convolutional Neural Networks (CNNs) for image classification tasks.\n" +
          "Built prototype RAG-powered chatbots by integrating OpenAI APIs with Pinecone and automated workflows in n8n.",
      ],
    },
    {
      company: "Busch Gardens Tampa",
      companyUrl: "https://buschgardens.com/tampa/",
      position: "Exchange Student",
      startDate: "July 2024",
      endDate: "September 2024",
      summary: [
        "Enhanced communication, adaptability, and cross-cultural collaboration skills within an international environment.",
      ],
    },
  ],
  projects: [
    {
      name: "License Plate Recognition System",
      summary: "Automated License Plate Recognition System using Yolov8",
      problem: "Need reliable plate detection and text extraction from live video under real-world conditions.",
      built: "Built a live YOLO + EasyOCR pipeline for capture, detection, and recognition in real time.",
      impact: "Enables automated plate-reading workflows for monitoring and access-control scenarios.",
      stack: ["Python", "YOLO", "EasyOCR", "OpenCV"],
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/Live-License-Plate-Recognition-Using-Yolo-EasyOCR",
      image: "/license.webp",
    },
    {
      name: "AI RAG Airline Customer Support Chatbot",
      summary: "A Retrieval-Augmented Generation (RAG) powered chatbot for airline customer support.",
      problem: "Support teams need consistent answers for policy-heavy customer questions.",
      built: "Built a RAG assistant that retrieves relevant documents and generates context-grounded responses.",
      impact: "Improves answer consistency and reduces manual lookup for repetitive support queries.",
      stack: ["Python", "LangChain", "OpenAI API", "Pinecone"],
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/AI-Customer-Service-Chatbot",
      image: "/chatbot.webp",
    },
    {
      name: "MyGym",
      summary: "A Full-Stack Web Fitness Application with a Desktop Client for Gym Management.",
      problem: "Gym operations are fragmented across memberships, attendance, and billing tasks.",
      built: "Built a full-stack platform with web and desktop clients to centralize member and operational workflows.",
      impact: "Simplifies day-to-day management by bringing core gym processes into one integrated system.",
      stack: ["React", "Electron", "Node.js", "SQL"],
      linkPreview: "/",
      linkSource: "https://github.com/notoctavio/Gym-Membership-System",
      image: "/gym.webp",
    },
  ],
  skills: [
    {
      category: "Core Stack",
      skillsList: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", ".NET", "SQL"],
      secondarySkills: ["Java", "C++"],
    },
    {
      category: "Backend & Infrastructure",
      skillsList: [".NET 9", "SQL Server", "Elasticsearch", "Azure", "Docker", "PostgreSQL"],
      secondarySkills: ["MongoDB", "Azure Container Apps", "Azure Developer CLI", ".NET Aspire"],
    },
    {
      category: "AI Engineering & ML",
      skillsList: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "OpenAI API", "Pinecone"],
      secondarySkills: ["Pandas", "NumPy", "Hugging Face", "LlamaIndex", "LangGraph", "LangSmith", "Gemini API"],
    },
    {
      category: "Developer Tooling",
      skillsList: ["Git", "Postman", "Tailwind CSS", "Radix UI", "Vercel", "n8n"],
      secondarySkills: ["FastAPI", "Flask", "Django", "Spring Boot", "Vue.js", "Astro", "Electron", "Firebase"],
    },
  ],
  certifications: [
    {
      name: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      issueDate: "Oct 2025",
      credentialID: "j2Df5LzUQ5SHZbV4YqnMKg",
      credentialURL: "https://learn.nvidia.com/certificates?id",
    },
    {
      name: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      issueDate: "Jul 2025",
      credentialURL: "https://www.freecodecamp.org/certification/not-octavio/machine-learning-with-python-v7",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      issueDate: "Jul 2025",
      credentialURL: "https://www.credly.com/badges/c0ab251e-f918-4589-8fd9-e8c634dedc87/linked_in_profile",
    },
    {
      name: "Deep Learning Essentials",
      issuer: "IBM",
      issueDate: "Jul 2025",
      credentialURL: "https://www.credly.com/badges/7f081206-a05a-4ee4-ad80-c4b15453c748/linked_in_profile",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      issueDate: "Sep 2025",
      credentialURL: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=72AF437F98B7889008D106677F07C6FCFAD04C829C79F89007E7B6D679E59439#",
    },
    {
      name: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services",
      issueDate: "May 2025",
      credentialURL: "https://www.credly.com/badges/58c9eaca-de3d-4984-8548-d3d33ef06b14/linked_in_profile",
    },
    {
      name: "Ambient Agents with Lang-Graph",
      issuer: "LangChain",
      issueDate: "Nov 2025",
      credentialURL: "",
    },
    {
      name: "The Legend of Python",
      issuer: "Codedex",
      issueDate: "Sep 2025",
      credentialURL: "https://www.credential.net/af76cf57-ee08-42e1-9b07-97cced650e67",
    },
  ],
  about: {
    description: `
      Hi, I’m Octavio — a final-year Automation & Computer Science student at UTCN and a Junior Full-Stack Developer at Storyteller.
      I build reliable full-stack products and AI engineering workflows, from production Storypilot/Web SDK features to practical ML and RAG systems.
      I enjoy solving real user problems, shipping clean implementations, and continuously growing through hands-on collaboration.
      `,
    image: "/octavio-small1.webp",
  },
};
