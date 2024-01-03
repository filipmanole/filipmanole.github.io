import React from "react";

interface ButtonProps {
  label: string;
  link: string;
  iconSVG: React.FC<{ className: string }>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  link,
  iconSVG: IconSVGComponent,
}) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className="bg-darkgrey hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 text-white font-bold text-[1.6rem] py-4 px-8 rounded-lg cursor-pointer flex flex-row gap-4 justify-center items-center w-96"
      onClick={handleClick}
    >
      <IconSVGComponent className={"w-max h-10"} />
      {label}
    </div>
  );
};

export default Button;