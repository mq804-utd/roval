function moveElement(target) {
    if (target.checked) {
        target.parentNode.style.cssText =
            'position: absolute;' +
            'top: 0;' +
            'z-index: 3;' +
            'background-color: #ededed;' +
            'justify-content: center;'
        let arrowLeft = document.createElement('img')
        arrowLeft.setAttribute('src', 'icons/right.png')
        arrowLeft.setAttribute('class', 'arrow-left')
        arrowLeft.style.cssText =
            'transform: scale(-1, 1);' +
            'zIndex: 3;' +
            'height: 1.1em;' +
            'position: absolute;' +
            'left: 16px;'
        for (let i = 0; i < target.parentNode.children.length; i++) {
            if (target.parentNode.children[i].className === 'arrow-menu-mobile') {
                target.parentNode.children[i].style.display = 'none'
            }
        }
        target.parentNode.appendChild(arrowLeft)
        target.style.height = '50%'
    } else {
        target.parentNode.style.cssText =
            'position: initial;' +
            'top: auto;' +
            'z-index: 0;' +
            'background-color: white;' +
            'justify-content: space-between;'
        for (let i = 0; i < target.parentNode.children.length; i++) {
            if (target.parentNode.children[i].className === 'arrow-menu-mobile') {
                target.parentNode.children[i].style.display = 'block'
            }
            if (target.parentNode.children[i].className === 'arrow-left') {
                target.parentNode.children[i].remove()
            }
        }
        target.style.height = '5%'
    }
}