// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані 
// успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка 
// і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// *****************************Данна реалізація колбеками) а саме колбекХелом).***********************

// function myDay(dayStart, cb){
//     setTimeout(()=>{
//         dayStart ? cb(null, 'BBBrrrr'): cb('Day not start for you', null);
//     }, Math.random()*3000);
// };



// function goodMorning(standUp, cb){
//     setTimeout(()=>{
//         standUp ? cb(null, 'Good morning') : cb('oh no', null);
//     },2000);
// };

// function goToCar(carFuel, cb){
//     setTimeout(()=>{
//         carFuel ? cb(null, 'Fuel is full, go to work'):
//         cb('Fuel is low', null);
//     },5000);
// };

// function work(isWork, cb){
//     setTimeout(()=>{
//         isWork ? cb(null, 'You good worker'):
//         cb('You are bad worker', null);
//     },6000);
// };

// function goToStore(haveMoney, cb){
//     setTimeout(() => {
//         haveMoney ? cb(null, 'Buy some for make a dinner'):
//         cb('no money no dinner',null);
//     }, 3000);
// };

// function haveDinnerWithWife(wife, cb){
//     setTimeout(() => {
//         wife ? cb(null, 'You have a dinner with you wife'):
//         cb('You dont have wife',null);
//     },Math.random()* 2000);
// };

// function goToClub(money, cb){
//     setTimeout(()=>{
//         money ? cb(null, 'Yohoo , go to party'):
//         cb('no money no club',null)
//     },3000);
// };

// function goSleep(){
//     setTimeout(()=>{
//         console.log('GO SPLEEP')
//     },Math.random()*3000);
// };

// myDay(true,(error, data)=>{
//     if (error){
//         console.error(error);
//     } else {
//         console.log(data);
//         goodMorning(true,(error,data)=>{
//             if(error){
//                 console.error(error);
//             }else {
//                 console.log(data)
//                 goToCar(true, (error, data)=>{
//                     if(error){
//                         console.error(error);
//                     }else{
//                         console.log(data);
//                         work(true, (error, data)=>{
//                             if(error){
//                                 console.error(error);
//                             }else{
//                                 console.log(data);
//                                 goToStore(true, (error, data)=>{
//                                 if(error){
//                                     console.error(error);
//                                 }else{
//                                     console.log(data);
//                                     haveDinnerWithWife(true,(error,data)=>{
//                                         if(error){
//                                             console.error(error);
//                                         }else{
//                                             console.log(data);
//                                             goToClub(true, (error,data)=>{
//                                                 if(error){
//                                                     console.error(error);
//                                                 }else{
//                                                     console.log(data);
//                                                     goSleep();
//                                                 }
//                                             });
//                                         }
//                                     });
//                                 }});
                                
//                             }
//                         });
//                     }
//                 });
//             };
//         });
//     };

    
// });

// ****************************Данна реалізаця промісами**************************
