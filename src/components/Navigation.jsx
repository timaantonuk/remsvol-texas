import React from 'react';
import Dropdown from './buttons/Dropdown';

const Navigation = () => {
  return (
    <nav className='navigation sticky top-0'>
      <div className='navigation__wrapper flex justify-between flex-wrap items-center bg-[#ebe0bf] flex-row h-28 px-10'>
        <div className='navigation__items '>
          <ul className='flex flex-row gap-4'>
            <li className='navigation__item duration-300 hover:translate-y-[-0.4rem]'>
              <a>About us</a>
            </li>
            <li className='navigation__item duration-300 hover:translate-y-[-0.4rem]'>
              <a>
                <Dropdown />
              </a>
            </li>
            <li className='navigation__item duration-300 hover:translate-y-[-0.4rem]'>
              <a>Reviews</a>
            </li>
            <li className='navigation__item duration-300 hover:translate-y-[-0.4rem]'>
              <a>Contact us</a>
            </li>
          </ul>
        </div>

        <div className='navigation__logo w-40'>
          <a href='#'>
            <img loading='lazy' src='/img/logo-v2.png' alt='Remsvol' />
          </a>
        </div>
        {/* SKRYTO NAH na mobilah nah */}
        <div className='navigation__icons gap-4 hidden lg:flex items-center'>
          <a href='#'>
            <img
              loading='lazy'
              className='h-6'
              src='/img/icons/mail-icon.png'
              alt='mailto'
            />
          </a>
          <a href='#'>
            <img
              loading='lazy'
              className='h-6'
              src='/img/icons/instagram-icon.png'
              alt='instagram'
            />
          </a>
          <a href='#'>
            <img
              loading='lazy'
              className='h-6'
              src='/img/icons/facebook-icon.png'
              alt='mailto'
            />
          </a>
          <a href='#'>
            <img
              loading='lazy'
              className='h-6'
              src='/img/icons/youtube-icon.png'
              alt='mailto'
            />
          </a>
          <a href='#'>
            <img
              loading='lazy'
              className='h-6'
              src='/img/icons/phone-icon.png'
              alt='mailto'
            />
          </a>

          <div className='navigation__button text-white bg-[#392820] p-3 rounded-lg duration-300 hover:bg-[#aa844e] '>
            <a>GET AN ESTIMATE →</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
