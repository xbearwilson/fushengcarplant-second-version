import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function Scene3(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('glb/scene3.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		actions.Ball_left_3.play()
		actions.Arrm.play()
		actions.Wrist.play()
		actions.Ball_right_3.play()
		actions.Car_3.play()
	})

	return (
		<group
			ref={group}
			{...props}
			dispose={null}>
			<group name='Scene'>
				<mesh
					name='Floor006'
					geometry={nodes.Floor006.geometry}
					material={materials.floor}
					position={[0, 0.3, 0]}
				/>
				<group
					name='wall_M002'
					position={[-0.325, 0.043, -0.318]}>
					<mesh
						name='Cube045'
						geometry={nodes.Cube045.geometry}
						material={materials['w_Main.002']}
					/>
					<mesh
						name='Cube045_1'
						geometry={nodes.Cube045_1.geometry}
						material={materials['w_Accent.002']}
					/>
					<mesh
						name='Cube045_2'
						geometry={nodes.Cube045_2.geometry}
						material={materials['w_DarkGrey.002']}
					/>
				</group>
				<group
					name='Wall_4_L004'
					position={[-0.3, 0, 0.037]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
					<mesh
						name='Wall_4008'
						geometry={nodes.Wall_4008.geometry}
						material={materials['w_Main.002']}
					/>
					<mesh
						name='Wall_4008_1'
						geometry={nodes.Wall_4008_1.geometry}
						material={materials['w_Accent.002']}
					/>
					<mesh
						name='Wall_4008_2'
						geometry={nodes.Wall_4008_2.geometry}
						material={materials['w_DarkGrey.002']}
					/>
				</group>
				<group
					name='Wall_4_L005'
					position={[0.008, 0, -0.3]}
					rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
						name='Wall_4008'
						geometry={nodes.Wall_4008.geometry}
						material={materials['w_Main.002']}
					/>
					<mesh
						name='Wall_4008_1'
						geometry={nodes.Wall_4008_1.geometry}
						material={materials['w_Accent.002']}
					/>
					<mesh
						name='Wall_4008_2'
						geometry={nodes.Wall_4008_2.geometry}
						material={materials['w_DarkGrey.002']}
					/>
				</group>
				<mesh
					name='forGLSL_3001'
					geometry={nodes.forGLSL_3001.geometry}
					material={materials.forGLSL_3}
					position={[0.092, 0.24, -0.044]}
				/>
				<mesh
					name='Ball_left006'
					geometry={nodes.Ball_left006.geometry}
					material={materials.b_PBR}
					position={[-0.14, 0.142, 0.301]}
					rotation={[-1.692, 0.315, -0.824]}>
					<mesh
						name='Arrm025'
						geometry={nodes.Arrm025.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1025'
							geometry={nodes.Arm_1025.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.132, 0.323, -0.404]}>
							<mesh
								name='Arm_2025'
								geometry={nodes.Arm_2025.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist025'
									geometry={nodes.Wrist025.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1025'
										geometry={nodes.Claw_1025.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2025'
										geometry={nodes.Claw_2025.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm026'
						geometry={nodes.Arrm026.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[-2.533, -0.4, -2.254]}>
						<mesh
							name='Arm_1026'
							geometry={nodes.Arm_1026.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2026'
								geometry={nodes.Arm_2026.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist026'
									geometry={nodes.Wrist026.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.266, -Math.PI]}>
									<mesh
										name='Claw_1026'
										geometry={nodes.Claw_1026.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2026'
										geometry={nodes.Claw_2026.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder033'
						geometry={nodes.Cylinder033.geometry}
						material={materials['b_PBR_eye.004']}
						position={[-0.001, 0.026, 0.002]}
						rotation={[2.861, 0.228, 3.047]}
					/>
					<mesh
						name='Cylinder034'
						geometry={nodes.Cylinder034.geometry}
						material={materials['b_PBR_eye.004']}
						position={[0.003, 0.025, -0.003]}
						rotation={[2.861, 0.228, 3.047]}
					/>
					<mesh
						name='Cylinder035'
						geometry={nodes.Cylinder035.geometry}
						material={materials['b_PBR_eye.004']}
						position={[-0.003, 0.024, -0.004]}
						rotation={[2.861, 0.228, 3.047]}
					/>
				</mesh>
				<mesh
					name='Ball_right006'
					geometry={nodes.Ball_right006.geometry}
					material={materials.b_PBR}
					position={[0.303, 0.085, -0.092]}
					rotation={[-2.438, 0.526, 2.123]}>
					<mesh
						name='Arrm027'
						geometry={nodes.Arrm027.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1027'
							geometry={nodes.Arm_1027.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[-0.5, 1.113, 0.48]}>
							<mesh
								name='Arm_2027'
								geometry={nodes.Arm_2027.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist027'
									geometry={nodes.Wrist027.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1027'
										geometry={nodes.Claw_1027.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2027'
										geometry={nodes.Claw_2027.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm028'
						geometry={nodes.Arrm028.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1028'
							geometry={nodes.Arm_1028.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2028'
								geometry={nodes.Arm_2028.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist028'
									geometry={nodes.Wrist028.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1028'
										geometry={nodes.Claw_1028.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2028'
										geometry={nodes.Claw_2028.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder036'
						geometry={nodes.Cylinder036.geometry}
						material={materials['b_PBR_eye.005']}
						position={[0.004, 0.021, -0.008]}
						rotation={[3.013, -0.024, -3.137]}
					/>
					<mesh
						name='Cylinder037'
						geometry={nodes.Cylinder037.geometry}
						material={materials['b_PBR_eye.005']}
						position={[0.007, 0.021, -0.013]}
						rotation={[3.013, -0.024, -3.137]}
					/>
					<mesh
						name='Cylinder038'
						geometry={nodes.Cylinder038.geometry}
						material={materials['b_PBR_eye.005']}
						position={[0.001, 0.021, -0.013]}
						rotation={[3.013, -0.024, -3.137]}
					/>
				</mesh>
				<group
					name='Car006'
					position={[0.094, 0.166, -0.038]}
					rotation={[0, -0.229, 0]}
					scale={0.843}>
					<mesh
						name='Cube040'
						geometry={nodes.Cube040.geometry}
						material={materials['c_Orange.002']}
					/>
					<mesh
						name='Cube040_1'
						geometry={nodes.Cube040_1.geometry}
						material={materials['c_DarkOrange.002']}
					/>
					<mesh
						name='Cube040_2'
						geometry={nodes.Cube040_2.geometry}
						material={materials.c_Windows}
					/>
					<mesh
						name='Cube040_3'
						geometry={nodes.Cube040_3.geometry}
						material={materials.c_Grey}
					/>
					<mesh
						name='Cube040_4'
						geometry={nodes.Cube040_4.geometry}
						material={materials.c_Headlights}
					/>
					<mesh
						name='Cube040_5'
						geometry={nodes.Cube040_5.geometry}
						material={materials.c_TailLights}
					/>
					<group
						name='tiles'
						position={[0.057, 0.021, 0.12]}
						rotation={[0, -0.022, -Math.PI / 2]}
						scale={1.187}>
						<mesh
							name='Cylinder174'
							geometry={nodes.Cylinder174.geometry}
							material={materials['c_Black.004']}
						/>
						<mesh
							name='Cylinder174_1'
							geometry={nodes.Cylinder174_1.geometry}
							material={materials['c_Grey.005']}
						/>
					</group>
				</group>
				<group
					name='scan001'
					position={[0.092, 0, -0.043]}
					rotation={[-Math.PI / 2, 0, 0.904]}>
					<mesh
						name='Props_Pod002'
						geometry={nodes.Props_Pod002.geometry}
						material={materials['Main.010']}
					/>
					<mesh
						name='Props_Pod002_1'
						geometry={nodes.Props_Pod002_1.geometry}
						material={materials['Accent.009']}
					/>
					<mesh
						name='Props_Pod002_2'
						geometry={nodes.Props_Pod002_2.geometry}
						material={materials['DarkGrey.009']}
					/>
					<mesh
						name='Props_Pod002_3'
						geometry={nodes.Props_Pod002_3.geometry}
						material={materials['DarkAccent.007']}
					/>
				</group>
				<group
					name='Plane012'
					position={[-0.118, 0.117, 0.212]}
					rotation={[Math.PI / 2, 0, 0.171]}>
					<mesh
						name='Plane010'
						geometry={nodes.Plane010.geometry}
						material={materials['mm.001']}
					/>
					<mesh
						name='Plane010_1'
						geometry={nodes.Plane010_1.geometry}
						material={materials.screen}
					/>
				</group>
				<mesh
					name='Plane013'
					geometry={nodes.Plane013.geometry}
					material={materials['mm.001']}
					position={[-0.108, 0.008, 0.154]}
					rotation={[0, -0.171, 0]}
				/>
				<group
					name='Plane014'
					position={[-0.127, 0.07, 0.265]}
					rotation={[0.714, -0.13, 0.112]}>
					<mesh
						name='Plane012_1'
						geometry={nodes.Plane012_1.geometry}
						material={materials.key}
					/>
					<mesh
						name='Plane012_2'
						geometry={nodes.Plane012_2.geometry}
						material={materials.Material}
					/>
				</group>
				<mesh
					name='Plane015'
					geometry={nodes.Plane015.geometry}
					material={materials['mm.001']}
					position={[-0.126, 0.058, 0.26]}
					rotation={[0.708, -0.131, 0.111]}
				/>
				<mesh
					name='Plane016'
					geometry={nodes.Plane016.geometry}
					material={materials['mm.001']}
					position={[-0.126, 0.008, 0.26]}
					rotation={[0, -0.171, 0]}
				/>
				<mesh
					name='Vert008'
					geometry={nodes.Vert008.geometry}
					material={materials.c_Grey}
					position={[-0.072, 0.005, 0.137]}
					rotation={[0, -0.139, 0]}
				/>
				<mesh
					name='Cube008'
					geometry={nodes.Cube008.geometry}
					material={materials['mm.001']}
					position={[-0.12, 0.005, 0.218]}
					rotation={[0, -0.162, 0]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('glb/scene3.glb')
