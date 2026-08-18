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
      "A controlled operations lab for reproducing failures, watching signals change, and validating recovery behavior instead of treating observability as a static dashboard.",
    outcome: "Failure injection, telemetry, alerts, and recovery in one reproducible environment.",
    stack: ["Python", "Prometheus", "Grafana", "Docker"],
    href: "https://github.com/jagarkarlo/portfolio-ops-lab",
    visual: "reliability",
  },
  {
    number: "02",
    title: "GitLab Jira Context MCP",
    category: "AI-assisted operations",
    summary:
      "A TypeScript MCP server that gives an AI coding assistant a focused view of GitLab, Jira, and Confluence work through explicit, least-privilege tools.",
    outcome: "Operational context becomes queryable without turning the assistant into an unrestricted proxy.",
    stack: ["TypeScript", "MCP", "GitLab", "Jira"],
    href: "https://github.com/jagarkarlo/gitlab-jira-context-mcp",
    visual: "context",
  },
  {
    number: "03",
    title: "Azure DevOps Challenge",
    category: "Cloud delivery",
    summary:
      "A reproducible Azure VM and AKS delivery project covering Terraform, containers, Kubernetes networking, CI validation, and hardened nginx workloads.",
    outcome: "Infrastructure, workload, ingress, and validation are documented as one delivery path.",
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
      "A six-level Unity platformer expanded into a complete gameplay system with deterministic liquid rules, buoyant swimming, progressive breath pressure, and project validation.",
    outcome: "Gameplay rules, persistence, HUD behavior, and smoke tests evolve together.",
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
      "A software-defined networking lab for exploring policy enforcement and attack visibility through an OpenFlow controller and reproducible Mininet topology.",
    outcome: "ACL enforcement and DDoS signals are visible at the controller where decisions happen.",
    stack: ["Python", "Ryu", "OpenFlow", "Mininet"],
    href: "https://github.com/jagarkarlo/SDN-security-aspects",
    visual: "security",
  },
  {
    number: "06",
    title: "PC Status Monitor",
    category: "Resilient tooling",
    summary:
      "A desktop status monitor shaped around resilient polling, bounded retries, cached state, and readable degradation when remote checks do not answer cleanly.",
    outcome: "The interface keeps useful state visible while network conditions change underneath it.",
    stack: ["TypeScript", "Desktop", "Monitoring", "CI"],
    href: "https://github.com/jagarkarlo/pc-status-monitor",
    visual: "desktop",
  },
];