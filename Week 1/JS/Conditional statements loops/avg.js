const David = 80;
const Vinoth = 77;
const Divya = 88;
const Ishita = 95;
const Thomas = 68;

const avg = (David + Vinoth + Divya + Ishita + Thomas)/5;

console.log(avg)

if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg <= 100) {
    console.log("Grade: A");
} else {
    console.log("Class is failed.");
}