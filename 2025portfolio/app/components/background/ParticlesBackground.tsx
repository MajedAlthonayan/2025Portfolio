"use client";

import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function ParticlesBackground() {
	const vantaRef = useRef<HTMLDivElement>(null);
	const vantaEffect = useRef<any>(null);

	useEffect(() => {
		if (vantaRef.current && !vantaEffect.current) {
			vantaEffect.current = FOG({
				el: vantaRef.current,
				THREE: THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				highlightColor: 0xf0f0f0,
				midtoneColor: 0xede9e9,
				lowlightColor: 0xe8e7e7,
				baseColor: 0xf2f2f2,
				blurFactor: 0.9,
				speed: 2,
				zoom: 1.5,
			});
		}

		return () => {
			if (vantaEffect.current) {
				vantaEffect.current.destroy();
				vantaEffect.current = null;
			}
		};
	}, []);

	return (
		<div
			ref={vantaRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
				pointerEvents: "none",
			}}
		/>
	);
}
