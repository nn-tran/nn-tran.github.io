import React from "react";
import userData from "@constants/data";
import { Title, Body } from "./Elements";

export default function AboutMe() {
  return (
    <section>
      <Title text="About"/>
      <Body>
        {userData.about?.map((desc, idx) => (
          <div className="mb-4">
            <p
              key={idx}
              className="text-xl font-semibold"
            >
              {desc.title}
            </p>
            <div className={desc.className}>
              {desc.text.map((txt) =>
                (<div className={`${desc.subclassName}`}>
                  {txt}
                </div>))
              }
            </div>
          </div>
          ))}    
        
      </Body>

    </section>
  );
}
