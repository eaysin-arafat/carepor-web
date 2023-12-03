import { useEffect, useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const storedMode = localStorage.getItem("theme") || "light";

  const [mode, setMode] = useState(storedMode);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    setMode(newMode);
  };

  useEffect(() => {
    document.body.className = mode === "light" ? "light" : "dark";
  }, [mode]);

  return (
    <>
      <label
        className={` h-[40px] w-[40px] bg-black cursor-pointer dark:bg-gray-800 rounded-full flex justify-center items-center`}
      >
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={toggleMode}
          className="hidden"
        />

        {/* Moon icon */}
        {mode === "light" && <MdOutlineDarkMode color="#fff" size={25} />}

        {/* Sun icon */}
        {mode === "dark" && <LuSunMedium color="#fff" size={25} />}
      </label>
    </>
  );
};

export default ThemeSwitcher;
