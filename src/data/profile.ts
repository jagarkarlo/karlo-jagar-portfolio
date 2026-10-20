export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export type AcademicProject = {
  title: string;
  institution: string;
  period: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const profile = {
  summary:
    "I am a DevOps engineer at SICK Mobilisis and a master's student in Business Systems Organization at FOI (University of Zagreb). My work focuses on cloud-native platforms, GitOps delivery, observability, disaster-recovery verification, and local-first developer tooling — including my master's thesis project Nostekon, which proves Kubernetes and PostgreSQL recovery across V0–V4 verification levels rather than trusting a Completed backup status.",
  perspective:
    "A six-month Erasmus+ exchange at the Faculty of Engineering in Porto (FEUP) shaped how I approach unfamiliar engineering problems, distributed teamwork, and clear technical writing. Across my public repositories — from Nostekon, OpsBench, ContextLoom MCP, and raywhy to DashDrift, SDN security labs, and my BSc Unity thesis QuantumQuarry — I build systems where behaviour, failure modes, and recovery can be measured and verified.",
  experience: [
    {
      title: "DevOps Engineer",
      organization: "SICK Mobilisis",
      period: "Apr 2026 - Present",
      description:
        "Operating Kubernetes and cloud platforms, GitOps delivery with Argo CD and Terraform, Prometheus/Grafana/Loki observability stacks, and AI-assisted operational workflows.",
    },
    {
      title: "Software Engineer",
      organization: "SICK Mobilisis",
      period: "Dec 2025 - Apr 2026",
      description:
        "Developed backend and platform services, CI/CD automation, and containerized workloads before transitioning into a dedicated DevOps and platform engineering role.",
    },
    {
      title: "Information Desk Associate",
      organization: "ABM Facility Management",
      period: "Jul 2023 - Dec 2025",
      description:
        "Supported visitors at the Supernova information desk while completing university studies.",
    },
    {
      title: "Practical Work",
      organization: "APIS IT",
      period: "Apr 2024",
      description:
        "Completed hands-on enterprise IT and software systems practicum.",
    },
    {
      title: "Website Maintenance",
      organization: "Croatian Audiovisual Centre",
      period: "Mar 2022 - Jan 2023",
      description:
        "Maintained web content, publishing workflows, and site updates.",
    },
  ] satisfies TimelineItem[],
  education: [
    {
      title: "Master's degree in Business Systems Organization",
      organization: "Faculty of Organization and Informatics, University of Zagreb",
      period: "Sep 2025 - Present",
      description:
        "Master's thesis research: Nostekon — verifiable Kubernetes + PostgreSQL disaster-recovery drills (V0–V4) and revocation-aware recovery verification (Nostekon Guard).",
    },
    {
      title: "Bachelor's degree in Information and Business Systems",
      organization: "Faculty of Organization and Informatics, University of Zagreb",
      period: "Sep 2021 - Sep 2025",
      description:
        "Bachelor's thesis: 'Izrada retro platformera u programskom alatu Unity' (QuantumQuarry), mentored by Mladen Konecki.",
    },
    {
      title: "Erasmus+ exchange",
      organization: "Faculty of Engineering, University of Porto",
      period: "Feb 2025 - Jul 2025",
      description:
        "Completed engineering coursework in computer graphics, distributed systems, and collaborative software development in Porto, Portugal.",
    },
    {
      title: "Electronics Technician",
      organization: "Technical School Ruder Boskovic, Zagreb",
      period: "Sep 2017 - Jul 2021",
    },
  ] satisfies TimelineItem[],
  academicProjects: [
    {
      title: "Firefighting helicopter scene",
      institution: "Faculty of Engineering, University of Porto",
      period: "Feb 2025 - Jun 2025",
      description:
        "Team-built interactive 3D firefighting scene with object modelling, animation, shaders, and keyboard interaction.",
      stack: ["JavaScript", "WebCGF", "3D graphics", "Team project"],
      links: [
        {
          label: "Source",
          href: "https://github.com/jagarkarlo/Faculty-of-Engineering/tree/main/Computer%20Graphics",
        },
      ],
    },
    {
      title: "CTRL+ESCAPE: Back to the Start",
      institution: "Faculty of Organization and Informatics",
      period: "Mar 2024 - Jun 2024",
      description:
        "Augmented-reality game project combining web technologies, Python, and 3D asset work.",
      stack: ["Blender", "HTML", "CSS", "JavaScript", "Python"],
    },
    {
      title: "Space Conquerors",
      institution: "Faculty of Organization and Informatics",
      period: "Mar 2024 - Jun 2024",
      description: "Collaborative game and companion-app prototype designed in Figma.",
      stack: ["Figma", "Prototyping", "Team project"],
    },
    {
      title: "International cuisine restaurant prototype",
      institution: "Faculty of Organization and Informatics",
      period: "Mar 2024 - Jun 2024",
      description: "Team-designed restaurant application prototype carried into a responsive web interface.",
      stack: ["Figma", "HTML", "CSS", "Bootstrap"],
      links: [
        {
          label: "Source",
          href: "https://github.com/jagarkarlo/Faculty-of-Organization-and-Informatics/tree/main/Prototype%20of%20the%20international%20cuisine%20restaurant%20application",
        },
      ],
    },
    {
      title: "Cleaning service work tracker",
      institution: "Faculty of Organization and Informatics",
      period: "Mar 2023 - Jun 2023",
      description: "Individual Windows Forms application supported by use-case modelling.",
      stack: ["C#", "Windows Forms", "Use cases"],
      links: [
        {
          label: "Source",
          href: "https://github.com/jagarkarlo/Faculty-of-Organization-and-Informatics/tree/main/Software%20Engineering",
        },
      ],
    },
    {
      title: "Children's sports activity finder",
      institution: "Faculty of Organization and Informatics",
      period: "Mar 2023 - Jun 2023",
      description: "Collaborative Figma prototype for helping families discover children's sports activities.",
      stack: ["Figma", "UX prototyping", "Team project"],
    },
  ] satisfies AcademicProject[],
  recognition: [
    {
      title: "Rector's Award",
      organization: "University of Zagreb",
      period: "Nov 2024",
      description:
        "Recognized for contributing to Green Step Forward: Sustainable Development Days.",
    },
    {
      title: "Student Assembly",
      organization: "Faculty of Organization and Informatics, University of Zagreb",
      period: "Feb 2023 - Feb 2025",
      description:
        "Represented student interests and contributed to student events, discussions, and decision-making.",
    },
    {
      title: "Faculty volunteer",
      organization: "Faculty of Organization and Informatics",
      period: "Dec 2023",
    },
  ] satisfies TimelineItem[],
  certifications: [
    { title: "Java Masterclass 2025: 130+ Hours of Expert Lessons", issuer: "Udemy", date: "Jul 2025" },
    { title: "Elements of AI", issuer: "University of Helsinki", date: "Feb 2023" },
  ],
  languages: [
    { language: "Croatian", level: "Native" },
    { language: "English", level: "B2" },
  ],
};