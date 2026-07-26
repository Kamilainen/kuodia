import React from "react";
import { useTranslation } from "../context/LanguageContext";
import {
  Sun,
  Zap,
  Wind,
  Droplet,
  Fish,
  Recycle,
  Leaf,
  Image as ImageIcon,
} from "lucide-react";

// Import equipment photography assets
import solarSystemImg from "../assets/solar_pv.png";
import electronicCabinImg from "../assets/electronic_cabin.png";
import heatPumpImg from "../assets/heatpump.png";
import waterConditionImg from "../assets/water_condition.png";
import raskImg from "../assets/rask.png";
import heatRecoveryImg from "../assets/heat_recovery.png";

// ---- Design tokens ----
const COLORS = {
  green: "#22883E",
  greenSoft: "#8FD19E",
  blue: "#1B5FBF",
  blueSoft: "#8FC4F0",
  ink: "#0F172A",
  sub: "#475569",
  line: "#E2E8F0",
  arrow: "#1B4CA6",
};

// Which bottom items receive a water-flow drop-down from the top row
// (index into BOTTOM_ITEMS / TOP_STEPS, matches the reference image)
const WATER_DROPS = [2, 3, 4]; // heat pump, water conditioning, RAS tank

function RingIcon({ Icon, ringColor }) {
  const isSplit = ringColor === "split";
  return (
    <div style={{ position: "relative", width: 88, height: 88 }} className="flex-shrink-0">
      <svg width="88" height="88" viewBox="0 0 88 88" className="w-full h-full">
        <circle
          cx="44"
          cy="44"
          r="40"
          fill="none"
          stroke={isSplit ? COLORS.blue : ringColor}
          strokeWidth="1.5"
          strokeDasharray={isSplit ? "125.6 125.6" : undefined}
          transform={isSplit ? "rotate(90 44 44)" : undefined}
        />
        {isSplit && (
          <circle
            cx="44"
            cy="44"
            r="40"
            fill="none"
            stroke={COLORS.green}
            strokeWidth="1.5"
            strokeDasharray="125.6 125.6"
            transform="rotate(-90 44 44)"
          />
        )}
        {/* decorative dots on the ring, echoes the reference art */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 44 + 40 * Math.cos(rad);
          const y = 44 + 40 * Math.sin(rad);
          return (
            <circle
              key={deg}
              cx={x}
              cy={y}
              r="2.5"
              fill={deg === 0 || deg === 90 ? COLORS.green : COLORS.blue}
            />
          );
        })}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={26} strokeWidth={1.75} color={COLORS.ink} />
      </div>
    </div>
  );
}

function RightArrow({ color = COLORS.arrow }) {
  return (
    <svg width="30" height="12" viewBox="0 0 40 16" style={{ flexShrink: 0 }} className="w-full max-w-[28px] sm:max-w-[40px]">
      <line x1="0" y1="8" x2="30" y2="8" stroke={color} strokeWidth="2.5" />
      <polygon points="28,2 40,8 28,14" fill={color} />
    </svg>
  );
}

function DownArrow({ color, height = 40 }) {
  return (
    <svg width="12" height={height} viewBox={`0 0 16 ${height}`}>
      <line
        x1="8"
        y1="0"
        x2="8"
        y2={height - 10}
        stroke={color}
        strokeWidth="2.5"
      />
      <polygon
        points={`2,${height - 10} 14,${height - 10} 8,${height}`}
        fill={color}
      />
    </svg>
  );
}

function PhotoSlot({ src, label }) {
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        borderRadius: 8,
        border: `1px solid ${COLORS.line}`,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        gap: 6,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "8px",
          }}
        />
      ) : (
        <>
          <ImageIcon size={20} color="#94A3B8" strokeWidth={1.5} />
          <span
            style={{
              fontSize: 9,
              color: "#94A3B8",
              textAlign: "center",
              padding: "0 4px",
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
        </>
      )}
    </div>
  );
}

