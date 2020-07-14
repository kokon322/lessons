// створити функцію яка виводить масив
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function masRandom(){
//     let array = [];
//     for(let i = 0;i<20;i++){
//         let x = Math.floor(Math.random()*100);
//         array[i] = x;
//     }
//     console.log(array);
// }
// masRandom();
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minimum( a = 0, b = 0, c = 0){
//     if(a<b&&a<c){
//         return a;
//     }else if(b<a&&b<c){
//         return b;
//     }else return c;

// }

// console.log(minimum(1,2,-1));
// створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max (a = 0,b=0,c=0){
//     if(a>b && a>c){
//         return a;
//     }else if(b>a&&b>c){
//         return b;
//     }else return c;
// }

// console.log(max(320,140,25));
// створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше
// function maxMin(){
//     let max =arguments[0];
//     let min =arguments[0];
//     for(let i =0;i<arguments.length;i++){
//         if (arguments[i]>max){
//             max = arguments[i];
            
//         }if (arguments[i]<min){
//             min = arguments[i];
//         }
//     }document.write(max, "<br>" );
//     return min;
    
// }

// console.log(maxMin(4,3,12,0,558,94,1,-1))
//// Так як і раніше почергово коментуємо)))
//створити функцію яка виводить масив
// function mas(){
//     let array = [];
//     console.log(array);
// }
// mas();
//створити функцію яка повертає найбільше число з масиву
// function Bigest (mas = []){
//     let Bigmas = mas[0];
//     for(let i =0;i<mas.length;i++){
//         if(Bigmas < mas[i]){
//             Bigmas = mas[i];
//         }
//     }return Bigmas;
// }
// console.log(Bigest([36,12,25,,12,,12,9]))
//створити функцію яка повертає найменьше число з масиву
// function minMas(array = []){
//     minimumMas = array [0];
//     for (let i = 0;i<array.length;i++){
//         if(array[i]<minimumMas){
//             minimumMas = array[i];
//         }
//     }return minimumMas;
// }

// console.log(minMas([1,32,,55,-1,2,31,]))
//створити функцію яка приймає масив чисел 
//та складає значення елементів масиву та повертає його.
// function masPlus (arr = []){
//     summaMas = 0;
//     for(let i =0;i<arr.length;i++){
//         summaMas += arr[i];
//     }
//     return summaMas;
// }

// console.log(masPlus([25,25,25]))
//створити функцію яка приймає масив чисел 
//та повертає середнє арифметичне його значень.
// function middleMas(arr = []){
//     let sumOfMas = 0;
//     let middle = arr.length;
//     for(let i =0; i< arr.length;i++){
//         sumOfMas += arr[i];
//     }
//     return sumOfMas/middle;
// }

// console.log(middleMas([35,12,1,5]))
//- Створити функцію яка приймає масив будь яких объектів, 
//та повертає значення кількості об'єктів в масиві
// function masivObject(arr = []){
//     let count = 0;
//     for(let i =0;i<arr.length; i++){
//         if(typeof arr[i] === "object"){
//             count++;
//         }
//     }return count;
// }

// let vasa = masivObject([12,241,"sfasf",true,{name: "vasa",age: 25},"asfasf",])
// console.log(vasa)

//Створити функцію яка приймає масив будь яких объектів, 
//та повертає загальн кількість полів в них
// function Pola(arr = []){
//    let count = 0;
//    for(let i =0;i<arr.length;i++){
//        if(typeof arr[i] === "object" && Array.isArray(arr[i]) === false){
//            count += Object.keys(arr[i]).length;
//        }
//    }return count;
// }
// let vasa = Pola([
//     { id: 1, name: "vasya", age: 31, status: false },
//     { id: 2, name: "petya", age: 30, status: true },
//     { id: 3, name: "kolya", age: 29, status: true },
//     { id: 4, name: "olya", age: 28, status: false },
//     55,
//     12,
//     "skdhgksd",
//     [333, 56, "jgjgj"],
//     { id: 4, name: "olya" },
// ]);
//  console.log(vasa);

// створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// (Тут два рішення із sum та без  нього. якщо з ним то потрібно у циклі змінити result [i] на sum)
// function summa(arr,arr1){
//     let result = [];
//     //let sum = 0;
//     for(let i = 0 ;i<arr.length;i++){
//              result [i] = arr[i] + arr1[i];
//              //result.push(sum);
//     }return result;
// }

// console.log(summa([1,2,3,4],[2,3,4,5]))

//*** приймає масив та число "i", 
//та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function masiv(arr, i){
//     let bofer = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = bofer;
//     return arr;
// }

// console.log(masiv([3,5,7,9], 2));

// *** створити функцію яка буде переносити елементи з значенням 0
//  у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function masZero(array){
//     let zero = [];
//     let numbers = [];
//     for(let i =0;i< array.length;i++){
//         array[i] === 0 ? zero.push(array[i]):
//         numbers.push(array[i]);
//     }return numbers.concat(zero);
// }

// console.log(masZero([0,0,1,0]))
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addDiv(message){
//     let text1 = document.createElement("div");
//     text1.innerText = message || "Hello owu";
//     document.body.appendChild(text1)
// }
// addDiv();

// - Додає в боді елемент з текстом . 
// Тип елементу та текст отримати через аргументи
// function addTagText(message , tag){
//     let text = document.createElement(tag);
//     text.innerText = message;
//     document.body.appendChild(text);
// }
// addTagText("Hard...", "p");
//Завдання з автомобілями мене просто поставило на коліна... тому його пропустив.

