#Types #TypeScript 

Алиас(псевдоним) даёт возможность задать типу кастомное имя. Но при этом не создаёт новый тип. Их можно создавать для любых типов данных. Примеры

```ts
type SomeType = string;
```

```ts
type SomeType = string | number | null;
```

```ts
type User = { 
	firstName: string; 
	pointsCount: number; 
}
```

### Объекты и функции

Алиасы для функций внури и вне объекта описываются по разному. Когда функция самостоятельная, используется стрелочный формат:
```ts
type Countable = (coll: number[]) => number
```

Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:
```ts
type User = { 
	firstName: string; 
	pointsCount: number; 
	count(coll: number[]): number; 
}
```

Если внутри такого метода используется callback, то для него опять используем стрелочную запись:
```ts
type User = { 
	firstName: string; 
	pointsCount: number; 
	count(coll: (v: string) => string): number;
}
```

Алиасы являются псевдонимами для типов. Они не создают новые типы. Система типов в TS в основном является структурной. Поэтому два алиаса с разными именами, но одиноковой структурой являются взаимо заменяемыми. Например

```ts
type Point2D = {
  x: number;
  y: number;
};

type Coordinates = {
  x: number;
  y: number;
};

function printPoint(point: Point2D) {
  console.log(`X: ${point.x}, Y: ${point.y}`);
}

let point1: Point2D = { x: 10, y: 20 };
let coords: Coordinates = { x: 10, y: 20 };

printPoint(point1); // Ожидаемый вызов, работает

// Несмотря на то, что point1 имеет тип Point2D, а coords имеет тип Coordinates,
// TypeScript позволяет передавать 'coords' в функцию 'printPoint',
// потому что они имеют одинаковую структуру.
printPoint(coords); // Это абсолютно валидный код в TypeScript

// И наоборот:
function processCoordinates(coords: Coordinates) {
  console.log(`Координаты: (${coords.x}, ${coords.y})`);
}

processCoordinates(point1); // Это тоже валидно, потому что структура Point2D соответствует структуре Coordinates

// Даже если у объекта есть дополнительные свойства, он все равно может быть совместим,
// если он содержит все необходимые свойства с правильными типами.
let extraInfoPoint = { x: 5, y: 15, z: 30 };
printPoint(extraInfoPoint); // Это тоже валидно, 'extraInfoPoint' имеет все свойства 'Point2D'
```

Последнее утверждение в примере выше не совсем верное читай [[Избыточные свойства (Excess Property Checks)]]
