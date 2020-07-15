// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// function Tags(titleOfTag,action,array){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.array = array;
// }

// let a = new Tags('a','В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь',
// [{nameAtributs: 'href', functionAtribut: 'Задает адрес документа, на который следует перейти.'},
// {nameAtributs: 'name', functionAtribut: 'Устанавливает имя якоря внутри документа'}]);

// let div = new Tags('div','Элемент <div>предназначен для выделения фрагмента документа с целью изменения вида содержимого',
// [{nameAtributs: 'align', functionAtribut: 'Задает выравнивание содержимого тега <div>.'},
// {nameAtributs: 'title', functionAtribut: 'Добавляет всплывающую подсказку к содержимому.'}]);

// let h1 = new Tags('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
// [{nameAtributs: 'align',functionAtribut: 'Определяет выравнивание заголовка.' }]);

// let span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа',
// [{nameAtributs:'class',functionAtribut:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
// {nameAtributs: 'dir', functionAtribut: 'Задает направление и отображение текста — слева направо или справа налево.'}]);

// let input = new Tags('input','позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
// [{nameAtributs:'checked',functionAtribut:'Предварительно активированный переключатель или флажок.'},{nameAtributs:'list',functionAtribut:'Указывает на список вариантов, которые можно выбирать при вводе текста.'}]);

// let form = new Tags('form','устанавливает форму на веб-странице',
// [{nameAtributs:'target',functionAtribut:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// {nameAtributs:'method',functionAtribut:'Метод протокола HTTP.'}]);

// let option = new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
// [{nameAtributs:'disabled',functionAtribut:'Заблокировать для доступа элемент списка.'},{nameAtributs:'label',functionAtribut:'Указание метки пункта списка.'}]);

// let select = new Tags('select','позволяет создать элемент интерфейса в виде раскрывающегося списка',
// [{nameAtributs:'size',functionAtribut:'Количество отображаемых строк списка.'},{nameAtributs:'multiple',functionAtribut:'Позволяет одновременно выбирать сразу несколько элементов списка.'}]);

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// class Tags{
//     constructor(titleOfTag,action,array){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.array = array;
//     }
// }

// let a = new Tags('a','В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь',
// [{nameAtributs: 'href', functionAtribut: 'Задает адрес документа, на который следует перейти.'},
// {nameAtributs: 'name', functionAtribut: 'Устанавливает имя якоря внутри документа'}]);

// let div = new Tags('div','Элемент <div>предназначен для выделения фрагмента документа с целью изменения вида содержимого',
// [{nameAtributs: 'align', functionAtribut: 'Задает выравнивание содержимого тега <div>.'},
// {nameAtributs: 'title', functionAtribut: 'Добавляет всплывающую подсказку к содержимому.'}]);

// let h1 = new Tags('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
// [{nameAtributs: 'align',functionAtribut: 'Определяет выравнивание заголовка.' }]);

// let span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа',
// [{nameAtributs:'class',functionAtribut:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
// {nameAtributs: 'dir', functionAtribut: 'Задает направление и отображение текста — слева направо или справа налево.'}]);

// let input = new Tags('input','позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
// [{nameAtributs:'checked',functionAtribut:'Предварительно активированный переключатель или флажок.'},{nameAtributs:'list',functionAtribut:'Указывает на список вариантов, которые можно выбирать при вводе текста.'}]);

// let form = new Tags('form','устанавливает форму на веб-странице',
// [{nameAtributs:'target',functionAtribut:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// {nameAtributs:'method',functionAtribut:'Метод протокола HTTP.'}]);

// let option = new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
// [{nameAtributs:'disabled',functionAtribut:'Заблокировать для доступа элемент списка.'},{nameAtributs:'label',functionAtribut:'Указание метки пункта списка.'}]);

// let select = new Tags('select','позволяет создать элемент интерфейса в виде раскрывающегося списка',
// [{nameAtributs:'size',functionAtribut:'Количество отображаемых строк списка.'},{nameAtributs:'multiple',functionAtribut:'Позволяет одновременно выбирать сразу несколько элементов списка.'}]);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// //-- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: 'outback',
//     manufactured: 'subaru',
//     year: 2017,
//     maxSpeed: 200,
//     engine: 2.5,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     },
//     info: function () {
//         console.log(this.model,this.manufactured,this.year,this.maxSpeed,this.engine);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//          this.maxSpeed = newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//     },
//     addDriver: function (driver) {
//         car.driver = driver;
//     }
// }

