const url = '../assets/data/clothe.json'
const searchBar = document.querySelector('#search-bar')
const clotheTemplate = document.querySelector('[clothe-template]')
const clotheElement = document.querySelector('[clothe-name]')
const clotheContainer = document.querySelector('[clothe-container]')

let clotheArray = []

const detectInput = e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    clotheArray.forEach(article => {
        if(article.name.toLowerCase().includes(value)){
            article.element.classList.remove('hide')
            console.log(article.element.classList)
        }else{
            article.element.classList.add('hide')
        }
    })
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        clotheArray = data.map(clothe => {
            const card = clotheTemplate.content.cloneNode(true).children[0]
            const image = card.querySelector('[clothe-image]')
            image.src = clothe.image
            image.alt = clothe.name.toLowerCase()
            const name = card.querySelector('[clothe-name]')
            name.textContent = clothe.name
            const price = card.querySelector('[clothe-price]')
            price.textContent = `${clothe.price} ${clothe.coin}`
            clotheContainer.append(card)
            return {name: clothe.name, price: clothe.price, image: clothe.image, element: card}
        })
    })

searchBar.addEventListener('input', detectInput)
