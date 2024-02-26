// // // 1. отримай body елемент і виведи його в консоль;
// // const bodyEl = document.querySelector('body')
// // console.log('1.отримай body елемент і виведи його в консоль;', bodyEl)
// // // 2. отримай елемент id="title" і виведи його в консоль;
// // const titleIdEl = document.querySelector('#title')
// // console.log('2. отримай елемент id="title" і виведи його в консоль;', titleIdEl)
// // // 3. отримай елемент class="list" і виведи його в консоль;
// // const listEl = document.querySelector('.list')
// // console.log('3. отримай елемент class="list" і виведи його в консоль;', listEl)
// // // 4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// // const dataTopicsList = document.querySelectorAll('[data-topic]')
// // console.log('4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;', dataTopicsList)
// // // 5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // const dataTopicEl = document.querySelector('[data-topic]')
// // console.log('5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', dataTopicEl)
// // // 6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // const lastElementList = dataTopicsList[dataTopicsList.length-1];
// // console.log('6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', lastElementList)
// // // 7. який елемент є сусідом для h1? Знайти і виведи його в консоль;

// // // 8. по тегу h3 знайти всі заголовки та виведи їх у консоль;
// // const allH3 = document.querySelectorAll('h3');
// // // for(const header of allH3){
// // //     console.log('всі заголовки',header)
// // // }
// // // console.log('8. по тегу h3 знайти всі заголовки та виведи їх у консоль;', allH3)
// // allH3.forEach((element) => console.log('8. по тегу h3 знайти всі заголовки та виведи їх у консоль;', element))
// // // 9. для кожного елмента h3 додай class="active", який змінить коліp заголовка на червоний колір
// // const allH3newClass = document.querySelectorAll('h3')
// // for(const header of allH3newClass){
// //     header.classList.add("active");
// //     header.style.color = 'red'
// // }  
// // // 10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// // const findSpecialLi = document.querySelector('li[data-topic="navigation"]')
// // console.log('10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;',findSpecialLi)
// // // 11. додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// // findSpecialLi.setAttribute('style', 'background-color: yellow;')
// // // 12. у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// // const findSpecialLiP = findSpecialLi.querySelector('p')
// // console.log('12', findSpecialLiP)
// // findSpecialLiP.textContent= "Я змінив тут текст!"

// // // 13. створи const currentTopic = "manipulation";
// // // після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic 
// // // і виведи його в консоль;
// // const currentTopic = "manipulation";
// // const elementWithCurrentTopic = document.querySelector(`[data-topic="${currentTopic}"]`)
// // console.log('13.',elementWithCurrentTopic)

// // // 14. додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// // elementWithCurrentTopic.setAttribute('style', 'background-color: yellow;')
// // // 15. знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// // const headerCompleted = document.querySelector('h3.completed')
// // console.log('15.знайти в документі заголовок, який має class="completed" і виведи його в консоль;',headerCompleted)
// // // 16. видали елемент li в якому знаходиться заголовок, який має class="completed"
// // const completedLi = document.querySelector('li.completed')

// // // 17. після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// // const newP = document.createElement('p')
// // newP.textContent = "Об'єктна модель документа (Document Object Model)"
// // listEl.prepend(newP)
// // // 18. додай новий елемент списку у кінець списка,
// // // його заголовок це - "Властивість innerHTML" а опис (р) - 
// // // "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // // тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // const newLi = document.createElement('li')
// // const newH3 = document.createElement('h3')
// // newH3.textContent = "Властивість innerHTML"
// // const newParagraph = document.createElement('p')
// // newP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
// // newLi.appendChild(newH3);
// // newLi.appendChild(newParagraph);
// // listEl.appendChild(newLi)
// // // 19. зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// // // 20. очисти список



// // const buttons = document.querySelectorAll(".type-button")
// // function callback (event){
// //     console.log(event.target.textContent)
// // }
// // buttons.forEach((element,index,array)=>{
// //     element.addEventListener("click", callback
// //     )
// // })
// // buttons.forEach((element,index,array)=>{
// //     element.removeEventListener("click", callback
// //     )
// // })

// // const func1 = ()=>{}
// // const func2 = func1 

// // console.log(func1===func2)
// // const button = document.querySelector(".type-button")
// // const list = document.querySelector(".list")
// // button.addEventListener("click", ()=>{
// //     list.insertAdjacentHTML("beforeend", "<li><h2>HEADER</h2><p>TEXT</p></li>") 
// // })



// // const array = [1,2,3,4,5]

// // //1-перебрати масив 2-на кожній ітерації створити шаблон кнопки 3-обʼєднати усі шаблони в один рядок 4- додати готовий шаблон у ХТМЛ


// // const markUp = array.map(element =>{
// //     return `<button class="knopka">${element}</button>`})

// // console.log(markUp)
// // const newMarkUp = markUp.join("")
// // document.body.insertAdjacentHTML("afterbegin", newMarkUp)
// // const buttons = document.querySelectorAll(".knopka")

// // buttons.forEach(button=>{
// //     button.addEventListener("click", (event)=>{
// //         event.target.remove()
// //     })
// //     }
// // )

