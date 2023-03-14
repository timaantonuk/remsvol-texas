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
          src: '/img/gallery-image-1.jpg',
          width: 4,
          height: 3
        },
        {
          src: '/img/gallery-image-2.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-3.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-4.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-5.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-6.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-7.jpg',
          width: 4,
          height: 3
        },
        {
          src: '/img/gallery-image-8.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-9.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-10.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-11.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/img/gallery-image-12.jpg',
          width: 1,
          height: 1
        },
        
        
      ];
      

  return (
    <div className="w-full bg-[#ebe0bf] flex items-center justify-center pt-40">
      <div className="gallery-section w-[80%]">
        <h1 className="text-5xl fl">Our Works</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <div className="flex justify-center"><ModalGateway >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel 
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway></div>
      </div>
    </div>
  );
}
export default GalleryComponent;

// import React from "react";
// import { useState, useCallback } from "react";
// import Carousel, { Modal, ModalGateway } from "react-images";

// function Gallery() {
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
//   


//   return (
   
//     <div>
//       {/* <Gallery photos={photos} onClick={openLightbox} /> */}
//       {/* <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map(x => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway> */}
//     </div>
//   );
// }
// import React from 'react';
// import Gallery from 'react-photo-gallery';

// const photos = [
//   {
//     src: 'https://picsum.photos/id/1/600/400',
//     width: 600,
//     height: 400
//   },
//   {
//     src: 'https://picsum.photos/id/2/600/400',
//     width: 600,
//     height: 400
//   },
//   {
//     src: 'https://picsum.photos/id/3/600/400',
//     width: 600,
//     height: 400
//   }
// ];

// function GalleryComponent() {
//   return (
//     <div>
//       <Gallery photos={photos} />
//     </div>
//   );
// }

// export default GalleryComponent;

//  const Gallery = () => {
//   const images = [
//     {
//       original: '/img/gallery-image-1.jpg',
//       thumbnail: '/img/gallery-image-1.jpg',
      
//     },
//     {
//       original: '/img/gallery-image-3.jpg',
//       thumbnail: '/img/gallery-image-3.jpg',
//     },
//     {
//       original: '/img/gallery-image-5.jpg',
//       thumbnail: '/img/gallery-image-5.jpg',
//     },
//     {
//       original: '/img/gallery-image-1.jpg',
//       thumbnail: '/img/gallery-image-1.jpg',
      
//     },
//     {
//       original: '/img/gallery-image-3.jpg',
//       thumbnail: '/img/gallery-image-3.jpg',
//     },
//     {
//       original: '/img/gallery-image-5.jpg',
//       thumbnail: '/img/gallery-image-5.jpg',
//     },
//     {
//       original: '/img/gallery-image-1.jpg',
//       thumbnail: '/img/gallery-image-1.jpg',
      
//     },
//     {
//       original: '/img/gallery-image-3.jpg',
//       thumbnail: '/img/gallery-image-3.jpg',
//     },
//     {
//       original: '/img/gallery-image-5.jpg',
//       thumbnail: '/img/gallery-image-5.jpg',
//     },
//   ];
//   return (
//       <section className="mt-7 bg-orange-900">
//         <div className="grid grid-cols-3 grid-rows-3">
//           {images.map((el, i)=><img className="w-96" key={i} src={el.original} alt=''/>)}
//         </div>
//       </section>
//     );
// };

