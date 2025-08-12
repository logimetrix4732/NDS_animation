import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaGeoJson from "../../india-states.geojson.json";

const MilkIndiaMap = ({
  setHoveredState,
  onStateClick,
  onStateHover,
  onMapMouseLeave,
  selectedState,
  hoveredState,
  coveredStates,
}) => {
  const getColor = (stateName) => {
    return coveredStates.includes(stateName) ? "#daafa9" : "#87CEFA";
  };
  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    onMapMouseLeave();
    setTooltip("");
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1000, center: [82, 22] }}
        width={800}
        height={600}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={indiaGeoJson}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName =
                geo.properties.STATE ||
                geo.properties.st_nm ||
                geo.properties.NAME_1 ||
                geo.properties.name ||
                geo.properties.State_Name ||
                "Unknown";

              const isCovered = coveredStates.includes(stateName);
              const isSelected = selectedState === stateName;
              const isHovered = hoveredState === stateName;

              // Determine fill color based on state
              let fillColor = getColor(stateName);
              if (isHovered) {
                fillColor = "#a23829"; // Dark color for hovered state
              } else if (isSelected && !hoveredState) {
                fillColor = "#a23829"; // Dark color for selected state (only when no hover)
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (isCovered) {
                      onStateHover(stateName);
                      setTooltip(`${stateName}: Milk Producer Organisation`);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredState(null);
                    setTooltip("");
                  }}
                  onClick={() => {
                    if (isCovered) {
                      onStateClick(stateName);
                    }
                  }}
                  style={{
                    default: {
                      fill: fillColor,
                      stroke: "#ffffff",
                      outline: "none",
                      transition: "all 0.3s ease",
                    },
                    hover: isCovered
                      ? {
                          fill: "#a23829",
                          outline: "none",
                          cursor: "pointer",
                          transform: "translateY(-4px)",
                          transition:
                            "transform 0.4s ease-in-out, fill 0.8s ease-in-out",
                        }
                      : {
                          fill: fillColor,
                          outline: "none",
                          transition: "fill 0.2s ease-in-out",
                        },
                    pressed: {
                      fill: "#a23829",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: tooltipPos.y - 80,
            left: tooltipPos.x - 110,
            background: "#F5A623",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: 500,
            fontSize: "15px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            maxWidth: "220px",
            zIndex: 9999,
            pointerEvents: "none",
            opacity: tooltip ? 1 : 0,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            padding: "10px 14px",
            lineHeight: "1.4",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "4px",
            }}
          >
            {tooltip.split(":")[0]}
          </div>
          <div style={{ fontSize: "14px" }}>{tooltip.split(":")[1]}</div>
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              marginLeft: "-8px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #F5A623",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MilkIndiaMap;
