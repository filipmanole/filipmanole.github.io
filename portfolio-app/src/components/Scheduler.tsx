import React from "react";
// @ts-ignore
import Cal from "@calcom/embed-react";

const Scheduler: React.FC = () => {

	return (
    <div className="flex flex-col gap-20">
      <h2 className="text-center text-white">
        Book a free consulting call
      </h2>
      <p className="w-3/5 max-lg:w-4/5 text-justify text-white mx-auto">
      I am eager to understand your current challenges and contribute impactful results to your business while also establishing the groundwork for future innovations.
      </p>
      <Cal calLink="filipmanole/consulting-call" />
    </div>    
  );
};

export default Scheduler;
