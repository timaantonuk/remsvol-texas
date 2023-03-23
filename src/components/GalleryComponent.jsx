import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

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
      smallSrc: '/img/gallery-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-min.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-1-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-1.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-2-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-2.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-3-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-3.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-4-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-4.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-5-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-5.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-6-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-6.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-7-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-7.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-8-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-8.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-9.jpeg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-9.jpeg',
      },
    },
    {
      smallSrc: '/img/gallery-image-10-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-10.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-11-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-11.jpg',
      },
    },
    {
      smallSrc: '/img/gallery-image-12-min.jpg',
      width: 1,
      height: 1,
      modal: {
        src: '/img/gallery-image-12.jpg',
      },
    },
  ];

  return (
    <div className='w-full bg-[#ebe0bf] px-0 lg:p-0 flex items-center justify-center pt-0 lg:pt-0'>
      <div className='gallery-section w-full lg:w-full bg-opacity-20 rounded-none lg:rounded-3xl p-4 '>
        <h1 className='lg:hidden text-3xl flex justify-center pb-4 pt-8 font-bold text-[#392820]'>
          Our gallery
        </h1>
       <p className='lg:hidden flex justify-center mb-4'>Click to zoom 🔍︎</p>
        <div className='gallery-images'>
          <Gallery
            photos={photos.map((el) => ({ src: el.smallSrc, ...el }))}
            onClick={openLightbox}
          />
        </div>
        <div className='flex justify-center' id='brokephotos'>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x.modal,
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
