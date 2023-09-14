/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { Content } from './Content'
import { Loading } from './Loading'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [pct, setPct] = useState(0)
	const [loading, setLoading] = useState(1)

	useEffect(() => {
		let currProgress = 10
		let step = 1
		const interval = setInterval(() => {
			currProgress += step
			let progress = Math.round((Math.atan(currProgress) / (Math.PI / 2)) * 100 * 1000) / 1000

			if (progress >= 99) {
				clearInterval(interval)
				setLoading(0)
			}

			setPct(parseFloat(progress.toPrecision(3)))
		}, 100)
		return () => clearInterval(interval)
	}, [])

	return <>{loading ? <Loading percentage={pct} /> : <Content />}</>
}
