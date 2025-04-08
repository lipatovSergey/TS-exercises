// @ts-nocheck
// Задание: Универсальная обработка данных

// Требования:
// 1. Определите Union Type `DataInput`, который может представлять:
//    - строку (`string`)
//    - число (`number`)
//    - массив чисел (`number[]`)

// 2. Напишите функцию `analyzeData(data: DataInput): string`.
//    Эта функция должна анализировать переданные данные и возвращать
//    строку с результатом анализа, используя сужение типов (narrowing).

// 3. Логика функции `analyzeData`:
//    - Если тип `data` - строка (`string`):
//      - Вернуть строку: "Получена строка. Длина: [длина строки]."
//    - Если тип `data` - число (`number`):
//      - Вернуть строку: "Получено число. Квадрат числа: [число * число]."
//    - Если тип `data` - массив чисел (`number[]`):
//      - Используйте `Array.isArray` для проверки.
//      - Вернуть строку: "Получен массив чисел. Сумма элементов: [сумма всех чисел в массиве]."
//      - Если массив пуст, сумма равна 0.

// 4. Используйте `typeof` и `Array.isArray` для сужения типов внутри функции.

// --- Начало кода ---

// TODO: Определите Union Type DataInput
type DataInput = string | number | number[];

// TODO: Реализуйте функцию analyzeData
function analyzeData(data: DataInput): string {
	// Используйте typeof для проверки на строку и число
	if (typeof data === "string") {
		// Здесь TypeScript знает, что data - это string
		return `Получена строка. Длина: ${data.length}.`;
	} else if (typeof data === "number") {
		// Здесь TypeScript знает, что data - это number
		return `Получено число. Квадрат числа: ${data * data}.`;
	} else if (Array.isArray(data)) {
		// Здесь TypeScript знает, что data - это number[]
		let sum = 0;
		for (const num of data) {
			sum += num;
		}
		// Альтернатива для суммы: const sum = data.reduce((acc, val) => acc + val, 0);
		return `Получен массив чисел. Сумма элементов: ${sum}.`;
	} else {
		// Эта ветка не должна быть достижима с заданным Union Type,
		// но полезна для полноты и отладки.
		// Можно использовать `never` для проверки полноты:
		// const _exhaustiveCheck: never = data;
		return "Неизвестный тип данных.";
	}
}

// --- Тесты для проверки ---
function testAnalyzeData() {
	console.log("Запуск тестов для analyzeData...");

	// Тест 1: Строка
	const input1: DataInput = "TypeScript";
	const expected1 = "Получена строка. Длина: 10.";
	const result1 = analyzeData(input1);
	if (result1 !== expected1) {
		console.error(
			`Тест 1 провален: ожидалось "${expected1}", получено "${result1}"`
		);
	} else {
		console.log("Тест 1 пройден");
	}

	// Тест 2: Число
	const input2: DataInput = 12;
	const expected2 = "Получено число. Квадрат числа: 144.";
	const result2 = analyzeData(input2);
	if (result2 !== expected2) {
		console.error(
			`Тест 2 провален: ожидалось "${expected2}", получено "${result2}"`
		);
	} else {
		console.log("Тест 2 пройден");
	}

	// Тест 3: Массив чисел
	const input3: DataInput = [5, 10, 15];
	const expected3 = "Получен массив чисел. Сумма элементов: 30.";
	const result3 = analyzeData(input3);
	if (result3 !== expected3) {
		console.error(
			`Тест 3 провален: ожидалось "${expected3}", получено "${result3}"`
		);
	} else {
		console.log("Тест 3 пройден");
	}

	// Тест 4: Пустой массив
	const input4: DataInput = [];
	const expected4 = "Получен массив чисел. Сумма элементов: 0.";
	const result4 = analyzeData(input4);
	if (result4 !== expected4) {
		console.error(
			`Тест 4 провален: ожидалось "${expected4}", получено "${result4}"`
		);
	} else {
		console.log("Тест 4 пройден");
	}

	// Тест 5: Ноль (число)
	const input5: DataInput = 0;
	const expected5 = "Получено число. Квадрат числа: 0.";
	const result5 = analyzeData(input5);
	if (result5 !== expected5) {
		console.error(
			`Тест 5 провален: ожидалось "${expected5}", получено "${result5}"`
		);
	} else {
		console.log("Тест 5 пройден");
	}

	// Тест 6: Пустая строка
	const input6: DataInput = "";
	const expected6 = "Получена строка. Длина: 0.";
	const result6 = analyzeData(input6);
	if (result6 !== expected6) {
		console.error(
			`Тест 6 провален: ожидалось "${expected6}", получено "${result6}"`
		);
	} else {
		console.log("Тест 6 пройден");
	}

	console.log("Тестирование завершено.");
}

// Вызов функции с тестами
testAnalyzeData();
