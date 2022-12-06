import * as fs from "fs";

const input: string[] = fs.readFileSync("inputs/day3.txt", "utf-8").split("\n");

// const sample = [
//   // sum 157
//   "vJrwpWtwJgWrhcsFMMfFFhFp", // p -> 16
//   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", // L -> 38
//   "PmmdzqPrVvPwwTWBwg", // P -> 42
//   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", // v -> 22
//   "ttgJtRGJQctTZtZT", // t -> 20
//   "CrZsJsPPZsGzwwsLwLmpwMDw", // s -> 19
// ];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const mapped_apb = new Map<string, number>();
for (let i = 0, k = 26; i < alphabet.length; i++, k++) {
  mapped_apb.set(alphabet[i], i + 1);
  mapped_apb.set(alphabet[i].toUpperCase(), k + 1);
}

function match_strings(input: string[]) {
  let matching_char: string;
  new Set(input[0]).forEach(
    (entry) => new Set(input[1]).has(entry) && (matching_char = entry)
  );
  return matching_char;
}

function split_string(input: string[]) {
  const split_items = input.map((str) => {
    let first_half = str.slice(0, str.length / 2);
    let second_half = str.slice(str.length / 2, str.length);
    return [first_half, second_half];
  });
  return split_items;
}

function compute_differences(input: string[][]) {
  let diffs: string[] = [];
  for (let string of input) {
    diffs.push(match_strings(string));
  }
  return diffs;
}

function sum_priorities(input: string[]) {
  let total_sum: number = 0;
  for (let i = 0; i < input.length - 1; i++) {
    // remove -1 with sample tests
    let letter_to_priority_digit = mapped_apb.get(input[i]);
    total_sum += letter_to_priority_digit;
  }
  return total_sum;
}

console.log(
  "[PART 1]: Total sum of priorities:",
  sum_priorities(compute_differences(split_string(input)))
);

// PART TWO
// function match_strings(input: string[]) {
//   let matching_char: string;
//   new Set(input[0]).forEach((entry) => {
//     new Set(input[1]).has(entry) &&
//       new Set(input[2]).has(entry) &&
//       (matching_char = entry);
//   });
//   return matching_char;
// }

// function group_three(input: string[]) {
//   let grouped: string[][] = [];
//   for (let i = 0; i < input.length; i += 3) {
//     grouped.push(input.slice(i, i + 3));
//   }
//   return grouped;
// }
// console.log("[PART 2]: Sum of priorities:",sum_priorities(compute_differences(group_three(input))));
