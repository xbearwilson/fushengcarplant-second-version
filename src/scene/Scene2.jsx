import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function Scene2(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('glb/scene2.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		actions.Ball_left_2.play()
		actions.Ball_right_2.play()
		actions.Car_2.play()
	})

	return (
		<group
			ref={group}
			{...props}
			dispose={null}>
			<group name='Scene'>
				<mesh
					name='Floor005'
					geometry={nodes.Floor005.geometry}
					material={materials.floor}
					position={[0, 0.3, 0]}
				/>
				<mesh
					name='o4'
					geometry={nodes.o4.geometry}
					material={materials.o4}
					position={[0.26, 0.157, -0.263]}
				/>
				<group
					name='_GROUP_003_grp'
					position={[0.248, 0.028, -0.122]}>
					<mesh
						name='o3'
						geometry={nodes.o3.geometry}
						material={materials.o3}
						position={[0, -0.01, 0.04]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<mesh
						name='o3001'
						geometry={nodes.o3001.geometry}
						material={materials.o3}
						position={[0, -0.01, -0.036]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<mesh
						name='o3002'
						geometry={nodes.o3002.geometry}
						material={materials.o3}
						position={[0, 0.02, -0.004]}
						rotation={[0, Math.PI / 2, 0]}
					/>
				</group>
				<group
					name='_GROUP_004_grp'
					position={[0.197, 0.059, -0.263]}>
					<mesh
						name='o1'
						geometry={nodes.o1.geometry}
						material={materials.o1}
						position={[-0.057, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1001'
						geometry={nodes.o1001.geometry}
						material={materials.o1}
						position={[-0.038, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1002'
						geometry={nodes.o1002.geometry}
						material={materials.o1}
						position={[-0.019, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1003'
						geometry={nodes.o1003.geometry}
						material={materials.o1}
						position={[0.044, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1004'
						geometry={nodes.o1004.geometry}
						material={materials.o1}
						position={[0.063, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1005'
						geometry={nodes.o1005.geometry}
						material={materials.o1}
						position={[0.082, -0.026, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1006'
						geometry={nodes.o1006.geometry}
						material={materials.o1}
						position={[0.044, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1007'
						geometry={nodes.o1007.geometry}
						material={materials.o1}
						position={[0.063, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1008'
						geometry={nodes.o1008.geometry}
						material={materials.o1}
						position={[0.082, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1009'
						geometry={nodes.o1009.geometry}
						material={materials.o1}
						position={[-0.063, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1010'
						geometry={nodes.o1010.geometry}
						material={materials.o1}
						position={[-0.044, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1011'
						geometry={nodes.o1011.geometry}
						material={materials.o1}
						position={[-0.025, 0.006, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1012'
						geometry={nodes.o1012.geometry}
						material={materials.o1}
						position={[-0.063, 0.039, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1013'
						geometry={nodes.o1013.geometry}
						material={materials.o1}
						position={[-0.044, 0.039, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						name='o1014'
						geometry={nodes.o1014.geometry}
						material={materials.o1}
						position={[-0.025, 0.039, 0]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
				</group>
				<group
					name='_GROUP_005_grp'
					position={[0.16, 0.136, -0.262]}>
					<mesh
						name='o2'
						geometry={nodes.o2.geometry}
						material={materials.o2}
						position={[-0.016, 0, 0]}
					/>
					<mesh
						name='o2001'
						geometry={nodes.o2001.geometry}
						material={materials.o2}
						position={[0.016, 0, 0]}
					/>
				</group>
				<group
					name='_GROUP_006_grp'
					position={[0.015, 0.185, 0.056]}>
					<mesh
						name='o5'
						geometry={nodes.o5.geometry}
						material={materials.o5}
						position={[0, 0, 0.138]}
					/>
					<mesh
						name='o5001'
						geometry={nodes.o5001.geometry}
						material={materials.o5}
					/>
					<mesh
						name='o5002'
						geometry={nodes.o5002.geometry}
						material={materials.o5}
						position={[0, 0, -0.138]}
					/>
				</group>
				<group
					name='Wall_4_L002'
					position={[0.008, 0, -0.3]}
					rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
						name='Wall_4006'
						geometry={nodes.Wall_4006.geometry}
						material={materials['w_Main.001']}
					/>
					<mesh
						name='Wall_4006_1'
						geometry={nodes.Wall_4006_1.geometry}
						material={materials['w_Accent.005']}
					/>
					<mesh
						name='Wall_4006_2'
						geometry={nodes.Wall_4006_2.geometry}
						material={materials['w_DarkGrey.001']}
					/>
				</group>
				<group
					name='Wall_4_L003'
					position={[-0.3, 0, 0.037]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
					<mesh
						name='Wall_4006'
						geometry={nodes.Wall_4006.geometry}
						material={materials['w_Main.001']}
					/>
					<mesh
						name='Wall_4006_1'
						geometry={nodes.Wall_4006_1.geometry}
						material={materials['w_Accent.005']}
					/>
					<mesh
						name='Wall_4006_2'
						geometry={nodes.Wall_4006_2.geometry}
						material={materials['w_DarkGrey.001']}
					/>
				</group>
				<group
					name='wall_M001'
					position={[-0.325, 0.043, -0.318]}>
					<mesh
						name='Cube038'
						geometry={nodes.Cube038.geometry}
						material={materials['w_Main.001']}
					/>
					<mesh
						name='Cube038_1'
						geometry={nodes.Cube038_1.geometry}
						material={materials['w_Accent.005']}
					/>
					<mesh
						name='Cube038_2'
						geometry={nodes.Cube038_2.geometry}
						material={materials['w_DarkGrey.001']}
					/>
				</group>
				<mesh
					name='forGLSL_2001'
					geometry={nodes.forGLSL_2001.geometry}
					material={materials.forGLSL_2}
					position={[0.015, 0.182, 0.055]}
				/>
				<group
					name='Props_Shelf003'
					position={[0.16, 0, -0.264]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}>
					<mesh
						name='Props_Shelf002'
						geometry={nodes.Props_Shelf002.geometry}
						material={materials['Main.005']}
					/>
					<mesh
						name='Props_Shelf002_1'
						geometry={nodes.Props_Shelf002_1.geometry}
						material={materials['w_Accent.005']}
					/>
					<mesh
						name='Props_Shelf002_2'
						geometry={nodes.Props_Shelf002_2.geometry}
						material={materials['DarkGrey.005']}
					/>
				</group>
				<group
					name='Props_ComputerSmall003'
					position={[-0.249, 0, 0.274]}
					rotation={[-Math.PI / 2, 0, 1.872]}>
					<mesh
						name='Props_ComputerSmall003_1'
						geometry={nodes.Props_ComputerSmall003_1.geometry}
						material={materials['Main.002']}
					/>
					<mesh
						name='Props_ComputerSmall003_2'
						geometry={nodes.Props_ComputerSmall003_2.geometry}
						material={materials['Accent.001']}
					/>
					<mesh
						name='Props_ComputerSmall003_3'
						geometry={nodes.Props_ComputerSmall003_3.geometry}
						material={materials['DarkGrey.001']}
					/>
					<mesh
						name='Props_ComputerSmall003_4'
						geometry={nodes.Props_ComputerSmall003_4.geometry}
						material={materials['Black.001']}
					/>
				</group>
				<group
					name='Props_Shelf004'
					position={[0.263, 0, -0.264]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}>
					<mesh
						name='Props_Shelf002'
						geometry={nodes.Props_Shelf002.geometry}
						material={materials['Main.005']}
					/>
					<mesh
						name='Props_Shelf002_1'
						geometry={nodes.Props_Shelf002_1.geometry}
						material={materials['w_Accent.005']}
					/>
					<mesh
						name='Props_Shelf002_2'
						geometry={nodes.Props_Shelf002_2.geometry}
						material={materials['DarkGrey.005']}
					/>
				</group>
				<mesh
					name='Ball_left005'
					geometry={nodes.Ball_left005.geometry}
					material={materials.b_PBR}
					position={[0.237, 0.053, 0.313]}
					rotation={[-1.721, -0.133, -0.907]}>
					<mesh
						name='Arrm021'
						geometry={nodes.Arrm021.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1021'
							geometry={nodes.Arm_1021.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.132, 0.323, -0.404]}>
							<mesh
								name='Arm_2021'
								geometry={nodes.Arm_2021.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist021'
									geometry={nodes.Wrist021.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1021'
										geometry={nodes.Claw_1021.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2021'
										geometry={nodes.Claw_2021.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm022'
						geometry={nodes.Arrm022.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1022'
							geometry={nodes.Arm_1022.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2022'
								geometry={nodes.Arm_2022.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist022'
									geometry={nodes.Wrist022.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1022'
										geometry={nodes.Claw_1022.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2022'
										geometry={nodes.Claw_2022.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder027'
						geometry={nodes.Cylinder027.geometry}
						material={materials['b_PBR_eye.002']}
						position={[-0.001, 0.034, 0.002]}
						rotation={[3.084, 0.471, -0.063]}
					/>
					<mesh
						name='Cylinder028'
						geometry={nodes.Cylinder028.geometry}
						material={materials['b_PBR_eye.002']}
						position={[-0.007, 0.033, -0.001]}
						rotation={[3.084, 0.471, -0.063]}
					/>
					<mesh
						name='Cylinder029'
						geometry={nodes.Cylinder029.geometry}
						material={materials['b_PBR_eye.002']}
						position={[-0.006, 0.034, 0.006]}
						rotation={[3.084, 0.471, -0.063]}
					/>
					<group
						name='Cylinder045'
						position={[-0.017, 0.069, -0.013]}
						rotation={[1.603, 0.213, -1.208]}>
						<mesh
							name='Cylinder148'
							geometry={nodes.Cylinder148.geometry}
							material={materials['c_Black.002']}
						/>
						<mesh
							name='Cylinder148_1'
							geometry={nodes.Cylinder148_1.geometry}
							material={materials['c_Grey.003']}
						/>
					</group>
				</mesh>
				<mesh
					name='03003'
					geometry={nodes['03003'].geometry}
					material={materials.o_DarkGrey}
					position={[0.035, 0.057, -0.1]}
					rotation={[0, -Math.PI / 2, 0]}
				/>
				<group
					name='Obj_02001'
					position={[0.035, 0.166, -0.1]}
					rotation={[0, Math.PI / 2, 0]}>
					<mesh
						name='Cube024'
						geometry={nodes.Cube024.geometry}
						material={materials.o_Main}
					/>
					<mesh
						name='Cube024_1'
						geometry={nodes.Cube024_1.geometry}
						material={materials.o_Accent}
					/>
				</group>
				<group
					name='Car005'
					position={[0.013, 0.211, 0.038]}>
					<mesh
						name='Cube025'
						geometry={nodes.Cube025.geometry}
						material={materials['c_Orange.001']}
					/>
					<mesh
						name='Cube025_1'
						geometry={nodes.Cube025_1.geometry}
						material={materials['c_DarkOrange.001']}
					/>
					<mesh
						name='Cube025_2'
						geometry={nodes.Cube025_2.geometry}
						material={materials.c_Windows}
					/>
					<mesh
						name='Cube025_3'
						geometry={nodes.Cube025_3.geometry}
						material={materials.c_Grey}
					/>
					<mesh
						name='Cube025_4'
						geometry={nodes.Cube025_4.geometry}
						material={materials.c_Headlights}
					/>
					<mesh
						name='Cube025_5'
						geometry={nodes.Cube025_5.geometry}
						material={materials.c_TailLights}
					/>
				</group>
				<mesh
					name='bottom_set003'
					geometry={nodes.bottom_set003.geometry}
					material={materials.x_DarkGrey}
					position={[0.015, 0.166, 0.044]}
				/>
				<mesh
					name='Ball_right005'
					geometry={nodes.Ball_right005.geometry}
					material={materials.b_PBR}
					position={[0.266, 0.114, -0.195]}
					rotation={[-2.488, 0.132, 1.539]}>
					<mesh
						name='Arrm023'
						geometry={nodes.Arrm023.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1023'
							geometry={nodes.Arm_1023.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[-0.5, 1.113, 0.48]}>
							<mesh
								name='Arm_2023'
								geometry={nodes.Arm_2023.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist023'
									geometry={nodes.Wrist023.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1023'
										geometry={nodes.Claw_1023.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2023'
										geometry={nodes.Claw_2023.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm024'
						geometry={nodes.Arrm024.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1024'
							geometry={nodes.Arm_1024.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2024'
								geometry={nodes.Arm_2024.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist024'
									geometry={nodes.Wrist024.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1024'
										geometry={nodes.Claw_1024.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2024'
										geometry={nodes.Claw_2024.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder030'
						geometry={nodes.Cylinder030.geometry}
						material={materials['b_PBR_eye.003']}
						position={[0.003, 0.024, -0.001]}
						rotation={[3.064, 0.414, -2.998]}
					/>
					<mesh
						name='Cylinder031'
						geometry={nodes.Cylinder031.geometry}
						material={materials['b_PBR_eye.003']}
						position={[0.008, 0.023, -0.004]}
						rotation={[3.064, 0.414, -2.998]}
					/>
					<mesh
						name='Cylinder032'
						geometry={nodes.Cylinder032.geometry}
						material={materials['b_PBR_eye.003']}
						position={[0.002, 0.024, -0.007]}
						rotation={[3.064, 0.414, -2.998]}
					/>
					<group
						name='Cylinder046'
						position={[0.021, 0.084, -0.017]}
						rotation={[-1.793, -0.511, 1.415]}>
						<mesh
							name='Cylinder173'
							geometry={nodes.Cylinder173.geometry}
							material={materials['c_Black.003']}
						/>
						<mesh
							name='Cylinder173_1'
							geometry={nodes.Cylinder173_1.geometry}
							material={materials['c_Grey.004']}
						/>
					</group>
				</mesh>
			</group>
		</group>
	)
}

useGLTF.preload('glb/scene2.glb')
