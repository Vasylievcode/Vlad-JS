// // 1. отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body')
// console.log('1.отримай body елемент і виведи його в консоль;', bodyEl)
// // 2. отримай елемент id="title" і виведи його в консоль;
// const titleIdEl = document.querySelector('#title')
// console.log('2. отримай елемент id="title" і виведи його в консоль;', titleIdEl)
// // 3. отримай елемент class="list" і виведи його в консоль;
// const listEl = document.querySelector('.list')
// console.log('3. отримай елемент class="list" і виведи його в консоль;', listEl)
// // 4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopicsList = document.querySelectorAll('[data-topic]')
// console.log('4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;', dataTopicsList)
// // 5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataTopicEl = document.querySelector('[data-topic]')
// console.log('5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', dataTopicEl)
// // 6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastElementList = dataTopicsList[dataTopicsList.length-1];
// console.log('6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', lastElementList)
// // 7. який елемент є сусідом для h1? Знайти і виведи його в консоль;

// // 8. по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const allH3 = document.querySelectorAll('h3');
// // for(const header of allH3){
// //     console.log('всі заголовки',header)
// // }
// // console.log('8. по тегу h3 знайти всі заголовки та виведи їх у консоль;', allH3)
// allH3.forEach((element) => console.log('8. по тегу h3 знайти всі заголовки та виведи їх у консоль;', element))
// // 9. для кожного елмента h3 додай class="active", який змінить коліp заголовка на червоний колір
// const allH3newClass = document.querySelectorAll('h3')
// for(const header of allH3newClass){
//     header.classList.add("active");
//     header.style.color = 'red'
// }  
// // 10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const findSpecialLi = document.querySelector('li[data-topic="navigation"]')
// console.log('10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;',findSpecialLi)
// // 11. додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// findSpecialLi.setAttribute('style', 'background-color: yellow;')
// // 12. у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const findSpecialLiP = findSpecialLi.querySelector('p')
// console.log('12', findSpecialLiP)
// findSpecialLiP.textContent= "Я змінив тут текст!"

// // 13. створи const currentTopic = "manipulation";
// // після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic 
// // і виведи його в консоль;
// const currentTopic = "manipulation";
// const elementWithCurrentTopic = document.querySelector(`[data-topic="${currentTopic}"]`)
// console.log('13.',elementWithCurrentTopic)

// // 14. додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// elementWithCurrentTopic.setAttribute('style', 'background-color: yellow;')
// // 15. знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const headerCompleted = document.querySelector('h3.completed')
// console.log('15.знайти в документі заголовок, який має class="completed" і виведи його в консоль;',headerCompleted)
// // 16. видали елемент li в якому знаходиться заголовок, який має class="completed"
// const completedLi = document.querySelector('li.completed')

// // 17. після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newP = document.createElement('p')
// newP.textContent = "Об'єктна модель документа (Document Object Model)"
// listEl.prepend(newP)
// // 18. додай новий елемент списку у кінець списка,
// // його заголовок це - "Властивість innerHTML" а опис (р) - 
// // "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newLi = document.createElement('li')
// const newH3 = document.createElement('h3')
// newH3.textContent = "Властивість innerHTML"
// const newParagraph = document.createElement('p')
// newP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
// newLi.appendChild(newH3);
// newLi.appendChild(newParagraph);
// listEl.appendChild(newLi)
// // 19. зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// // 20. очисти список



// const buttons = document.querySelectorAll(".type-button")
// function callback (event){
//     console.log(event.target.textContent)
// }
// buttons.forEach((element,index,array)=>{
//     element.addEventListener("click", callback
//     )
// })
// buttons.forEach((element,index,array)=>{
//     element.removeEventListener("click", callback
//     )
// })

// const func1 = ()=>{}
// const func2 = func1 

// console.log(func1===func2)
// const button = document.querySelector(".type-button")
// const list = document.querySelector(".list")
// button.addEventListener("click", ()=>{
//     list.insertAdjacentHTML("beforeend", "<li><h2>HEADER</h2><p>TEXT</p></li>") 
// })



// const array = [1,2,3,4,5]

// //1-перебрати масив 2-на кожній ітерації створити шаблон кнопки 3-обʼєднати усі шаблони в один рядок 4- додати готовий шаблон у ХТМЛ


// const markUp = array.map(element =>{
//     return `<button class="knopka">${element}</button>`})

// console.log(markUp)
// const newMarkUp = markUp.join("")
// document.body.insertAdjacentHTML("afterbegin", newMarkUp)
// const buttons = document.querySelectorAll(".knopka")

// buttons.forEach(button=>{
//     button.addEventListener("click", (event)=>{
//         event.target.remove()
//     })
//     }
// )

        // TASK 1 //

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

const decrementButton = document.querySelector('button[data-action="decrement"]')
const incrementButton = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')
let counterValue = 0
const updateValue = () => value.textContent = counterValue
incrementButton.addEventListener("click", ()=>{
    counterValue += 1;
    updateValue()
    
})
decrementButton.addEventListener("click", ()=>{
    counterValue -= 1;
    updateValue()
    
})



// TASK 2 //

//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і 
//виводить значення кольору в span.color.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }

// TASK 3 //

//Припустимо, є масив об'єктів, кожен з яких представляє собою користувача з ім'ям та віком,
// і потрібно створити масив рядків з інформацією про кожного користувача.
const users = [  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const userInfo = users.map(user => `${user.name} is ${user.age} years old`);

console.log(userInfo);
// TASK 4 //

//Припустимо, є масив об'єктів, кожен з яких представляє собою продукт з назвою та ціною,
// і потрібно знайти всі продукти з ціною менше 50.
const products = [  { name: 'Apple', price: 30 },
  { name: 'Banana', price: 40 },
  { name: 'Orange', price: 55 },
  { name: 'Grapes', price: 20 }
];
const allProducts = products.filter(product => product.price < 50)
console.log(allProducts)






