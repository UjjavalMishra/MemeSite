import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, createRef } from "react";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div ref={memeRef}>
        <img src={params.get("url")} alt="" className=" w-96" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <button
        onClick={addText}
        className=" w-32 h-10 rounded-sm flex justify-center text-center text-white mt-5 bg-blue-400 items-center"
      >
        Add Text
      </button>
      <button
        onClick={(e) => {
          exportComponentAsJPEG(memeRef);
        }}
        variant="success"
        className=" w-32 h-10 rounded-sm flex justify-center items-center text-white mt-5 bg-blue-400 "
      >
        save
      </button>
    </div>
  );
};

export default Edit;
