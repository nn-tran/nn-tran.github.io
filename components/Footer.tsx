import React from "react"
import { Github, LinkedIn, Facebook, Google, Open } from "./Elements"

export default function Footer() {
  return (
    <div className="bg-yellow-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-yellow-700 dark:bg-yellow-100"></div>
        <div className="flex flex-row justify-between mt-4">
          <div>
            <a
              className="text-base font-normal text-yellow-600 dark:text-yellow-100"
              href="https://github.com/nn-tran/nn-tran.github.io"
              target="_blank"
            >
              Source code <Open />
            </a>
          </div>
          <div className="space-x-2 flex flex-row items-center">
            <Github />
            <LinkedIn />
            <Facebook />
            <Google />
          </div>
        </div>
      </div>
    </div>
  )
}
