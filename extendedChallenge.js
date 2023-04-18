"use strict";
let hours = 40;
let wage = 10;
let weeks = 0;
let earnings = 0;

while (earnings <= 1000000) {
  if (hours > 40) {
    let totalPayCheck = wage * 40 + (hours - 40) * (wage * 1.5);
    console.log(`total paycheck: $${totalPayCheck} per week`);
    earnings += totalPayCheck;
    weeks++;
  } else {
    let totalPayCheck = wage * hours;
    console.log(`total paycheck: $${totalPayCheck} per week`);
    earnings += totalPayCheck;
    weeks++;
  }
}
console.log(`# of weeks it would take to earn $1,000,000: ${weeks}`);
