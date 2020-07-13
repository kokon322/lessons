// створити функцію яка виводить масив
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function masRandom(){
    let array = [];
    for(let i = 0;i<20;i++){
        let x = Math.floor(Math.random()*100);
        array[i] = x;
    }
    console.log(array);
}
masRandom();
