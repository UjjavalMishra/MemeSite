import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMemes } from "../api/memes";

const Home = () => {
  useEffect(() => {
    getMemes().then((meme) => setData(meme.data.memes));
  }, []);
  const [data, setData] = useState([]);
  return (
    <div>
      <h1 className=" text-center text-4xl text-white text-wrap mt-5 mb-10">
        Find According to Your Context
      </h1>
      <div className=" flex flex-wrap justify-around gap-10 mt-5">
        {data.map((ele, index) => (
          <Card image={ele.url} title={ele.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
