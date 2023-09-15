import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const Loading = ({ percentage }) => {
	const spinTransition = {
		repeat: Infinity,
		ease: 'linear',
		duration: 0.5,
	}

	return (
		<>
			<div className='lorderWrapO'>
				<div className='lorderWrap'>
					<Image
						className='loaderLogo'
						src='/img/Logo.svg'
						width={0}
						height={0}
						alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
						title='Logos'
					/>
					<motion.span
						className='cycleStyle'
						animate={{ rotate: 360 }}
						transition={spinTransition}
					/>
					<span className='loaderTxt'>{percentage ? `Loading　${percentage.toString().substring(0, 2)}%` : 'Loading...'}</span>
				</div>
			</div>
		</>
	)
}
