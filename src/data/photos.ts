export type Photo = {
  /** Path under public/, e.g. "/images/photos/hiking.jpg" */
  src: string;
  alt: string;
  description: string;
  location: string;
};

/**
 * Drop image files into `public/images/photos/`, then add an entry here.
 *
 * Example:
 * {
 *   src: "/images/photos/sunset.jpg",
 *   alt: "Sunset over the harbour",
 *   description: "Quiet evening walk after exams.",
 *   location: "Southampton, UK",
 * }
 */

export const photos: Photo[] = [
  {
    src: "/images/photos/TML LOGO.JPG",
    alt: "TML Logo",
    description: "Finally made it!",
    location: "Tomorrowland, Belgium",
  },

  {
    src: "/images/photos/TMLW2026.jpg",
    alt: "Orbyz Stage",
    description: "Orbyz Stage!",
    location: "Tomorrowland Winter, France",
  },

  {
    src: "/images/photos/KITTY.JPG",
    alt: "The Cat",
    description: "The cat.",
    location: "UK",
  },
];
