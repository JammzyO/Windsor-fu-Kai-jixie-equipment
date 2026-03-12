"use client";
import dynamic from "next/dynamic";

// Leaflet requires browser APIs — must be imported with ssr:false
const CoverageMapInner = dynamic(() => import("./CoverageMapInner"), {
  ssr: false,
  loading: () => (
    <div style={{
      width: "100%", height: "100%",
      background: "rgba(255,255,255,0.015)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
        Loading map…
      </span>
    </div>
  ),
});

export default function CoverageMap() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 480,
      aspectRatio: "4 / 5",
      border: "1px solid rgba(255,255,255,0.07)",
      overflow: "hidden",
      position: "relative",
    }}>
      <CoverageMapInner />
    </div>
  );
}
