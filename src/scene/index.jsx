import { CameraControls, Center, Html, OrbitControls, Stage, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { Scene1 } from './Scene1'
import { Scene2 } from './Scene2'
import { Scene3 } from './Scene3'
import { Scene4 } from './Scene4'

export const Animscene = () => {
	const Loading = () => {
		const { progress } = useProgress()
		const loaderCss = {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'black',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white',
			fontSize: '1vw',
			fontFamily: 'sans-serif',
		}
		return (
			<Html
				center
				fullscreen
				style={loaderCss}>
				{progress.toFixed(0)} % loaded
			</Html>
		)
	}

	const cameraControlsRef = useRef()

	const Scene = () => {
		return (
			<group position={[0, 1, -1]}>
				<Suspense fallback={<Loading />}>
					<Stage
						preset={'rembrandt'}
						adjustCamera={1.0}
						environment={'city'}
						// shadows
						intensity={1.2}>
						<group
							position={[0, 0, 0]}
							scale={1}>
							<Center top>
								<group
									position={[1, 1.65, 0]}
									rotation={[0, Math.PI * 0.48, 0]}>
									<Scene1 />
								</group>
								<group
									position={[1, 1.35, 1]}
									rotation={[0, Math.PI * -2, 0]}>
									<Scene2 />
								</group>

								<group
									position={[0, 1.35, 0]}
									rotation={[0, Math.PI * 1, 0]}>
									<Scene3 />
								</group>

								<group
									position={[0, 1.35, 1]}
									rotation={[0, Math.PI * 1.5, 0]}>
									<Scene4 />
								</group>
							</Center>
						</group>
					</Stage>
				</Suspense>
			</group>
		)
	}

	const Buttons = () => {
		return (
			<div className='canvasButtonWrap'>
				<button
					onClick={() => {
						cameraControlsRef.current?.setPosition(1.47, 1.41, -2.4, true)
					}}>
					01
				</button>
				<button
					onClick={() => {
						cameraControlsRef.current?.setPosition(1.45, 0.5, 0.5, true)
					}}>
					02
				</button>
				<button
					onClick={() => {
						cameraControlsRef.current?.setPosition(-1.45, 0.63, -2.4, true)
					}}>
					03
				</button>
				<button
					onClick={() => {
						cameraControlsRef.current?.setPosition(-1.54, 0.66, 0.4, true)
					}}>
					04
				</button>
			</div>
		)
	}

	const [dpr, setDpr] = useState(2)

	return (
		<>
			<Canvas
				dpr={dpr}
				performance={{ min: 1 }}
				camera={{ position: [1.47, 1.41, -2.4], fov: 75, zoom: 2.2, near: 1, far: 1000 }}
				gl={{ antialias: false, preserveDrawingBuffer: true }}>
				<CameraControls ref={cameraControlsRef} />
				<OrbitControls
					makeDefault
					target={[0, 0, 0]}
					enableZoom={false}
					enablePan={false}
					// minPolarAngle={Math.PI * 0.35}
					// maxPolarAngle={Math.PI * 0.45}
					// minAzimuthAngle={-Math.PI * 0.01}
					// maxAzimuthAngle={Math.PI * 0.45}
				/>
				<Scene />
			</Canvas>
			<Buttons />
		</>
	)
}
