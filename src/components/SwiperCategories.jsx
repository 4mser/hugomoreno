import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const SwiperCategories = ({ tema }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SwiperContainer tema={tema}>
      <Swiper
        spaceBetween={"15%"}
        grabCursor={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        initialSlide={2}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow" // Agregar el efecto coverflow
        coverflowEffect={{
          // Ajustar el tamaño de la tarjeta en el centro
          rotate: 10,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          700: {
            slidesPerView: 3,
            spaceBetween: "6%",
          },
        }}
        className="mySwiper"
      >
        {window.innerWidth > 1000 ? (
          <div className="swiper-shadow" tema={tema}></div>
        ) : (
          <div></div>
        )}

        {window.innerWidth > 1000 ? (
          <SwiperSlide className="card-swiper2"></SwiperSlide>
        ) : (
          <div></div>
        )}

        <SwiperSlide className="card-swiper">
          <div className="swiper-image">
            <img
              src="https://s3.amazonaws.com/skybar.database.teset.1/R+(1).jpg"
              alt=""
            />
          </div>

          <div className="swiper-name">
            <h2>GASFITERÍA</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-swiper">
          <div className="swiper-image">
            <img
              src="https://s3.amazonaws.com/skybar.database.teset.1/R+(2).jpg"
              alt=""
            />
          </div>

          <div className="swiper-name">
            <h2>ELECTRICIDAD</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-swiper">
          <div className="swiper-image">
            <img
              src="https://s3.amazonaws.com/skybar.database.teset.1/R.jpg"
              alt=""
            />
          </div>

          <div className="swiper-name">
            <h2>QUINCALLERÍA</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-swiper">
          <div className="swiper-image">
            <img
              src="https://s3.amazonaws.com/skybar.database.teset.1/lija-401.jpg"
              alt=""
            />
          </div>

          <div className="swiper-name">
            <h2>TERMINACIONES</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-swiper">
          <div className="swiper-image">
            <img
              src="https://s3.amazonaws.com/skybar.database.teset.1/CARPINTERIA.jpg"
              alt=""
            />
          </div>

          <div className="swiper-name">
            <h2>CARPINTERÍA</h2>
          </div>
        </SwiperSlide>

        {window.innerWidth > 1000 ? (
          <SwiperSlide className="card-swiper2"></SwiperSlide>
        ) : (
          <div></div>
        )}

        {window.innerWidth > 1000 ? (
          <div className="swiper-shadow2" tema={tema}></div>
        ) : (
          <div></div>
        )}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperCategories;

const SwiperContainer = styled.div`
  width: 100%;
  z-index: 1;
  transform: translateY(5rem);

  .mySwiper {
    width: 100%;
    padding: 2rem 10%;
  }

  .card-swiper {
    height: 20rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--color1)" : "var(--navColorLight)"};
    overflow: hidden;
    text-align: center;
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    color: white;
    box-shadow: 0 3px 15px var(--shadow);
  }

  .swiper-image {
    width: 100%;
    height: 80%;
    border-radius: 3px;
    overflow: hidden;
  }

  .swiper-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-name {
    width: 100%;
    height: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-name h2 {
    font-size: 1rem;
  }

  .swiper-shadow {
    position: absolute;
    width: 30rem;
    height: 50rem;
    top: 0;
    left: 0;
    background: var(--bShadow);
    z-index: 99999;
    pointer-events: none;
  }

  .swiper-shadow2 {
    position: absolute;
    width: 30rem;
    height: 50rem;
    top: 0;
    right: 0;
    z-index: 99999;
    background: var(--bShadow);
    pointer-events: none;
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 5rem;
    .mySwiper {
      height: auto;
    }

    .card-swiper {
      height: 15rem;
      padding: 0;
      border-radius: 0;
    }

    .swiper-image {
      width: 100%;
      border-radius: 0;
      height: 100%;
      object-fit: cover;
    }

    .swiper-name {
      height: 30%;
    }

    .swiper-name h2 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;
