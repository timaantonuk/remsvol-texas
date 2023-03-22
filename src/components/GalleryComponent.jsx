import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function GalleryComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [
    {
      src: "/img/gallery-image-1.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-2.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-3.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-4.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-5.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-6.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-7.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "/img/gallery-image-8.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-9.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-10.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-11.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/img/gallery-image-12.jpg",
      width: 2,
      height: 1,
    },
  ];

  return (
    <div className="w-full bg-[#ebe0bf] px-0 lg:p-0 flex items-center justify-center pt-0 lg:pt-20">
      <div className="gallery-section w-full lg:w-full bg-opacity-20 rounded-none lg:rounded-3xl p-4 ">
      <h1 className="lg:hidden text-3xl flex justify-center pb-8 pt-8 font-bold text-[#392820]">
          Our gallery
        </h1>
        {/* <h1 className="text-5xl flex justify-center pb-8 pt-8 font-bold text-[#392820]">
          Our works
        </h1>
        <p className="text-center mb-10 leading-7 max-w-2xl mx-auto">Browse through the images to see the variety of buildings we've created, including homes, offices, and public spaces. Each project demonstrates our dedication to quality and client satisfaction.</p> */}
        <div className="gallery-images"><Gallery photos={photos} onClick={openLightbox} /></div>
        <div className="flex justify-center" id="brokephotos">
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </div>
  );
}
export default GalleryComponent;
