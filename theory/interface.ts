// Ещё один способ задать определённый тип объекту. Во многом схожий с алиасами Псевдонимы типов (Type Aliases)

interface Point {
	x: number;
	y: number;
}
// Семантическая разница в том что после названия интерфейса не нужно использовать знак равенства.
// Но главная разница функциональная. interface можно добавить новые свойства уже после создания

interface Person {
	name: string;
}

interface Age {
	age: string;
}

// Теперь interface имеет два свойства name: string и age: number

//Тоже самое с алиасами вызовет ошибку

// type Animal = {
// 	name: string
// }

// type Animal = {
// 	age: number
// }

// interface использует extends для объединения двух interface
interface Animal {
	name: string;
}

interface Bear extends Animal {
	honey: boolean;
}

// type использует &
type User1 = {
	id: number;
};

type Admin = User1 & {
	root: boolean;
};
