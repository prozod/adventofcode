import * as fs from "fs";
const input: string[] = fs.readFileSync("inputs/day4.txt", "utf-8").split("\n");

const sample = [
  // ["a-b, c-d"]
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8",
  // ----PART 1----
  // a <= c && b >= d || a >= c && b <= d
  // [2-8, 3-8] --> 2 <= 3 && 8 >= 7
  // [6-6, 4-6] --> 6 >= 4 && 6 <= 6
  // ----PART 2-----
  // b >= c && a <= d
  // [2-4, 6-8] --> 4 >= 6 && 2 <= 8
  // [6-6, 4-6] --> 6 >= 4 && 6 <= 6
];

function find_overlaps(arr: string[]) {
  let sum: number = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let camp_sections = arr[i].split(",");
    let [[a, b], [c, d]] = camp_sections
      .map((section) => section.split("-"))
      .map((range) => range.map((id) => Number(id)));
    let conditions = {
      part_one: (a <= c && b >= d) || (a >= c && b <= d), // fully includes
      part_two: b >= c && a <= d, // partially overlap
    };
    if (conditions.part_two) {
      sum += 1;
    }
  }
  return sum;
}

console.log(find_overlaps(input));
