#TypeScript  #Types  #TS 

Позволяет объеденять типы. Такая запись значит, что переменная может быть любым их этих типов
```ts
function printId(id: number | string) {
console.log("Your ID is: " + id);
}
```

Знак `|` можно ставить и перед первым аршументом. Поэтому такая запись тоже правильная
```ts
function printTextOrNumberOrBool(
textOrNumberOrBool:
| string
| number
| boolean
) {
console.log(textOrNumberOrBool);
}
```

Работа с union types. TS позволяет операции которые валидны для всех объеденённых типов.
```ts
function printId(id: number | string) {
console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
}
```

Как видно в примере мы получаеим ошибку ведь аргумент id может быть не только строкой но и числом.  А к числу нельзя применить метод toUpperCase().
Чтобы избежать такой ошибки, можно прибегнуть к дополнительным проверкам типов через typeof. И применять правильные методы к переменным соответствующего типа.

```ts
function printId(id: number | string) {
	if (typeof id === "string") {
		// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	} else {
		// Here, id is of type 'number'
		console.log(id);
	}
}
```
Ещё один пример с массивами

```ts
function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		// Here: 'x' is 'string[]'
		console.log("Hello, " + x.join(" and "));
	} else {
		// Here: 'x' is 'string'
		console.log("Welcome lone traveler " + x);
	}
	}
```

Так как мы объеденяем только два типа, то в else  не нужно дополнительных проверок. Если это не переменная первого типа, значит это переменная второго типа.

Такое поведение связано с теорией типов. Пример. Если у нас есть две комнаты. В первой высокие люди в шляпах. Во второй Испанцы в шляпах. Объеденив людей из этих двух комнат в одну, мы наверняка будем знать только то, что они все в шляпах.