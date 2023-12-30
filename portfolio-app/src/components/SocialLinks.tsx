import React from "react";
import { headerIntroData } from "../assets/lib/data";
import SocialCard from "./SocialCard";

const SocialLinks: React.FC = () => {

  return (
    <div className="flex flex-col gap-20 items-center">
      <h2 className="text-white">
        Let's stay in touch!
      </h2>

      <div className="button-container flex items-center justify-center gap-10">
        {headerIntroData.socials.map((social, index) => (
          <SocialCard
            key={index}
            iconSVG={social.icon}
            link={social.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
