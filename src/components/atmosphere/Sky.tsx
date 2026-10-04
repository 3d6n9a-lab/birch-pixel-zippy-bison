import { useEffect } from "react";
import { useApp, type WeatherKind } from "@/lib/store";

function applySky(h: number, kind: WeatherKind) {
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
  root.style.setProperty("--ribbon-hue", String(Math.floor((h / 24) * 100) * 3.6));
}

function weatherFromCode(code: number, temp: number, cloud: number) {
  let kind: WeatherKind = "clear";
  let label = "Clear";
  if (code >= 71 && code <= 77) {
    kind = "snow";
    label = "Snow";
  } else if (code >= 51 && code <= 82) {
    kind = "rain";
    label = "Rain";
  } else if (cloud > 55 || (code >= 1 && code <= 3)) {
    kind = "clouds";
    label = "Clouds";
  }
  return { kind, tempC: temp, label, cloud };
}

export function Sky() {
  const weather = useApp((s) => s.weather);
  const setWeather = useApp((s) => s.setWeather);

  useEffect(() => {
    const tick = () => applySky(new Date().getHours() + new Date().getMinutes() / 60, useApp.getState().weather.kind);
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [weather.kind]);

  useEffect(() => {
    let cancelled = false;
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=51.39&current=temperature_2m,weather_code,cloud_cover&timezone=auto",
    )
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        const c = d.current;
        const w = weatherFromCode(c.weather_code, c.temperature_2m, c.cloud_cover);
        setWeather(w);
        applySky(new Date().getHours() + new Date().getMinutes() / 60, w.kind);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [setWeather]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="sky-layer absolute inset-0" />
      <div
        className="stars-layer absolute inset-0"
        style={{ opacity: "var(--star-op)" }}
      />
      <div
        className="absolute size-24 rounded-full blur-sm"
        style={{
          opacity: "var(--sun-op)",
          left: "12%",
          top: "10%",
          background:
            "radial-gradient(circle at 30% 30%, #fff9c4, #ffd54f 55%, transparent 70%)",
          boxShadow: "0 0 80px 28px rgba(255,213,79,0.35)",
        }}
      />
      <div
        className="absolute size-16 rounded-full"
        style={{
          opacity: "var(--moon-op)",
          right: "14%",
          top: "12%",
          background:
            "radial-gradient(circle at 35% 35%, #fff, #e0e7ff 55%, #c5cae9 80%)",
          boxShadow: "0 0 40px 10px rgba(224,231,255,0.28)",
        }}
      />
      <Ribbons />
      <WeatherParticles kind={weather.kind} />
      <div className="scanline absolute inset-0" />
    </div>
  );
}

function Ribbons() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="ribbon"
          style={{
            top: `${10 + i * 10}%`,
            width: `${42 + (i % 3) * 12}%`,
            animationDuration: `${16 + i * 1.4}s`,
            animationDelay: `${i * 0.7}s`,
            ["--rot" as string]: `${-10 + i * 2}deg`,
          }}
        />
      ))}
    </div>
  );
}

function WeatherParticles({ kind }: { kind: WeatherKind }) {
  if (kind !== "rain" && kind !== "snow") return null;
  const n = kind === "rain" ? 36 : 24;
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: n }, (_, i) => (
        <span
          key={i}
          className={kind === "rain" ? "absolute w-px bg-cyan/50" : "absolute size-1.5 rounded-full bg-fg/70"}
          style={{
            left: `${(i * 17) % 100}%`,
            top: `-${(i * 13) % 40}px`,
            height: kind === "rain" ? "14px" : undefined,
            animation: `${kind === "rain" ? "rain-fall" : "snow-fall"} ${0.8 + (i % 5) * 0.35}s linear infinite`,
            animationDelay: `${(i % 9) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
