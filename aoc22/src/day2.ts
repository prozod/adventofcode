import * as fs from "fs";
import { ESMap } from "typescript";

const input: string[][] = fs
  .readFileSync("inputs/day2.txt", "utf-8")
  .split("\n")
  .map((v) => v.split(","))
  .map((round) => round[0].split(" "));

class Scoreboard<T> {
  public map: ESMap<string, T>;
  constructor() {
    this.map = new Map();
  }
  set(key: string[], value: T) {
    this.map.set(key.toString().trim(), value);
  }
  get(key: string[]): T {
    return this.map.get(key.join(",").trim());
  }
}

class Game extends Scoreboard<number> {
  public total: number = 0;
  constructor(public data: string[][]) {
    super();
    this.data = data;
    this.total;
  }

  play() {
    for (let i = 0; i < this.data.length - 1; i++) {
      this.total += this.get(this.data[i]);
    }
    return this.total;
  }
}

// PART 2
const rps = new Game(input);
rps.set(["A", "X"], 3 + 0);
rps.set(["A", "Y"], 1 + 3);
rps.set(["A", "Z"], 2 + 6);
rps.set(["B", "X"], 1 + 0);
rps.set(["B", "Y"], 2 + 3);
rps.set(["B", "Z"], 3 + 6);
rps.set(["C", "X"], 2 + 0);
rps.set(["C", "Y"], 3 + 3);
rps.set(["C", "Z"], 1 + 6);

console.log(rps.play());

// PART 1
// rps.set(["A", "X"], 1 + 3);
// rps.set(["A", "Y"], 2 + 6);
// rps.set(["A", "Z"], 3 + 0);
// rps.set(["B", "X"], 1 + 0);
// rps.set(["B", "Y"], 2 + 3);
// rps.set(["B", "Z"], 3 + 6);
// rps.set(["C", "X"], 1 + 6);
// rps.set(["C", "Y"], 2 + 0);
// rps.set(["C", "Z"], 3 + 3);
