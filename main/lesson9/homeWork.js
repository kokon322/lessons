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

// Значить так. #task 
// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде 
// друкувтаи на строніці то, шо ви ввели по одній букві з рандомною 
// затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

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

// ****************************Данна задача реалізована промісами**************************

// function myDay(startDay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             startDay ? resolve('**BRRRRRR dZin**'):
//             reject('You day is not started');
//         },1000);
//     }
// )};

// function breakfest(isBreakfast){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             isBreakfast ? resolve('Umm delicious breakfeast'):
//             reject('Sorry you stay hangry');
//         },2000);
//     });
// };


// function goToCar(isCarEngineOk){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             isCarEngineOk ? resolve('Engine is ok, go to work'):
//             reject('Engine is broken');
//         },1000);
//     });
// };

// function goToGasStation(isHaveMoney){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             isHaveMoney ? resolve('Refuel the car'):
//             reject('No money no fuel');
//         },3000);
//     });
// };

// function atWork(isGoodWork){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             isGoodWork ? resolve('Good job man'):
//             reject('Bad job man');
//         },3500);
//     });
// };

// myDay(true).then(value => {
//     console.log(value);
//     return breakfest(true);
// }).then(value=>{
//     console.log(value)
//     return goToCar(true)
// }).then(value=>{
//     console.log(value)
//     return goToGasStation(false)
// }).then(value=>{
//     console.log(value)
//     return atWork(true)
// }).then(value=>{
//     console.log(value)
// }).catch(reject =>{
//     console.error(reject)
// });