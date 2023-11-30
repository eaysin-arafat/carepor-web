import { Accordion } from "flowbite-react";

function SidebarListItem({ item, dropdown }) {
  // if (dropdown) {
  //   return (
  //     <li>
  //       <div>
  //         {/* <button
  //           className={`flex items-center w-full justify-between gap-2 p-3 hover:bg-primaryColor hover:text-white ${css.item}`}
  //         >
  //           <div className="flex justify-between items-center gap-2">
  //             {item.icon ? (
  //               <img src={item.icon} alt="" className="h-[30px] w-[30px]" />
  //             ) : (
  //               <FaChartPie size={20} />
  //             )}
  //             {item.title}
  //           </div>
  //           {dropdown && <IoIosArrowDown />}
  //         </button> */}
  //         <Accordion.Panel>
  //           <Accordion.Title>hh</Accordion.Title>
  //           <Accordion.Content>
  //             <p className="mb-2 text-gray-500 dark:text-gray-400">
  //               Flowbite is an open-source library of interactive components
  //               built on top of Tailwind CSS including buttons, dropdowns,
  //               modals, navbars, and more.
  //             </p>
  //             <p className="text-gray-500 dark:text-gray-400">
  //               Check out this guide to learn how to&nbsp;
  //               <a
  //                 href="https://flowbite.com/docs/getting-started/introduction/"
  //                 className="text-cyan-600 hover:underline dark:text-cyan-500"
  //               >
  //                 get started&nbsp;
  //               </a>
  //               and start developing websites even faster with components on top
  //               of Tailwind CSS.
  //             </p>
  //           </Accordion.Content>
  //         </Accordion.Panel>
  //         {/* <button
  //             type="button"
  //             className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-black hover:text-white hover:bg-primaryColor dark:hover:bg-gray-800 gap-3"
  //             data-accordion-target={`#accordion-collapse-body-${item.id}`}
  //             aria-expanded="true"
  //             aria-controls={`accordion-collapse-body-${item.id}`}
  //           >
  //             <div className="flex gap-2">
  //               {item.icon ? (
  //                 <img src={item.icon} alt="" className="h-[30px] w-[30px]" />
  //               ) : (
  //                 <FaChartPie size={20} />
  //               )}
  //               <span>{item.title}</span>
  //             </div>

  //             <IoIosArrowDown />
  //           </button> */}
  //         <div
  //           id={`accordion-collapse-body-${item.id}`}
  //           className="hidden"
  //           aria-labelledby={`accordion-collapse-heading-${item.id}`}
  //         >
  //           <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
  //             <p className="mb-2 text-gray-500 dark:text-gray-400">
  //               Flowbite is an open-source library of interactive components
  //               built on top of Tailwind CSS including buttons, dropdowns,
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </li>
  //   );
  // } else {
  // }
  return (
    <Accordion.Panel className="border-none">
      <Accordion.Title className="p-3 border-none outline-none ">
        {item.title}
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          An open-source library of interactive components
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  );
  // <li>
  //   <Link
  //     to={item.link}
  //     className={`flex items-center justify-between gap-2 p-3 hover:bg-primaryColor hover:text-white ${css.item}`}
  //   >
  //     <div className="flex justify-between items-center gap-2">
  //       {item.icon ? (
  //         <img
  //           src={item.icon}
  //           alt=""
  //           // style={{ filter: "invert(100%)" }}
  //           className="h-[30px] w-[30px]"
  //         />
  //       ) : (
  //         <FaChartPie size={20} />
  //       )}
  //       {item.title}
  //     </div>
  //     {dropdown && <IoIosArrowDown />}
  //   </Link>
  // </li>
}

export default SidebarListItem;
