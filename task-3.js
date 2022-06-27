/* # Задание 3

Напиши функцию `findBestEmployee(employees)`, которая принимает объект
сотрудников и возвращает имя самого продуктивного (который выполнил больше всех
задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в
формате `"имя":"кол-во задач"`.

```js
const findBestEmployee = function(employees) {
  // твой код
};


 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
``` */

/* const findBestEmployee = function(employees) {

}; */

/* const employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.table(employees);

const entries = Object.entries(employees);


for (const entrie of entries) {
  
  if(entrie > employees){
    
  }
  console.log(entries);
} */

const findBestEmployee = function (employees) {
  const numberTasks = Object.values(employees);
  const bestEmployee = Math.max(...numberTasks);

  for (const employee in employees) {
    if (employees[employee] === bestEmployee) {
      return employee;
    }
  }
 
};

 
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
