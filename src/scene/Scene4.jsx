import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export function Scene4(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('glb/scene4.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		actions.Ball_left_4.play()
		actions.Ball_right_4.play()
		actions.Car_4.play()
	})

	return (
		<group
			ref={group}
			{...props}
			dispose={null}>
			<group name='Scene'>
				<mesh
					name='Floor007'
					geometry={nodes.Floor007.geometry}
					material={materials.floor}
					position={[0, 0.3, 0]}
				/>
				<group
					name='Wall_4_L006'
					position={[0.008, 0, -0.3]}
					rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
						name='Wall_4009'
						geometry={nodes.Wall_4009.geometry}
						material={materials['w_Main.003']}
					/>
					<mesh
						name='Wall_4009_1'
						geometry={nodes.Wall_4009_1.geometry}
						material={materials['w_Accent.003']}
					/>
					<mesh
						name='Wall_4009_2'
						geometry={nodes.Wall_4009_2.geometry}
						material={materials['w_DarkGrey.003']}
					/>
				</group>
				<group
					name='Wall_4_L007'
					position={[-0.3, 0, 0.037]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
					<mesh
						name='Wall_4009'
						geometry={nodes.Wall_4009.geometry}
						material={materials['w_Main.003']}
					/>
					<mesh
						name='Wall_4009_1'
						geometry={nodes.Wall_4009_1.geometry}
						material={materials['w_Accent.003']}
					/>
					<mesh
						name='Wall_4009_2'
						geometry={nodes.Wall_4009_2.geometry}
						material={materials['w_DarkGrey.003']}
					/>
				</group>
				<group
					name='wall_M003'
					position={[-0.325, 0.043, -0.318]}>
					<mesh
						name='Cube046'
						geometry={nodes.Cube046.geometry}
						material={materials['w_Main.003']}
					/>
					<mesh
						name='Cube046_1'
						geometry={nodes.Cube046_1.geometry}
						material={materials['w_Accent.003']}
					/>
					<mesh
						name='Cube046_2'
						geometry={nodes.Cube046_2.geometry}
						material={materials['w_DarkGrey.003']}
					/>
				</group>
				<mesh
					name='forGLSL_4001'
					geometry={nodes.forGLSL_4001.geometry}
					material={materials.forGLSL_4}
					position={[0.087, 0.118, -0.065]}
				/>
				<mesh
					name='Vert009'
					geometry={nodes.Vert009.geometry}
					material={materials.c_Grey}
					position={[0.03, 0.24, 0.138]}
					rotation={[0, -0.127, 0]}
				/>
				<mesh
					name='Vert010'
					geometry={nodes.Vert010.geometry}
					material={materials.c_Grey}
					position={[0.035, 0.24, 0.138]}
					rotation={[0, -0.127, 0]}
				/>
				<mesh
					name='Vert011'
					geometry={nodes.Vert011.geometry}
					material={materials.c_Grey}
					position={[0.079, 0.168, 0.115]}
					rotation={[0, -0.127, 0]}
				/>
				<mesh
					name='Vert012'
					geometry={nodes.Vert012.geometry}
					material={materials.c_Grey}
					position={[0.013, 0.168, 0.115]}
					rotation={[0, -0.127, 0]}
				/>
				<mesh
					name='o1015'
					geometry={nodes.o1015.geometry}
					material={materials['o1.001']}
					position={[0.009, 0.244, 0.113]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o1016'
					geometry={nodes.o1016.geometry}
					material={materials['o1.001']}
					position={[0.023, 0.256, 0.064]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o1017'
					geometry={nodes.o1017.geometry}
					material={materials['o1.001']}
					position={[0.09, 0.256, 0.077]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o1018'
					geometry={nodes.o1018.geometry}
					material={materials['o1.001']}
					position={[0.077, 0.244, 0.127]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o1019'
					geometry={nodes.o1019.geometry}
					material={materials['o1.001']}
					position={[0.08, 0.173, 0.114]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o1020'
					geometry={nodes.o1020.geometry}
					material={materials['o1.001']}
					position={[0.013, 0.172, 0.114]}
					rotation={[-Math.PI, 0, 0]}
				/>
				<mesh
					name='o5003'
					geometry={nodes.o5003.geometry}
					material={materials['o5.001']}
					position={[0.048, 0.254, 0.101]}
					rotation={[0.219, -0.191, 0.042]}
				/>
				<mesh
					name='Ball_left007'
					geometry={nodes.Ball_left007.geometry}
					material={materials.b_PBR}
					position={[-0.098, 0.117, 0.291]}
					rotation={[-1.43, 0.442, -1.635]}>
					<mesh
						name='Arrm029'
						geometry={nodes.Arrm029.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1029'
							geometry={nodes.Arm_1029.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.132, 0.323, -0.404]}>
							<mesh
								name='Arm_2029'
								geometry={nodes.Arm_2029.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist029'
									geometry={nodes.Wrist029.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1029'
										geometry={nodes.Claw_1029.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2029'
										geometry={nodes.Claw_2029.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm030'
						geometry={nodes.Arrm030.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1030'
							geometry={nodes.Arm_1030.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2030'
								geometry={nodes.Arm_2030.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist030'
									geometry={nodes.Wrist030.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1030'
										geometry={nodes.Claw_1030.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2030'
										geometry={nodes.Claw_2030.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder039'
						geometry={nodes.Cylinder039.geometry}
						material={materials['b_PBR_eye.006']}
						position={[-0.001, 0.027, 0.005]}
						rotation={[3.103, 0.167, 3.068]}
					/>
					<mesh
						name='Cylinder040'
						geometry={nodes.Cylinder040.geometry}
						material={materials['b_PBR_eye.006']}
						position={[0.003, 0.027, 0]}
						rotation={[3.103, 0.167, 3.068]}
					/>
					<mesh
						name='Cylinder041'
						geometry={nodes.Cylinder041.geometry}
						material={materials['b_PBR_eye.006']}
						position={[-0.003, 0.026, -0.001]}
						rotation={[3.103, 0.167, 3.068]}
					/>
				</mesh>
				<mesh
					name='Ball_right007'
					geometry={nodes.Ball_right007.geometry}
					material={materials.b_PBR}
					position={[0.238, 0.136, 0.035]}
					rotation={[-1.88, 0.94, 1.17]}>
					<mesh
						name='Arrm031'
						geometry={nodes.Arrm031.geometry}
						material={materials.b_PBR}
						position={[-0.021, 0.006, -0.012]}
						rotation={[0.584, -0.563, 1.766]}>
						<mesh
							name='Arm_1031'
							geometry={nodes.Arm_1031.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[-0.5, 1.113, 0.48]}>
							<mesh
								name='Arm_2031'
								geometry={nodes.Arm_2031.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist031'
									geometry={nodes.Wrist031.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 0.741, -Math.PI]}>
									<mesh
										name='Claw_1031'
										geometry={nodes.Claw_1031.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.522]}
									/>
									<mesh
										name='Claw_2031'
										geometry={nodes.Claw_2031.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.338]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Arrm032'
						geometry={nodes.Arrm032.geometry}
						material={materials.b_PBR}
						position={[0.025, 0.002, -0.004]}
						rotation={[2.776, -0.026, -2.06]}>
						<mesh
							name='Arm_1032'
							geometry={nodes.Arm_1032.geometry}
							material={materials.b_PBR}
							position={[0, 0.023, 0]}
							rotation={[0.457, 0.006, -0.172]}>
							<mesh
								name='Arm_2032'
								geometry={nodes.Arm_2032.geometry}
								material={materials.b_PBR}
								position={[0, 0.024, 0]}
								rotation={[0, 0, -1.829]}>
								<mesh
									name='Wrist032'
									geometry={nodes.Wrist032.geometry}
									material={materials.b_PBR}
									position={[0, 0.027, 0]}
									rotation={[-Math.PI, 1.264, -Math.PI]}>
									<mesh
										name='Claw_1032'
										geometry={nodes.Claw_1032.geometry}
										material={materials.b_PBR}
										position={[-0.007, 0.009, 0]}
										rotation={[0, 0, -0.119]}
									/>
									<mesh
										name='Claw_2032'
										geometry={nodes.Claw_2032.geometry}
										material={materials.b_PBR}
										position={[0.007, 0.009, 0]}
										rotation={[0, 0, 0.254]}
									/>
								</mesh>
							</mesh>
						</mesh>
					</mesh>
					<mesh
						name='Cylinder042'
						geometry={nodes.Cylinder042.geometry}
						material={materials['b_PBR_eye.007']}
						position={[0.003, 0.032, -0.005]}
						rotation={[-3.116, 0.069, 0.004]}
					/>
					<mesh
						name='Cylinder043'
						geometry={nodes.Cylinder043.geometry}
						material={materials['b_PBR_eye.007']}
						position={[0, 0.032, -0.011]}
						rotation={[-3.116, 0.069, 0.004]}
					/>
					<mesh
						name='Cylinder044'
						geometry={nodes.Cylinder044.geometry}
						material={materials['b_PBR_eye.007']}
						position={[0.006, 0.032, -0.01]}
						rotation={[-3.116, 0.069, 0.004]}
					/>
				</mesh>
				<group
					name='Car007'
					position={[0.084, 0.16, -0.049]}
					rotation={[0, -0.229, 0]}
					scale={0.843}>
					<mesh
						name='Cube043'
						geometry={nodes.Cube043.geometry}
						material={materials.c_Orange}
					/>
					<mesh
						name='Cube043_1'
						geometry={nodes.Cube043_1.geometry}
						material={materials.c_DarkOrange}
					/>
					<mesh
						name='Cube043_2'
						geometry={nodes.Cube043_2.geometry}
						material={materials.c_Windows}
					/>
					<mesh
						name='Cube043_3'
						geometry={nodes.Cube043_3.geometry}
						material={materials.c_Grey}
					/>
					<mesh
						name='Cube043_4'
						geometry={nodes.Cube043_4.geometry}
						material={materials.c_Headlights}
					/>
					<mesh
						name='Cube043_5'
						geometry={nodes.Cube043_5.geometry}
						material={materials.c_TailLights}
					/>
					<group
						name='ties'
						position={[0.068, 0.025, 0.14]}
						rotation={[0, -0.081, -Math.PI / 2]}
						scale={1.187}>
						<mesh
							name='Cylinder176'
							geometry={nodes.Cylinder176.geometry}
							material={materials['c_Black.007']}
						/>
						<mesh
							name='Cylinder176_1'
							geometry={nodes.Cylinder176_1.geometry}
							material={materials['c_Grey.008']}
						/>
					</group>
				</group>
				<group
					name='Props_Base001'
					position={[0.087, 0, -0.065]}
					rotation={[-Math.PI / 2, 0, -0.164]}>
					<mesh
						name='Props_Base001_1'
						geometry={nodes.Props_Base001_1.geometry}
						material={materials['Main.006']}
					/>
					<mesh
						name='Props_Base001_2'
						geometry={nodes.Props_Base001_2.geometry}
						material={materials['Accent.005']}
					/>
					<mesh
						name='Props_Base001_3'
						geometry={nodes.Props_Base001_3.geometry}
						material={materials['DarkGrey.004']}
					/>
				</group>
				<mesh
					name='Vert014'
					geometry={nodes.Vert014.geometry}
					material={materials.c_Grey}
					position={[0.067, 0.005, 0.123]}
					rotation={[-Math.PI, 0.177, -Math.PI]}
				/>
				<mesh
					name='Vert013'
					geometry={nodes.Vert013.geometry}
					material={materials['c_Grey.001']}
					position={[-0.044, 0.005, 0.141]}
					rotation={[0, -0.139, 0]}
				/>
				<mesh
					name='Plane017'
					geometry={nodes.Plane017.geometry}
					material={materials['mm.002']}
					position={[-0.098, 0.008, 0.263]}
					rotation={[0, -0.171, 0]}
				/>
				<mesh
					name='Plane018'
					geometry={nodes.Plane018.geometry}
					material={materials['mm.002']}
					position={[-0.098, 0.059, 0.263]}
					rotation={[0.708, -0.131, 0.111]}
				/>
				<group
					name='Plane019'
					position={[-0.099, 0.067, 0.27]}
					rotation={[0.714, -0.13, 0.112]}>
					<mesh
						name='Plane022'
						geometry={nodes.Plane022.geometry}
						material={materials['key.001']}
					/>
					<mesh
						name='Plane022_1'
						geometry={nodes.Plane022_1.geometry}
						material={materials['Material.001']}
					/>
				</group>
				<mesh
					name='Plane020'
					geometry={nodes.Plane020.geometry}
					material={materials['mm.002']}
					position={[-0.08, 0.008, 0.157]}
					rotation={[0, -0.171, 0]}
				/>
				<group
					name='Plane021'
					position={[-0.09, 0.117, 0.216]}
					rotation={[Math.PI / 2, 0, 0.171]}>
					<mesh
						name='Plane024'
						geometry={nodes.Plane024.geometry}
						material={materials['mm.002']}
					/>
					<mesh
						name='Plane024_1'
						geometry={nodes.Plane024_1.geometry}
						material={materials['screen.001']}
					/>
				</group>
				<mesh
					name='Cube006'
					geometry={nodes.Cube006.geometry}
					material={materials['mm.002']}
					position={[-0.092, 0.005, 0.222]}
					rotation={[0, -0.162, 0]}
				/>
				<group
					name='Props_ComputerSmall006'
					position={[-0.018, 0.01, 0.276]}
					rotation={[-Math.PI / 2, 0, -1.947]}>
					<mesh
						name='Props_ComputerSmall006_1'
						geometry={nodes.Props_ComputerSmall006_1.geometry}
						material={materials['Main.011']}
					/>
					<mesh
						name='Props_ComputerSmall006_2'
						geometry={nodes.Props_ComputerSmall006_2.geometry}
						material={materials['Accent.010']}
					/>
					<mesh
						name='Props_ComputerSmall006_3'
						geometry={nodes.Props_ComputerSmall006_3.geometry}
						material={materials['DarkGrey.010']}
					/>
					<mesh
						name='Props_ComputerSmall006_4'
						geometry={nodes.Props_ComputerSmall006_4.geometry}
						material={materials['Black.004']}
					/>
				</group>
				<group
					name='Props_Computer008'
					position={[-0.018, 0.01, 0.232]}
					rotation={[0, -1.433, 0]}>
					<mesh
						name='Props_Computer008_1'
						geometry={nodes.Props_Computer008_1.geometry}
						material={materials['o_Main.002']}
					/>
					<mesh
						name='Props_Computer008_2'
						geometry={nodes.Props_Computer008_2.geometry}
						material={materials['o_DarkGrey.002']}
					/>
					<mesh
						name='Props_Computer008_3'
						geometry={nodes.Props_Computer008_3.geometry}
						material={materials['o_Black.002']}
					/>
				</group>
				<group
					name='Props_ComputerSmall004'
					position={[-0.169, 0.01, 0.21]}
					rotation={[-Math.PI / 2, 0, 0.989]}>
					<mesh
						name='Props_ComputerSmall006_1'
						geometry={nodes.Props_ComputerSmall006_1.geometry}
						material={materials['Main.011']}
					/>
					<mesh
						name='Props_ComputerSmall006_2'
						geometry={nodes.Props_ComputerSmall006_2.geometry}
						material={materials['Accent.010']}
					/>
					<mesh
						name='Props_ComputerSmall006_3'
						geometry={nodes.Props_ComputerSmall006_3.geometry}
						material={materials['DarkGrey.010']}
					/>
					<mesh
						name='Props_ComputerSmall006_4'
						geometry={nodes.Props_ComputerSmall006_4.geometry}
						material={materials['Black.004']}
					/>
				</group>
				<group
					name='Props_Computer006'
					position={[-0.175, 0.01, 0.255]}
					rotation={[-Math.PI, 1.534, -Math.PI]}>
					<mesh
						name='Props_Computer008_1'
						geometry={nodes.Props_Computer008_1.geometry}
						material={materials['o_Main.002']}
					/>
					<mesh
						name='Props_Computer008_2'
						geometry={nodes.Props_Computer008_2.geometry}
						material={materials['o_DarkGrey.002']}
					/>
					<mesh
						name='Props_Computer008_3'
						geometry={nodes.Props_Computer008_3.geometry}
						material={materials['o_Black.002']}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('glb/scene4.glb')