//         // TASK 1 //

// // Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// // Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// // Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// // Оновлюй інтерфейс новим значенням змінної counterValue.

// /* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */

// const decrementButton = document.querySelector('button[data-action="decrement"]')
// const incrementButton = document.querySelector('button[data-action="increment"]')
// const value = document.querySelector('#value')
// let counterValue = 0
// const updateValue = () => value.textContent = counterValue
// incrementButton.addEventListener("click", ()=>{
//     counterValue += 1;
//     updateValue()
    
// })
// decrementButton.addEventListener("click", ()=>{
//     counterValue -= 1;
//     updateValue()
    
// })



// // TASK 2 //

// //Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і 
// //виводить значення кольору в span.color.
// //Для генерування випадкового кольору використовуй функцію getRandomHexColor.

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

// const buttonChangeColor = document.querySelector('.change-color')
// const spanColor = document.querySelector('.color')
// function getRandomHexColor() {

//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
// buttonChangeColor.addEventListener("click", ()=>{
//   const randomColor = getRandomHexColor()
//   document.body.style.backgroundColor = randomColor
//   spanColor.textContent = randomColor
// })



// // TASK 3 //

// //Припустимо, є масив об'єктів, кожен з яких представляє собою користувача з ім'ям та віком,
// // і потрібно створити масив рядків з інформацією про кожного користувача.
// const users = [  { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];

// const userInfo = users.map(user => `${user.name} is ${user.age} years old`);

// console.log(userInfo);
// // TASK 4 //

// //Припустимо, є масив об'єктів, кожен з яких представляє собою продукт з назвою та ціною,
// // і потрібно знайти всі продукти з ціною менше 50.
// const products = [  { name: 'Apple', price: 30 },
//   { name: 'Banana', price: 40 },
//   { name: 'Orange', price: 55 },
//   { name: 'Grapes', price: 20 }
// ];
// const allProducts = products.filter(product => product.price < 50)
// console.log(allProducts)


// // // Задача: Перетворити масив масивів у одновимірний масив, при цьому видалити всі елементи, які дорівнюють null.
// // // Порахувати суму елементів масиву через фор та через метод масиву const numbers = [1, 2, 3, 4, 5];
// // const nestedArray = [[1, 2], [null, 3, 4], [5, null], null];
// // const newArray= nestedArray.flatMap((element)=>element)
// // const arrayNumbers = newArray.filter((value)=>value!==null)

// // console.log(arrayNumbers)
// // let sum=0
// // arrayNumbers.forEach(myFunction)
// // function myFunction(item) {
// //   sum += item;
// // }
// // console.log(sum)

// // // Задача: Відфільтрувати масив об'єктів, які представляють користувачів, за декількома умовами:
// // // Вік користувача повинен бути більше або рівний 18.Користувач повинен мати статус "активний".
// // // Користувач повинен бути адміністратором або модератором.
// // const users = [  { name: 'Alice', age: 25, status: 'active', role: 'admin' },
// //   { name: 'Bob', age: 17, status: 'inactive', role: 'user' },
// //   { name: 'Charlie', age: 30, status: 'active', role: 'moderator' },
// //   { name: 'David', age: 22, status: 'active', role: 'user' },
// //   { name: 'Eve', age: 19, status: 'active', role: 'admin' },
// // ];





// const form = document.querySelector('form')
// form.addEventListener('change', (event)=>{
//   console.log(event.target)
  
// })
// const login = document.querySelector(".login")
// login.addEventListener('input', ({target})=>{
//   if(target.value.includes(" ")){
//     target.value = target.value.split("").filter(element=>element !== " ").join("")
//     // target.value = target.value.replace(' ', '')
//   }

//   // target.value = target.value.trim()

//   if (target.value.length > 5){
//     login.style.borderColor = "green"
//   }
//   else {login.style.borderColor = "red"}})
// const password = document.querySelector('[type="number"]')

// password.addEventListener('change', ({target})=>{
//   if(target.value > 99999){
//     password.style.borderColor = "green"
//   }
//   else { password.style.borderColor = "red"
// return alert("Password should be more than 99999")}
// })



// const obj = {a: {name: 'Dmytro'}, b: {teachers: ['Vlad']}}

// const {a,b} = obj
// a.name
// b.teachers


//////// HOMEWORK EVENTS ANF FORMS ////////// 

// TASK 3 //

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input)
// підставляє його поточне значення в span#name-output як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів . 

//Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".



// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// На що буде звертати увагу ментор при перевірці:

// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"


// const inputName = document.querySelector('#name-input')
// const outputName = document.querySelector('#name-output')
// inputName.addEventListener('input',(event)=>{
//   outputName.textContent = event.currentTarget.value;
// })

// TASK 4 //
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. 
//Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів,
// а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// На що буде звертати увагу ментор при перевірці:

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються

const form = document.querySelector('form')
form.addEventListener('submit',formSubmit)

function formSubmit(event){
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if(email === "" || password === ""){return alert('All form fields must be filled in')}
  console.log(`Email: ${form.elements.email.value}, Password: ${form.elements.password.value}`);
  form.reset();
}
