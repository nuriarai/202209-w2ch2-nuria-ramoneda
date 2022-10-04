import strictEquals from "./strictEquals/strictEquals.js";

console.log(`Result 1 / 1 => ${strictEquals(1, 1)}`);
console.log(`Result NaN / NaN => ${strictEquals(NaN, NaN)}`);
console.log(`Result 0 / -0 => ${strictEquals(0, -0)}`);
console.log(`Result -0 / 0 => ${strictEquals(-0, 0)}`);
console.log(`Result 1 / "1" => ${strictEquals(1, "1")}`);
console.log(`Result true  / false => ${strictEquals(true, false)}`);
console.log(`Result false / false => ${strictEquals(false, false)}`);
console.log(`Result "Water" / "oil" => ${strictEquals("Water", "oil")}`);
