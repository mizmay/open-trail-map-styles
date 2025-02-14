module.exports.context = {
  colors: {
    background: '#c8facc',
    contour_label_textColor: '#526653',
    contour_lineColor: '#526653',
  },
  styleName: 'OpenTrailMap-Reference'
};

module.exports.template = {
  "version": 8,
  "name": "OpenTrailMap-Reference",
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
  "id": "OpenTrailMap-Reference"
};
