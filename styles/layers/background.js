module.exports.default = (context) => {
  const baseStyle = {
    "id": "background",
    "type": "background",
    "paint": { "background-color": context.colors.background }
  };
  let overrides = {};
  return {
    baseStyle,
    overrides
  };
};