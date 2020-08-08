var T =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=";

module.exports.decode = function (n) {
  var i,
    o,
    s,
    _,
    w = n.length,
    C = [];
  for (i = 0; i < w; i += 2)
    (_ = {}),
      (o = T.indexOf(n[i])),
      (s = T.indexOf(n[i + 1])) > 63 &&
        ((_.promotion = "qnrbkp"[Math.floor((s - 64) / 3)]),
        (s = o + (o < 16 ? -8 : 8) + ((s - 1) % 3) - 1)),
      o > 75
        ? (_.drop = "qnrbkp"[o - 79])
        : (_.from = T[o % 8] + (Math.floor(o / 8) + 1)),
      (_.to = T[s % 8] + (Math.floor(s / 8) + 1)),
      C.push(_);
  return C[0];
};

module.exports.encode = function (n) {
  var i,
    o,
    s,
    _,
    w = "";
  for (Array.isArray(n) || (n = [n]), o = n.length, i = 0; i < o; i += 1)
    (s = n[i].drop
      ? 79 + "qnrbkp".indexOf(n[i].drop)
      : T.indexOf(n[i].from[0]) + 8 * (n[i].from[1] - 1)),
      (_ = T.indexOf(n[i].to[0]) + 8 * (n[i].to[1] - 1)),
      n[i].promotion &&
        (_ =
          3 * "qnrbkp".indexOf(n[i].promotion) +
          64 +
          (_ < s ? 9 + _ - s : _ - s - 7)),
      (w += T[s] + T[_]);
  return w;
};
