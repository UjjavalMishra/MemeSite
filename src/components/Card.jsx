import React from "react";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-1/3  bg-cover h-1/2 flex flex-col justify-center items-center border-2">
      <img src={props.image} alt="" />
      <button
        className=" w-1/3 h-10 rounded-sm flex justify-center items-center text-white mt-5 bg-blue-400 "
        onClick={(e) => navigate(`/edit?url=${props.image}`)}
      >
        Customize
      </button>
    </div>
  );
};

export default Card;
