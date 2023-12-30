import React from "react";
import { Link } from "react-router-dom";

interface SocialCardProps {
  onClick?: () => void;
  className?: string;
  link?: string;
  iconSVG: React.FC<{ className: string }>;
}

const SocialCard: React.FC<SocialCardProps> = ({
  onClick,
  link,
  iconSVG: IconSVGComponent,
}) => {
  const commonProps = {
    onClick,
    className: `bg-darkgrey text-white drop-shadow-2xl border-none py-4 px-8 rounded-xl text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`,
  };

  return (
    <Link to={link || ""} className="no-underline">
      <button {...commonProps}>
        <IconSVGComponent className={" h-10"} />
      </button>
    </Link>
  );
};

export default SocialCard;
