// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import slide1 from '../../dist/img/award1.webp';
// import slide2 from '../../dist/img/award2.webp';
// import slide3 from '../../dist/img/award3.webp';
// import slide4 from '../../dist/img/award4.webp';
// import slide5 from '../../dist/img/award5.webp';
//
// const Slider = (props) => {
//   const [swiper, setSwiper] = useState(null);
//
//   const handleNext = () => {
//     if (swiper !== null) {
//       swiper.slideNext();
//     }
//   };
//
//   const handlePrev = () => {
//     if (swiper !== null) {
//       swiper.slidePrev();
//     }
//   };
//
//   return (
//       <>
//         <Swiper
//             onSwiper={setSwiper}
//             slidesPerView={5}
//             spaceBetween={30}
//         >
//           {
//             props.img.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img src={image} alt={`Slide ${index + 1}`} />
//               </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="swiper-buttons">
//           <button className="swiper-button-prev" onClick={handlePrev}>
//             Prev
//           </button>
//           <button className="swiper-button-next" onClick={handleNext}>
//             Next
//           </button>
//         </div>
//       </>
//   );
// };
// Slider.defaultProps = {
//  img: [
//      slide1,
//      slide2,
//      slide3
//     ]
// }
// export default Slider;


// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import slide1 from '../../dist/img/award1.webp';
// import slide2 from '../../dist/img/award2.webp';
// import slide3 from '../../dist/img/award3.webp';
// import slide4 from '../../dist/img/award4.webp';
// import slide5 from '../../dist/img/award5.webp';
// import { Autoplay } from "swiper";
//
//
// export default () => {
//     return (
//         <Swiper
//             slidesPerView={5}
//             // spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: false,
//             }}
//             // pagination={{
//             //     clickable: true,
//             // }}
//             // navigation={true}
//             modules={[Autoplay]}
//             className="mySwiper"
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//         >
//
// import '../../dist/css/shop.css';
// import React from "react";
//
// const Shop = () => {
//     return (
//             <SwiperSlide>
//                 <div className="slide">
//                     <img className="slide-img" src={slide1} alt="slide1"/>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className="slide">
//                     <img className="slide-img" src={slide2} alt="slide2"/>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className="slide">
//                     <img className="slide-img" src={slide3} alt="slide3"/>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className="slide">
//                     <img className="slide-img" src={slide4} alt="slide2"/>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className="slide">
//                     <img className="slide-img" src={slide5} alt="slide3"/>
//                 </div>
//             </SwiperSlide>
//         </Swiper>
//
//     );
// };
//
// export default Slider;