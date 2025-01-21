module.exports.default = (context) => {
  const baseStyle = {
    "id": "contours",
    "type": "line",
    "source": "contours",
    "source-layer": "contours",
    "filter": ["!=", ["get", "ele"], 0],
    "minzoom": 10,
    "paint": {
      "line-color": context.colors.contour_lineColor,
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.1, 14, 1],
      "line-width": ["case", ["get", "idx"], 0.5, 0.1]
    }
  };

  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};