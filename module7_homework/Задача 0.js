const obj = {a: 1, b: true, c: 'str'};
function func(obj) {
for (let key in obj) {
      console.log(`${key} - ${obj[key]}`);
  }
}
func(obj);
/*
Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств
*/