"use client";

// Equirectangular projection — ViewBox 400×500
// Bounds: W=28°E  E=44°E  N=15°N  S=−13°S
// x = (lon − 28) / 16 * 400      y = (15 − lat) / 28 * 500

const VW = 400;
const VH = 500;
function x(lon: number) { return ((lon - 28) / 16) * VW; }
function y(lat: number) { return ((15 - lat) / 28) * VH; }
function pts(coords: [number, number][]) {
  return coords.map(([lon, lat]) => `${x(lon).toFixed(1)},${y(lat).toFixed(1)}`).join(" ");
}

// ── Country border polygons (simplified, ~10-14 key border points each) ────────

const ETHIOPIA = pts([
  [35.9, 4.6],   // SW — Kenya/S.Sudan tripoint
  [34.0, 8.5],   // W — South Sudan border
  [33.5, 14.9],  // NW — near Eritrea
  [38.0, 15.0],  // N tip
  [43.0, 12.5],  // NE — Djibouti area
  [44.0, 8.0],   // E — Somalia border (right edge)
  [42.0, 4.0],   // SE — Kenya/Somalia tripoint
  [38.5, 3.5],   // S — Kenya border centre
]);

const SOMALIA = pts([
  [41.9, 3.9],   // SW — Ethiopia/Kenya tripoint
  [41.5, 11.5],  // NW — Ethiopia border going north
  [44.0, 11.5],  // N  — Djibouti coast
  [44.0, 1.6],   // E  — Indian Ocean coast
  [41.9, -1.7],  // SE — coast turns at Kenya
  [41.5, -1.7],  // S  — Kenya coast border
]);

const KENYA = pts([
  [34.4, 4.2],   // NW — S.Sudan/Uganda tripoint
  [35.9, 4.6],   // N  — Ethiopian border starts
  [38.5, 3.8],   // N  — Ethiopian border centre
  [41.9, 3.9],   // NE — Ethiopia/Somalia tripoint
  [41.9, 1.6],   // E  — Somalia border south
  [41.5, -1.7],  // SE — coast
  [40.4, -2.2],  // E coast (Malindi)
  [39.2, -4.7],  // SE coast — Tanzania border
  [37.7, -3.2],  // S  — Tanzania border (Kilimanjaro)
  [34.9, -1.1],  // SW — Tanzania border west
  [34.0, -1.0],  // SW — near Lake Victoria
  [33.9,  0.0],  // W  — Lake Victoria edge
  [34.1,  0.7],  // W  — Uganda border
  [34.4,  1.2],  // W  — Uganda border north
]);

const UGANDA = pts([
  [31.8,  3.8],  // N  — South Sudan border
  [34.1,  3.7],  // NE — Kenya border
  [34.4,  1.2],  // E  — Kenya border south
  [34.1,  0.7],  // E  — Kenya border
  [33.9,  0.0],  // SE — Lake Victoria
  [32.3, -0.5],  // S  — Lake Victoria south
  [31.6, -1.0],  // SW — Tanzania border
  [30.5, -1.0],  // SW — Tanzania
  [29.6, -1.4],  // W  — DRC border
  [29.7,  0.5],  // W  — DRC border north
  [29.9,  1.4],  // NW — DRC/South Sudan
  [30.8,  3.6],  // N  — South Sudan border
]);

const TANZANIA = pts([
  [29.6, -1.4],  // NW — Uganda/DRC border
  [30.5, -1.0],  // N  — Uganda
  [31.6, -1.0],  // N  — Uganda
  [32.3, -0.5],  // N  — Lake Victoria
  [34.0, -1.0],  // NE — Kenya border
  [34.9, -1.1],  // NE — Kenya border
  [37.7, -3.2],  // NE — Kenya border east
  [39.2, -4.7],  // NE coast
  [40.4, -6.0],  // E  — Indian Ocean
  [40.4,-10.5],  // SE coast
  [37.5,-11.5],  // S  — Mozambique border
  [33.8,-10.8],  // S  — Malawi/Zambia
  [31.0, -8.1],  // SW — Zambia
  [29.6, -6.2],  // W  — DRC/Zambia
  [29.6, -4.2],  // W  — DRC
]);

