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


class Tags{
    constructor(titleOfTag,action,array){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.array = array;
    }
}

