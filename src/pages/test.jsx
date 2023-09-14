import { useEffect, useState } from 'react'

export const test = () => {
	const [loading, setLoading] = useState(0)

	useEffect(() => {
		setLoading(1)
		setTimeout(() => {
			setLoading(0)
		}, 3000)
	}, [])

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div>TEST</div>
					<div>TEST</div>
					<div>TEST</div>
					<div>TEST</div>
					<div>TEST</div>
					<div>TEST</div>
				</>
			)}
		</>
	)
}
