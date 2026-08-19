export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  stack: string[];
  href: string;
  visual: "reliability" | "context" | "architecture" | "game" | "security" | "desktop";
  image?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Reliability Replay",
    category: "Observable systems",
    summary:
      "A local operations lab for injecting service failures and observing the resulting metrics, logs, alerts, and recovery.",
    outcome: "Includes failure scenarios, Prometheus metrics, Grafana dashboards, and recovery checks.",
    stack: ["Python", "Prometheus", "Grafana", "Docker"],
    href: "https://github.com/jagarkarlo/portfolio-ops-lab",
    visual: "reliability",
  },
  {
    number: "02",
    title: "GitLab Jira Context MCP",
    category: "AI-assisted operations",
    summary:
      "A TypeScript MCP server that exposes selected GitLab, Jira, and Confluence data to coding assistants.",
    outcome: "Uses explicit read-focused tools and limited API permissions.",
    stack: ["TypeScript", "MCP", "GitLab", "Jira"],
    href: "https://github.com/jagarkarlo/gitlab-jira-context-mcp",
    visual: "context",
  },
  {
    number: "03",
    title: "Azure DevOps Challenge",
    category: "Cloud delivery",
    summary:
      "An Azure infrastructure project that provisions a VM and AKS environment with Terraform and deploys containerized workloads.",
    outcome: "Covers infrastructure, Kubernetes networking, ingress, and CI validation.",
    stack: ["Azure", "Terraform", "Kubernetes", "Docker"],
    href: "https://github.com/kjagar21/devops-challenge",
    visual: "architecture",
    image: "images/azure-traffic-flow.png",
  },
  {
    number: "04",
    title: "QuantumQuarry",
    category: "Game systems",
    summary:
      "A six-level Unity platformer with liquid physics, swimming, breath management, saved progress, and a gameplay HUD.",
    outcome: "Built in C# with automated project validation and smoke tests.",
    stack: ["Unity", "C#", "2D physics", "Validation"],
    href: "https://github.com/jagarkarlo/quantum-quarry",
    visual: "game",
    image: "images/quantum-quarry.png",
  },
  {
    number: "05",
    title: "SDN Security Aspects",
    category: "Network security",
    summary:
      "A software-defined networking lab using Ryu, OpenFlow, and Mininet to test access-control rules and DDoS detection.",
    outcome: "The controller records policy decisions and traffic signals from a repeatable topology.",
    stack: ["Python", "Ryu", "OpenFlow", "Mininet"],
    href: "https://github.com/jagarkarlo/SDN-security-aspects",
    visual: "security",
  },
  {
    number: "06",
    title: "PC Status Monitor",
    category: "Resilient tooling",
    summary:
      "A desktop status monitor for checking remote services with timed polling, bounded retries, and cached results.",
    outcome: "Keeps the last known state visible when a remote check fails.",
    stack: ["TypeScript", "Desktop", "Monitoring", "CI"],
    href: "https://github.com/jagarkarlo/pc-status-monitor",
    visual: "desktop",
  },
];