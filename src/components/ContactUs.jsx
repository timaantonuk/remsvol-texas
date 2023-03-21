import React from "react";

import { useState } from "react";
import { MyMapComponent } from "./MapComponent";

const ContactUs = () => {
  return (
    <section
      className="contact-us__section relative bg-[#ebe0bf]"
      id="contact-us"
    >
      <div className="relative mx-auto max-w-10xl py-24 sm:py-32 lg:py-40 lg:px-4">
        <div className="pr-6 pl-6 md:w-2/3 md:pl-4 lg:w-1/2 lg:pl-8  xl:pl-12">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#221813] sm:text-4xl">
            Contact Us
          </p>
          <h2 className="text-base font-semibold leading-7 mt-4 text-[#221813]">
            For any additional inquiries, please contact us using the
            information below:
          </h2>
          <p className="mt-6 text-base leading-7 text-[#221813]">
            Email: office@remsvol.com
          </p>
          <p className="mt-6 text-base leading-7 text-[#221813]">
            Company number: +1 (770) 696-4804
          </p>
          <p className="mt-6 text-base leading-7 text-[#221813]">
            Our address: 4625 Alexander Dr. Ste. 135
          </p>
          <MyMapComponent />
          <p className="mt-6 text-base leading-7 text-[#221813]">
            Postcode: Alpharetta, GA 30022
          </p>
          <p className="mt-6 underline text-base leading-7 hover:text-[#986235] duration-300 text-[#221813]">
            <a
              href="https://www.facebook.com/people/Remsvol-LLC/100077963119966/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p className="mt-6 underline text-base leading-7 hover:text-[#986235] duration-300 text-[#221813]">
            <a
              href="https://www.facebook.com/people/Remsvol-LLC/100077963119966/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className="relative h-80 overflow-hidden bg-[#ebe0bf] md:absolute md:right-0 top-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/img/contact-us-image.jpeg"
          alt="About us"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="white"
            fillOpacity=".3"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactUs;
