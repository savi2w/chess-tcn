type Move = {
  from: string;
  to: string;
};

declare function decode(e: string): Move;
declare function encode(m: Move): string;
