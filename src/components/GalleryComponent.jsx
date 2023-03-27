// import React, { useState, useCallback } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import ImageGallery from "react-image-gallery";

// function GalleryComponent() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   const images = [
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//     {
//       fullscreen: "/img/gallery-image-1.jpg",
//       thumbnail: "/img/gallery-image-1-min.jpg",
//     },
//   ];

// const photos = [
//   {
//     smallSrc: "/img/gallery-min.jpg",

//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-min.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-1-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-1.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-2-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-2.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-3-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-3.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-4-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-4.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-5-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-5.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-6-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-6.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-7-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-7.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-8-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-8.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-9.jpeg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-9.jpeg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-10-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-10.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-11-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-11.jpg",
//     },
//   },
//   {
//     smallSrc: "/img/gallery-image-12-min.jpg",
//     width: 1,
//     height: 1,
//     modal: {
//       src: "/img/gallery-image-12.jpg",
//     },
//   },
// ];

//   return (
//     <div className="w-full bg-[#ebe0bf] px-0 lg:p-0 flex items-center justify-center pt-0 lg:pt-0">
//       <div className="gallery-section w-full lg:w-full bg-opacity-20 rounded-none lg:rounded-3xl p-4 ">
//         <h1 className="lg:hidden text-3xl flex justify-center pb-4 pt-8 font-bold text-[#392820]">
//           Our gallery
//         </h1>
//         <p className="lg:hidden flex justify-center mb-4">Click to zoom 🔍︎</p>
//         <div className="gallery-images md:mx-32 ">
//           {/* <Gallery
//             photos={photos.map((el) => ({ src: el.smallSrc, ...el }))}
//             onClick={openLightbox}
//           /> */}
//           <ImageGallery items={images} onClick={openLightbox} />
//         </div>
//         <div className="flex justify-center" id="brokephotos">
//           <ModalGateway>
//             {viewerIsOpen ? (
//               <Modal onClose={closeLightbox}>
//                 <Carousel
//                   currentIndex={currentImage}
//                   views={images.map((x) => ({
//                     ...x.modal,
//                     srcset: x.srcSet,
//                     caption: x.title,
//                   }))}
//                 />
//               </Modal>
//             ) : null}
//           </ModalGateway>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default GalleryComponent;

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
// import React, { useRef, useEffect } from "react";
// import Hammer from "hammerjs";

const galleryImages = [
  {
    id: 0,
    img: "/img/gallery-min.jpg",
    thumbnail: "/img/gallery-min.jpg",
  },
  {
    id: 1,
    img: "/img/gallery-image-0.jpg",
    thumbnail: "/img/gallery-image-0.jpg",
  },
  {
    id: 2,
    img: "/img/gallery-image-1.jpg",
    thumbnail: "/img/gallery-image-1-min.jpg",
  },
  {
    id: 3,
    img: "/img/gallery-image-2.jpg",
    thumbnail: "/img/gallery-image-2-min.jpg",
  },
  {
    id: 4,
    img: "/img/gallery-image-3.jpg",
    thumbnail: "/img/gallery-image-3-min.jpg",
  },
  {
    id: 5,
    img: "/img/gallery-image-4.jpg",
    thumbnail: "/img/gallery-image-4-min.jpg",
  },
  {
    id: 6,
    img: "/img/gallery-image-5.jpg",
    thumbnail: "/img/gallery-image-5-min.jpg",
  },
  {
    id: 7,
    img: "/img/gallery-image-6.jpg",
    thumbnail: "/img/gallery-image-6-min.jpg",
  },
  {
    id: 8,
    img: "/img/gallery-image-7.jpg",
    thumbnail: "/img/gallery-image-7-min.jpg",
  },
  {
    id: 9,
    img: "/img/gallery-image-8.jpg",
    thumbnail: "/img/gallery-image-8-min.jpg",
  },
  {
    id: 10,
    img: "/img/gallery-image-9.jpg",
    thumbnail: "/img/gallery-image-9.jpg",
  },
  {
    id: 11,
    img: "/img/gallery-image-10.jpg",
    thumbnail: "/img/gallery-image-10.jpg",
  },

  {
    id: 12,
    img: "/img/gallery-image-12.jpg",
    thumbnail: "/img/gallery-image-12-min.jpg",
  },
];

const GalleryComponent = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  // HammerJS
  // const galleryRef = useRef(null);

  // useEffect(() => {
  //   const gallery = galleryRef.current;
  //   const hammertime = new Hammer(gallery);
  //   hammertime.on(
  //     "swipeleft",
  //     // Обработчик свайпа влево
  //     nextSlide()
  //   );
  //   hammertime.on(
  //     "swiperight",
  //     // Обработчик свайпа вправо
  //     prevSlide()
  //   );
  //   return () => {
  //     hammertime.off("swipeleft");
  //     hammertime.off("swiperight");
  //   };
  // }, [galleryRef, nextSlide, prevSlide]);

  return (
    <div className="bg-[#ebe0bf]">
      <h1 className="lg:hidden text-3xl flex justify-center pb-4 pt-8 font-bold text-[#392820] ">
        Our gallery
      </h1>
      <p className="lg:hidden flex justify-center ">Click to zoom 🔍︎</p>

      {openModal && (
        <div
          // ref={galleryRef}
          className="sliderWrap fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="fixed top-6 right-6 w-10 h-10 duration-300 text-white opacity-60 hover:opacity-100  z-50 cursor-pointer"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="fixed  top-1/2 left-6 w-10 h-10 duration-300 transform -translate-y-1/2 text-white opacity-60 hover:opacity-100 z-50 cursor-pointer"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="fixed top-1/2 right-6 w-10 h-10 duration-300  transform -translate-y-1/2 text-white opacity-60 hover:opacity-100 z-50 cursor-pointer"
            onClick={nextSlide}
          />
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[slideNumber].img}
              alt=""
              className="max-w-full max-h-full select-none -webkit-user-select-none -ms-user-select-none user-select-none"
            />
          </div>
        </div>
      )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className=" galleryWrap bg-[#ebe0bf] py-10 flex flex-wrap gap-10 items-center justify-center max-w-620 mx-auto">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className={`w-56 cursor-pointer  ${
                  index === 0 ? "lg:hidden block   " : ""
                } 
                ${index > 0 ? "hidden  lg:block" : ""}  `}
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={slide.thumbnail}
                  alt=""
                  className={`max-w-full hover:scale-102 
                  ${index === 0 ? "lg:hidden block " : ""} 
                  ${index > 0 ? "hidden  lg:block" : ""} 
                  `}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GalleryComponent;
