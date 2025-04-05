// @ts-nocheck
function testFormatUserInfo() {
	// Тест 1: Пользователь с именем, возрастом и в сети
	const user1 = {
		name: "Alice",
		age: 30,
		isLoggedIn: true,
		lastLogin: "2025-04-05T08:00:00Z",
	};
	const expected1 =
		"Alice (возраст: 30) (в сети), последний вход: 2025-04-05T08:00:00Z";
	const result1 = formatUserInfo(user1);
	if (result1 !== expected1) {
		console.error(
			`Тест 1 не пройден: ожидалось "${expected1}", получено "${result1}"`
		);
	} else {
		console.log("Тест 1 пройден");
	}

	// Тест 2: Пользователь с именем, без возраста и не в сети
	const user2 = { name: "Bob", isLoggedIn: false, lastLogin: null };
	const expected2 = "Bob (не в сети)";
	const result2 = formatUserInfo(user2);
	if (result2 !== expected2) {
		console.error(
			`Тест 2 не пройден: ожидалось "${expected2}", получено "${result2}"`
		);
	} else {
		console.log("Тест 2 пройден");
	}

	// Тест 3: Пользователь с именем, возрастом и не в сети, без lastLogin
	const user3 = { name: "Charlie", age: 25, isLoggedIn: false };
	const expected3 = "Charlie (возраст: 25) (не в сети)";
	const result3 = formatUserInfo(user3);
	if (result3 !== expected3) {
		console.error(
			`Тест 3 не пройден: ожидалось "${expected3}", получено "${result3}"`
		);
	} else {
		console.log("Тест 3 пройден");
	}

	// Тест 4: Пользователь с именем и в сети, без возраста и lastLogin
	const user4 = { name: "David", isLoggedIn: true };
	const expected4 = "David (в сети)";
	const result4 = formatUserInfo(user4);
	if (result4 !== expected4) {
		console.error(
			`Тест 4 не пройден: ожидалось "${expected4}", получено "${result4}"`
		);
	} else {
		console.log("Тест 4 пройден");
	}
}

// Вызов функции с тестами
testFormatUserInfo();
