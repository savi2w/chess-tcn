# Chess TCN

Encode and decode helpers for TCN algo from https://www.chess.com/

## Usage

```javascript
import tcn from "@savi2w/chess-tcn";

tcn.decode("mC"); // { from: "e2", to: "e4" }
tcn.encode({ from: "e2", to: "e4" }); // mC
```

## License

This project is distributed under the [MIT license](LICENSE).
