module.exports.default = (context) => {
  const baseStyle = {
    "id": "contour_label",
    "type": "symbol",
    "source": "contours",
    "source-layer": "contours",
    "minzoom": 12,
    "filter": ["!=", ["get", "ele"], 0],
    "layout": {
      "symbol-avoid-edges": true,
      "symbol-placement": "line",
      "text-allow-overlap": false,
      "text-field": "{ele} ft",
      "text-font": ["Americana-Regular"],
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-size": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        12,
        9,
        15,
        10,
        18,
        12
      ],
      "symbol-spacing": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        12,
        80,
        15,
        360,
        18,
        720
      ]
    },
    "paint": {
      "text-opacity": [
        "step",
        ["zoom"],
        0,
        12,
        ["case", ["==", ["get", "idx"], true], 0.8, 0],
        15,
        ["case", ["==", ["get", "idx"], true], 1, 0.8]
      ],
      "text-color": context.colors.contour_label_textColor,
      "text-halo-color": context.colors.background,
      "text-halo-width": 1.5
    }
  };
  
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};