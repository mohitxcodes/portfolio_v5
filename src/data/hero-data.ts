import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface SocialLinkItem {
  icon: IconType;
  href: string;
  label: string;
  color: string;
  hoverText: string;
  hoverBorder: string;
  hoverBg: string;
  themeHover: string;
  category: "social" | "dsa";
}

export const generalSocialLinks: SocialLinkItem[] = [
  {
    icon: FaGithub,
    href: "https://github.com/mohitxcodes",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
    hoverText: "#ffffff", // near text-gray-900
    hoverBorder: "rgba(17,24,39,0.4)",
    hoverBg: "rgba(17,24,39,0.05)",
    themeHover:
      "hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-900/5 dark:hover:bg-white/10",
    category: "social",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/mohitxcodes",
    label: "LinkedIn",
    color: "hover:text-[#0077b5]",
    hoverText: "#0077b5",
    hoverBorder: "rgba(0,119,181,0.4)",
    hoverBg: "rgba(0,119,181,0.10)",
    themeHover:
      "hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/10",
    category: "social",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/mohitxcodes",
    label: "Twitter",
    color: "hover:text-[#1DA1F2]",
    hoverText: "#1DA1F2",
    hoverBorder: "rgba(29,161,242,0.4)",
    hoverBg: "rgba(29,161,242,0.10)",
    themeHover:
      "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10",
    category: "social",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/mohitxcodes",
    label: "Instagram",
    color: "hover:text-[#E1306C]",
    hoverText: "#E1306C",
    hoverBorder: "rgba(225,48,108,0.4)",
    hoverBg: "rgba(225,48,108,0.10)",
    themeHover:
      "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10",
    category: "social",
  },
];

export const dsaLinks: SocialLinkItem[] = [
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/mohitxcodes",
    label: "Leetcode",
    color: "hover:text-[#FFA116]",
    hoverText: "#FFA116",
    hoverBorder: "rgba(255,161,22,0.4)",
    hoverBg: "rgba(255,161,22,0.10)",
    themeHover:
      "hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10",
    category: "dsa",
  },
  {
    icon: SiCodechef,
    href: "https://www.codechef.com/users/mohitxcodes",
    label: "CodeChef",
    color: "hover:text-[#5B4638]",
    hoverText: "#5B4638",
    hoverBorder: "rgba(91,70,56,0.4)",
    hoverBg: "rgba(91,70,56,0.10)",
    themeHover:
      "hover:text-[#5B4638] hover:border-[#5B4638]/40 hover:bg-[#5B4638]/10",
    category: "dsa",
  },
  {
    icon: SiCodeforces,
    href: "https://codeforces.com/profile/mohitxcodes",
    label: "Codeforces",
    color: "hover:text-[#1F8ACB]",
    hoverText: "#1F8ACB",
    hoverBorder: "rgba(31,138,203,0.4)",
    hoverBg: "rgba(31,138,203,0.10)",
    themeHover:
      "hover:text-[#1F8ACB] hover:border-[#1F8ACB]/40 hover:bg-[#1F8ACB]/10",
    category: "dsa",
  },
  {
    icon: SiGeeksforgeeks,
    href: "https://www.geeksforgeeks.org/user/mohitxcodes/",
    label: "GeeksforGeeks",
    color: "hover:text-[#2F8D46]",
    hoverText: "#2F8D46",
    hoverBorder: "rgba(47,141,70,0.4)",
    hoverBg: "rgba(47,141,70,0.10)",
    themeHover:
      "hover:text-[#2F8D46] hover:border-[#2F8D46]/40 hover:bg-[#2F8D46]/10",
    category: "dsa",
  },
];

export const socialLinks: SocialLinkItem[] = [
  ...generalSocialLinks,
  ...dsaLinks,
];
