const lists = document.querySelectorAll('.feature-sub')
const btn = document.querySelector('.feature__link') 
const btns = document.querySelectorAll('.feature__link') /*querySelectorAll - собирает все элементы*/

//btn.addEventListener('click') может повесить по клику несколько обработчиков события*

//btns.addEventListener('click', () => console.log('1'))

//console.log(btns.length); //lenght - Хранит длину массива

//for (let i = 0; i < btns.length; i++) {
//    btns[i].addEventListener('click', () => console.log(btns[i]))
//}  - один из вариантов перебрать массив

btns.forEach((btnItem, index) =>{ //лучший  вариант перебрать массив - forEach
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) =>{
            btnItem.classList.remove('feature__link_active') //remove - удалить класс
        })

        btnItem.classList.add('feature__link_active')   //add - добавить класс

        lists.forEach((listItem) => {
            listItem.classList.add('hidden') 
        })

        lists[index].classList.remove('hidden')
    })
})