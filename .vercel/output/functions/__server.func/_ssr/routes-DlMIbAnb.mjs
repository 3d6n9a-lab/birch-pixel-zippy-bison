import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { _ as Bot, a as Shield, c as Search, d as GraduationCap, f as Globe, g as Boxes, h as ChartSpline, i as Sparkles, l as Link2, m as Check, n as Wallet, o as ShieldCheck, p as Cpu, s as Settings, t as Workflow, u as LayoutGrid, v as BookOpen, y as Bell } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlMIbAnb.js
var routes_DlMIbAnb_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAGS = [
	"Handmade",
	"Luxury",
	"New",
	"In stock",
	"Tokenized",
	"Cadastral"
];
function seedListings() {
	const cats = [
		"trad",
		"dig",
		"re"
	];
	return Array.from({ length: 9 }, (_, i) => ({
		id: i + 1,
		title: `Asset sample ${i + 1}`,
		cat: cats[i % 3],
		price: (12 + i * 8) * 1e6,
		date: 1404e3 + i,
		score: 62 + i * 7 % 35,
		tags: [TAGS[i % 6], TAGS[(i + 2) % 6]]
	}));
}
var useApp = create((set) => ({
	view: "home",
	setView: (view) => set({ view }),
	agent: "gpt",
	setAgent: (agent) => set({ agent }),
	chat: [{
		id: "c0",
		from: "orb",
		text: "ORBWEBS mesh online. Identity lattice is stable."
	}, {
		id: "c1",
		from: "us",
		text: "US link established. Logistics + escrow synced."
	}],
	pushChat: (line) => set((s) => ({ chat: [...s.chat.slice(-40), {
		...line,
		id: crypto.randomUUID()
	}] })),
	weather: {
		kind: "clear",
		tempC: 22,
		label: "Clear",
		cloud: 20
	},
	setWeather: (weather) => set({ weather }),
	meeting: false,
	triggerMeeting: () => set({ meeting: true }),
	endMeeting: () => set({ meeting: false }),
	listings: seedListings(),
	addListing: (l) => set((s) => ({ listings: [l, ...s.listings] })),
	profileName: "Jatin Reddy",
	setProfileName: (profileName) => set({ profileName }),
	credit: 740,
	setCredit: (credit) => set({ credit }),
	domainQuery: "orbwebs.dob",
	setDomainQuery: (domainQuery) => set({ domainQuery }),
	prompt: "Create a modern, responsive landing page for BAZARID ecosystem with a hero section, feature cards, and a call-to-action button. Use a futuristic style and brand colors.",
	setPrompt: (prompt) => set({ prompt }),
	generated: false,
	setGenerated: (generated) => set({ generated })
}));
function applySky(h, kind) {
	const root = document.documentElement;
	const day = h >= 6 && h < 19;
	let top = "#071428";
	let mid = "#0a1c38";
	let bot = "#040816";
	let sun = "0";
	let moon = "0.9";
	let star = "0.75";
	if (day) {
		moon = "0";
		star = kind === "clear" ? "0.05" : "0";
		sun = kind === "clouds" ? "0.35" : "0.85";
		if (h < 10) {
			top = "#7ec8e8";
			mid = "#4aa8d4";
			bot = "#12304a";
		} else if (h < 16) {
			top = "#3db4ea";
			mid = "#1a6fa3";
			bot = "#0a2744";
		} else {
			top = "#ff8a65";
			mid = "#c45a3a";
			bot = "#1a1028";
		}
		if (kind === "rain" || kind === "snow") {
			top = "#4a6278";
			mid = "#2c3e52";
			bot = "#0d1722";
			sun = "0.15";
		}
	} else if (kind === "rain") {
		top = "#050810";
		mid = "#0a1420";
		bot = "#020408";
	}
	root.style.setProperty("--sky-top", top);
	root.style.setProperty("--sky-mid", mid);
	root.style.setProperty("--sky-bot", bot);
	root.style.setProperty("--sun-op", sun);
	root.style.setProperty("--moon-op", moon);
	root.style.setProperty("--star-op", star);
	root.style.setProperty("--ribbon-hue", String(Math.floor(h / 24 * 100) * 3.6));
}
function weatherFromCode(code, temp, cloud) {
	let kind = "clear";
	let label = "Clear";
	if (code >= 71 && code <= 77) {
		kind = "snow";
		label = "Snow";
	} else if (code >= 51 && code <= 82) {
		kind = "rain";
		label = "Rain";
	} else if (cloud > 55 || code >= 1 && code <= 3) {
		kind = "clouds";
		label = "Clouds";
	}
	return {
		kind,
		tempC: temp,
		label,
		cloud
	};
}
function Sky() {
	const weather = useApp((s) => s.weather);
	const setWeather = useApp((s) => s.setWeather);
	(0, import_react.useEffect)(() => {
		const tick = () => applySky((/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60, useApp.getState().weather.kind);
		tick();
		const id = setInterval(tick, 6e4);
		return () => clearInterval(id);
	}, [weather.kind]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch("https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=51.39&current=temperature_2m,weather_code,cloud_cover&timezone=auto").then((r) => r.json()).then((d) => {
			if (cancelled) return;
			const c = d.current;
			const w = weatherFromCode(c.weather_code, c.temperature_2m, c.cloud_cover);
			setWeather(w);
			applySky((/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60, w.kind);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [setWeather]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sky-layer absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stars-layer absolute inset-0",
				style: { opacity: "var(--star-op)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute size-24 rounded-full blur-sm",
				style: {
					opacity: "var(--sun-op)",
					left: "12%",
					top: "10%",
					background: "radial-gradient(circle at 30% 30%, #fff9c4, #ffd54f 55%, transparent 70%)",
					boxShadow: "0 0 80px 28px rgba(255,213,79,0.35)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute size-16 rounded-full",
				style: {
					opacity: "var(--moon-op)",
					right: "14%",
					top: "12%",
					background: "radial-gradient(circle at 35% 35%, #fff, #e0e7ff 55%, #c5cae9 80%)",
					boxShadow: "0 0 40px 10px rgba(224,231,255,0.28)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ribbons, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherParticles, { kind: weather.kind }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scanline absolute inset-0" })
		]
	});
}
function Ribbons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 overflow-hidden",
		children: Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ribbon",
			style: {
				top: `${10 + i * 10}%`,
				width: `${42 + i % 3 * 12}%`,
				animationDuration: `${16 + i * 1.4}s`,
				animationDelay: `${i * .7}s`,
				["--rot"]: `${-10 + i * 2}deg`
			}
		}, i))
	});
}
function WeatherParticles({ kind }) {
	if (kind !== "rain" && kind !== "snow") return null;
	const n = kind === "rain" ? 36 : 24;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 overflow-hidden",
		children: Array.from({ length: n }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: kind === "rain" ? "absolute w-px bg-cyan/50" : "absolute size-1.5 rounded-full bg-fg/70",
			style: {
				left: `${i * 17 % 100}%`,
				top: `-${i * 13 % 40}px`,
				height: kind === "rain" ? "14px" : void 0,
				animation: `${kind === "rain" ? "rain-fall" : "snow-fall"} ${.8 + i % 5 * .35}s linear infinite`,
				animationDelay: `${i % 9 * .12}s`
			}
		}, i))
	});
}
function OrbwebsMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "18",
				stroke: "#00e5ff",
				strokeWidth: "1.6",
				fill: "url(#orbG)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "7",
				fill: "#00e5ff",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 10v44M10 32h44M18 18l28 28M46 18 18 46",
				stroke: "#00e5ff",
				strokeWidth: "1",
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 6c8 8 16 6 20 10-4 10 4 16 0 24-10-4-16 8-20 4-6-2-8-12-16-16 4-8-4-12 0-18 6 2 10-6 16-4Z",
				stroke: "#00e5ff",
				strokeWidth: "0.9",
				opacity: "0.45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "orbG",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#00e5ff"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "transparent"
				})]
			}) })
		]
	});
}
function UsMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "32",
				r: "14",
				stroke: "#ff2fd6",
				strokeWidth: "2",
				fill: "rgba(255,47,214,0.12)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "32",
				r: "14",
				stroke: "#00e5ff",
				strokeWidth: "2",
				fill: "rgba(0,229,255,0.12)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M27 27l10 10M37 27 27 37",
				stroke: "#eaf4ff",
				strokeWidth: "1.6"
			})
		]
	});
}
function SpiderMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: "38",
				rx: "12",
				ry: "10",
				fill: "#9dff7a",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "24",
				r: "9",
				fill: "#9dff7a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "22",
				r: "2.1",
				fill: "#040816"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "22",
				r: "2.1",
				fill: "#040816"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 30Q12 22 8 28M20 36Q10 40 6 34M20 42Q14 50 8 46M44 30Q52 22 56 28M44 36Q54 40 58 34M44 42Q50 50 56 46",
				stroke: "#9dff7a",
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 38h4v6h-1.2l-2.8 5",
				stroke: "#040816",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			})
		]
	});
}
function SpiderWebMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "22",
				stroke: "#00e5ff",
				strokeWidth: "1",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "14",
				stroke: "#00e5ff",
				strokeWidth: "1",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "6",
				stroke: "#00e5ff",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 8v48M8 32h48M14 14l36 36M50 14 14 50",
				stroke: "#00e5ff",
				strokeWidth: "1"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LINES = {
	orb: [
		"Mesh stable.",
		"ORBWEBS lattice locked.",
		"Cadastral hash verified.",
		"Escrow ping OK."
	],
	us: [
		"US corridor open.",
		"We stay linked.",
		"Logistics hop synced.",
		"Identity bridge live."
	],
	spider: [
		"?? who is there",
		"silk out…",
		"not too close",
		"hide in the web?",
		"games?"
	]
};
function PaperPlane() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M3 11.5 21 3l-7.5 18-2.7-6.8L3 11.5Z",
			fill: "#00e5ff",
			opacity: "0.9"
		})
	});
}
function FloatingBots() {
	const meeting = useApp((s) => s.meeting);
	const endMeeting = useApp((s) => s.endMeeting);
	const pushChat = useApp((s) => s.pushChat);
	const spiderRef = (0, import_react.useRef)(null);
	const mouse = (0, import_react.useRef)({
		x: 200,
		y: 400
	});
	const [hide, setHide] = (0, import_react.useState)(false);
	const [bubble, setBubble] = (0, import_react.useState)(null);
	const [fx, setFx] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			mouse.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		window.addEventListener("pointermove", onMove);
		return () => window.removeEventListener("pointermove", onMove);
	}, []);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const loop = () => {
			const el = spiderRef.current;
			if (el && !hide && !meeting) {
				const r = el.getBoundingClientRect();
				const cx = r.left + r.width / 2;
				const cy = r.top + r.height / 2;
				const dx = mouse.current.x - cx;
				const dy = mouse.current.y - cy;
				if (Math.hypot(dx, dy) > 110) {
					const a = Math.atan2(dy, dx);
					const tx = mouse.current.x - Math.cos(a) * 96;
					const ty = mouse.current.y - Math.sin(a) * 96;
					el.style.left = `${Math.max(12, Math.min(window.innerWidth - 76, tx))}px`;
					el.style.top = `${Math.max(64, Math.min(window.innerHeight - 140, ty))}px`;
					el.style.bottom = "auto";
					el.style.transform = "none";
					if (Math.random() < .04) spawn("web", cx, cy, mouse.current.x, mouse.current.y);
				}
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [hide, meeting]);
	function spawn(kind, x, y, tx = (Math.random() - .5) * 480, ty = -180 - Math.random() * 220) {
		const id = crypto.randomUUID();
		setFx((f) => [...f.slice(-16), {
			id,
			kind,
			x,
			y,
			tx,
			ty
		}]);
		setTimeout(() => setFx((f) => f.filter((p) => p.id !== id)), 1400);
	}
	function speak(who) {
		const text = LINES[who][Math.floor(Math.random() * LINES[who].length)];
		setBubble({
			who,
			text
		});
		pushChat({
			from: who,
			text
		});
		setTimeout(() => setBubble((b) => b?.text === text ? null : b), 2600);
	}
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => {
			const who = [
				"orb",
				"us",
				"spider"
			][Math.floor(Math.random() * 3)];
			speak(who);
		}, 11e3);
		return () => clearInterval(t);
	}, []);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => {
			if (meeting) return;
			const r = Math.random();
			if (r < .3) {
				spawn("rocket", 80, 120);
				spawn("rocket", window.innerWidth - 90, 130);
			} else if (r < .45) spawn("bomb", window.innerWidth / 2, window.innerHeight * .42);
			else if (r < .7) spawn("web", window.innerWidth * .5, window.innerHeight * .7, 80, 140);
		}, 16e3);
		return () => clearInterval(t);
	}, [meeting]);
	(0, import_react.useEffect)(() => {
		if (!meeting) return;
		speak("orb");
		const a = setTimeout(() => speak("us"), 700);
		const b = setTimeout(() => speak("spider"), 1400);
		const c = setTimeout(() => {
			setHide(true);
			speak("spider");
			spawn("rocket", window.innerWidth / 2 - 80, window.innerHeight / 2);
			spawn("rocket", window.innerWidth / 2 + 80, window.innerHeight / 2);
			spawn("bomb", window.innerWidth / 2, window.innerHeight * .38);
		}, 3200);
		const d = setTimeout(() => {
			setHide(false);
			endMeeting();
		}, 7800);
		return () => {
			clearTimeout(a);
			clearTimeout(b);
			clearTimeout(c);
			clearTimeout(d);
		};
	}, [meeting, endMeeting]);
	const pos = meeting ? {
		orb: {
			left: "calc(50% - 90px)",
			top: "42%"
		},
		us: {
			left: "calc(50% + 30px)",
			top: "42%"
		},
		spider: {
			left: "calc(50% - 28px)",
			top: "56%"
		}
	} : {
		orb: {
			left: "18px",
			top: "22%"
		},
		us: {
			right: "18px",
			top: "22%",
			left: "auto"
		},
		spider: {
			left: "50%",
			bottom: "118px"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotShell, {
			id: "orb",
			label: "ORBWEBS",
			style: pos.orb,
			onClick: () => speak("orb"),
			bubble: bubble?.who === "orb" ? bubble.text : null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbwebsMark, { className: "size-9" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotShell, {
			id: "us",
			label: "US",
			style: pos.us,
			onClick: () => speak("us"),
			bubble: bubble?.who === "us" ? bubble.text : null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsMark, { className: "size-9" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: spiderRef,
			className: cn("float-bot fixed z-50 flex size-16 items-center justify-center rounded-full border border-lime/40 bg-panel/80 shadow-[0_0_22px_rgba(157,255,122,0.25)] transition-all duration-500", hide && "border-cyan/30 bg-transparent shadow-none"),
			style: meeting || hide ? pos.spider : {
				left: "50%",
				bottom: "118px",
				transform: "translateX(-50%)"
			},
			onClick: () => speak("spider"),
			role: "button",
			tabIndex: 0,
			"aria-label": "SPIDER",
			children: [
				hide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiderWebMark, { className: "size-10 opacity-80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiderMark, { className: "size-9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg/70 px-2 py-0.5 text-[10px] text-lime",
					children: "SPIDER 🌱🕸️"
				}),
				bubble?.who === "spider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: bubble.text }) : null
			]
		}),
		fx.map((p) => p.kind === "bomb" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none fixed z-40 size-10 rounded-full bg-[radial-gradient(circle,#ff2fd6,transparent_70%)]",
			style: {
				left: p.x,
				top: p.y,
				animation: "boom 0.7s ease-out forwards"
			}
		}, p.id) : p.kind === "web" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none fixed z-40 w-0.5 origin-top bg-gradient-to-b from-lime/70 to-transparent",
			style: {
				left: p.x,
				top: p.y,
				height: 80,
				transform: `rotate(${Math.atan2((p.ty ?? 0) - p.y, (p.tx ?? 0) - p.x) * 57}deg)`,
				animation: "web-fade 1.1s forwards"
			}
		}, p.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none fixed z-40",
			style: {
				left: p.x,
				top: p.y,
				animation: "fly-out 1.8s ease-out forwards",
				["--tx"]: `${p.tx}px`,
				["--ty"]: `${p.ty}px`,
				["--rot"]: `${Math.random() * 400 - 200}deg`
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperPlane, {})
		}, p.id))
	] });
}
function BotShell({ id, label, style, onClick, bubble, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		id: `bot-${id}`,
		onClick,
		className: "float-bot fixed z-50 flex size-16 items-center justify-center rounded-full border border-cyan/35 bg-panel/80 shadow-[0_0_22px_rgba(0,229,255,0.22)] transition-all duration-500",
		style,
		"aria-label": label,
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg/70 px-2 py-0.5 text-[10px] text-fg",
				children: label
			}),
			bubble ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { text: bubble }) : null
		]
	});
}
function Bubble({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "glass-panel absolute bottom-[72px] left-1/2 z-60 w-36 -translate-x-1/2 px-2 py-1.5 text-center text-[11px] text-fg",
		children: text
	});
}
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "studio",
		label: "Builder"
	},
	{
		id: "domains",
		label: "Domains"
	},
	{
		id: "agents",
		label: "Agents"
	},
	{
		id: "analytics",
		label: "Analytics"
	},
	{
		id: "owbook",
		label: "OWBOOK"
	},
	{
		id: "market",
		label: "Market"
	},
	{
		id: "gateway",
		label: "Gateway"
	}
];
function TopBar() {
	const view = useApp((s) => s.view);
	const setView = useApp((s) => s.setView);
	const weather = useApp((s) => s.weather);
	const name = useApp((s) => s.profileName);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-30 flex flex-wrap items-center justify-between gap-3 px-4 pt-3 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-9 items-center justify-center rounded-lg bg-cyan/15 text-lg font-extrabold text-cyan",
					children: "B"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-extrabold tracking-wide",
					children: ["BAZARID", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-[10px] font-medium text-muted",
						children: "Identity Network"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden text-[10px] text-muted sm:block",
					children: "Modular AI Web Studio · ORBWEBS"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden items-center gap-1 lg:flex",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView(n.id),
					className: cn("rounded-full px-3 py-1.5 text-xs font-medium transition-colors", view === n.id ? "bg-cyan/15 text-cyan" : "text-muted hover:text-fg"),
					children: n.label
				}, n.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass-panel hidden items-center gap-1.5 px-2.5 py-1 text-[11px] text-muted sm:flex",
						children: [
							weather.label,
							" · ",
							Math.round(weather.tempC),
							"°"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass-panel hidden items-center gap-1 px-2 py-1 text-[11px] text-cyan md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-3.5" }), "STUDENT"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "glass-panel grid size-9 place-items-center text-muted",
						"aria-label": "Search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "glass-panel grid size-9 place-items-center text-muted",
						"aria-label": "Alerts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass-panel hidden items-center gap-1 px-2 py-1 text-[11px] text-fg sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-3.5 text-cyan" }), "$2,847.56"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-8 place-items-center rounded-full bg-cyan/20 text-xs font-bold text-cyan",
							children: "JR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden text-xs text-fg md:block",
							children: [name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] text-muted",
								children: "Pro Account"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex w-full gap-1 overflow-x-auto pb-1 lg:hidden",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView(n.id),
					className: cn("shrink-0 rounded-full px-3 py-1.5 text-xs", view === n.id ? "bg-cyan/15 text-cyan" : "text-muted"),
					children: n.label
				}, n.id))
			})
		]
	});
}
var ITEMS = [
	{
		id: "nodes",
		label: "Nodes",
		icon: LayoutGrid,
		view: "home"
	},
	{
		id: "grok",
		label: "Grok",
		icon: Sparkles
	},
	{
		id: "gpt",
		label: "GPT",
		icon: Sparkles
	},
	{
		id: "gemini",
		label: "Gemini",
		icon: Cpu
	},
	{
		id: "claude",
		label: "Claude",
		icon: Bot
	},
	{
		id: "auto",
		label: "Automation",
		icon: Workflow,
		view: "agents"
	},
	{
		id: "settings",
		label: "Analytics",
		icon: ChartSpline,
		view: "analytics"
	}
];
function Dock() {
	const agent = useApp((s) => s.agent);
	const setAgent = useApp((s) => s.setAgent);
	const setView = useApp((s) => s.setView);
	const triggerMeeting = useApp((s) => s.triggerMeeting);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-40 mx-auto mb-3 flex w-[min(920px,94vw)] items-center justify-center gap-2 rounded-full border border-cyan/30 bg-panel/80 px-3 py-2 shadow-[0_0_40px_rgba(0,229,255,0.18)] backdrop-blur-xl",
		children: [ITEMS.map((it) => {
			const Icon = it.icon;
			const on = agent === it.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setAgent(it.id);
					if (it.view) setView(it.view);
				},
				className: cn("flex min-w-14 flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] transition-transform", on ? "scale-110 text-cyan" : "text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-10 place-items-center rounded-2xl border", on ? "border-cyan bg-cyan/20 shadow-[0_0_18px_rgba(0,229,255,0.45)]" : "border-border bg-bg/40"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
				}), it.label]
			}, it.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: triggerMeeting,
			className: "flex min-w-14 flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] text-lime",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 place-items-center rounded-2xl border border-lime/50 bg-lime/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
			}), "Rally"]
		})]
	});
}
function Glass({ className, children, glow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("glass-panel", glow && `glow-${glow}`, className),
		children
	});
}
function Metric({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-border/40 py-1.5 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("tabular-nums font-medium", tone === "lime" ? "text-lime" : tone === "mag" ? "text-mag" : tone === "cyan" ? "text-cyan" : "text-fg"),
			children: value
		})]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-xl border px-3 py-1 text-xs transition-colors", active ? "border-cyan bg-cyan/15 text-cyan" : "border-border text-muted hover:border-cyan/60 hover:text-fg"),
		children
	});
}
function HomeView() {
	const q = useApp((s) => s.domainQuery);
	const setQ = useApp((s) => s.setDomainQuery);
	const agent = useApp((s) => s.agent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-cyan" }), " Domain Search"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs text-muted",
							children: "Find, verify and manage your digital identity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								className: "min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm outline-none focus:border-cyan",
								placeholder: "Search domain (e.g. example.bazarid)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-xl bg-cyan/20 text-cyan",
								"aria-label": "Search domain",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: [
								".bazarid",
								".com",
								".net",
								".org",
								".io",
								".dob"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQ(`orbwebs${t}`),
								className: "rounded-lg border border-border px-2 py-1 text-[11px] text-muted hover:text-cyan",
								children: t
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-lime" }), " Registrar Verification"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "example.bazarid",
								className: "min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-xl bg-cyan px-4 text-sm font-semibold text-bg",
								children: "Verify"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-3 gap-2 text-[11px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lime",
									children: "Registered · Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted",
									children: "Expires 2026-12-14"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted",
									children: "Registrar Bazarid"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-[280px] flex-col items-center justify-end pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-8 top-4 mx-auto max-w-md text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-lg font-extrabold tracking-wide",
							children: ["BAZARID ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted text-xs font-medium",
								children: "Identity Network"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-2 top-16 hidden space-y-2 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, { label: "Domains" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, { label: "Agents" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-2 top-16 hidden space-y-2 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, { label: "Users" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, { label: "Automation" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "relative z-10 max-w-xs text-center text-xs text-muted",
						children: ["One Identity. Infinite Possibilities.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[10px]",
							children: "BAZARID — The Future of Digital Identity"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-4 text-cyan" }), " Modular Automation"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							["Domain Monitor", "Auto track changes"],
							["DNS Manager", "Smart routing"],
							["Identity Guard", "Fraud protection"],
							["API Integrations", "Connect & extend"]
						].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "rounded-xl border border-border bg-bg/30 p-3 text-left hover:border-cyan/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-muted",
								children: d
							})]
						}, t))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "glow-lime p-4",
					glow: "lime",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold",
								children: [agent.toUpperCase(), " Agent"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-lime",
								children: "Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-[11px] text-muted",
							children: "AI-Powered Intelligence Agent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "API Requests",
									v: "24,893",
									d: "↑ 12.5%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "Success Rate",
									v: "99.8%",
									d: "↑ 0.2%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "Latency",
									v: "142ms",
									d: "↓ 18.5%"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-12 rounded-lg bg-gradient-to-r from-cyan/10 via-lime/20 to-cyan/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Rental Details",
							value: "$0.12 / 1K requests"
						})
					]
				})]
			})
		]
	});
}
function Mini({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-panel px-3 py-1.5 text-[11px] text-cyan",
		children: label
	});
}
function Stat({ k, v, d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] text-muted",
			children: k
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-bold tabular-nums",
			children: v
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] text-lime",
			children: d
		})
	] });
}
function StudioView() {
	const prompt = useApp((s) => s.prompt);
	const setPrompt = useApp((s) => s.setPrompt);
	const generated = useApp((s) => s.generated);
	const setGenerated = useApp((s) => s.setGenerated);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-4 text-cyan" }),
							" Visual Builder",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-normal text-muted",
								children: "Drag · Connect · Build"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-44 rounded-xl border border-border bg-bg/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
								className: "left-4 top-6",
								title: "User Input",
								sub: "Form / Chat / API"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
								className: "left-[38%] top-4",
								title: "AI Agent",
								sub: "Grok · Claude · Gemini",
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
								className: "left-4 bottom-4",
								title: "Logic",
								sub: "Condition / Loop",
								mag: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
								className: "left-[38%] bottom-3",
								title: "Web Page",
								sub: "Frontend / UI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
								className: "right-3 top-1/2 -translate-y-1/2",
								title: "Database",
								sub: "Postgres / Mongo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "absolute inset-0 size-full",
								"aria-hidden": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M90 40 C140 40, 140 40, 190 36",
										stroke: "#00e5ff",
										strokeWidth: "1.4",
										fill: "none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M90 130 C140 130, 150 90, 200 70",
										stroke: "#ff2fd6",
										strokeWidth: "1.2",
										fill: "none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M250 50 C300 50, 310 80, 340 90",
										stroke: "#00e5ff",
										strokeWidth: "1.2",
										fill: "none"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, {
						title: "Frontend (React + TypeScript)",
						code: `import { useState, useEffect } from 'react';
import { Hero, Features, CTA } from './ui';

export default function LandingPage() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch('/api/landing').then(r => r.json()).then(setData); }, []);
  return <Hero data={data} />;
}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, {
						title: "Backend (Node.js + Express)",
						code: `const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/landing', async (_req, res) => {
  res.json({ success: true, data: { live: true } });
});`
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative hidden min-h-[240px] xl:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl font-extrabold",
							children: "BAZARID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "Ecosystem & ORBWEBS Landing Builder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex justify-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass-panel px-2 py-1 text-[10px] text-lime",
									children: "Live Preview"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass-panel px-2 py-1 text-[10px] text-cyan",
									children: "Web App Online"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass-panel px-2 py-1 text-[10px] text-lime",
									children: "Global Traffic +32.4%"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-cyan" }), " Prompt Engineering"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 flex gap-1 text-[11px]",
								children: [
									"System",
									"User",
									"Response",
									"Tools"
								].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-lg px-2 py-1", i === 1 ? "bg-cyan/20 text-cyan" : "text-muted"),
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: prompt,
								onChange: (e) => setPrompt(e.target.value),
								rows: 5,
								className: "w-full rounded-xl border border-border bg-bg/40 p-3 text-xs outline-none focus:border-cyan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setGenerated(true),
								className: "mt-2 min-h-11 w-full rounded-xl bg-cyan font-semibold text-bg",
								children: "Generate"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "size-4 text-lime" }), " Auto Framework Generator"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-lime",
									children: generated ? "Ready" : "Idle"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2 text-xs",
								children: [
									"Project Structure",
									"UI Components",
									"Dependencies",
									"API Routes",
									"Configuration",
									"Database Models"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-3.5", generated ? "text-lime" : "text-muted") }), x]
								}, x))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-2 overflow-hidden rounded-full bg-bg/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-full bg-gradient-to-r from-cyan to-lime transition-all", generated ? "w-full" : "w-1/5") })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-sm font-semibold",
							children: "Modules & Components"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: [
								"Landing",
								"Auth",
								"Database",
								"Analytics",
								"Payment",
								"AI",
								"API",
								"Custom"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-xl border border-border bg-bg/30 py-3 text-[10px] hover:border-cyan",
								children: m
							}, m))
						})]
					})
				]
			})
		]
	});
}
function Node({ className, title, sub, accent, mag }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute z-10 w-28 rounded-lg border px-2 py-1.5 text-[10px]", mag ? "border-mag/50 bg-mag/10" : accent ? "border-lime/50 bg-lime/10" : "border-cyan/40 bg-cyan/10", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted",
			children: sub
		})]
	});
}
function CodePane({ title, code }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
		className: "p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 text-[11px] font-semibold text-cyan",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "max-h-40 overflow-auto font-mono text-[10px] leading-relaxed text-muted",
			children: code
		})]
	});
}
function DomainsView() {
	const q = useApp((s) => s.domainQuery);
	const setQ = useApp((s) => s.setDomainQuery);
	const available = q.toLowerCase().endsWith(".dob") || q.length > 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[240px_minmax(0,1fr)_280px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glass, {
				className: "hidden p-3 lg:block",
				children: [
					"Home",
					"Domains",
					"Identity",
					"Web3 Routing",
					"Bridge",
					"Settings"
				].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-xl px-3 py-2 text-sm ${i === 1 ? "bg-cyan/15 text-cyan" : "text-muted"}`,
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-xs uppercase tracking-wider text-muted",
							children: "Domain Registration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-4xl font-extrabold text-cyan",
							children: ".dob"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 max-w-lg text-xs text-muted",
							children: "Decentralized Open Blockchain — the next generation TLD for digital ownership, identity and Web3 interoperability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-12 flex-1 items-center gap-2 rounded-2xl border border-border bg-bg/40 px-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: q,
									onChange: (e) => setQ(e.target.value),
									className: "h-11 flex-1 bg-transparent text-sm outline-none"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden items-center gap-1 rounded-2xl border border-lime/40 px-3 text-xs text-lime sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), available ? "Available & Verified on-chain" : "Checking"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-sm font-semibold",
								children: ["DNS Smart Routing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-lime",
									children: "ACTIVE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Global Anycast Network",
								value: "Online",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Multi-Chain Resolution",
								value: "Online",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "DDoS Protection",
								value: "Enabled"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "IPFS + Web3 Routing",
								value: "Active",
								tone: "cyan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-[10px] text-muted",
								children: "Latency 12ms · Uptime 99.99%"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-sm font-semibold",
								children: ["ENS / Handshake Bridge ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-lime",
									children: "BRIDGE ACTIVE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "ENS Integration",
								value: "Connected",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Handshake Support",
								value: "Connected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Bidirectional Sync",
								value: "Active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Name Resolution",
								value: "Operational",
								tone: "cyan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-3 text-[11px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-3" }), " ENS"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Handshake" })]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-sm font-semibold",
								children: ["Base Sepolia Escrow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-lime",
									children: "VERIFIED"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Escrow Contract",
								value: "Deployed",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Domain Locked",
								value: "Confirmed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Base Sepolia Network",
								value: "Active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Verification Status",
								value: "On-chain",
								tone: "cyan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono text-[10px] text-muted",
								children: "Tx 0x9f4e…3c7a"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 text-sm font-semibold",
								children: "Domain Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Domain Name",
								value: q || "orbwebs.dob"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Status",
								value: "Available & Verified",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "TLD",
								value: ".dob"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Chain",
								value: "Base Sepolia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Registration",
								value: "Not Registered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Ownership",
								value: "Open"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "glow-lime p-4",
						glow: "lime",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4 text-lime" }), " Own your digital future"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted",
							children: ".dob · BAZARID Identity Network · Web3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden text-center xl:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mx-auto size-8 text-cyan/40" })
					})
				]
			})
		]
	});
}
var ROWS = [
	{
		type: "A",
		name: "@",
		content: "185.199.110.42",
		proxy: true
	},
	{
		type: "CNAME",
		name: "www",
		content: "bazarid.ir",
		proxy: true
	},
	{
		type: "CNAME",
		name: "*.dob",
		content: "bazarid-gateway.dwebs.dob",
		proxy: true
	}
];
function GatewayView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[200px_minmax(0,1fr)_260px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glass, {
				className: "hidden p-2 lg:block",
				children: [
					"Overview",
					"Analytics",
					"DNS",
					"Email",
					"SSL/TLS",
					"Security",
					"Access",
					"Speed",
					"Caching",
					"Workers",
					"Rules",
					"Network",
					"Traffic"
				].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-lg px-3 py-2 text-xs ${i === 2 ? "bg-cyan/15 text-cyan" : "text-muted"}`,
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-bold",
							children: "bazarid.ir"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "DNS management"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
							className: "px-3 py-2 text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-lime",
								children: "Base Sepolia Escrow · CONNECTED"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-muted",
								children: "Chain 11155111 · 0x9f4a…3c7a"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "flex items-center justify-between p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "DNS is active"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "All changes are deployed and live."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right text-[11px] text-muted",
							children: [
								"dara.ns.cloudflare.com",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"lila.ns.cloudflare.com"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-sm font-semibold",
							children: "DNS Records"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[540px] text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "text-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 font-medium",
											children: "Type"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 font-medium",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 font-medium",
											children: "Content"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 font-medium",
											children: "Proxy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 font-medium",
											children: "TTL"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ROWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-cyan",
											children: r.type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "font-mono",
											children: r.content
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-gold",
											children: "Proxied"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-muted",
											children: "Auto"
										})
									]
								}, r.name)) })]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-cyan",
							children: "BAZARID Web3 Domain Gateway"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-4 text-[11px] text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wallets Connected" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Domains Active" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resolve On-chain" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-sm font-semibold",
							children: "Web3 Identity · Domain · Ownership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted",
							children: "Decentralized globe overlay for .dob resolution."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-sm font-semibold",
								children: ["SSL/TLS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-lime",
									children: "ACTIVE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Certificate",
								value: "Valid",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "HSTS",
								value: "Enabled"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "TLS",
								value: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Always Encrypted",
								value: "On",
								tone: "cyan"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 text-sm font-semibold",
								children: "Decentralized .dob Resolver"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Status",
								value: "Operational",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Resolver Network",
								value: "BAZARID Gateway"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "TLD",
								value: ".dob"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Health",
								value: "Healthy",
								tone: "lime"
							})
						]
					})
				]
			})
		]
	});
}
var TITLES = [
	"Atlas of Light",
	"Castle Protocol",
	"Root Ledger",
	"Sigil Market",
	"Owbook Core"
];
function OwbookView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col px-3 pb-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs tracking-[0.3em] text-muted",
					children: "OWBOOK"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "NFT Library · Digital Books Collection"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
					className: "px-3 py-2 text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "tabular-nums text-fg",
						children: "Assets 12,843"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted",
						children: "Online 3,672 · ETH / Polygon"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid flex-1 place-items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-5",
					children: TITLES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel glow-cyan flex h-36 w-24 flex-col items-center justify-center p-2 md:h-44 md:w-28",
						style: { transform: `translateY(${i === 2 ? -12 : i % 2 * 10}px)` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mb-2 size-8 text-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-[10px] font-semibold",
							children: t
						})]
					}, t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-extrabold tracking-[0.35em]",
						children: "OWBOOK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-muted",
						children: "NFT LIBRARY · OWN A BOOK · OWN A UNIVERSE"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 text-xs font-semibold",
								children: "Network Nodes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Ethereum",
								value: "Online",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Polygon",
								value: "Online",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Arbitrum",
								value: "Online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Solana",
								value: "Online",
								tone: "cyan"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 text-xs font-semibold",
								children: "Data Stream"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "NFT Minting",
								value: "100%",
								tone: "lime"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Metadata Sync",
								value: "100%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "IPFS Storage",
								value: "100%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Network Load",
								value: "32%"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glass, {
						className: "p-3 text-xs text-muted",
						children: "Read · Collect · Explore. Books are tokenized artifacts on the BAZARID identity lattice."
					})
				]
			})
		]
	});
}
var NAMES = {
	trad: "Traditional",
	dig: "Digital",
	re: "Real estate"
};
var FIELDS = {
	trad: ["Material & origin", "Heritage certificate"],
	dig: ["File / license type", "Chain address"],
	re: ["Cadastral parcel", "Area (m²)"]
};
function MarketView() {
	const listings = useApp((s) => s.listings);
	const addListing = useApp((s) => s.addListing);
	const credit = useApp((s) => s.credit);
	const setCredit = useApp((s) => s.setCredit);
	const [cat, setCat] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [stCat, setStCat] = (0, import_react.useState)("trad");
	const [title, setTitle] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [hash, setHash] = (0, import_react.useState)("");
	const [assess, setAssess] = (0, import_react.useState)(null);
	const [swapAmt, setSwapAmt] = (0, import_react.useState)(100);
	const [pair, setPair] = (0, import_react.useState)(12450);
	const [hafez, setHafez] = (0, import_react.useState)("");
	const poems = [
		"Tell the cupbearer to pass the wine — the age put my name in your hands.",
		"No one sees a friend in anyone — what spring can treat this wound?",
		"Plant the tree of friendship, it will bear the heart's desire."
	];
	const shown = (0, import_react.useMemo)(() => listings.filter((p) => (cat === "all" || p.cat === cat) && (!q || p.title.toLowerCase().includes(q.toLowerCase()))), [
		listings,
		cat,
		q
	]);
	function publish() {
		const h = "CAD-" + Math.random().toString(16).slice(2, 10).toUpperCase();
		setHash(h);
		addListing({
			id: Date.now(),
			title: title || "Untitled asset",
			cat: stCat,
			price: Number(price) || 0,
			date: 1404e3,
			score: 70,
			tags: ["New", "Tokenized"]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hud-scroll grid min-h-0 flex-1 gap-3 overflow-auto px-3 pb-2 md:grid-cols-2 xl:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4 md:col-span-2 xl:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold text-cyan",
						children: "Explorer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex flex-wrap gap-1",
						children: [
							"all",
							"trad",
							"dig",
							"re"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: cat === c,
							onClick: () => setCat(c),
							children: c === "all" ? "All" : NAMES[c]
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Live search…",
						className: "mb-3 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: shown.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-bg/30 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
									label: "Nature",
									value: NAMES[p.cat]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
									label: "Price",
									value: `${p.price.toLocaleString()} T`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
									label: "Engine score",
									value: String(p.score),
									tone: "cyan"
								})
							]
						}, p.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold text-mag",
						children: "Post Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: stCat,
						onChange: (e) => setStCat(e.target.value),
						className: "min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "trad",
								children: "Traditional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "dig",
								children: "Digital"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "re",
								children: "Real estate"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "Title",
						className: "mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: price,
						onChange: (e) => setPrice(e.target.value),
						placeholder: "Price (Toman)",
						className: "mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
					}),
					FIELDS[stCat].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: f,
						className: "mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
					}, f)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: publish,
						className: "mt-3 min-h-11 w-full rounded-xl bg-cyan font-semibold text-bg",
						children: "Publish + cadastral JSON-LD"
					}),
					hash ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[11px] text-lime",
						children: ["Cadastral ", hash]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold text-cyan",
						children: "Triple-engine assessment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAssess(listings[0]?.score ?? 72),
						className: "min-h-11 w-full rounded-xl border border-cyan/40 text-sm text-cyan",
						children: "Run engines"
					}),
					assess !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: [
							["Audience & sentiment", assess],
							["Search impressions", Math.min(98, assess + 6)],
							["Chain integrity", Math.max(55, assess - 4)]
						].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex justify-between text-[11px] text-muted",
							children: [l, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: v
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-bg/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-gradient-to-r from-cyan to-mag",
								style: { width: `${v}%` }
							})
						})] }, String(l)))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold text-mag",
						children: "Logistics hub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: [
							["Tipax", "Intercity · 30-day escrow"],
							["Snapp", "Local courier · instant"],
							["VIP Driver", "3-month trial / 1-year"]
						].map(([n, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setCredit(740 + Math.floor(Math.random() * 40)),
							className: "rounded-xl border border-border p-3 text-left hover:border-cyan",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted",
								children: d
							})]
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Credit score",
						value: `${credit} / 850`,
						tone: "cyan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "30-day escrow",
						value: "100% locked"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold text-cyan",
						children: "OWB Tokenomics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "OWB / TOMAN",
						value: "12,450"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "OWB / BRICS",
						value: "1.84"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "OWB / EUR",
						value: "0.27"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: swapAmt,
							onChange: (e) => setSwapAmt(Number(e.target.value)),
							className: "min-h-11 w-24 rounded-xl border border-border bg-bg/40 px-2 text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: pair,
							onChange: (e) => setPair(Number(e.target.value)),
							className: "min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 12450,
									children: "OWB → TOMAN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 1.84,
									children: "OWB → BRICS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: .27,
									children: "OWB → EUR"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-sm text-cyan tabular-nums",
						children: ["= ", (swapAmt * pair).toLocaleString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHafez(poems[Math.floor(Math.random() * poems.length)]),
						className: "mt-3 min-h-11 w-full rounded-xl border border-mag/40 text-sm text-mag",
						children: "Hafez omen · 2 OWB"
					}),
					hafez ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: hafez
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-sm font-semibold",
						children: "Weekly inventory audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditTable, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] text-muted",
						children: "License 1821167 · Enamad 26799686 · 30-day refund"
					})
				]
			})
		]
	});
}
function AuditTable() {
	const listings = useApp((s) => s.listings);
	const [rows, setRows] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setRows(listings.slice(0, 5).map((p) => {
			const sys = Math.floor(Math.random() * 50 + 10);
			const real = sys + (Math.random() < .3 ? Math.floor(Math.random() * 5 - 2) : 0);
			return {
				t: p.title,
				sys,
				real,
				d: real - sys
			};
		})),
		className: "min-h-11 w-full rounded-xl border border-border text-sm",
		children: "Run this week"
	}), rows ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "mt-2 w-full text-left text-[11px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Asset" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Sys" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Real" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Δ" })
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-t border-border/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-1",
					children: r.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.sys }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.real }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: r.d ? "text-mag" : "text-lime",
					children: r.d
				})
			]
		}, r.t)) })]
	}) : null] });
}
function AgentsView() {
	const chat = useApp((s) => s.chat);
	const pushChat = useApp((s) => s.pushChat);
	const agent = useApp((s) => s.agent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 gap-3 px-3 pb-2 lg:grid-cols-[minmax(0,1.4fr)_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
			className: "flex min-h-0 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 text-sm font-semibold",
					children: ["Agent mesh · ", agent.toUpperCase()]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs text-muted",
					children: "ORBWEBS, US and SPIDER exchange telemetry. Select a model in the dock to route prompts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hud-scroll min-h-0 flex-1 space-y-2 overflow-auto",
					children: chat.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-bg/30 px-3 py-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-semibold uppercase text-cyan",
							children: c.from
						}), c.text]
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const text = String(fd.get("q") || "").trim();
						if (!text) return;
						pushChat({
							from: "you",
							text
						});
						pushChat({
							from: agent === "auto" ? "us" : "orb",
							text: `Routed via ${agent}: acknowledged “${text.slice(0, 80)}”.`
						});
						e.currentTarget.reset();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "q",
						placeholder: "Message the mesh…",
						className: "min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-11 rounded-xl bg-cyan px-4 font-semibold text-bg",
						children: "Send"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-semibold text-fg",
					children: "Movement doctrine"
				}), "Idle: ORBWEBS northwest, US northeast, SPIDER offset from the cursor (~96px) and never collides. Patrol bob. Rally (dock) pulls all three into a triangle over the globe. Play: paper darts from corners, magenta shock rings on the landing. Harassment: SPIDER silk-lines the other two. Camouflage: SPIDER dissolves into the ORBWEBS web sigil, then the games start. Rain: they cluster under a silk canopy."]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
				className: "p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "ORBWEBS mark"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "An orb at the hub of a radial identity web — cadastral threads, escrow rings, discovery arcs. When SPIDER hides, that same radial web is the cloak."
				})]
			})]
		})]
	});
}
var data = [
	{
		t: "Mon",
		v: 4200
	},
	{
		t: "Tue",
		v: 5100
	},
	{
		t: "Wed",
		v: 4800
	},
	{
		t: "Thu",
		v: 6300
	},
	{
		t: "Fri",
		v: 7100
	},
	{
		t: "Sat",
		v: 6400
	},
	{
		t: "Sun",
		v: 7800
	}
];
function AnalyticsView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 gap-3 px-3 pb-2 md:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
			className: "p-4 md:col-span-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 text-sm font-semibold",
				children: "Global discovery impressions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "g",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#00e5ff",
									stopOpacity: .6
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#00e5ff",
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "t",
								stroke: "#8ea3bf",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "#8ea3bf",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "#08162c",
								border: "1px solid rgba(0,229,255,.3)",
								borderRadius: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "v",
								stroke: "#00e5ff",
								fill: "url(#g)"
							})
						]
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Glass, {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Live preview",
					value: "Online",
					tone: "lime"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Global traffic",
					value: "+32.4%",
					tone: "cyan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Agent success",
					value: "99.8%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Escrow TVL",
					value: "100% locked"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: ".dob resolver",
					value: "Healthy",
					tone: "lime"
				})
			]
		})]
	});
}
function Home() {
	const view = useApp((s) => s.view);
	const [Globe, setGlobe] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		import("./GlobeCanvas-CwNE87iQ.mjs").then((m) => setGlobe(() => m.GlobeCanvas));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sky, {}),
			Globe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-20 mt-2 flex min-h-0 flex-1 flex-col pb-24",
				children: [
					view === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : null,
					view === "studio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioView, {}) : null,
					view === "domains" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainsView, {}) : null,
					view === "gateway" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatewayView, {}) : null,
					view === "owbook" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwbookView, {}) : null,
					view === "market" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketView, {}) : null,
					view === "agents" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentsView, {}) : null,
					view === "analytics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsView, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-40 pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dock, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBots, {})
		]
	});
}
//#endregion
export { Home as component, routes_DlMIbAnb_exports as t };
