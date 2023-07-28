// Write your code here!
document.querySelector('main').remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Quincy is the champion"
document.querySelector('body').append(newHeader)