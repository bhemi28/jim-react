import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8  items-center justify-center text-center bg-gradient-to-tr from-slate-800 to-slate-950 text-slate-200 min-w-lg ">
      <div className="flex flex-col">
        <p className="uppercase text-2xl ">
          It's <span className="text-blue-400">time</span> to hit
        </p>
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
          the<span className="text-blue-400">jim</span>
        </h1>
      </div>
      <p className="text-xl max-sm:text-lg  w-3/4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
        recusandae illo excepturi molestiae. Beatae nulla porro vitae inventore
        quae, reiciendis doloribus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Similique quidem fugiat fugit.
      </p>
      <button className="mt-3 border-2 group  border-blue-400 rounded text-xl font-semibold px-6 py-3 hover:bg-slate-950 group-hover:text-white text-slate-200 btnShadow shadow-blue-300 duration-200 ">Accept <span className="text-blue-400 group-hover:text-slate-200">&</span> begin</button>
    </div>
  );
};

export default Hero;
