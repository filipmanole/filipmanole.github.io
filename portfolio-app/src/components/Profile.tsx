import React from "react";
import { headerIntroData } from "../assets/lib/data";

const Profile: React.FC = () => {

  return (
    <div
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
    >
      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/4 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-2/5"
      />
      
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-white">
          {headerIntroData.title}
        </h1>

        <hr className="w-full h-1 my-0 bg-white border-0 rounded"></hr>
        
        <h2 className="text-white">{headerIntroData.subtitle}</h2>
      </div>
      <h3 className="mt-16 text-justify text-white">Hello! <span className="wave text-4xl text-white">&#128075;&#127997;</span></h3>
      <p className="text-justify text-white w-3/5 max-lg:w-4/5" style={{ whiteSpace: 'pre-line' }}>
        {headerIntroData.description}
      </p>

    </div>
  );
};

export default Profile;
