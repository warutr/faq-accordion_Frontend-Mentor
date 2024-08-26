"use client";
import { data } from "@/lib/data";
import React from "react";

const Questions = () => {
  return (
    <div className="text-white">
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
