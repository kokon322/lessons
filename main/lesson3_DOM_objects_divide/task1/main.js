/* // створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу

let obj = {
    
    dog :{name : "baddy",
     age: 12,
      color: "orange",
       breed: "staf",
        cities: "Vinnitsa"},
    human :{
        name: "Igor",
            age: 28,
                color: "Wight",
                    wife: true,
                        child: true},
    car:{
        firstName: "subaru",
            secondName: "outback",
                year: 2017,
                    engineLitters: 2.5,
                        orCarMy: true},
    flat:{
        flatInCity: "Vinnitsa",
            floor: 4,
                lift: true,
                    rooms: 2,
                        window: 3},
    book:{
        favorite: "Тереодори з Васюкывки",
            length: "Українська",
                paper: true,
                    author:"Всеволод нестайко",
                        year: 1973}
    
}; */
/* //-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів
let mas = [
    dog="Bady",
        dog1 = "Gera",
            dog2 = "Archi",
                dog3 = "Kima",
                    dog4 = "Jora",
                human = "Vasa",
                    human1 = "Olga",
                        human2 = "Lila",
                            human3 = "Ivan",
                                human4 = "Petro",
                car = "Subaru",
                    car1 = "Toyota",
                        car2 = "Honda",
                            car3 = "Lexus",
                                car4 = "BMW",];
console.log(mas); */
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка
/* let home = {
        name :"myHome",
            floor : 2,
                roomKitchen: {m2 : 18, height :3, window : 1},
                    room : ["kitchen", "room1", "room2", "bathroom", "toilet"], 
                        garage : true};
let vodiy = {
        name : "Vasa",
            work : 10,
                fameli : ["wife", "son"],
                    car : {name : "Subaru", age : 10},
                        drink : true};
let toy = {
        name: "igrashka",
            age: 12,
                coutry: "SSSR",
                    have : ["whils", "corpus"],
                        gabarytu: {height: 1, weight: 5}};
let table = {
        age: 12,
            price: 1200,
                valuta: "dollar",
                    have: ["nogki", "stoleshna"],
                        gabarytu: {height: 2, weight: 12}};
let bag = {
    age: 12,
         price: 1200,
            valuta: "dollar", 
                have: ["koga", "ruchki"],
                     gabarytu: {height: 1, weight: 1}};
console.log(home, vodiy,toy, table,bag); */
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус АнниДан массив:

/* let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users[7].status);
console.log(users[4].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[6].age);
console.log(users[4].name+ users[4].age);
let stat = users[5].status;
let age = users[5].age;
console.log(stat,age); */
// let content = document.getElementById('content');
// console.log(content.textContent);
// let rules = document.getElementById("rules");
// console.log(rules.textContent);
// content.innerText = "Вася";
// console.log(content.textContent);
// rules.innerText = "Пупкин";
// console.log(rules.textContent);

// let FcRules = document.getElementsByClassName("fc_rules");
// for(let i = 0; i<FcRules.length;i++){
//     FcRules[i].style.backgroundColor = "red";
//     FcRules[i].style.color = "blue";
// }
// console.log(rules)
// for(let i = 0; i<FcRules.length;i++){
//     FcRules[i].style.color = "red";
// }
// let mainHeadr = document.getElementById("main_header");
//     mainHeadr.style.color = "red";

// let ul = document.getElementsByTagName("ul");
//     for(let i = 0; i<ul.length;i++){
//         ul[i].style.width = "400px";
// };

// let LinkList = document.getElementsByClassName("linkList");
// console.log(LinkList);
// for(let i = 0; i<LinkList.length;i++){
//     LinkList[i].style.width = "50%";
// }

// console.log(LinkList[1].textContent);

// let li = document.getElementsByTagName("li");
// for(let i = 0;i<li.length;i++){
//     li[i].style.backgroundColor = "silver";
// }

// let allA = document.getElementsByTagName("a");
// for (let i = 0;i<allA.length;i++){
//     allA[i].classList.add("anchor");
// }   
// console.log(allA)

// for(let i =0;i<allA.length;i++){
//     if(allA[i].textContent === "link3"){
//         allA[i].style.fontSize = "40px";
//     }
// }


// for (let i = 0;i<allA.length;i++){
//     allA[i].classList.add("anchor");
// }   

// let subHeader = document.getElementsByClassName("sub-header");
// let color1 = prompt("Введите цвет");
// for(let i = 0;i<subHeader.length;i++){
//     subHeader[i].style.backgroundColor= color1;
// }
// for(let i = 0;i<subHeader.length;i++){
//     if(subHeader[i].textContent === "content 2 segment"){
//         subHeader[i].style.backgroundColor= color1;
//     }
// }
// let allP = document.getElementsByTagName("p");
// for(let i = 0;i<allP.length;i++){
//     allP[i].style.padding = "100px";
// }
// let content1 = document.getElementsByClassName("content_1");
// let scan = prompt();
// for(let i =0;i<content1.length;i++){
//     content1[i].innerHTML = scan;
// }
// let text2 = document.getElementsByClassName("text2");
// for(let i = 0;i<text2.length;i++){
//     text2[i].innerHTML = "asfasgas";
// }