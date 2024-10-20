function checar(e) {
    if (e.children[0].classList.contains("active")) {
        e.children[0].classList.remove('active')
    } else{
        e.children[0].classList.add('active')
    }
}
