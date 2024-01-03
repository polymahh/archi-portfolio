import React from "react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import Image from "next/image"

import { projectType } from "./type"

function ProjectsCarousel({
  data,
  setPage,
  setShowPage,
}: {
  data: projectType[]
  setPage: any
  setShowPage: any
}) {
  const handleClick = (idx: number) => {
    console.log(idx)
    setPage(idx)
    setShowPage(true)
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          700: {
            spaceBetween: 60,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 120,
          modifier: 1,
          slideShadows: false,
          //   scale: 0.8,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full md:w-[90%] grow "
      >
        {data.map((card: projectType, idx: number) => {
          return (
            <SwiperSlide key={card.title} style={{ width: "80%" }}>
              <div className="flex md:grid  flex-col items-center h-full ">
                <div
                  className="flex justify-center overflow-hidden cursor-pointer h-full md:h-auto md:w-full"
                  onClick={() => handleClick(idx)}
                >
                  <Image
                    src={card.preview}
                    alt="project preview"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "auto",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority={true}
                  />
                </div>
                <div className="flex flex-col items-center border border-white  bg-white">
                  <h2
                    onClick={() => handleClick(idx)}
                    className="mt-4 md:mt-8 cursor-pointer text-center font-lamore text-4xl font-normal uppercase leading-tight tracking-tighter md:text-[54px]"
                  >
                    {card.title}
                  </h2>
                  <span className=" text-2xl text-accent-foreground">
                    {card.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ProjectsCarousel