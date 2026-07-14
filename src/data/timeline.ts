export type TimelineLink = {
  kind: "github" | "linkedin" | "web";
  href: string;
};

export type TimelineMarker = "blue" | "yellow" | "green" | "red";

export type TimelineEntry = {
  title: string;
  role: string;
  description: string;
  dateRange: string;
  marker: TimelineMarker;
  links?: TimelineLink[];
  highlight?: string;
};

const markers: TimelineMarker[] = ["blue", "yellow", "green", "red"];

const entries: Omit<TimelineEntry, "marker">[] = [
  {
    title: "Cursor x AdTech Hackathon",
    role: "Hackathon",
    description: "Built Whitespace. Gather brand knowledge, generate ad copy.",
    dateRange: "May 2026",
    links: [{ kind: "github", href: "https://github.com/stephendpurdue/Whitespace" }],
  },
  {
    title: "Exodus",
    role: "Capstone Project",
    description:
      "Completed a procedurally generated dungeon crawler in Unity. Submitted as my Capstone Project for my final year of University, and released on Itch.io.",
    dateRange: "Feb - May 2026",
    links: [
      { kind: "web", href: "https://stephendpurdue.itch.io/exodus" },
      { kind: "github", href: "https://github.com/stephendpurdue/Exodus" },
    ],
  },
];

export const timeline: TimelineEntry[] = entries.map((entry, index) => ({
  ...entry,
  marker: markers[index % markers.length],
}));
