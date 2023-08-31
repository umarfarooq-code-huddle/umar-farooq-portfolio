import DarkModeToggle from "./DarkModeToggle";
import ChangingBackgroundDiv from "./ChangingBackgroundDiv";
import { useState,useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the theme mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // When the component mounts, check the user's preferred theme (dark/light)
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // Add a class to the HTML body tag based on the current theme mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      <div className="pb-32 h-screen pt-32 w-full items-center justify-center  bg-black dark:bg-white">
        <div className=" pl-11 flex-col items-center justify-center">
          <div className="text-white dark:text-black text-3xl pd-10">Let's</div>

          <ChangingBackgroundDiv />

          <div className="mt-11 text-3xl pt-7 w-3/6 leading-relaxed text-white dark:text-black">
            The absolute blend of skilled engineers, robust ideas and top-notch
            expertise. This is what Code Huddle is all about! The company aims
            to digitally transform early-stage startups and SMEs through our
            robust expertise in custom software development. We'll huddle to
            understand your problem, code our way through your problem, and
            present you with a software solution you can't refuse.
          </div>
        </div>
      </div>
    </>
  );
}
