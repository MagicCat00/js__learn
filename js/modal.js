const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) => {
    const target = event.target

    //contains - проверяет элемент на наличие предаваемого в него класса 
    // || - или
    if(target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})