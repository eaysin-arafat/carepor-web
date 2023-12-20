// Tab.tsx
import StepButton from '@/components/core/buttons/StepButton.tsx';
import React from 'react';
import { ChevronRight } from 'react-feather';
interface ModuleSteppingProps {
  breadcrumbs: { label: string; content: string | JSX.Element }[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const ModuleStepping: React.FC<ModuleSteppingProps> = ({
  breadcrumbs,
  activeTab,
  onTabClick,
}) => {
  return (
    <div>
      <div>
        <div className="text-center shadow-md border rounded border-borderColor text-[#03045E] overflow-x-auto flex no-scrollbar font-semibold font-poppins mb-5">
          {breadcrumbs.map((tab, index) => (
            <>
              <div
                key={index}
                onClick={() => onTabClick(index)}
                className="flex justify-evenly items-center min-w-[200px]"
              >
                <StepButton isActive={activeTab === index} text={tab.label} />{' '}
                <div>
                  <ChevronRight size={18} />
                </div>
              </div>
              {/* end */}
            </>
          ))}
        </div>
      </div>
      <div>
        {activeTab !== -1 && (
          <div>
            <div>{breadcrumbs[activeTab].content}</div>
            {/* Additional content rendering based on the active tab */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleStepping;


// // Tab.tsx
// import StepButton from '@/components/core/buttons/StepButton.tsx';
// import React, { useState } from 'react';
// import { ChevronRight } from 'react-feather';
// interface TabProps {
//   tabs: { label: string; content: string | JSX.Element }[];
// }

// const ModuleStepping: React.FC<TabProps> = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState<number>(0);

//   const handleTabClick = (index: number) => {
//     setActiveTab(index === activeTab ? index : index);
//   };

//   return (
//     <div>
//       <div>
//         <div className="text-center shadow-md border rounded border-borderColor text-secondaryColor overflow-x-auto flex no-scrollbar font-semibold font-poppins mb-5">
//           {tabs.map((tab, index) => (
//             <>
//               <div
//                 key={index}
//                 onClick={() => handleTabClick(index)}
//                 className="flex justify-evenly items-center min-w-[200px]"
//               >
//                 <StepButton isActive={activeTab === index} text={tab.label} />{' '}
//                 <div>
//                   <ChevronRight size={18} />
//                 </div>
//               </div>
//               {/* end */}
//             </>
//           ))}
//         </div>
//       </div>
//       <div>
//         {activeTab !== -1 && (
//           <div>
//             <div>{tabs[activeTab].content}</div>
//             {/* Additional content rendering based on the active tab */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModuleStepping;
