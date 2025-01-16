module.exports.context = {
  colors: {
  },
  styleName: 'OpenTrailMap-Eval'
};

module.exports.template = {
  "version": 8,
  "name": "OpenTrailMap-Eval",
  "metadata": {},
  "sources": {
    "hillshade": {
      "type": "raster",
      "url": "https://dwuxtsziek7cf.cloudfront.net/hillshade.json"
    },
    "contours": {
      "type": "vector",
      "url": "https://dwuxtsziek7cf.cloudfront.net/contours-feet.json"
    }
  },
  "glyphs": "https://font.americanamap.org/{fontstack}/{range}.pbf",
  "layers": [
    "background",
    "hillshade",
    "contours",
    "contour_label"
  ],
  "id": "OpenTrailMap-Eval"
};
