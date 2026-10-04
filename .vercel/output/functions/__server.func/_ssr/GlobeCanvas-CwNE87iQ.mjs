import { i as __toESM } from "../_runtime.mjs";
import { a as BufferAttribute, c as require_react, n as useFrame, o as BufferGeometry, s as require_jsx_runtime, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlobeCanvas-CwNE87iQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Earth() {
	const group = (0, import_react.useRef)(null);
	const points = (0, import_react.useMemo)(() => {
		const geo = new BufferGeometry();
		const n = 900;
		const pos = new Float32Array(n * 3);
		for (let i = 0; i < n; i++) {
			const r = 1.62;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			pos[i * 3 + 1] = r * Math.cos(phi);
			pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
		}
		geo.setAttribute("position", new BufferAttribute(pos, 3));
		return geo;
	}, []);
	useFrame((_, delta) => {
		if (group.current) group.current.rotation.y += delta * .12;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.58,
				64,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#06324a",
				emissive: "#00c8e0",
				emissiveIntensity: .22,
				roughness: .55,
				metalness: .35
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.6,
				48,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00e5ff",
				wireframe: true,
				transparent: true,
				opacity: .18
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.66, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#9dff7a",
				wireframe: true,
				transparent: true,
				opacity: .16
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.82,
				32,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00e5ff",
				transparent: true,
				opacity: .07
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
				geometry: points,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
					color: "#b8fff8",
					size: .018,
					sizeAttenuation: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2.4,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					2.15,
					.012,
					8,
					80
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#00e5ff",
					transparent: true,
					opacity: .55
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 3,
					.6,
					.4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					2.35,
					.008,
					8,
					80
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#9dff7a",
					transparent: true,
					opacity: .35
				})]
			})
		]
	});
}
function GlobeCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
				camera: {
					position: [
						0,
						.35,
						6.2
					],
					fov: 42
				},
				dpr: [1, 1.6],
				gl: {
					antialias: true,
					alpha: true
				},
				onCreated: ({ gl }) => {
					gl.setClearColor(0, 0);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .55 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
						position: [
							4,
							3,
							5
						],
						intensity: 18,
						color: "#00e5ff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
						position: [
							-4,
							-2,
							2
						],
						intensity: 8,
						color: "#9dff7a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-[18%] left-1/2 h-24 w-[min(420px,70vw)] -translate-x-1/2 rounded-full bg-cyan/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-[16%] left-1/2 h-3 w-[min(280px,50vw)] -translate-x-1/2 rounded-full bg-cyan/40 blur-md" })
		]
	});
}
//#endregion
export { GlobeCanvas };
