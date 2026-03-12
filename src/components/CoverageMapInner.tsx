"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Yellow square marker icon matching site accent colour
function makeIcon(primary: boolean) {
  const size = primary ? 12 : 10;
  const ring = primary ? 24 : 20;
  return L.divIcon({
    className: "",
    iconSize: [ring, ring],
    iconAnchor: [ring / 2, ring / 2],
    html: `
      <div style="
        width:${ring}px;height:${ring}px;
        display:flex;align-items:center;justify-content:center;
        position:relative;
      ">
        <div style="
          position:absolute;inset:0;
          border:1px solid rgba(232,180,0,0.45);
          animation:mapPulse 2.2s ease-in-out infinite;
        "></div>
        <div style="
          width:${size}px;height:${size}px;
          background:#E8B400;
          box-shadow:0 0 8px rgba(232,180,0,0.7);
        "></div>
      </div>
    `,
  });
}

const CITIES = [
  { name: "Nairobi",       lat: -1.286,  lng: 36.817, primary: true  },
  { name: "Mombasa",       lat: -4.043,  lng: 39.668, primary: false },
  { name: "Kampala",       lat:  0.347,  lng: 32.582, primary: false },
  { name: "Dar es Salaam", lat: -6.792,  lng: 39.208, primary: false },
  { name: "Addis Ababa",   lat:  9.005,  lng: 38.763, primary: false },
  { name: "Kigali",        lat: -1.944,  lng: 30.058, primary: false },
];

export default function CoverageMapInner() {
  // Inject pulse keyframe once
  useEffect(() => {
    if (document.getElementById("map-pulse-style")) return;
    const style = document.createElement("style");
    style.id = "map-pulse-style";
    style.textContent = `
      @keyframes mapPulse {
        0%,100% { opacity:0.9; transform:scale(1); }
        50%      { opacity:0.3; transform:scale(1.25); }
      }
      .leaflet-popup-content-wrapper {
        background: #111 !important;
        border: 1px solid rgba(232,180,0,0.3) !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        color: #fff !important;
        font-family: system-ui !important;
        font-size: 11px !important;
        letter-spacing: 0.08em !important;
        text-transform: uppercase !important;
        padding: 0 !important;
      }
      .leaflet-popup-content { margin: 8px 14px !important; color: rgba(255,255,255,0.75) !important; }
      .leaflet-popup-tip { background: #111 !important; }
      .leaflet-popup-close-button { color: rgba(255,255,255,0.4) !important; }
      .leaflet-container { background: #0d0d0d !important; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <MapContainer
      center={[1.5, 36.5]}
      zoom={5}
      style={{ width: "100%", height: "100%", background: "#0d0d0d" }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      {/* CartoDB Dark Matter — free, no API key */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com">CARTO</a>'
      />
      {CITIES.map((city) => (
        <Marker
          key={city.name}
          position={[city.lat, city.lng]}
          icon={makeIcon(city.primary)}
        >
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
