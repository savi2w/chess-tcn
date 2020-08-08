const tcn = require("./tcn");

const moves = [
  { from: "e2", to: "e4" },
  { from: "e7", to: "e6" },
  { from: "c2", to: "c3" },
  { from: "d7", to: "d5" },
];

const results = ["mC", "0S", "ks", "ZJ"];

describe("encode", () => {
  it("should encode", () => {
    moves.map((move, index) => {
      expect(tcn.encode(move)).toEqual(results[index]);
    });
  });
});

describe("decode", () => {
  it("should decode", () => {
    results.map((result, index) => {
      expect(tcn.decode(result)).toEqual(moves[index]);
    });
  });
});
