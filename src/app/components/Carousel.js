import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full bg-white/80 hover:bg-white flex">
          <ChevronLeft size={30} />
        </button>
        <button className="p-1 rounded-full bg-white/80 hover:bg-white flex">
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
