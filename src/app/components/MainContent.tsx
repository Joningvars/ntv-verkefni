import React from "react";

const MainContent = () => {
  return (
    <div className="max-w-[1000px] p-10 bg-green-300 flex flex-col items-center justify-center gap-4">
      <h1 className="uppercase animate-pulse text-5xl font-bold text-green-500">
        🎉Ásgeir seðlabankastjóri🎉
      </h1>
      <h2 className="text-red-500 uppercase text-3xl font-bold">
        celebrates lower interest rates!
      </h2>
      <img
        src="https://www.visir.is/i/5447467F2CBE4091B0649848DE01FFC3FC82498756B5CFBAF387773F6150AC14_713x0.jpg"
        className="border-4 border-yellow-400 w-52 h-52 rounded-full object-cover"
        alt=""
      />
    </div>
  );
};

export default MainContent;
