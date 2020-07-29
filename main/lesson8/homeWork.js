// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, 
// введенный текст остался в textarea.

// let textArea = document.getElementById('textarea');
// textArea.value = localStorage.getItem('item');
// textArea.oninput = ()=>{
//      localStorage.setItem('item', textArea.value);
//  };


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на 
// своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.getElementById('form1');
// form.inputText.value = localStorage.getItem('item');
// form.inputNumber.value = localStorage.getItem('item1');
// form.textarea.value = localStorage.getItem('item2');
// form.checkbox.checked = localStorage.getItem('item3');
// form.radio.checked = localStorage.getItem('item4');
// form.selector.value = localStorage.getItem('item5');

// form.oninput = ()=>{
//     localStorage.setItem('item',form.inputText.value);
//     localStorage.setItem('item1',form.inputNumber.value);
//     localStorage.setItem('item2',form.textarea.value);
//     localStorage.setItem('item3',form.checkbox.checked);
//     localStorage.setItem('item4',form.radio.checked);
//     localStorage.setItem('item5',form.selector.value);
// };

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" 
// (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по 
// истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. 
// При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, 
// которые уже заполнены данными объекта