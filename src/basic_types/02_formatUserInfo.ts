// Task:
// Write a TypeScript function formatUserInfo that accepts an object with user information
// and returns a string with the formatted information.

// Requirements for the user object:
// The user object must have the following properties:
//
// name: string (required field)
// age: number (optional field)
// isLoggedIn: boolean (required field)
// lastLogin: string or null (string with the last login date or null, optional field)

// Requirements for the formatUserInfo function:
// The function should accept one argument - a user object corresponding to the description above.
// It should return a string formatted as follows:
//
// The string should start with the user's name.
// If age is specified, add "(age: [value])" in parentheses.
// Add login status information: " (online)" if isLoggedIn is true, and " (offline)" if isLoggedIn is false.
// If lastLogin is specified and not null, add ", last login: [value]".

type User = {
	name: string;
	age?: number;
	isLoggedIn: boolean;
	lastLogin?: string | null;
};

function formatUserInfo(user: User) {
	let result: string = `${user.name}`;
	if (user.age) result += ` (age: ${user.age})`;
	result += user.isLoggedIn ? " (online)" : " (offline)";
	if (user.lastLogin) result += `, last login: ${user.lastLogin}`;
	return result;
}

function testFormatUserInfo() {
	// Test 1: User with name, age, and online status
	const user1: User = {
		name: "Alice",
		age: 30,
		isLoggedIn: true,
		lastLogin: "2025-04-05T08:00:00Z",
	};
	const expected1: string =
		"Alice (age: 30) (online), last login: 2025-04-05T08:00:00Z";
	const result1: string = formatUserInfo(user1);
	if (result1 !== expected1) {
		console.error(
			`Test 1 failed: expected "${expected1}", received "${result1}"`
		);
	} else {
		console.log("Test 1 passed");
	}

	// Test 2: User with name, no age, and offline status
	const user2: User = { name: "Bob", isLoggedIn: false, lastLogin: null };
	const expected2: string = "Bob (offline)";
	const result2: string = formatUserInfo(user2);
	if (result2 !== expected2) {
		console.error(
			`Test 2 failed: expected "${expected2}", received "${result2}"`
		);
	} else {
		console.log("Test 2 passed");
	}

	// Test 3: User with name, age, and offline status, no lastLogin
	const user3: User = { name: "Charlie", age: 25, isLoggedIn: false };
	const expected3: string = "Charlie (age: 25) (offline)";
	const result3: string = formatUserInfo(user3);
	if (result3 !== expected3) {
		console.error(
			`Test 3 failed: expected "${expected3}", received "${result3}"`
		);
	} else {
		console.log("Test 3 passed");
	}

	// Test 4: User with name and online status, no age and lastLogin
	const user4: User = { name: "David", isLoggedIn: true };
	const expected4: string = "David (online)";
	const result4: string = formatUserInfo(user4);
	if (result4 !== expected4) {
		console.error(
			`Test 4 failed: expected "${expected4}", received "${result4}"`
		);
	} else {
		console.log("Test 4 passed");
	}
}

// Calling the function with tests
testFormatUserInfo();
