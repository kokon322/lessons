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
