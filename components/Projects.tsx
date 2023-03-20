import React from "react"
import userData from "constants/data"
import { Title, Body } from "./Elements"
import Image from "next/image"

export default function Projects() {
  return (
    <section>
      <Title text="Projects" />
      <Body>
        <div className="flex flex-col divide-yellow-700 -mt-4 mb-8 divide-y-2">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              description={proj.description}
              key={idx}
            />
          ))}
        </div>
      </Body>
    </section>
  )
}

const ProjectCard = (props: {link: string,  imgUrl: string, title: string, description: string} ) => {
  return (
    <div className="h-36 flex flex-row space-x-4 md:mx-2 mt-4 py-4">
      <a href={props.link} className="h-32 rounded-lg">
        <div className="h-32 w-32 relative">
          <Image
            alt=''
            src={props.imgUrl}
            className="object-cover rounded-lg h-32 w-32"
          />
        </div>
      </a>
      <div className="text-sm md:text-lg min-w-0">
        <h2 className="font-semibold">{props.title}</h2>
        <p className="line-clamp-6 font-sans">{props.description}</p>
      </div>
    </div>
  )
}
