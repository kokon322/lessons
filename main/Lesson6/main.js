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

let users = [ {name: 'vasya', age: 31, status: false}, 
{name: 'petya', age: 30, status: true}, 
{name: 'kolya', age: 29, status: true}, 
{name: 'olya', age: 28, status: false}, 
{name: 'max', age: 30, status: true}, 
{name: 'anya', age: 31, status: false}, 
{name: 'oleg', age: 28, status: false}, 
{name: 'andrey', age: 29, status: true}, 
{name: 'masha', age: 30, status: true}, 
{name: 'olya', age: 31, status: false}, 
{name: 'max', age: 31, status: true} ];

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