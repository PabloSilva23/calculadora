const tela = document.getElementById('tela')
let form = document.getElementById('form')

function insert(n) {
    tela.innerHTML += n
}

form.addEventListener('submit', pararLoad)

function pararLoad(e) {
    e.preventDefault()
}

function calculando(n) {
    form.text1.value = form.text1.value + n
}