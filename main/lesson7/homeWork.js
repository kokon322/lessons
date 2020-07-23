//- Создать произвольный елемент с id = text.  
//Используя JavaScript, сделайте так, 
//чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.querySelector('#text')
// let btn = document.forms.form1.btn;
// let input = document.forms.form1.innerText;

// forms.onclick = ()=>{
//    if(!text.hidden){
//        text.hidden = true;
//    }else text.hidden = false;
// }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// forms.btn.onclick = ()=>{
//     forms.btn.style.display = 'none'
//     };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік 
// чи меньше він ніж 18, та повідомити про це користувача

// btn.onclick = ()=>{
//     let result = input.value
//     if(result<18){
//         alert(" you have a problem")
//     }else console.log(result)
// };

//- Создайте меню, которое раскрывается/сворачивается при клике
// let ashka = document.getElementById('ashka');
// let menushka = document.getElementById('menushka');

// ashka.onclick = ()=>{
//     if(!menushka.hidden){
//         menushka.hidden =true;
//     }else menushka.hidden = false
// };


// - Создать список комментариев , пример объекта коментария -
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [{title:'Vasa', body:'Хочу быть програмистом'},
//     {title:'Igor', body:'Такая же фигня , но тяжко идет'},
//     {title:'Marina', body:'Не нойте и работайте'}
// ];
// let divka = document.getElementById('coments');
// for( let i =0; i<coments.length; i++){
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     const button = document.createElement('button');
//     button.innerText ='Push';
//     h1.innerText = coments[i].title;
//     p.innerText = coments[i].body;
//     button.onclick = ()=>{
//         if(!p.hidden){
//             p.hidden = true;
//         }else p.hidden = false;
//     }
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(button);
//     divka.appendChild(div);

// };


// - створити 2 форми  по 2 інпути в кожній. 
//ствоирити кнопку при кліку на яку считується та виводиться 
//на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та 
// інпутам всі необхідні атрибути.
// 
//let btn = document.getElementById('btn');
//  btn.onclick =()=>{
//      console.log(document.forms.form.input1.value);
//      console.log(document.forms.form.input2.value);
//      console.log(document.forms.form1.input3.value);
//      console.log(document.forms.form1.input4.value);
//  };

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let textDiv = document.getElementById('text');
// function createTable (str, colon, tag){
//     let table = document.createElement('table');
//     for(let i =0; i<str;i++){
//         let tr = document.createElement('tr');
//             for(let j =0;j<colon;j++){
//                 let td = document.createElement('td');
//                 let random = Math.floor(Math.random()*100);
//                 td.innerText = random;
//                 tr.appendChild(td);
//                 table.appendChild(tr);
//               }
//     }tag.appendChild(table);
// };
// createTable(12,5,textDiv);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, 
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)
// let str = document.getElementById('input1');
// let colon = document.getElementById('input2');
// let text = document.getElementById('input3');
// let button = document.getElementById('btn');

// let div = document.getElementById('text1');

// button.onclick = () =>{
//     function table(str,colon,text){
//        let table = document.createElement('table');
//        for(let i = 0;i<str.value;i++){
//            let tr = document.createElement('tr');
//            for(let j =0; j<colon.value;j++){
//                let td = document.createElement('td');
//                td.innerText = text.value;
//                tr.appendChild(td);
//            }
//            table.appendChild(tr);
//        }
//        div.appendChild(table);
       
//     }
//    table(str,colon,text)
// };

// - Напишите «Карусель» – ленту изображений, 
// которую можно листать влево-вправо нажатием на стрелочки.
// let foto =[
//     {img_url:'1.jpg'},
//     {img_url:'2.jpg'},
//     {img_url:'3.jpg'},
//     {img_url:'4.jpg'}
// ];

// let div = document.getElementById('text')
// let img = document.createElement('img');
// let br = document.createElement('br')
// let btnLeft = document.createElement ('button');
// let btnRight = document.createElement('button');

// btnLeft.innerText = 'Left';
// btnLeft.style.backgroundColor = 'red';
// btnRight.innerText = 'Right';
// btnRight.style.backgroundColor = 'yellow';

// img.height = '350';

// div.appendChild(img);
// div.appendChild(br);
// div.appendChild(btnLeft);
// div.appendChild(btnRight);

// let index = 0;

// img.src = foto[index].img_url;

// btnRight.onclick =()=>{
//     index++;
//     if(index +1 > foto.length)
//         index =0;
//     img.src = foto[index].img_url
// };

// btnLeft.onclick = ()=>{
//     index --;
//     if(index<0)
//     index = foto.length -1;
//     img.src = foto[index].img_url
// };

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) 
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. 
// Каждый из них активирует фильтр для вышеуказаного массива. 
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false 
// (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан