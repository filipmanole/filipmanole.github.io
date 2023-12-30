import React from "react";
// @ts-ignore
import Cal from "@calcom/embed-react";

const Scheduler: React.FC = () => {

	return (
    <div className="flex flex-col gap-20 ">
      <h2 className="text-center text-white">
        Book a free consulting call
      </h2>
        <Cal calLink="filipmanole/15min" />
    </div>    
  );
};

export default Scheduler;
