import { StarIcon } from "@heroicons/react/20/solid";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>Arion did an exceptional job renovating my bathroom. As a homeowner, I've had my fair share of experiences with contractors, but Arion truly stood out. Their team was efficient,
      courteous, and made sure to keep the workspace tidy throughout the project. The end result exceeded my expectations, and the attention to detail they put into every aspect of
      the bathroom renovation was impressive. I'm very satisfied with their work.</p>
    `,
    author: "Michael Anderson",
    avatarSrc: "/img/reviews-image-0.jpg",
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>I recently had the pleasure of working with Arion to update the flooring in my home. The crew was punctual and worked diligently to ensure the project was completed on schedule. I was particularly impressed with the variety of flooring options they offered and their expert recommendations. The new floors have completely transformed the look and feel of my house, and I couldn't be happier. Arion is definitely my go-to for any future home improvement projects.</p>
    `,

    author: `James White`,
    avatarSrc: "/img/reviews-image-1.jpg",
  },

  {
    id: 3,
    rating: 5,
    content: `
      <p>I recently hired Arion to remodel my kitchen, and I couldn't be happier with the results! From the initial consultation to the final touches, they were
      professional and attentive to every detail. The team transformed my outdated kitchen into a modern and functional space that I now love spending time in.
      The quality of their workmanship is top-notch, and I would highly recommend Arion to anyone looking to renovate their home.</p>
    `,

    author: `Sarah Johnson`,
    avatarSrc: "/img/reviews-image-2.jpg",
  },

  {
    id: 4,
    rating: 5,
    content: `
      <p>Arion did an outstanding job painting the interior of my home. From the start, they provided a detailed quote and timeline for the project, and they stuck to it. 
      The painting crew was professional, respectful, and paid great attention to detail. The color selection assistance they provided was also a big help in achieving the
       look I wanted. I'm extremely satisfied with the end result, and my home looks brand new thanks to Arion's expertise in painting. Highly recommended!</p>
    `,

    author: `Marcus Davis`,
    avatarSrc: "/img/reviews-image-3.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <div id="reviews" className="bg-light_gray pt-20 pb-20">
      <h1 className="text-center text-dark_gray lg:text-5xl text-3xl font-bold mb-12">
        Company Reviews
      </h1>

      <div className="review lg:mx-16 mx-5">
        <h2 className="sr-only">Company Reviews</h2>

        <div className="-my-10 pt-10 pb-14 lg:pt-0 overflow-hidden">
          {reviews.map((review, reviewIdx) => (
            <AnimationOnScroll
              key={reviewIdx}
              animateOnce
              animateIn={
                reviewIdx % 2 === 0
                  ? "animate__fadeInLeftBig"
                  : "animate__fadeInRightBig"
              }
            >
              <div
                key={review.id}
                className="shadow-lg lg:shadow-none px-8 mt-6 lg:mt-0 lg:px-0 pb-10 lg:pb-0 rounded-3xl lg:rounded-none bg-amber-100/20 lg:bg-transparent flex sm:max-w-[80%] lg:max-w-full mx-auto lg:mx-0 flex-col lg:flex-row lg:space-x-4 text-sm text-dark_gray"
              >
                <div className="flex-none py-5 lg:py-10">
                  <img
                    loading="lazy"
                    src={review.avatarSrc}
                    alt=""
                    className="h-20 w-20 lg:h-32 lg:w-32 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0
                      ? ""
                      : "border-t-0 lg:border-t border-[#392820]",
                    "flex-1 lg:py-10"
                  )}
                >
                  <h3 className="font-bold text-center lg:text-left text-dark_gray text-xl lg:text-lg">
                    {review.author}
                  </h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-4 flex items-center justify-center lg:justify-start">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0 drop-shadow-lg lg:drop-shadow-none"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    className="text-center lg:text-left prose prose-sm mt-4 max-w-none text-dark_gray lg:text-base"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
