import React from "react"
import userData from "constants/data"
import { Title, Body } from "./Elements"

export default function Landing() {
  return (
    <section>
      <div className="animate-fade-in">
        <Title text="Welcome." />
      </div>
      <Body>
        <p className="text-xl my-4">{userData.bio}</p>
      </Body>
    </section>
  )
}
