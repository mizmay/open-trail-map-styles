module.exports.default = (context) => {
  const baseStyle = {
    "id": "background",
    "type": "background",
    "paint": {"background-color": "#c8facc"}
  };
  let overrides = {};
  if (context.styleName === 'OpenTrailMap-Eval') {
      overrides = {"paint": {"background-color": "#537e4e"}};
  } else if (context.styleName === 'OpenTrailMap-Reference') {
      overrides = {};
  }
  return {
    baseStyle,
    overrides
  };
};