// @ts-nocheck
// Задание:
// Напишите TypeScript функцию processEvent, которая принимает объект события
// и возвращает строку с описанием этого события. Используйте Union Types
// для определения возможных типов событий.

// Требования к типам событий:
// Существует три типа событий, каждый со своим набором полей:
// 1. LoginEvent:
//    - type: 'LOGIN' (литеральный тип)
//    - userId: string
//    - timestamp: Date
// 2. MessageEvent:
//    - type: 'MESSAGE' (литеральный тип)
//    - userId: string
//    - message: string
// 3. LogoutEvent:
//    - type: 'LOGOUT' (литеральный тип)
//    - userId: string

// Определения интерфейсов и Union Type:
interface LoginEvent {
	type: "LOGIN";
	userId: string;
	timestamp: Date;
}

interface MessageEvent {
	type: "MESSAGE";
	userId: string;
	message: string;
}

interface LogoutEvent {
	type: "LOGOUT";
	userId: string;
}

// Union Type, объединяющий все возможные типы событий
type AppEvent = LoginEvent | MessageEvent | LogoutEvent;

// Требования к функции processEvent:
// - Функция должна принимать один аргумент - объект события типа AppEvent.
// - Функция должна возвращать строку, описывающую событие:
//   - Для LoginEvent: "Пользователь [userId] вошел в систему в [timestamp]"
//   - Для MessageEvent: "Пользователь [userId] отправил сообщение: '[message]'"
//   - Для LogoutEvent: "Пользователь [userId] вышел из системы"
// - Используйте сужение типов (type narrowing), например, через switch или if,
//   для определения конкретного типа события внутри функции.

// TODO: Реализуйте функцию processEvent
function processEvent(event: AppEvent): string {
	// Ваш код здесь
	// Используйте event.type для определения типа события
	// и доступа к соответствующим полям.
	switch (event.type) {
		case "LOGIN":
			// TypeScript теперь знает, что event здесь - это LoginEvent
			return `Пользователь ${
				event.userId
			} вошел в систему в ${event.timestamp.toISOString()}`;
		case "MESSAGE":
			// TypeScript теперь знает, что event здесь - это MessageEvent
			return `Пользователь ${event.userId} отправил сообщение: '${event.message}'`;
		case "LOGOUT":
			// TypeScript теперь знает, что event здесь - это LogoutEvent
			return `Пользователь ${event.userId} вышел из системы`;
		default:
			// Обработка случая, если тип не совпадает (хотя с union type это маловероятно)
			// Можно использовать `never` для проверки полноты switch
			const exhaustiveCheck: never = event;
			return `Неизвестный тип события: ${exhaustiveCheck}`;
	}
}

// --- Тесты для проверки ---
function testProcessEvent() {
	console.log("Запуск тестов для processEvent...");

	// Тест 1: LoginEvent
	const loginEvent: LoginEvent = {
		type: "LOGIN",
		userId: "user123",
		timestamp: new Date("2025-04-08T10:30:00Z"),
	};
	const expected1 =
		"Пользователь user123 вошел в систему в 2025-04-08T10:30:00.000Z";
	const result1 = processEvent(loginEvent);
	if (result1 !== expected1) {
		console.error(
			`Тест 1 провален: ожидалось "${expected1}", получено "${result1}"`
		);
	} else {
		console.log("Тест 1 пройден");
	}

	// Тест 2: MessageEvent
	const messageEvent: MessageEvent = {
		type: "MESSAGE",
		userId: "user456",
		message: "Привет, мир!",
	};
	const expected2 = "Пользователь user456 отправил сообщение: 'Привет, мир!'";
	const result2 = processEvent(messageEvent);
	if (result2 !== expected2) {
		console.error(
			`Тест 2 провален: ожидалось "${expected2}", получено "${result2}"`
		);
	} else {
		console.log("Тест 2 пройден");
	}

	// Тест 3: LogoutEvent
	const logoutEvent: LogoutEvent = {
		type: "LOGOUT",
		userId: "user789",
	};
	const expected3 = "Пользователь user789 вышел из системы";
	const result3 = processEvent(logoutEvent);
	if (result3 !== expected3) {
		console.error(
			`Тест 3 провален: ожидалось "${expected3}", получено "${result3}"`
		);
	} else {
		console.log("Тест 3 пройден");
	}

	console.log("Тестирование завершено.");
}

// Вызов функции с тестами
testProcessEvent();
