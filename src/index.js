const searchBar = document.querySelector('#search-bar')
const clotheElement = document.querySelectorAll('.clothe-name')
const clotheContainer = document.getElementsByClassName('clothe-container')

const detectInput = e => {
    const value = e.target.value.toLowerCase()
    
    clotheElement.forEach((clothe, index) => {
        if(clothe.textContent.toLocaleLowerCase().includes(value)){
            clotheContainer[index].classList.remove('hide')
        }else{
            clotheContainer[index].classList.add('hide')
    }
})
}

searchBar.addEventListener('input', detectInput)
