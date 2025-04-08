function add(a: number, b: number): number {
	return a + b;
}

const result = add(5, 3);
const message = "Сумма равна: " + result;
console.log(message);

// Запуск тестов
const sum1: number = add(5, 3);
const expectedSum1: number = 8;
if (sum1 !== expectedSum1) {
	console.error(
		`Тест 1 не пройден: ожидалось ${expectedSum1}, получено ${sum1}`
	);
} else {
	console.log("Тест 1 пройден");
}

const sum2: number = add(-2, 7);
const expectedSum2: number = 5;
if (sum2 !== expectedSum2) {
	console.error(
		`Тест 2 не пройден: ожидалось ${expectedSum2}, получено ${sum2}`
	);
} else {
	console.log("Тест 2 пройден");
}

const sum3: number = add(1.5, 2.5);
const expectedSum3: number = 4;
if (sum3 !== expectedSum3) {
	console.error(
		`Тест 3 не пройден: ожидалось ${expectedSum3}, получено ${sum3}`
	);
} else {
	console.log("Тест 3 пройден");
}

// @ts-expect-error: Попытка передать нечисловой аргумент должна вызывать ошибку типа
add("hello", 5);

// @ts-expect-error: Попытка передать только один аргумент должна вызывать ошибку типа
add(5);
