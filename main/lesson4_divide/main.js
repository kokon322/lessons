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