// let vasa = {name:'vasa',age:18};

// car.addDriver(vasa);

// console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car
// , з властивостями модель, виробник,рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let subaru = new Car('outback','subaru',2017,200,2.5);

// const Igor = {firstName:'Igor', secondName:'Chernuy', age:28};

// function Car(model, manufactured, year, maxSpeed, engine){
//     this.model = model;
//     this.manufactured = manufactured;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`Їдимо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     this.info = function(){
//         console.log(this.model,this.manufactured,this.year,this.maxSpeed,this.engine,this.driver)
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// console.log(subaru);

// subaru.increaseMaxSpeed(250);
// subaru.addDriver(Igor);
// subaru.changeYear(2020);

// console.log(subaru);

// - Створити клас який дозволяє створювати об'єкти car, 
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
//  об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car{
//     constructor(model, manufactori, year, maxSpeed, engine){
//         this.model = model;
//         this.manufactori = manufactori;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
        
//         this.drive = function(){
//             console.log( 'Їдумо зі швидкістю ${} км на годину');
//         }
//         this.info = function(){
//             console.log(this.model, this.manufactori, this.year, this.maxSpeed, this.engine, this.driver);
//         }
//         this.increaseMaxSpeed = function(newSpeed){
//             this.maxSpeed = newSpeed;
//         }
//         this.changeYear = function(newValue){
//             this.year = newValue;
//         }
//         this.addDriver = function(driver){
//             this.driver = driver;
//         }
//     }
// }

// let subaru = new Car('forester','subaru',2008,180,2.5);
// console.log(subaru);
// subaru.increaseMaxSpeed(200);
// subaru.changeYear(2010);
// subaru.addDriver('Igor');
// console.log(subaru);
// subaru.info();

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushca{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// const victorPrince = {name:'Victor', age: 25, sizeFoundSlipper: 38};

// const ira = new Popelushca('Ira',25,35);
// const olga = new Popelushca('Olga',26,36);
// const vika = new Popelushca('Vika',27,34);
// const larisa = new Popelushca('Larisa',28,37);
// const marina = new Popelushca('Marina',29,38);
// const galina = new Popelushca('Galina',30,39);
// const elena = new Popelushca('Elena',31,40);
// const lilia = new Popelushca('Lilia',32,41);
// const roksoliana = new Popelushca('Roksoliana',19,42);
// const valentina = new Popelushca('Valentina',18,43);

// const array = [ira, olga, vika, larisa,marina,galina,elena,lilia,roksoliana,valentina];

// for(let i =0;i<array.length;i++){
//     if(array[i].footSize === victorPrince.sizeFoundSlipper){
//         console.log(`Саме попелюшка з ім'ям  ${array[i].name} повинна бути з принцом`);
//     }
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік,
//  туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Popelushca1(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// const ira = new Popelushca1('Ira',25,35);
// const olga = new Popelushca1('Olga',26,36);
// const vika = new Popelushca1('Vika',27,34);
// const larisa = new Popelushca1('Larisa',28,37);
// const marina = new Popelushca1('Marina',26,38);
// const galina = new Popelushca1('Galina',30,39);
// const elena = new Popelushca1('Elena',31,40);
// const lilia = new Popelushca1('Lilia',32,41);
// const roksoliana = new Popelushca1('Roksoliana',19,42);
// const valentina = new Popelushca1('Valentina',18,43);

// const array = [ira, olga, vika, larisa,marina,galina,elena,lilia,roksoliana,valentina];

// function Prince(name, age, sizeFoundSlipper){
//     this.name = name;
//     this.age = age;
//     this.sizeFoundSlipper = sizeFoundSlipper;

//     this.foundPopelushka = function (array){
//         for(let i = 0;i<array.length;i++){
//             if(array[i].footSize === this.sizeFoundSlipper){
//                 console.log(`Саме попелюшка з ім'ям  ${array[i].name} повинна бути з принцом`);
//             }
//         }
//     }
// }

// const igor = new Prince('Igor',28,38);
// igor.foundPopelushka(array);