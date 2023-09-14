import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function Scene1(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('glb/scene1.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		actions.Ball_left_1.play()
		actions.Ball_right_1.play()
		actions.burn.play()
	})

	return (
		<group
			ref={group}
			{...props}
			dispose={null}>
			<group name='Scene'>
				<mesh
					name='Floor004'
					geometry={nodes.Floor004.geometry}
					material={materials.floor}
					position={[0, 0.3, 0]}
				/>
				<group
					name='Wall_4_L'
					position={[-0.3, 0, 0.037]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
					<mesh
						name='Wall_4004'
						geometry={nodes.Wall_4004.geometry}
						material={materials.w_Main}
					/>
					<mesh
						name='Wall_4004_1'
						geometry={nodes.Wall_4004_1.geometry}
						material={materials.w_Accent}
					/>
					<mesh
						name='Wall_4004_2'
						geometry={nodes.Wall_4004_2.geometry}
						material={materials.w_DarkGrey}
					/>
				</group>
				<group
					name='wall_M'
					position={[-0.325, 0.043, -0.318]}>
					<mesh
						name='Cube019'
						geometry={nodes.Cube019.geometry}
						material={materials.w_Main}
					/>
					<mesh
						name='Cube019_1'
						geometry={nodes.Cube019_1.geometry}
						material={materials.w_Accent}
					/>
					<mesh
						name='Cube019_2'
						geometry={nodes.Cube019_2.geometry}
						material={materials.w_DarkGrey}
					/>
				</group>
				<group
					name='Wall_4_L001'
					position={[0.008, 0, -0.3]}
					rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
						name='Wall_4004'
						geometry={nodes.Wall_4004.geometry}
						material={materials.w_Main}
					/>
					<mesh
						name='Wall_4004_1'
						geometry={nodes.Wall_4004_1.geometry}
						material={materials.w_Accent}
					/>
					<mesh
						name='Wall_4004_2'
						geometry={nodes.Wall_4004_2.geometry}
						material={materials.w_DarkGrey}
					/>
				</group>
				<group
					name='_GROUP_001_grp'
					position={[0.241, 0.029, -0.272]}>
					<mesh
						name='caseB'
						geometry={nodes.caseB.geometry}
						material={materials.caseB}
						position={[-0.041, -0.011, 0]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<mesh
						name='caseB001'
						geometry={nodes.caseB001.geometry}
						material={materials.caseB}
						position={[0.036, -0.011, 0]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<mesh
						name='caseB002'
						geometry={nodes.caseB002.geometry}
						material={materials.caseB}
						position={[0.005, 0.022, 0]}
						rotation={[0, Math.PI / 2, 0]}
					/>
				</group>
				<group
					name='_GROUP_002_grp'
					position={[-0.218, 0.063, 0.278]}
					rotation={[0, -0.774, 0]}>
					<mesh
						name='caseA'
						geometry={nodes.caseA.geometry}
						material={materials.caseA}
						position={[0.028, -0.015, 0]}
					/>
					<mesh
						name='caseA001'
						geometry={nodes.caseA001.geometry}
						material={materials.caseA}
						position={[-0.03, -0.015, 0]}
					/>
					<mesh
						name='caseA002'
						geometry={nodes.caseA002.geometry}
						material={materials.caseA}
						position={[0.003, 0.031, 0]}
					/>
				</group>
				<mesh
					name='Ball_left004'
					geometry={nodes.Ball_left004.geometry}
					material={materials.b_PBR}
					position={[-0.054, 0.246, 0.252]}
					rotation={[-1.758, -0.17, -2.415]}>
					<mesh
						name='Arrm017'
						geometry={nodes.Arrm017.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1017'
							geometry={nodes.Arm_1017.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.132, 0.323, -0.404]}>
							<mesh
								name='Arm_2017'
								geometry={nodes.Arm_2017.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist017'
									geometry={nodes.Wrist017.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1017'
										geometry={nodes.Claw_1017.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2017'
										geometry={nodes.Claw_2017.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm018'
						geometry={nodes.Arrm018.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1018'
							geometry={nodes.Arm_1018.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2018'
								geometry={nodes.Arm_2018.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist018'
									geometry={nodes.Wrist018.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1018'
										geometry={nodes.Claw_1018.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2018'
										geometry={nodes.Claw_2018.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cube004'
						geometry={nodes.Cube004.geometry}
						material={materials.c_Orange}
						position={[-0.002, 0.064, -0.02]}
						rotation={[1.891, 1.259, 0]}
					/>
					<mesh
						name='Cylinder050'
						geometry={nodes.Cylinder050.geometry}
						material={materials.b_PBR_eye}
						position={[0.006, 0.024, -0.005]}
						rotation={[2.703, -0.053, -2.999]}
					/>
					<mesh
						name='Cylinder051'
						geometry={nodes.Cylinder051.geometry}
						material={materials.b_PBR_eye}
						position={[0.009, 0.021, -0.01]}
						rotation={[2.703, -0.053, -2.999]}
					/>
					<mesh
						name='Cylinder052'
						geometry={nodes.Cylinder052.geometry}
						material={materials.b_PBR_eye}
						position={[0.002, 0.022, -0.01]}
						rotation={[2.703, -0.053, -2.999]}
					/>
				</mesh>
				<mesh
					name='Ball_right004'
					geometry={nodes.Ball_right004.geometry}
					material={materials.b_PBR}
					position={[0.204, 0.103, -0.173]}
					rotation={[-2.012, 0.14, -0.329]}>
					<mesh
						name='Arrm019'
						geometry={nodes.Arrm019.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1019'
							geometry={nodes.Arm_1019.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.132, 0.323, -0.404]}>
							<mesh
								name='Arm_2019'
								geometry={nodes.Arm_2019.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist019'
									geometry={nodes.Wrist019.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1019'
										geometry={nodes.Claw_1019.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2019'
										geometry={nodes.Claw_2019.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm020'
						geometry={nodes.Arrm020.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1020'
							geometry={nodes.Arm_1020.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2020'
								geometry={nodes.Arm_2020.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist020'
									geometry={nodes.Wrist020.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1020'
										geometry={nodes.Claw_1020.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2020'
										geometry={nodes.Claw_2020.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cube005'
						geometry={nodes.Cube005.geometry}
						material={materials.c_Orange}
						position={[-0.002, 0.064, -0.02]}
						rotation={[1.891, 1.259, 0]}
					/>
					<mesh
						name='Cylinder024'
						geometry={nodes.Cylinder024.geometry}
						material={materials['b_PBR_eye.001']}
						position={[0, 0.035, -0.006]}
						rotation={[-3.096, 0.18, -0.08]}
					/>
					<mesh
						name='Cylinder025'
						geometry={nodes.Cylinder025.geometry}
						material={materials['b_PBR_eye.001']}
						position={[-0.006, 0.034, -0.007]}
						rotation={[-3.096, 0.18, -0.08]}
					/>
					<mesh
						name='Cylinder026'
						geometry={nodes.Cylinder026.geometry}
						material={materials['b_PBR_eye.001']}
						position={[-0.004, 0.034, -0.001]}
						rotation={[-3.096, 0.18, -0.08]}
					/>
				</mesh>
				<group
					name='Props_Computer005'
					position={[0.105, 0, -0.26]}
					rotation={[0, -0.265, 0]}>
					<mesh
						name='Props_Computer004'
						geometry={nodes.Props_Computer004.geometry}
						material={materials.o_Main}
					/>
					<mesh
						name='Props_Computer004_1'
						geometry={nodes.Props_Computer004_1.geometry}
						material={materials.o_Black}
					/>
					<mesh
						name='Props_Computer004_2'
						geometry={nodes.Props_Computer004_2.geometry}
						material={materials.o_DarkGrey}
					/>
				</group>
				<mesh
					name='03002'
					geometry={nodes['03002'].geometry}
					material={materials.o_DarkGrey}
					position={[0.236, 0.057, 0.028]}
				/>
				<group
					name='02001'
					position={[0.236, 0.166, 0.028]}>
					<mesh
						name='Cube030'
						geometry={nodes.Cube030.geometry}
						material={materials.o_Main}
					/>
					<mesh
						name='Cube030_1'
						geometry={nodes.Cube030_1.geometry}
						material={materials.o_Accent}
					/>
				</group>
				<mesh
					name='04001'
					geometry={nodes['04001'].geometry}
					material={materials.o_DarkGrey}
					position={[-0.209, 0.057, 0.028]}
				/>
				<mesh
					name='01001'
					geometry={nodes['01001'].geometry}
					material={materials.o_DarkGrey}
					position={[-0.085, 0.243, 0.029]}
				/>
				<group
					name='Car004'
					position={[0.013, 0.038, 0.038]}>
					<mesh
						name='Cube032'
						geometry={nodes.Cube032.geometry}
						material={materials.c_Orange}
					/>
					<mesh
						name='Cube032_1'
						geometry={nodes.Cube032_1.geometry}
						material={materials.c_DarkOrange}
					/>
					<mesh
						name='Cube032_2'
						geometry={nodes.Cube032_2.geometry}
						material={materials.c_Windows}
					/>
					<mesh
						name='Cube032_3'
						geometry={nodes.Cube032_3.geometry}
						material={materials.c_Headlights}
					/>
					<mesh
						name='Cube032_4'
						geometry={nodes.Cube032_4.geometry}
						material={materials.c_TailLights}
					/>
				</group>
				<mesh
					name='bottom_set002'
					geometry={nodes.bottom_set002.geometry}
					material={materials.x_DarkGrey}
					position={[0.015, 0.018, 0.044]}
				/>
				<group
					name='Cylinder048'
					position={[0.083, 0.064, 0.178]}
					rotation={[0, 0, -Math.PI / 2]}>
					<mesh
						name='Cylinder202'
						geometry={nodes.Cylinder202.geometry}
						material={materials.c_Black}
					/>
					<mesh
						name='Cylinder202_1'
						geometry={nodes.Cylinder202_1.geometry}
						material={materials.c_Grey}
					/>
				</group>
				<group
					name='Cylinder049'
					position={[0.083, 0.064, -0.11]}
					rotation={[0, 0, -Math.PI / 2]}>
					<mesh
						name='Cylinder202'
						geometry={nodes.Cylinder202.geometry}
						material={materials.c_Black}
					/>
					<mesh
						name='Cylinder202_1'
						geometry={nodes.Cylinder202_1.geometry}
						material={materials.c_Grey}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('glb/scene1.glb')