export const IntegratedArchitecture: React.FC = () => {
  const { t } = useTranslation();

  // ---- Top row: process icons ----
  const topSteps = [
    { icon: Sun, ringColor: COLORS.green, label: t("arch_step_1") },
    { icon: Zap, ringColor: COLORS.green, label: t("arch_step_2") },
    { icon: Wind, ringColor: COLORS.green, label: t("arch_step_3") },
    { icon: Droplet, ringColor: "split", label: t("arch_step_4") },
    { icon: Fish, ringColor: COLORS.green, label: t("arch_step_5") },
    { icon: Recycle, ringColor: COLORS.green, label: t("arch_step_6") },
  ];

  // ---- Bottom row: real equipment photos ----
  const bottomItems = [
    { id: "pv", label: t("arch_hw_1"), src: solarSystemImg },
    { id: "elec", label: t("arch_hw_2"), src: electronicCabinImg },
    { id: "hp", label: t("arch_hw_3"), src: heatPumpImg },
    { id: "water", label: t("arch_hw_4"), src: waterConditionImg },
    { id: "tank", label: t("arch_hw_5"), src: raskImg },
    { id: "reuse", label: t("arch_hw_6" as any) || "Heat recovery unit", src: heatRecoveryImg },
  ];

  const highlights = [
    { Icon: Recycle, text: t("arch_hl_1_title") + "\n" + t("arch_hl_1_desc") },
    { Icon: Droplet, text: t("arch_hl_2_title") + "\n" + t("arch_hl_2_desc") },
    { Icon: Leaf, text: t("arch_hl_3_title") + "\n" + t("arch_hl_3_desc") },
    { Icon: Zap, text: t("arch_hl_4_title") + "\n" + t("arch_hl_4_desc") },
  ];

  // Split title dynamically to apply green/dark colors
  const title = t("arch_title");
  const lastSpaceIdx = title.lastIndexOf(" ");
  const firstPart = lastSpaceIdx !== -1 ? title.substring(0, lastSpaceIdx) : title;
  const lastPart = lastSpaceIdx !== -1 ? title.substring(lastSpaceIdx + 1) : "";

  // Grid layout variables
  const N = topSteps.length;
  const COL_WIDTH = 100; // shrunk column width to fit horizontally inside the 60% grid column
  const GAP_WIDTH = 12;  // shrunk arrow gaps
  
  const gridTemplateColumns = Array.from({ length: N * 2 - 1 }, (_, i) =>
    i % 2 === 0 ? `${COL_WIDTH}px` : `${GAP_WIDTH}px`
  ).join(" ");

  const itemCol = (i: number) => i * 2 + 1;

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#ffffff",
        padding: "24px",
        borderRadius: 24,
        border: "1px solid #E2E8F0",
        boxShadow: "0 20px 25px -5px rgb(15 23 42 / 0.05)",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="min-h-[460px]"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <div style={{ width: 4, height: 20, background: COLORS.green }} />
          <h3
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: 0.2,
            }}
            className="font-display uppercase"
          >
            <span style={{ color: COLORS.green }}>{firstPart}</span>{" "}
            {lastPart && <span style={{ color: COLORS.ink }}>{lastPart}</span>}
          </h3>
        </div>
        <p style={{ margin: "4px 0 16px 12px", color: COLORS.sub, fontSize: 12 }} className="font-sans font-bold">
          {t("arch_subtitle")}
        </p>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginBottom: 4, paddingLeft: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 16, height: 2, background: COLORS.green }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.sub }} className="uppercase tracking-wider">
              {t("arch_energy_flow")}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 16, height: 2, background: COLORS.blue }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.sub }} className="uppercase tracking-wider">
              {t("arch_water_flow")}
            </span>
          </div>
        </div>
      </div>

      {/* Middle schematic container: centered vertically when stretched */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "12px 0",
        }}
      >
        {/* Scrollable Flow Schematic Container for responsiveness */}
        <div className="overflow-x-auto pb-2 scrollbar-thin select-none">
          <div style={{ minWidth: N * COL_WIDTH + (N - 1) * GAP_WIDTH, padding: "4px" }}>
            {/* Top row: process icons */}
            <div style={{ display: "grid", gridTemplateColumns: gridTemplateColumns }}>
              {topSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div
                    style={{
                      gridColumn: itemCol(i),
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <RingIcon Icon={step.icon} ringColor={step.ringColor} />
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color: COLORS.ink,
                        textAlign: "center",
                        whiteSpace: "pre-line",
                        lineHeight: 1.3,
                        marginTop: 4,
                      }}
                      className="font-display tracking-wide"
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < N - 1 && (
                    <div
                      style={{
                        gridColumn: itemCol(i) + 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RightArrow />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Connector row: horizontal energy bus + water drop arrows */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridTemplateColumns,
                height: 38,
                marginTop: 10,
              }}
            >
              {/* green bus line */}
              <div
                style={{
                  gridColumn: `${itemCol(1)} / ${N * 2}`,
                  gridRow: 1,
                  alignSelf: "start",
                  marginTop: 6,
                  height: 2,
                  background: COLORS.green,
                }}
              />
              {/* end ticks dropping from the bus */}
              <div style={{ gridColumn: itemCol(1), gridRow: 1, justifySelf: "center", width: 2, height: 20, marginTop: 6, background: COLORS.green }} />
              <div style={{ gridColumn: itemCol(N - 1), gridRow: 1, justifySelf: "center", width: 2, height: 20, marginTop: 6, background: COLORS.green }} />

              {WATER_DROPS.map((i) => (
                <div
                  key={i}
                  style={{
                    gridColumn: itemCol(i),
                    gridRow: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <DownArrow color={COLORS.blueSoft} height={26} />
                </div>
              ))}
            </div>

            {/* Bottom row: equipment photos */}
            <div style={{ display: "grid", gridTemplateColumns: gridTemplateColumns }}>
              {bottomItems.map((item, i) => (
                <React.Fragment key={item.id}>
                  <div style={{ gridColumn: itemCol(i)} }>
                    <PhotoSlot src={item.src} label={item.label} />
                  </div>
                  {i < bottomItems.length - 1 && (
                    <div
                      style={{
                        gridColumn: itemCol(i) + 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RightArrow />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer callouts */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginTop: "auto",
          paddingTop: 16,
          borderTop: `1px solid ${COLORS.line}`,
        }}
        className="flex-wrap"
      >
        {highlights.map(({ Icon, text }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }} className="flex-1 min-w-[120px]">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: `1.5px solid ${COLORS.green}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={14} color={COLORS.green} strokeWidth={2} />
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: COLORS.ink,
                whiteSpace: "pre-line",
                lineHeight: 1.3,
              }}
              className="font-sans"
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedArchitecture;