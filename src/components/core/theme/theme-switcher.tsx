import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsBrilliance } from "react-icons/bs";
import { LuSunMedium } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const storedMode = localStorage.getItem("theme") || "light";

  const [mode, setMode] = useState(storedMode);

  const toggleMode = (mod: string) => {
    // const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("theme", mod);
    setMode(mod);
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <>
      {/* <label
        className={`h-[30px] w-[30px] xs:h-[40px] xs:w-[40px] bg-black cursor-pointer dark:bg-gray-800 rounded-full flex justify-center items-center`}
      >
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={toggleMode}
          className="hidden"
        />

        {mode === "light" && <MdOutlineDarkMode color="#fff"  className="text-lg xs:text-2xl"/>}

        {mode === "dark" && <LuSunMedium color="#fff"  className="text-lg xs:text-2xl" />}
      </label> */}
      <Dropdown
        arrowIcon={false}
        inline
        className="min-w-[200px] w-[200px] z-50"
        label={
          <div
            className={`h-[30px] w-[30px] xs:h-[40px] xs:w-[40px] bg-black cursor-pointer dark:bg-gray-800 rounded-full flex justify-center items-center`}
          >
            {mode === "light" && (
              <MdOutlineDarkMode color="#fff" className="text-lg xs:text-2xl" />
            )}
            {mode === "dark" && (
              <LuSunMedium color="#fff" className="text-lg xs:text-2xl" />
            )}
            {mode === "gray" && (
              <BsBrilliance color="#fff" className="text-lg xs:text-2xl" />
            )}
          </div>
        }
      >
        <Dropdown.Item
          className="border-b py-2"
          onClick={() => toggleMode("light")}
        >
          <LuSunMedium size={20} className="w-[30px]" /> Light
        </Dropdown.Item>
        <Dropdown.Item
          className="border-b py-2"
          onClick={() => toggleMode("dark")}
        >
          <MdOutlineDarkMode size={20} className="w-[30px]" /> Dark
        </Dropdown.Item>
        <Dropdown.Item className="py-2" onClick={() => toggleMode("gray")}>
          <BsBrilliance size={20} className="w-[30px]" /> Gray
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default ThemeSwitcher;
