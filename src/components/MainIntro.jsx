import React from "react";

const MainIntro = () => {
  return (
    <>
      <div id="home">
        <div className="intro flex justify-center mt-18 pt-4">
          <div className="introtext text-yellow-500 font-bold m-4 w-3/6 flex flex-col justify-center">
            <h2 className=" text-7xl mb-8">Hey,</h2>
            <h2 className="text-7xl">I'm Sanjana Singh</h2>
          </div>

          <div className="img flex">
            <img
              className=" rounded-full border-black border-4 hover:border-red-700"
              src="/favicon.jpg"
              alt="Sanjana's Image"
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIntro;
