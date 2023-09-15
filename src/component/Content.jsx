/* eslint-disable @next/next/no-img-element */
import { useLocale } from '@/hooks/useLocale'
import { useTranslate } from '@/hooks/useTranslate'
import Lenis from '@studio-freight/lenis'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Animscene } from '../scene'
import { fadeIn } from '../variants'
import { Slider } from './Slider'

export const Content = () => {
	const targetRef = useRef(null)
	const fadeInTop = {
		initial: {
			opacity: 0,
			y: 150,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
	}
	const fadeInBottom = {
		initial: {
			opacity: 0,
			y: -150,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
	}
	const fadeInLeft = {
		initial: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
			// transition: {
			// 	delay: 0.3,
			// },
		},
	}
	const fadeInRight = {
		initial: {
			opacity: 0,
			x: 100,
		},
		animate: {
			opacity: 1,
			x: 0,
			// transition: {
			// 	delay: 0.3,
			// },
		},
	}
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['0 1', '.5 1'],
	})

	const { switchLocale, locale } = useLocale()
	const { t } = useTranslate()
	const [checked, setChecked] = useState(false)
	const [isSlide, setIsSlide] = useState(false)
	const pRef = useRef(null)
	const headerRef = useRef(null)
	const checkRef = useRef(null)
	const scrollupRef = useRef(null)
	const msgRef = useRef(null)
	const animRef = useRef(null)
	const slideRef = useRef(null)

	const handleChange = () => {
		if (checkRef.current.checked) {
			setChecked(!checked)
			switchLocale('en')
			// pRef.current.style.textAlign = 'left'
		} else {
			setChecked(!checked)
			switchLocale('zh')
			// pRef.current.style.textAlign = 'justify'
		}
	}

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		const handleScroll = event => {
			headerRef.current.classList.toggle('scrollBg', window.scrollY >= 10)
		}
		const handleScrollUp = event => {
			scrollupRef.current.classList.toggle('show-scroll', window.scrollY >= 150)
		}

		if (window !== undefined) {
			const x = window.matchMedia('(max-width: 376px)')
			const y = window.matchMedia('(min-width: 1024px)')
			if (x.matches) {
				headerRef.current.classList.add('scrollBg')
			} else {
				headerRef.current.classList.remove('scrollBg')
			}
			if (y.matches) {
				setIsSlide(false)
			} else {
				setIsSlide(true)
			}
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('scroll', handleScrollUp)
		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('scroll', handleScrollUp)
		}
	}, [])

	// Month Detect
	useEffect(() => {
		let date = new Date()
		let month = date.getMonth() + 1
		if (month >= 5 && month <= 9) {
			msgRef.current.style.display = 'block'
		} else {
			msgRef.current.style.display = 'none'
		}
	}, [])

	return (
		<>
			{/* Header */}
			<header
				id='top'
				ref={headerRef}
				className='header'>
				<div className='header__in'>
					<motion.div
						variants={fadeInLeft}
						initial='initial'
						whileInView='animate'
						className='logo'>
						<Link
							href='/'
							title='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'>
							<h1>Logo</h1>
						</Link>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.1)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='lang_wrap'>
						<div className='lang'>
							<label className='switch'>
								<input
									id='checkbox'
									ref={checkRef}
									type='checkbox'
									value={checked}
									onChange={handleChange}
								/>
								<span className='slider' />
							</label>
						</div>
					</motion.div>
				</div>
			</header>
			<main>
				{/* home */}
				<section
					id='home'
					ref={targetRef}
					className='home'>
					<div className='home__content'>
						<div className='space' />
						<motion.div
							className='content'
							variants={fadeInTop}
							initial='initial'
							whileInView='animate'>
							<div className='title'>{t('home.title')}</div>
							<p ref={pRef}>{t('home.title_content')}</p>
							<div className='txtb'>{t('home.txtb1')}</div>
							<Image
								className='txtLogos'
								src='/img/autosLogos.svg'
								width={0}
								height={0}
								alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								title='Logos'
							/>
							<div className='title'>{t('home.subTitle')}</div>
							<p ref={pRef}>{t('home.subTitle_p')}</p>
							<div className='subTitle'>{t('home.txtb2')}</div>
							<div className='info'>
								<div className='icons'>
									<button
										className='hicon'
										type='button'
										onClick={e => {
											e.preventDefault()
											window.location.href = 'https://bit.ly/3EBT4mE'
										}}>
										<img
											src='/img/map.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
											title='Map'
										/>
									</button>
									<button
										className='hicon'
										type='button'>
										<img
											src='/img/facebook.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
											title='Facebook'
										/>
									</button>
									<button
										className='hicon'
										type='button'>
										<img
											src='/img/line.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
											title='Line'
										/>
									</button>
								</div>
								<div className='cc'>
									<div className='cc1 txtb'>
										<div>{t('home.cc1')}</div>
										<div>
											<Link href='https://bit.ly/3EBT4mE'>{t('home.cc1c')}</Link>
										</div>
									</div>
									<div className='cc2 txtb'>
										<div>{t('home.cc2')}</div>
										<div>
											<Link href='tel:0227972728'>2797-2728</Link>，<Link href='tel:0920731903'>0920-731-903</Link>
										</div>
									</div>
									<div className='cc3 txtb'>
										<div>{t('home.cc3')}</div>
										<div>{t('home.cc3c')}</div>
									</div>
								</div>
							</div>
							<div
								className='msg'
								ref={msgRef}>
								<div className='msgT'>
									<img
										src='/img/msgT.webp'
										alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										title=''
									/>
								</div>
								<div className='msgM'>
									<div className='msgContent'>
										<img
											className='msgSun'
											src='/img/sun.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
											title='愛車冷氣空調檢測'
										/>
										<div className='msgTxt'>{t('home.msgTxt')}</div>
									</div>
								</div>
								<div className='msgB'>
									<img
										src='/img/msgb.webp'
										alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										title=''
									/>
									<div className='msgLady'>
										<img
											src='/img/lady.webp'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
											title=''
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
					<motion.div
						variants={fadeInBottom}
						initial='initial'
						whileInView='animate'
						className='home__container'>
						{/* <img
							src='/img/3dScene.webp'
							alt=''
						/> */}
						{isSlide ? <Slider /> : <Animscene />}
					</motion.div>
				</section>
				{/* Mcontent */}
				<section
					className='mcontent'
					id='mcontent'>
					<div className='ctAll'>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct1.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct1.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title1')}</div>
								</div>
								<p ref={pRef}>{t('mct.p1')}</p>
							</div>
						</div>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct2.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct2.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title2')}</div>
								</div>
								<p ref={pRef}>{t('mct.p2')}</p>
							</div>
						</div>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct3.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct3.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title3')}</div>
								</div>
								<p ref={pRef}>{t('mct.p3')}</p>
							</div>
						</div>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct4.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct4.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title4')}</div>
								</div>
								<p ref={pRef}>{t('mct.p4')}</p>
							</div>
						</div>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct5.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct5.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title5')}</div>
								</div>
								<p ref={pRef}>{t('mct.p5')}</p>
							</div>
						</div>
						<div className='ctWrap'>
							<motion.div
								variants={fadeInRight}
								initial='initial'
								whileInView='animate'
								className='ctImg'>
								<img
									className='isLoad'
									src='/img/ct6.webp'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								/>
							</motion.div>
							<div className='ct'>
								<div className='ctmTitle'>
									<div className='ctmTitle__ico'>
										<img
											src='/img/ct6.svg'
											alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
										/>
									</div>
									<div className='ctmTitle__txt'>{t('mct.title6')}</div>
								</div>
								<p ref={pRef}>{t('mct.p6')}</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* footer */}
			<footer className='footer'>
				<div className='footer__wrap'>
					<motion.div
						variants={fadeInTop}
						initial='initial'
						whileInView='animate'
						className='footer__logoWrap'>
						<div className='footer__logo'>
							<img
								src='/img/f_logo.svg'
								alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
								title='富勝汽車保修'
							/>
						</div>
						<div className='footer__copy'>{t('foot.copy')}</div>
						<div className='footer__iconWrap'>
							<button
								className='ficon'
								type='button'
								onClick={e => {
									e.preventDefault()
									window.location.href = 'https://bit.ly/3EBT4mE'
								}}>
								<img
									src='/img/f_map.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='Map'
								/>
							</button>
							<button
								className='ficon'
								type='button'>
								<img
									src='/img/f_facebook.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='Facebook'
								/>
							</button>
							<button
								className='ficon'
								type='button'>
								<img
									src='/img/f_line.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='Line'
								/>
							</button>
						</div>
					</motion.div>
					<motion.div
						variants={fadeInTop}
						initial='initial'
						whileInView='animate'
						className='footer__icoWrap'>
						<div className='footer__icoRow'>
							<div className='footer__ico'>
								<img
									src='/img/f_ico1.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='定期保養'
								/>
							</div>
							<div className='footer__ico'>
								<img
									src='/img/f_ico2.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='電腦診斷'
								/>
							</div>
							<div className='footer__ico'>
								<img
									src='/img/f_ico3.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='底盤剎車'
								/>
							</div>
						</div>
						<div className='footer__icoRow'>
							<div className='footer__ico'>
								<img
									src='/img/f_ico4.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='冷氣空調'
								/>
							</div>
							<div className='footer__ico'>
								<img
									src='/img/f_ico5.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='鈑金烤漆'
								/>
							</div>
							<div className='footer__ico'>
								<img
									src='/img/f_ico6.svg'
									alt='台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
									title='輪胎定位'
								/>
							</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeInTop}
						initial='initial'
						whileInView='animate'
						className='footer__infoAll'>
						<div>{t('foot.add')}</div>
						<div>27972728，0920731903</div>
						<div>{t('foot.time')}</div>
					</motion.div>
				</div>
			</footer>
			{/* scrollup */}
			<Link
				ref={scrollupRef}
				className='scrollup'
				href='/'>
				<img
					src='/img/up-arrow.svg'
					alt=''
				/>
				<span />
			</Link>
		</>
	)
}
