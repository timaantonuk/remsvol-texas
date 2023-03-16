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
    <div className="w-full bg-[#ebe0bf] p-12 flex items-center justify-center  pt-20">
      <div className="gallery-section w-[80%] bg-[#986235] bg-opacity-20 rounded-3xl p-4 ">
        <h1 className="text-5xl flex justify-center pb-20 font-bold text-[#392820]">
          Our Works
        </h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <div className="flex justify-center">
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
