// variables for card elements
const card = document.getElementById('card');
const cardImg = document.getElementsByClassName('nft-image')
const cardTitle = document.getElementsByClassName('card-title')
const cardDescription = document.getElementsByClassName('description')
const nftValue = document.getElementsByClassName('nft-value')
const timeLeft = document.getElementsByClassName('time-left')
const authorImg = document.getElementsByClassName('author-img')
const authorName = document.getElementsByClassName('name')

// card data
const cardData = [
    {
        id: 1,
        img: './images/image-equilibrium.jpg',
        cardTitle: 'Equilibrium #3429',
        cardDescription: 'Our Equilibrium collection promotes balance and calm.',
        value: '0.041 ETH',
        timeLeft: '3 days left',
        authorImg: './images/image-avatar.png',
        authorName: 'Jules Wyvern'
    }
]


for (let i = 0; i < cardData.length; i++) {
    cardImg[i].src = cardData[i].img
    cardTitle[i].textContent = cardData[i].cardTitle
    cardDescription[i].textContent = cardData[i].cardDescription
    nftValue[i].textContent = cardData[i].value
    timeLeft[i].textContent = cardData[i].timeLeft
    authorImg[i].src = cardData[i].authorImg
    authorName[i].textContent = cardData[i].authorName
}