import React from "react";
import { useState } from "react";
import Dropdown from "./buttons/Dropdown";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation sticky top-0">
      <div className="navigation__wrapper flex justify-center md:justify-between lg:justify-between flex-wrap items-center  flex-row h-28 px-10 bg-[#ebe0bf]">
        <div className="navigation__items ">
          <ul className="flex flex-row gap-6 md:gap-4 lg:gap-4">
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem]">
              <a>About us</a>
            </li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem]">
              <a>
                <Dropdown />
              </a>
            </li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem]">
              <a>Reviews</a>
            </li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem]">
              <a>Contact us</a>
            </li>
          </ul>
        </div>

        <div className="navigation__logo w-40 ">
          <a href="#">
            <img loading="lazy" src="/img/logo-v2.png" alt="Remsvol" />
          </a>
        </div>
        {/* SKRYTO NAH na mobilah nah */}
        <div className="navigation__icons gap-4 hidden lg:flex items-center">
          <a href="#">
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/mail-icon.png"
              alt="mailto"
            />
          </a>
          <a href="#">
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/instagram-icon.png"
              alt="instagram"
            />
          </a>
          <a href="#">
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/facebook-icon.png"
              alt="mailto"
            />
          </a>
          <a href="#">
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/youtube-icon.png"
              alt="mailto"
            />
          </a>
          <a href="#">
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/phone-icon.png"
              alt="mailto"
            />
          </a>

          <div className="navigation__button text-white bg-[#392820] p-3 rounded-lg duration-300 hover:bg-[#aa844e] ">
            <a>GET AN ESTIMATE →</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// import { useState } from "react";

// function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div className="relative flex items-center justify-between h-16">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button */}
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//                 onClick={toggleDropdown}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Icon when menu is closed */}
//                 {!isOpen && (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//                 {/* Icon when menu is open */}
//                 {isOpen && (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex-shrink-0">
//                 <img
//                   className="block lg:hidden h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//                 <img
//                   className="hidden lg:block h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="hidden sm:block sm:ml-6">
//                 <div className="flex space-x-4">
//                   <a
//                     href="#"
//                     className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"></div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;
