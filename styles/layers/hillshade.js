module.exports.default = (context) => {
  const baseStyle = {
    "id": "hillshade",
    "type": "raster",
    "source": "hillshade",
    "paint": {
      "raster-contrast": 0,
      "raster-fade-duration": 300,
      "raster-opacity": {"base": 0.8, "stops": [[5, 0.5], [14, 0.1]]}
    }
  };

  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};