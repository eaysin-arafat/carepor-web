import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsBrilliance } from "react-icons/bs";
import { LuSunMedium } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

type Props = {
  isHeader?: boolean;
};

const ThemeSwitcher = ({ isHeader }: Props) => {
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
      {isHeader && (
        <div className="flex justify-between -mb-3.5">
          <button
            className="bg-white text-black h-full w-full py-2.5 px-3 flex gap-1 items-center justify-center"
            onClick={() => toggleMode("light")}
          >
            <LuSunMedium size={18} /> Light
          </button>
          <button
            className="bg-black h-full w-full py-2.5 px-3 flex gap-1 items-center justify-center text-white"
            onClick={() => toggleMode("dark")}
          >
            <MdOutlineDarkMode size={18} /> Dark
          </button>
          <button
            className="bg-gray-600 h-full w-full py-2.5 px-3 flex gap-1 items-center justify-center text-white"
            onClick={() => toggleMode("gray")}
          >
            <BsBrilliance size={18} /> Gray
          </button>
        </div>
      )}
      {!isHeader && (
        <Dropdown
          arrowIcon={false}
          inline
          className="min-w-[200px] w-[200px] z-50"
          label={
            <div
              className={`h-[30px] w-[30px] xs:h-[40px] xs:w-[40px] bg-black cursor-pointer dark:bg-gray-800 rounded-full flex justify-center items-center`}
            >
              {mode === "light" && (
                <MdOutlineDarkMode
                  color="#fff"
                  className="text-lg xs:text-2xl"
                />
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
      )}
    </>
  );
};

export default ThemeSwitcher;
