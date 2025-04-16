let letString = "Some string"
// letString тип это просто string. Потому, что значение в let переменной можно
// переопределить

const constString = "Some string"
// constString будет иметь жёсткий тип "Some string". Переопределдение значений 
// const переменных запрещено, а значит её значение это конкретная строка

const obj = { counter: 0 };
if (constString) {
  obj.counter = 1;
}
