import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
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
  },
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
  },
  {
    icon: FaHackerrank,
    href: "https://www.hackerrank.com/mohitxcodes",
    label: "Hackerrank",
    color: "hover:text-[#2EC866]",
    hoverText: "#2EC866",
    hoverBorder: "rgba(46,200,102,0.4)",
    hoverBg: "rgba(46,200,102,0.10)",
    themeHover:
      "hover:text-[#2EC866] hover:border-[#2EC866]/40 hover:bg-[#2EC866]/10",
  },
];
