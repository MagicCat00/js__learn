const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        //getAttribute - получает значение определенного пeредаваемого атрибута
        //substr(1) - отрезает от значения 1 символ

        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        })
    })
})