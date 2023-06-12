
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {

    const slides = [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/5608743/pexels-photo-5608743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Master the Art of Photography',
          description: 'Unlock your creative potential and capture stunning images with our photography courses.',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/3469701/pexels-photo-3469701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Explore New Perspectives',
          description: 'Discover the world through your lens and learn how to tell captivating visual stories.',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/8721311/pexels-photo-8721311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Develop Your Technical Skills',
          description: 'Master the fundamentals of exposure, composition, lighting, and post-processing techniques.',
        },
      ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
            slides.map((slide,index) => <SwiperSlide key={index}> 
            
             <div className="bg-black opacity-90 flex flex-col items-center z-0 justify-center mt-20" style={{ backgroundImage: `url(${slide.image})`, height:'90vh',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'  }} >

                <div className="bg-[#04040466] p-20 py-40 text-center space-y-4">
                <h2 className="text-4xl font-semibold text-[#ddd]"> {slide.title}</h2>
                <h2 className="text-xl text-[#ddd]"> {slide.description}</h2>
                </div>
             </div>
             
             </SwiperSlide>)
        }
        


      </Swiper>
    </>
  );
}
