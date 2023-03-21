import React from "react";
import Dropdown from "./buttons/Dropdown";
import { Link } from "react-scroll";
import RightArrow from "../assets/icons/RightArrow";
import HeaderDropdownMobile from "./buttons/HeaderDropdownMobile";

const Navigation = () => {
  return (
    <nav className="navigation sticky top-0">
      <div className="navigation__wrapper flex justify-center sm:gap-8 lg:gap-2 lg:justify-center flex-wrap items-center  flex-row h-28 px-10 bg-[#ebe0bf]">
        <div className="navigation__items hidden md:hidden lg:block">
          <ul className="flex flex-row gap-6 md:gap-4 lg:gap-4">
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem] text-[#392820]">
              <Link to="about-us" smooth={true} duration={500}>
                About us
              </Link>
            </li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem] text-[#392820]">
              <a>
                <Dropdown />
              </a>
            </li>
            <li className="navigation__item duration-300 hover:translate-y-[-0.4rem] text-[#392820]">
              <Link to="reviews" smooth={true} duration={500}>
                Reviews
              </Link>
            </li>
            <Link to="contact-us" smooth={true} duration={500}>
              <li className="navigation__item duration-300 hover:translate-y-[-0.4rem] text-[#392820]">
                <a>Contact us</a>
              </li>
            </Link>
          </ul>
        </div>
        <Link to="header" smooth={true} duration={500}>
          <div className="navigation__logo w-40 mr-32 lg:mr-0  ">
            <a href="">
              <img loading="lazy" src="/img/logo-v2.png" alt="Remsvol" />
            </a>
          </div>
        </Link>
        {/* SKRYTO na mobilah  */}
        <div className="navigation__icons gap-4 hidden md:hidden lg:flex items-center">
          <Link to="contact-us" smooth={true} duration={500}>
            <a href="#">
              <img
                loading="lazy"
                className="h-6"
                src="/img/icons/mail-icon.png"
                alt="Mail to"
              />
            </a>
          </Link>
          <a
            href="https://www.instagram.com/remsvol/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/instagram-icon.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Remsvol-LLC/100077963119966/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/facebook-icon.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5NMmpM3PEhac5A9fjvhDfA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              className="h-6"
              src="/img/icons/youtube-icon.png"
              alt="Youtube"
            />
          </a>
          <Link to="contact-us" smooth={true} duration={500}>
            <a href="#">
              <img
                loading="lazy"
                className="h-6"
                src="/img/icons/phone-icon.png"
                alt="contact to"
              />
            </a>
          </Link>
          <Link to="apply-form" smooth={true} duration={500}>
            <div className="navigation__button text-white bg-[#392820] p-3 rounded-lg duration-300 hover:bg-[#665337] ">
              <a className="flex">
                GET AN ESTIMATE
                <RightArrow />
              </a>
            </div>
          </Link>
        </div>
        <div className="lg:hidden ">
          <HeaderDropdownMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
