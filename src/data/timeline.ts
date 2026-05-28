export type TimelineLink = {
  kind: "github" | "linkedin" | "web";
  href: string;
};

export type TimelineEvent = {
  title: string;
  description: string;
  dateRange: string; // e.g. "Jan - Oct" or "Nov"
  category: string; // e.g. "Internship", "Hackathon"
  highlight?: string; // e.g. "Overall winner"
  links?: TimelineLink[];
  featured?: boolean;
};

export type TimelineRow = {
  events: TimelineEvent[]; // length 1 or 2
};

export type TimelineYear = {
  year: number;
  rows: TimelineRow[];
};

export const timeline: TimelineYear[] = [
  {
    year: 2026,
    rows: [
      {
        events: [
        ],
      },
      {
        events: [
          {
            title: "Cursor x AdTech Hackathon",
            description:
              "TBC",
            dateRange: "May",
            category: "Hackathon",
            highlight: "TBC",
            links: [{ kind: "github", href: "https://github.com/" }],
          },
          {
            title: "Exodus",
            description:
              "Completed a procedurally generated dungeon crawler in Unity. Submitted as my Capstone Project for my final year of University, and released on Itch.io.",
            dateRange: "Feb - May",
            category: "Project",
            links: [{ kind: "web", href: "https://stephendpurdue.itch.io/exodus" }],
          },
        ],
      },
    ],
  },

];

