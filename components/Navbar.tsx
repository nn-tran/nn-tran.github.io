import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import userData from "constants/data"
import { Github, LinkedIn, Facebook, Google } from "./Elements"

export default function Navbar() {
  const router = useRouter()
  console.log(router.asPath)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h2 className="font-semibold text-xl">{userData.name}</h2>
            <p className="text-base font-light text-yellow-500 dark:text-yellow-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="hidden md:contents">
          <Clickable text="About" link="/about" />
          <Clickable text="Projects" link="/projects" />
        </div>

        <div className="space-x-2 flex flex-row items-center">
          <Github />
          <LinkedIn />
          <Facebook />
          <Google />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-around block md:hidden px-4 mt-4">
        <ClickableSmall text="About" link="/about" />
        <ClickableSmall text="Projects" link="/projects" />
      </div>
    </div>
  )
}

function ClickableSmall(props: {link: string,  text: string}) {
  const router = useRouter()
  return (
    <Link
      href={props.link}
      className={`${
        router.asPath === props.link
          ? "text-yellow-900 dark:text-yellow-300 font-bold"
          : "text-yellow-600 dark:text-yellow-100 font-normal"
      }`}
    >
      {props.text}
    </Link>
  )
}

function Clickable(props: {link: string,  text: string}) {
  const router = useRouter()
  return (
    <Link
      href={props.link}
      className={`text-xl ${
        router.asPath === props.link
          ? "text-yellow-900 dark:text-yellow-300 font-bold"
          : "text-yellow-600 dark:text-yellow-100 font-normal"
      }`}
    >
      {props.text}{" "}
      {router.asPath === props.link && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="inline-block h-3 w-3 animate-bounce"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      )}
    </Link>
  )
}
