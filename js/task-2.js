// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Отримуємо доступ до ul
const linkByUlRef = document.querySelector('#ingredients')
//console.log(linkForUlRef) // <ul id="ingredients"></ul>

// Пишемо функцію 
function createRef(arr) { // Отримує масив
    const itemsArr = []; // Створюємо пустий масив, на кожній ітерації в який будемо додавати елементи
    arr.forEach(item => { // Перебираємо масив
        const listItem = document.createElement('li'); //Створюємо порожній елемент
        listItem.textContent = item; //Записуємо текстовий контент в lі
        itemsArr.push(listItem); // Додаємо готовий li в масив
    });
    return linkByUlRef.prepend(...itemsArr); // Додаємо всі li розпиливши в кінець ul
}

createRef(ingredients); // Викликаємо функцію передавши масив



// Перевіряємо результат в консолі
// let ourLiRef = document.querySelectorAll('li')
// console.log(ourLiRef)