import React from "react";
import { Box, Tooltip } from "@mui/material";
import { statesData } from "./statesData";

const IndiaMap = ({
  selectedState,
  onStateClick,
  onStateHover,
  hoveredState,
}) => {
  const handleStateClick = (stateId) => {
    if (statesData[stateId]?.isActive) {
      onStateClick(stateId);
    }
  };

  const handleStateMouseEnter = (stateId) => {
    if (statesData[stateId]?.isActive) {
      onStateHover(stateId);
    }
  };

  const handleStateMouseLeave = () => {
    onStateHover(null);
  };

  const getStateStyle = (stateId) => {
    const state = statesData[stateId];
    const isSelected = selectedState === stateId;
    const isHovered = hoveredState === stateId;

    if (state?.isActive) {
      return {
        fill: isSelected ? "#a46c35ff" : isHovered ? "#d4a574" : "#bd8f59",
        stroke: "#fff",
        strokeWidth: "2",
        cursor: "pointer",
        transition: "all 0.3s ease",
        filter:
          isSelected || isHovered
            ? "drop-shadow(0px 4px 12px rgba(0,0,0,0.25))"
            : "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transformOrigin: "center",
      };
    }

    return {
      fill: "#bbdefb",
      stroke: "#fff",
      strokeWidth: "1",
      cursor: "default",
      transition: "all 0.3s ease",
    };
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
          overflow: "visible",
        },
      }}
    >
      <svg
        viewBox="0 0 1000 700"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "800px",
          maxHeight: "600px",
        }}
      >
        {/** State paths */}
        {Object.entries(statesData).map(([stateId, state]) => {
          if (!document.getElementById(stateId)) return null;
          return null; // placeholder for safety
        })}

        {/* Example state - repeat this block for each state */}
        <Tooltip
          title={statesData["jammu-kashmir"]?.isActive ? "Jammu & Kashmir" : ""}
          arrow
        >
          <path
            id="jammu-kashmir"
            d="M290 50 L350 45 L380 60 L400 80 L420 100 L400 120 L380 130 L350 125 L320 115 L300 90 Z"
            style={getStateStyle("jammu-kashmir")}
            onClick={() => handleStateClick("jammu-kashmir")}
            onMouseEnter={() => handleStateMouseEnter("jammu-kashmir")}
            onMouseLeave={handleStateMouseLeave}
          />
        </Tooltip>

        {/* ⬇️ Repeat the above <Tooltip><path /></Tooltip> structure for all remaining states as in your original file */}
      </svg>
    </Box>
  );
};

export default IndiaMap;
