// 2D grid of square-ish pixel blocks — matches BulkShift mosaic dissolve style
// Each cell is 1×1 SVG unit (becomes rectangular on screen due to aspect ratio)
// Mix values: 0.0 = fromColor, 1.0 = toColor
// Pattern is scattered/organic: runs of 2-3 same-color blocks, not strict alternation

const ROWS = 3;
const COLS = 20;

const GRID: number[][] = [
  // Row 0 (top — adjacent to fromColor section)
  [0.05, 0.08, 0.90, 0.05, 0.92, 0.08, 0.05, 0.88, 0.05, 0.10, 0.90, 0.05, 0.08, 0.92, 0.05, 0.88, 0.10, 0.05, 0.90, 0.05],
  // Row 1 (middle — maximum scatter)
  [0.88, 0.15, 0.05, 0.85, 0.10, 0.90, 0.18, 0.05, 0.85, 0.12, 0.88, 0.05, 0.15, 0.90, 0.08, 0.05, 0.85, 0.15, 0.05, 0.88],
  // Row 2 (bottom — adjacent to toColor section)
  [0.12, 0.88, 0.18, 0.85, 0.05, 0.88, 0.12, 0.90, 0.08, 0.85, 0.15, 0.88, 0.10, 0.85, 0.18, 0.90, 0.12, 0.85, 0.15, 0.90],
];

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "").padStart(6, "0");
  const n = parseInt(clean, 16);
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

function mixColors(from: string, to: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(from);
  const [r2, g2, b2] = hexToRgb(to);
  return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
}

type Props = {
  from: string;
  to: string;
  height?: number;
};

export default function PixelDivider({ from, to, height = 120 }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{ height, overflow: "hidden", lineHeight: 0, display: "block", flexShrink: 0 }}
    >
      <svg
        viewBox={`0 0 ${COLS} ${ROWS}`}
        preserveAspectRatio="none"
        width="100%"
        height={height}
        style={{ display: "block" }}
      >
        {/* Background = destination section color */}
        <rect width={COLS} height={ROWS} fill={to} />
        {/* 2D grid of square pixel blocks */}
        {GRID.map((row, ri) =>
          row.map((mix, ci) => (
            <rect
              key={`${ri}-${ci}`}
              x={ci}
              y={ri}
              width={1}
              height={1}
              fill={mixColors(from, to, mix)}
            />
          ))
        )}
      </svg>
    </div>
  );
}
