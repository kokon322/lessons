//- создать массив с 20 числами.
//let array = [9, 45, 8, 19, 108, 71, 67, 18, 115, -6, 29, 25, 70, 73, 15, 11, 106, 115, 35, 97];

//-- при помощи метода sort и колбека  отсортировать массив.
// array.sort((a,b)=> a-b);
// console.log(array);

//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// array.sort((a,b)=>b-a)
// console.log(array);

//-- при помощи filter получить числа кратные 3
// let three = array.filter(value => !(value%3));
// console.log(three) 

//-- при помощи filter получить числа кратные 10
// let ten = array.filter(value => !(value%10))
// console.log(ten);

//-- перебрать (проитерировать) массив при помощи foreach()
//array.forEach((value) => console.log(value));

//-- перебрать массив при помощи map() и получить новый массив в котором все
// значения будут в 3 раза больше
// let newMas = array.map((value)=> value*3);
// console.log(newMas);

//- создать массив со словами на 15-20 элементов
// 

//console.log(mas.length);
//-- отсортировать его по алфавиту в восходящем порядке.
// mas.sort((a,b)=> {
//     if(a<b){
//         return -1;
//     }
//     return 1;
// })
// console.log(mas);

//-- отсортировать его по алфавиту  в нисходящем порядке.
// mas.sort((a,b)=>{
//     if(a<b){
//         return 1;
//     }
//     return -1;
// })
// console.log(mas);

//-- отфильтровать слова длиной менее 4х символов
// let result =  mas.filter((value)=>{
//   if(value.length <4){
//       return value
//   }
//   });
// console.log(result);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mashWith = mas.map((value)=> value.concat('!'));
// console.log(mashWith);

//Дан масив :

// let users = [ {name: 'vasya', age: 31, status: false}, 
// {name: 'petya', age: 30, status: true}, 
// {name: 'kolya', age: 29, status: true}, 
// {name: 'olya', age: 28, status: false}, 
// {name: 'max', age: 30, status: true}, 
// {name: 'anya', age: 31, status: false}, 
// {name: 'oleg', age: 28, status: false}, 
// {name: 'andrey', age: 29, status: true}, 
// {name: 'masha', age: 30, status: true}, 
// {name: 'olya', age: 31, status: false}, 
// {name: 'max', age: 31, status: true} ];

//- відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a,b) =>{
//     return a.age - b.age;
// })
// console.log(users);

// users.sort((a,b)=> b.age - a.age );
// console.log(users);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a,b)=> a.name.length - b.name.length)
// console.log(users);

// users.sort((a,b)=> b.name.length - a.name.length)
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - 
// яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let mas = [];
// for(let i =0; i<users.length;i++){
//     mas.push(users[i]);
// }
// console.log(mas);

// for(let i = 0;i<mas.length;i++){
//     mas[i].id = i + 1;
// }
// - відсортувати його за індентифікатором
// mas.sort((a,b)=> b.id - a.id );

// console.log(mas);

//-- наисать функцию калькулятора с 2мя числами и колбеком
//-- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(a,b , collback){
//     console.log(collback(a,b));
// };

// calculator(5,10, function(a,b){
//     return a*b - b;
// });

// function calcul2(a,b,c, callback) {
//     console.log(callback(a,b,c));
// }

// calcul2(2,5,10,function (a,b,c) {
//     return a*b + c;
// })

//=============КЛАССНАЯ РАБОТА=================
// Відфільтрувати масив за наступними крітеріями :

// let cars = [ 
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// - двигун більше 3х літрів
// let carWith3liter = cars.filter((value)=>{
//     if(value.volume>3){
//         return value;
//     }
// })
// console.log(carWith3liter)

// - двигун = 2л
// let carsWith2liters = cars.filter(value => (value.volume === 2));
// console.log(carsWith2liters);

// - виробник мерс
// let producerMerc = cars.filter(value => (value.producer === 'mercedes'));
// console.log(producerMerc);

// - двигун більше 3х літрів + виробник мерседес
// let producerMersAnd3liter = cars.filter(value => (value.producer === 'mercedes'&& value.volume === 3));
// console.log(producerMersAnd3liter);

// - двигун більше 3х літрів + виробник субару
// let producerSubaru3litters = cars.filter(value => (value.producer === 'subaru'&& value.volume === 3));
// console.log(producerSubaru3litters);

// - сили більше ніж 300
// let power300 = cars.filter(value => (value.power > 300));
// console.log(power300);

