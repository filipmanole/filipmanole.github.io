import profilepicture from "../img/me.webp";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const headerIntroData = {
  title: "Filip Manole",
  subtitle: "Software Architect",
  description: "I help businesses by crafting scalable software that drives their vision. Throughout my career, I have assisted several clients in translating their ideas into effective cloud solutions.\n\nWhile my primary expertise lies in software engineering, my skills extend beyond coding. I am passionate about architecting systems that stand the test of time.",
  socials: [
    {
      link: "https://www.linkedin.com/in/filipmanole/",
      icon: FiLinkedin,
    },
    {
      link: "https://twitter.com/manole_filip/",
      icon: FiTwitter,
    },
    {
      link: "https://github.com/filipmanole/",
      icon: FiGithub,
    },
  ],
  profilepicture: profilepicture,
} as const;

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
