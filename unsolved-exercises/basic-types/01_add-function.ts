// @ts-nocheck
function add() {}

const result = add(5, 3);
const message = "The sum is: " + result;
console.log(message);

// Running tests
const sum1: number = add(5, 3);
const expectedSum1: number = 8;
if (sum1 !== expectedSum1) {
	console.error(`Test 1 failed: expected ${expectedSum1}, received ${sum1}`);
} else {
	console.log("Test 1 passed");
}

const sum2: number = add(-2, 7);
const expectedSum2: number = 5;
if (sum2 !== expectedSum2) {
	console.error(`Test 2 failed: expected ${expectedSum2}, received ${sum2}`);
} else {
	console.log("Test 2 passed");
}

const sum3: number = add(1.5, 2.5);
const expectedSum3: number = 4;
if (sum3 !== expectedSum3) {
	console.error(`Test 3 failed: expected ${expectedSum3}, received ${sum3}`);
} else {
	console.log("Test 3 passed");
}

// @ts-expect-error: Attempting to pass a non-numeric argument should cause a type error
add("hello", 5);

// @ts-expect-error: Attempting to pass only one argument should cause a type error
add(5);
