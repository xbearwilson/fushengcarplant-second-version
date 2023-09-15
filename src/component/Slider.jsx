/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { useRef } from 'react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export const Slider = () => {
	const progressCircle = useRef(null)
	const progressContent = useRef(null)
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress)
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
	}
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Pagination, Navigation]}
			onAutoplayTimeLeft={onAutoplayTimeLeft}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={swiper => console.log(swiper)}
		>
			<SwiperSlide>
				<img
					src='img/scene1.webp'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='img/scene2.webp'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='img/scene3.webp'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='img/scene4.webp'
					alt=''
				/>
			</SwiperSlide>

			<div
				className='autoplay-progress'
				slot='container-end'>
				<svg
					viewBox='0 0 48 48'
					ref={progressCircle}>
					<circle
						cx='24'
						cy='24'
						r='20'></circle>
				</svg>
				<span ref={progressContent}></span>
			</div>
		</Swiper>
	)
}
