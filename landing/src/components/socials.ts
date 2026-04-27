import {
  faDiscord,
  faGithub,
  faInstagram,
  faMedium,
  faPatreon,
  faReddit,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export type Social = {
  href: string;
  label: string;
  icon: IconDefinition;
  /** Tailwind classes for the hover/focus brand color */
  hover: string;
};

export const SOCIALS: Social[] = [
  {
    href: "https://www.youtube.com/@ViscousPotential",
    label: "YouTube",
    icon: faYoutube,
    hover:
      "hover:bg-[#FF0000] hover:text-white focus-visible:bg-[#FF0000] focus-visible:text-white",
  },
  {
    href: "https://github.com/ViscousPot/",
    label: "GitHub",
    icon: faGithub,
    hover:
      "hover:bg-[#0d1117] hover:text-white focus-visible:bg-[#0d1117] focus-visible:text-white",
  },
  {
    href: "https://discord.gg/cgvjdDyzzB",
    label: "Discord",
    icon: faDiscord,
    hover:
      "hover:bg-[#5865F2] hover:text-white focus-visible:bg-[#5865F2] focus-visible:text-white",
  },
  {
    href: "https://www.patreon.com/c/ViscousPotential",
    label: "Patreon",
    icon: faPatreon,
    hover:
      "hover:bg-[#FF424D] hover:text-white focus-visible:bg-[#FF424D] focus-visible:text-white",
  },
  {
    href: "https://www.reddit.com/user/ViscousPotential/submitted/",
    label: "Reddit",
    icon: faReddit,
    hover:
      "hover:bg-[#FF4500] hover:text-white focus-visible:bg-[#FF4500] focus-visible:text-white",
  },
  {
    href: "https://viscouspotential.medium.com/",
    label: "Medium",
    icon: faMedium,
    hover:
      "hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white",
  },
  {
    href: "https://www.instagram.com/viscouspotential/",
    label: "Instagram",
    icon: faInstagram,
    hover:
      "hover:bg-[#E4405F] hover:text-white focus-visible:bg-[#E4405F] focus-visible:text-white",
  },
];
