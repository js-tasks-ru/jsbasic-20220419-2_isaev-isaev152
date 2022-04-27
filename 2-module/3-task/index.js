let calculator = {
  read (a, b) {
    this.a = a;
    this.b = b;
  },
    sum () {
    let result = 0;
    for (const key in calculator) {
      if (typeof calculator[key] === 'number') {  
        result += calculator[key]; 
    } 
  }
  return result;
},
    mul () {
    let res = 1;
    for (const key in calculator) {
      if (typeof calculator[key] === 'number') {
        res *= calculator[key]; 
    } 
  }
  return res;
},
};

calculator.read(3, 5);
calculator.sum();
calculator.nul();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
