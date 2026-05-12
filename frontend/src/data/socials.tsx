import { motion } from "motion/react";
import type { SocialMedia } from "../layout/Footer";
import githubImg from "../assets/github.png";

export const socials: SocialMedia[] = [
  {
    name: "Github",
    link: "https://github.com",
    icon: (
      <motion.div
        whileHover={{ scale: 1.15, opacity: 70 }}
        className="h-12 w-12"
      >
        <img
          src={githubImg}
          alt="Github"
          className="max-h-full w-auto object-contain invert"
        />
      </motion.div>
    ),
  },
];
