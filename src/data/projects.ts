export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Azure DevOps Challenge",
    category: "Cloud delivery",
    summary:
      "A documented Azure delivery system spanning a hardened Linux VM, containerized Nginx, AKS, Traefik ingress, and Terraform infrastructure definitions.",
    outcome: "Verified with real Azure and kubectl captures, traffic-flow diagrams, Kubernetes manifests, and Terraform plans.",
    stack: ["Azure", "Terraform", "Kubernetes", "Docker"],
    href: "https://github.com/kjagar21/devops-challenge",
  },
  {
    number: "02",
    title: "SDN Security Aspects",
    category: "Network security",
    summary:
      "A Ryu and Mininet security lab that learns Layer 2 paths, enforces an SSH ACL, detects rapid port scanning, and reports events in a live dashboard.",
    outcome: "Repeatable scenarios validate connectivity, ACL drops, allowed HTTP traffic, scan detection, and installed OpenFlow rules.",
    stack: ["Python", "Ryu", "OpenFlow", "Mininet"],
    href: "https://github.com/jagarkarlo/SDN-security-aspects",
  },
  {
    number: "03",
    title: "GitLab Jira Context MCP",
    category: "AI-assisted operations",
    summary:
      "A local TypeScript MCP server connecting GitLab, Jira, Confluence, Grafana, and optional GitHub context to coding assistants.",
    outcome: "Read tools stay read-only; Jira mutations and GitHub file writes require explicit confirmation and scoped tokens.",
    stack: ["TypeScript", "MCP", "GitLab", "Jira"],
    href: "https://github.com/jagarkarlo/gitlab-jira-context-mcp",
  },
  {
    number: "04",
    title: "Reliability Replay",
    category: "Observability practice lab",
    summary:
      "A deliberately fictional local lab for injecting deterministic catalog-service faults and following the resulting operational signals through recovery.",
    outcome: "Correlates replay state with availability, p95 latency, Prometheus alerts, a Grafana dashboard, and deterministic tests.",
    stack: ["Python", "Prometheus", "Grafana", "Docker"],
    href: "https://github.com/jagarkarlo/portfolio-ops-lab",
  },
  {
    number: "05",
    title: "QuantumQuarry",
    category: "Game systems",
    summary:
      "A six-level Unity platformer with movement, combat, hazards, collectibles, store upgrades, persistent run state, and gamepad support.",
    outcome: "Includes deterministic enemy states, level-scaled swimming and breath systems, and batch project validation.",
    stack: ["Unity", "C#", "Enemy AI", "Validation"],
    href: "https://github.com/jagarkarlo/quantum-quarry",
  },
  {
    number: "06",
    title: "PC Status Monitor",
    category: "Resilient web application",
    summary:
      "An Angular and FastAPI monitor for latency, CPU, and memory using REST polling and a live WebSocket stream.",
    outcome: "Exercises simulated HTTP faults, forced disconnects, loading states, bounded history, and exponential-backoff recovery.",
    stack: ["Angular", "FastAPI", "WebSockets", "RxJS"],
    href: "https://github.com/jagarkarlo/pc-status-monitor",
  },
];