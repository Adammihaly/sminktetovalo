function expand(img) {
    // expandPicture
    let picElement = document.getElementById('expandedPicElement');
    let expandElement = document.querySelector('.expandPicture');

    picElement.src = img.src;
    
    expandElement.style.display = 'flex';
}

document.addEventListener('click', (e) => {
    const xElement = document.querySelector('.fa-x');
    let expandElement = document.querySelector('.expandPicture');

    if (e.target == expandElement || e.target == xElement) {
        expandElement.style.display = 'none';
    }
})