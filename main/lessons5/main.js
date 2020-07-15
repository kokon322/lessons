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


let car = {
    model: 'outback',
    manufactured: 'subaru',
    year: 2017,
    maxSpeed: 200,
    engine: 2.5,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    },
    info: function () {
        console.log(this.model,this.manufactured,this.year,this.maxSpeed,this.engine);
    },
    increaseMaxSpeed: function (newSpeed) {
         this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        car.driver = driver;
    }
}

let vasa = {name:'vasa',age:18};

car.addDriver(vasa);

console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//  рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car