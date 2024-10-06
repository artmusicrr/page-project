import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md border border-[#0079FF] rounded-lg shadow-md p-5">
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <p className="text-slate-300 mt-2">{description}</p>
    </div>
  );
};

export default Card;
