'use client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/components/MainSlider/MainSlider.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import visual1 from '@/assets/img/visual1-pc.webp';
import visual2 from '@/assets/img/visual2-pc.webp';
import visual3 from '@/assets/img/visual3-pc.webp';
import visual4 from '@/assets/img/visual4-pc.webp';
import visual5 from '@/assets/img/visual5-pc.webp';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function MainSlider() {
  return (
    <>
      <Swiper //전체 슬라이드를 감싸는 부모
        className="!pb-[40px] !mt-[16px] lg:!mt-[22px] md:!mt-[20px] md:!pb-[60px] !px-[0px] md:!px-[16px]"
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        slidesPerView={'auto'}
        speed={800}
        // Swiper의 반응형 옵션, 테일윈드와 작동방식 유사
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          768: {
            spaceBetween: 20,
          },
          1200: {
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}>
        {/* 슬라이드 아이템 1개 */}
        <SwiperSlide className="xl:!w-[1000px] md:!w-[80%] !w-full">
          <Link href="/">
            <Image
              className="md:rounded"
              src={visual1}
              width={1920}
              height={1080}
              alt="마리오 카트 월드"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="xl:!w-[1000px] md:!w-[80%] !w-full ">
          <Link href="/">
            <Image
              className="md:rounded"
              src={visual2}
              width={1920}
              height={1080}
              alt="젤다의 전설 야생의 숨결"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="xl:!w-[1000px] md:!w-[80%] !w-full">
          <Link href="/">
            <Image
              className="md:rounded"
              src={visual3}
              width={1920}
              height={1080}
              alt="동키콩 바난자"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="xl:!w-[1000px] md:!w-[80%] !w-full">
          <Link href="/">
            <Image
              className=" md:rounded"
              src={visual4}
              width={1920}
              height={1080}
              alt="스트리트 파이터 닌텐도 스위치 2 에디션"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="xl:!w-[1000px] md:!w-[80%] !w-full">
          <Link href="/">
            <Image
              className=" md:rounded"
              src={visual5}
              width={1920}
              height={1080}
              alt="젤다의 전설 왕국의 눈물"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
