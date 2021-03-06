(function (exports) {
exports.SPRITES = {};

exports.SPRITES.PLAYER = {
  NORMAL: {
    width: 8,
    height: 9,
    matrix: [
      0,0,0,0,2,0,0,0,0,
      0,0,0,0,2,0,0,0,0,
      0,0,0,2,2,2,0,0,0,
      0,0,2,2,2,2,2,0,0,
      0,2,2,0,2,0,2,2,0,
      0,2,0,0,2,0,0,2,0,
      0,0,0,2,2,2,0,0,0,
      0,0,2,0,2,0,2,0,0,
      0,0,0,0,0,0,0,0,0,
    ]
  },
  TURNING_LEFT: {
    width: 8,
    height: 9,
    matrix: [
      0,0,0,0,2,0,0,0,0,
      0,0,0,0,2,0,0,0,0,
      0,0,0,0,2,2,0,0,0,
      0,0,0,2,2,2,2,0,0,
      0,0,2,2,2,0,2,0,0,
      0,0,2,0,2,0,0,0,0,
      0,0,0,0,2,2,0,0,0,
      0,0,0,2,2,0,2,0,0,
      0,0,0,2,0,0,0,0,0,
    ]
  },
  TURNING_RIGHT: {
    width: 8,
    height: 9,
    matrix: [
      0,0,0,0,2,0,0,0,0,
      0,0,0,0,2,0,0,0,0,
      0,0,0,2,2,0,0,0,0,
      0,0,2,2,2,2,0,0,0,
      0,0,2,0,2,2,2,0,0,
      0,0,0,0,2,0,2,0,0,
      0,0,0,2,2,0,0,0,0,
      0,0,2,0,2,2,0,0,0,
      0,0,0,0,0,2,0,0,0,
    ]
  }
};

exports.SPRITES.MAP = {
  TILE1: {
    width: 8,
    height: 9,
    matrix: [
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
      4,4,4,4,4,4,4,4,
    ]
  }
};

})(window);
