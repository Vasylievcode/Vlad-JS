// const anyNumber = prompt("Any number!") ;
// const powerTo = anyNumber ** 2;
// console.log(powerTo);

// const anyNumber = prompt("Any number!") ;
// const numberPowerTo = prompt("Power To number") ;

// const powerTo = anyNumber ** numberPowerTo;
// alert(powerTo);

// const anyNumber = prompt("Any number!") ;
// if(anyNumber % 2) {console.log ("PARNE")}
// else {console.log("NEPARNE")}
// const anyNumber = prompt("Any number!") ;
// if(anyNumber % 2 === 0) {console.log ("PARNE")}
// else {console.log("NEPARNE")}

// 5. Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень. 
// Бонус дорівнює 20% від зарплати за додаткові години.(використати тернарний оператор)

// const sallary = prompt("Type your Sallary");
// const hours = prompt("How many hours") ;

// if(hours> 40) {
//     const bonus= (hours - 40 ) /100 * 20;
//     alert(`You ve got ${bonus} GBP !`)
// }
//function accepts name and surname and alerts greeting
// function greeting (nameUser , surname) {
//     alert(`Hello my  fullname is ${nameUser} ${surname}`)
//     return 
// }
// const userName = prompt("What s your name?")
// const userSurname = prompt("What s Your surname?")

// const message = greeting (userName, userSurname)
// console.log(message)
// function getSquare(number) {
//     const powerTo = number **2
    
// }
// function getPr(number) {
//     const piNumber = number * 3.14
//     return powerTo
// }
// const num1 = getSquare(4)
// console.log(num1)
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
// console.log(deliverPizza("Ultracheese"))
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     if(callback===makePizza()){
//       return makePizza;
//     }
//     else return deliverPizza
    
//   }
//   makeMessage("Ultracheese", deliverPizza)
//////////////////////////////////////
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     if(callback===makePizza()){
//       return makePizza();
//     }
//     else return deliverPizza()
    
//   }

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
    

//   makeMessage("Ultracheese", deliverPizza)
//   makeMessage("Royal Grand", makePizza)

// const changeEven = (numbers, value) => {
//     const newArray = [];
//     numbers.forEach(element =>  {
//       if (element % 2 === 0) {
//         newArray.push(element + value);
//     }
        
//       }); 
//     return newArray;
//     };
// changeEven([44, 13, 81, 92, 36, 54], 100)

// const changeEven = (numbers, value) => {
//     const newArray = [];
//     numbers.forEach(element => {
//       if (element % 2 === 0) {
//         newArray.push(element + value);
//       }
//     });
//     return newArray;
//   };
  
//   const result = changeEven([44, 13, 81, 92, 36, 54], 100);
//   console.log(result);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
  
// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];

//   const names = students.map( student => student.name);
//   console.log(names)






