const obj = {a: 1, b: true, c: 'string'};
let key = "..."
function inObj(key, obj) {
  if (key in obj) {
    return true;
  } else {
    return false;
  }
}
console.log(inObj(key, obj));
/*
Функция, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция возвращает true или false.
*/
