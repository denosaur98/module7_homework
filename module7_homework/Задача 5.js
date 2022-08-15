class Things {
    constructor(Name, Now, PowerOn, takePowerOn) {
    this.Name = Name;
    this.Now = Now;
    this.PowerOn = PowerOn;
    this.takePowerOn = function(Now, PowerOn) {
      console.log(`${Now} - ${PowerOn}`)
      }
    }
  }
  
  const notebook = new Things('HP', 'ON', `60 Вт`);
    notebook.Processor = 'Core I 9'
    notebook.Os = 'Windows'
  const lamp = new Things ('Art-LED', 'OFF', `0 Вт`);
    lamp.Light = 'LED'
    lamp.Prod = 'China'
  const tv = new Things ('Samsung', 'ON', `40 Вт`);
    tv.Screen = '1080 x 1920 px'
    tv.Sound = 'DTS Studio'
    
  console.log(notebook)
  console.log(lamp)
  console.log(tv)
  
  /*
  Консольное приложение из предыдущего юнита переписал на классы
  */
