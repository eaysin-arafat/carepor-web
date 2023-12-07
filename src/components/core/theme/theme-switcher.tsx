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
        className={`h-[30px] w-[30px] xs:h-[40px] xs:w-[40px] bg-black cursor-pointer dark:bg-gray-800 rounded-full flex justify-center items-center`}
      >
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={toggleMode}
          className="hidden"
        />

        {/* Moon icon */}
        {mode === "light" && <MdOutlineDarkMode color="#fff"  className="text-lg xs:text-2xl"/>}

        {/* Sun icon */}
        {mode === "dark" && <LuSunMedium color="#fff"  className="text-lg xs:text-2xl" />}
      </label>
    </>
  );
};

export default ThemeSwitcher;
