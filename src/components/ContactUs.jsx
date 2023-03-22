import React from 'react'

import { useState } from 'react'
import GMap from './GMap/GMap'
// import { MyMapComponent } from "./MapComponent";

const ContactUs = () => {
  return (
    <section
      className='contact-us__section relative bg-[#ebe0bf]'
      id='contact-us'
    >
      <div className='relative mx-auto max-w-10xl py-24 sm:py-32 lg:py-40 lg:px-4'>
        <div className='pr-6 pl-6 md:w-2/3 md:pl-4 lg:w-1/2 lg:pl-8  xl:pl-12'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-[#221813] sm:text-4xl'>
            Contact Us
          </p>
          <h2 className='text-base font-semibold leading-7 mt-4 text-[#221813]'>
            For any additional inquiries, please contact us using the
            information below:
          </h2>
          <p className='mt-6 text-base leading-7 text-[#221813]'>
            Email: office@remsvol.com
          </p>
          <p className='mt-6 text-base leading-7 text-[#221813]'>
            Company number: +1 (770) 696-4804
          </p>
          <p className='mt-6 text-base leading-7 text-[#221813]'>
            Our address: 4625 Alexander Dr. Ste. 135
          </p>
          {/* <MyMapComponent /> */}
          <p className='mt-6 text-base leading-7 text-[#221813]'>
            Postcode: Alpharetta, GA 30022
          </p>
          <p className='mt-6 underline text-base leading-7 hover:text-[#986235] duration-300 text-[#221813]'>
            <a
              href='https://www.facebook.com/people/Remsvol-LLC/100077963119966/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </p>
          <p className='mt-6 underline text-base leading-7 hover:text-[#986235] duration-300 text-[#221813]'>
            <a
              href='https://www.facebook.com/people/Remsvol-LLC/100077963119966/'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className='relative h-80 overflow-hidden bg-[#ebe0bf] md:absolute md:right-0 top-0 md:h-full md:w-1/3 lg:w-1/2'>
      <GMap />
        
      </div>
    </section>
  )
}

export default ContactUs