// - сили більше ніж 300 + виробник субару
// let power300ProducerSubaru = cars.filter(value=> (value.power>300 && value.producer === 'subaru'))
// console.log(power300ProducerSubaru);

// - мотор серіі ej
// let enginEjseries = cars.filter(value => (value.engine.startsWith('ej')));
// console.log(enginEjseries);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let power300ProduserSubaruEngineSeries = cars.filter(value=> 
//     (value.power>300&&value.producer === 'subaru'&& value.engine.startsWith('ej')));
// console.log(power300ProduserSubaruEngineSeries);

// - двигун меньше 3х літрів + виробник мерседес
// let volumeProduser = cars.filter(value=> (value.volume <3&& value.producer === 'mercedes'));
// console.log(volumeProduser);

// - двигун більше 2л + сили більше 250
// let volumePower = cars.filter(value => value.volume>2&& value.power>250 );
// console.log(volumePower);

// - сили більше 250  + виробник бмв
// let power250ProduserBMW = cars.filter(value=> (value.power>250&&value.producer === 'bmw'));
// console.log(power250ProduserBMW);


//- взять слдующий массив

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a,b)=>{
// return b.id -a.id  ;
// });
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a,b)=>{
//     return a.age - b.age;
//     });
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a,b)=>{
//     return b.age - a.age;
// });
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort((a,b)=>{
//     if(a.name> b.name){
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a,b)=>{
//     if(a.name<b.name){
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a,b)=>{
//     if(a.address.street > b.address.street){
//         return 1;
//     }return 1;
// });
// console.log(usersWithAddress);

// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a,b)=>{
//     return a.address.number - b.address.number;
// });
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// let masAge30 = usersWithAddress.filter(value => value.age<30);
// console.log(masAge30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusFalse = usersWithAddress.filter(value => value.status === false);
// console.log(statusFalse);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let statusFalseAndAge = usersWithAddress.filter(value=> (value.status === false&& value.age<30));
// console.log(statusFalseAndAge);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let home = usersWithAddress.filter(value => !(value.address.number%2));
// console.log(home);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% 
// (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно обрати кожну другу машинку (цикл з кроком в 2), 
// та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв.

// Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let subaru = {producer: 'subaru', enginePower: 178, 
//     owner: {name: 'Igor', age:28,experience: 10}, price: 41500, year: 2017};
// let toyota = {producer: 'toyota', enginePower: 200, 
//     owner: {name: 'Dima', age:45,experience:4}, price: 60500, year: 2019};
// let mitsubisi = {producer: 'mitsubisi', enginePower: 140,
//      owner: {name: 'Yevgen', age:32,experience: 12}, price: 25300, year: 2020};
// let ford = {producer: 'ford', enginePower: 250,
//      owner: {name: 'Sasha', age:49,experience: 23}, price: 42000, year: 2016};
// let jeep = {producer: 'jeep', enginePower: 200, 
//     owner: {name: 'Sasha', age:29,experience: 11}, price: 6500, year: 2006};
// let dodge = {producer: 'dodge', enginePower: 350,
//      owner: {name: 'Kostya', age:27,experience: 8}, price: 32000, year: 2015};
// let bmw = {producer: 'bmw', enginePower: 350,
//      owner: {name: 'Sergey', age:49,experience: 20}, price: 22000, year: 2014};

// let cars = [subaru, toyota, mitsubisi, ford, jeep, dodge, bmw];

// for(let i = 0; i<cars.length;i+=2){
//     cars[i].enginePower += (cars[i].enginePower *= 0.1);
//     cars[i].price += (cars[i].price *= 0.05);
//   };
// // console.log(cars);

// for(let i = 0;i<cars.length;i++){
//     if(cars[i].owner.experience<5 && cars[i].owner.age){
//         cars[i].owner.experience++;
//     }
// };
// console.log(cars);
// let prices = 0;
// for(let i = 0;i<cars.length;i++){
//     prices += cars[i].price;
// }

// for( car of cars){
//     prices += car.price;
// }
// console.log(prices);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// let mass = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function maxMin(mass){
    
// for(let i =0; i<mass.length;i++){
//     if(mass[i] === 4){
//         console.log(` min index of 4 ${i}`);
//         break;
//     }
//     }

// for(let i = mass.length; i>0 ;i--){
//     if(mass[i] === 4){
//         console.log(`max index of 4 ${i}`);
//         break;
//     }
// }
// };

// maxMin(mass);