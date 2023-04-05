const shareButtons = document.querySelector('.tile-share-button')
console.log(shareButtons) 

function copyText(e) {
    e.preventDfault()
    const link = this.getAttribute(link)
    console.log(link)
}

shareButtons.forEach(shareButtons => 
    shareButtons.addEventListener('click', copyText))