const RWANDA = pts([
  [29.0, -1.1],  // NW
  [30.9, -1.0],  // NE — Uganda border
  [30.9, -2.4],  // E  — Tanzania border
  [30.4, -2.9],  // SE
  [29.0, -2.8],  // SW — DRC border
]);

const BURUNDI = pts([
  [29.0, -2.8],  // NW — DRC border
  [30.4, -2.9],  // NE — Rwanda border
  [30.8, -3.5],  // E  — Tanzania border
  [30.4, -4.4],  // SE
  [29.0, -4.4],  // SW — DRC border
]);

// ── City markers ────────────────────────────────────────────────────────────────

const CITIES = [
  { name: "Nairobi",        lon: 36.817, lat: -1.286, primary: true },
  { name: "Mombasa",        lon: 39.668, lat: -4.043, primary: false },
  { name: "Kampala",        lon: 32.582, lat:  0.347, primary: false },
  { name: "Dar es Salaam",  lon: 39.208, lat: -6.792, primary: false },
  { name: "Addis Ababa",    lon: 38.763, lat:  9.005, primary: false },
  { name: "Kigali",         lon: 30.058, lat: -1.944, primary: false },
];

export default function EastAfricaMap() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 420,
      aspectRatio: "4 / 5",
      position: "relative",
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.012)",
      overflow: "hidden",
    }}>
      {/* Label */}
      <span style={{
        position: "absolute", top: 14, left: 18, zIndex: 2,
        fontSize: 9, fontWeight: 600, letterSpacing: "0.24em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.2)",
        fontFamily: "var(--font-body, system-ui)",
      }}>
        East Africa Coverage
      </span>

      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, display: "block" }}
      >
        <defs>
          {/* Subtle grid */}
          <pattern id="mapgrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25,0 L0,0 0,25" fill="none" stroke="rgba(255,255,255,0.022)" strokeWidth="0.5" />
          </pattern>
          {/* Yellow glow filter for primary city */}
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Grid background */}
        <rect width={VW} height={VH} fill="url(#mapgrid)" />

        {/* Country fills — draw largest first so smaller sit on top */}
        {[
          { name: "Ethiopia", d: ETHIOPIA },
          { name: "Somalia",  d: SOMALIA  },
          { name: "Tanzania", d: TANZANIA },
          { name: "Kenya",    d: KENYA    },
          { name: "Uganda",   d: UGANDA   },
          { name: "Rwanda",   d: RWANDA   },
          { name: "Burundi",  d: BURUNDI  },
        ].map(({ name, d }) => (
          <polygon
            key={name}
            points={d}
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        ))}

        {/* City markers */}
        {CITIES.map((city) => {
          const cx = x(city.lon);
          const cy = y(city.lat);
          const size = city.primary ? 5 : 4;
          const ringPad = city.primary ? 8 : 6;
          return (
            <g key={city.name} filter={city.primary ? "url(#glow)" : undefined}>
              {/* Pulsing outer ring */}
              <rect
                x={cx - ringPad} y={cy - ringPad}
                width={ringPad * 2} height={ringPad * 2}
                fill="none"
                stroke={city.primary ? "rgba(232,180,0,0.5)" : "rgba(232,180,0,0.3)"}
                strokeWidth="1"
              >
                <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" />
              </rect>
              {/* Solid inner square */}
              <rect
                x={cx - size / 2} y={cy - size / 2}
                width={size} height={size}
                fill="#E8B400"
              />
              {/* Label */}
              <text
                x={cx + ringPad + 3}
                y={cy + 3.5}
                fontSize="8.5"
                fill="rgba(255,255,255,0.55)"
                fontFamily="system-ui"
                fontWeight="500"
                letterSpacing="0.03em"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
