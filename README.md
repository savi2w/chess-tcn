# Chess TCN

Encode and decode helpers for TCN alg from https://www.chess.com/

## API

```javascript
const tcn = require("chess-tcn");

tcn.decode("mC"); // { from: "e2", to: "e4" }
tcn.encode({ from: "e2", to: "e4" }); // mC
```

## License

This project is distributed under the [MIT license](LICENSE).
