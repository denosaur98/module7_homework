function Things(Name, Now, PowerOn) {
    this.Name = Name,
    this.Now = Now,
    this.PowerOn = PowerOn,
    this.takePowerOn = function(Now, PowerOn) {
      console.log(`${Now} - ${PowerOn}`)
    }
  }
  
  const notebook = new Things('HP', 'ON', '60 Вт');
    notebook.Processor = 'Core I 9'
    notebook.Os = 'Windows'
  const lamp = new Things ('Art-LED', 'OFF', '0 Вт');
    lamp.Light = 'LED'
    lamp.Prod = 'China'
  const tv = new Things ('Samsung', 'ON', '40 Вт');
    tv.Screen = '1080 x 1920 px'
    tv.Sound = 'DTS Studio'
    
  notebook.takePowerOn(60, 'ON');
  lamp.takePowerOn(0, 'OFF');
  tv.takePowerOn(40, 'ON');
  console.log(notebook);
  console.log(lamp);
  console.log(tv);
  
  /*
  Реализуйте приложение на прототипах.
  
  Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
  
  Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
  
  План:
  
  Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
  Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
  У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
  Создайте экземпляры каждого прибора.
  Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
  Общие требования:
  
  Имена функций, свойств и методов должны быть информативными
  Соблюдайте best practices:
  использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
  информативные имена (а не a, b);
  четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
  использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
  */