import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="font-bold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
