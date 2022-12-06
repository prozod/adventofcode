import * as fs from "fs";

const input: string[] = fs
  .readFileSync("inputs/day1.txt", "utf-8")
  .split("\n\n");

function calculate_calories(caloric_data: string[]) {
  let single_total = 0;
  let sum: number[] = [];
  caloric_data.map((calories) => {
    let c = calories.split("\n");
    c.forEach((num) => (single_total += Number(num)));
    sum.push(single_total);
    single_total = 0;
  });
  // return Math.max(...sum); // Part 1
  return sum
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, val) => (acc += val), 0); // Part 2
}

console.log(calculate_calories(input));
